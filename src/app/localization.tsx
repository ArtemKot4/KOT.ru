export const localization = {
    pages: {
        not_found: {
            ru: "Страница не найдена",
            en: "Page not found"
        }
    },
    navigation_board: {
        home: {
            ru: "Главная",
            en: "Home"
        },
        profile: {
            ru: "Профиль",
            en: "Profile"
        }
    },
    authorization: {
        authorization: {
            ru: "Авторизация",
            en: "Authorization"
        },
        login: {
            ru: "Войти",
            en: "Login"
        },
        register: {
            ru: "Регистрация",
            en: "Register"
        },
        optionalRequest: {
            ru: "Кажется, вы не авторизованы. Желаете войти?",
            en: "I guess, you has not authorized. You wish to log in?"
        }
    }
} as Record<string, any>

export default function getLocalize(path: string, lang: string = "ru") {
    if (!lang) return path;
  
    const keys = path.split("/");
    let link = localization;
    for (const key of keys) {
      link = link[key];
    }
    return link[lang];
  }