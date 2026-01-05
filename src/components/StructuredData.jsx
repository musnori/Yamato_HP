import { useEffect } from "react";
import { SITE_URL, COMPANY_INFO } from "../config/seo";

/**
 * LocalBusiness構造化データを生成
 */
export function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_INFO.name,
      alternateName: COMPANY_INFO.nameEn,
      url: SITE_URL,
      logo: `${SITE_URL}${COMPANY_INFO.logo}`,
      image: `${SITE_URL}${COMPANY_INFO.logo}`,
      telephone: COMPANY_INFO.tel,
      faxNumber: COMPANY_INFO.fax,
      foundingDate: COMPANY_INFO.founded,
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
        addressRegion: COMPANY_INFO.addressRegion,
        addressLocality: COMPANY_INFO.addressLocality,
        streetAddress: COMPANY_INFO.streetAddress,
        postalCode: COMPANY_INFO.postalCode.replace("〒", ""),
      },
      areaServed: COMPANY_INFO.areaServed.map(area => ({
        "@type": "Place",
        name: area
      })),
      geo: {
        "@type": "GeoCoordinates",
        latitude: "34.8322",
        longitude: "134.6950"
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00"
        }
      ],
      description: "1933年創業、兵庫県姫路市を拠点とする化学薬品・工業薬品専門商社。試薬・化学薬品・有機溶剤など、兵庫県内および関西エリアの学校・工場・研究機関・水処理施設などへ迅速な納品と丁寧な提案を提供します。"
    };

    let script = document.getElementById("schema-local-business");
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-local-business";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      // クリーンアップは不要（ページ遷移時も残す）
    };
  }, []);

  return null;
}

/**
 * BreadcrumbList構造化データを生成
 */
export function BreadcrumbSchema({ items }) {
  useEffect(() => {
    if (!items || items.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url ? `${SITE_URL}${item.url}` : undefined,
      })),
    };

    let script = document.getElementById("schema-breadcrumb");
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-breadcrumb";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      const existing = document.getElementById("schema-breadcrumb");
      if (existing) {
        existing.remove();
      }
    };
  }, [items]);

  return null;
}

/**
 * Organization構造化データ（トップページ用）
 */
export function OrganizationSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_INFO.name,
      alternateName: COMPANY_INFO.nameEn,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${COMPANY_INFO.logo}`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY_INFO.tel,
        contactType: "customer service",
        areaServed: "JP",
        availableLanguage: "Japanese",
      },
      sameAs: [
        "https://yamato-chemi-blog.hatenablog.com/",
        "https://nishihyogo-chemical-coop.com/",
      ],
    };

    let script = document.getElementById("schema-organization");
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-organization";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);
  }, []);

  return null;
}

/**
 * FAQPage構造化データ
 */
export function FAQPageSchema({ faqs }) {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    };

    let script = document.getElementById("schema-faq");
    if (!script) {
      script = document.createElement("script");
      script.id = "schema-faq";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema, null, 2);

    return () => {
      const existing = document.getElementById("schema-faq");
      if (existing) {
        existing.remove();
      }
    };
  }, [faqs]);

  return null;
}
