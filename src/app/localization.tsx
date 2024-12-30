export const localization = {
    pages: {
        not_found: {
            ru: "Страница не найдена",
            en: "Page not found"
        }
    }
} as Record<string, any>

export default function getLocalize(path: string, lang: string) {
    if (!lang) return path;
  
    const keys = path.split("/");
    let link = localization;
    for (const key of keys) {
      link = link[key];
    }
    return link[lang];
  }