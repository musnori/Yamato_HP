# お問い合わせフォームのメール送信設定

このドキュメントでは、お問い合わせフォームからのメール送信を設定する方法を説明します。

## 機能概要

お問い合わせフォームから送信された内容は、以下の2つのメールアドレスに自動的に送信されます：
- `order@yamato-chemi.co.jp`
- `info@yamato-chemi.co.jp`

## 必要な設定

### 1. メールサーバー（SMTP）の情報を準備

以下の情報が必要です：
- SMTPホスト名
- SMTPポート番号
- SMTP認証用のユーザー名とパスワード

一般的なメールプロバイダーの設定例：

#### Gmail の場合
- SMTP_HOST: `smtp.gmail.com`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`
- SMTP_USER: `your-gmail@gmail.com`
- SMTP_PASS: アプリパスワード（2段階認証を有効にして生成）

#### Office 365 / Outlook の場合
- SMTP_HOST: `smtp.office365.com`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`
- SMTP_USER: `your-email@outlook.com`
- SMTP_PASS: アカウントのパスワード

#### さくらインターネットの場合
- SMTP_HOST: `your-domain.sakura.ne.jp`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`
- SMTP_USER: メールアカウント
- SMTP_PASS: メールパスワード

### 2. Vercelに環境変数を設定

1. Vercelのダッシュボードにログイン
2. プロジェクト（Yamato_HP）を選択
3. "Settings" → "Environment Variables" に移動
4. 以下の環境変数を追加：

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `SMTP_HOST` | SMTPサーバーのホスト名 | 例: smtp.gmail.com |
| `SMTP_PORT` | ポート番号 | 通常は 587 |
| `SMTP_SECURE` | `true` または `false` | 465の場合はtrue、587の場合はfalse |
| `SMTP_USER` | メール送信用のユーザー名 | 例: your-email@gmail.com |
| `SMTP_PASS` | メール送信用のパスワード | セキュアに保管されます |
| `SMTP_FROM` | 送信元メールアドレス | 通常はSMTP_USERと同じ |

5. 環境変数を保存後、プロジェクトを再デプロイ

### 3. ローカル開発環境での設定（オプション）

ローカルで開発する場合は、プロジェクトルートに `.env` ファイルを作成します：

```bash
# .env.example をコピーして .env を作成
cp .env.example .env
```

`.env` ファイルを編集して、実際の値を設定してください。

**注意**: `.env` ファイルはGitにコミットしないでください（.gitignoreに追加済み）。

## 動作確認

1. お問い合わせフォームにアクセス
2. 必要な情報を入力して送信
3. `order@yamato-chemi.co.jp` と `info@yamato-chemi.co.jp` の両方にメールが届くことを確認

## トラブルシューティング

### メールが送信されない場合

1. Vercelの環境変数が正しく設定されているか確認
2. SMTPサーバーの認証情報が正しいか確認
3. Gmail を使用している場合は、「アプリパスワード」を使用しているか確認
4. Vercel のログを確認（Dashboard → Deployments → 最新のデプロイ → Functions）

### メールの送信元について

メールの送信元（From）は設定したSMTPアカウントになります。
返信先（Reply-To）はお問い合わせフォームに入力されたメールアドレスが自動的に設定されるため、
受信したメールに返信すると、お問い合わせ者に直接返信できます。

## セキュリティに関する注意

- SMTP認証情報は必ず環境変数として設定し、コードに直接書かないでください
- `.env` ファイルは絶対にGitにコミットしないでください
- 本番環境では必ずVercelの環境変数を使用してください
