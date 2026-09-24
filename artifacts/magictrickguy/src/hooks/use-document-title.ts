import { useEffect } from "react";

const siteName = "Stefan Oswald";
const defaultDescription =
  "Orlando-based magician Stefan Oswald creates corporate magic, trade show entertainment, keynote experiences, and private event performances worldwide.";
const defaultImage = "/opengraph.jpg";

type PageMeta = {
  description?: string;
  path?: string;
};

function setMetaTag(selector: string, attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setCanonicalUrl(path?: string) {
  const href = new URL(path ?? window.location.pathname, window.location.origin).toString();
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
}

export function useDocumentTitle(title: string, meta: PageMeta = {}) {
  useEffect(() => {
    const pageTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const description = meta.description ?? defaultDescription;
    const imageUrl = new URL(defaultImage, window.location.origin).toString();

    document.title = pageTitle;
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[property="og:title"]', "property", "og:title", pageTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", pageTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);
    setCanonicalUrl(meta.path);
  }, [meta.description, meta.path, title]);
}
