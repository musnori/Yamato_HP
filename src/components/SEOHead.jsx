import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, PAGE_SEO, OG_DEFAULTS } from "../config/seo";

/**
 * SEO用のhead要素を動的に設定するコンポーネント
 * 各ページで呼び出すことで、title, meta description, canonical, OGPを設定
 */
export default function SEOHead({ pageKey, customTitle, customDescription, customImage }) {
  const location = useLocation();

  useEffect(() => {
    const seoData = PAGE_SEO[pageKey] || PAGE_SEO.home;
    const title = customTitle || seoData.title;
    const description = customDescription || seoData.description;
    const ogImage = customImage || seoData.ogImage;
    const canonical = `${SITE_URL}${location.pathname}`;

    // title設定
    document.title = title;

    // meta descriptionを設定または更新
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // canonical設定
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);

    // OGP設定
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": canonical,
      "og:type": OG_DEFAULTS.type,
      "og:site_name": OG_DEFAULTS.siteName,
      "og:locale": OG_DEFAULTS.locale,
      "og:image": ogImage,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Twitter Card設定
    const twitterTags = {
      "twitter:card": "summary",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });
  }, [pageKey, customTitle, customDescription, customImage, location.pathname]);

  return null;
}
