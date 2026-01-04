import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORSヘッダーを設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { company, name, email, tel, topic, message, productName, productUse, quantity, timeline } = req.body;

    // 必須項目のバリデーション
    if (!email || (!company && !name) || !message) {
      return res.status(400).json({ error: '必須項目が入力されていません' });
    }

    // メール送信設定を環境変数から取得
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // メール本文を作成
    const emailBody = `
【お問い合わせフォームからの送信】

■ 基本情報
会社名: ${company || '（未入力）'}
氏名: ${name || '（未入力）'}
メールアドレス: ${email}
電話番号: ${tel || '（未入力）'}
お問い合わせ項目: ${topic}

■ お問い合わせ内容
${message}

${productName || productUse || quantity || timeline ? `
■ 製品詳細情報
製品名・物質名: ${productName || '（未入力）'}
使用用途: ${productUse || '（未入力）'}
希望数量: ${quantity || '（未入力）'}
希望納期: ${timeline || '（未入力）'}
` : ''}

---
このメールはWebサイトのお問い合わせフォームから自動送信されました。
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
`;

    // メールオプション
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'order@yamato-chemi.co.jp, info@yamato-chemi.co.jp',
      subject: `【お問い合わせ】${topic} - ${company || name}様`,
      text: emailBody,
      replyTo: email,
    };

    // メール送信
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'メールを送信しました'
    });

  } catch (error) {
    console.error('メール送信エラー:', error);
    return res.status(500).json({
      error: 'メール送信に失敗しました',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
