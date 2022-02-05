export const mockTranslations=()=>jest.mock("react-i18next",()=>({useTranslation:()=>({t:n=>n,i18n:{changeLanguage:()=>new Promise(()=>{})}})}));
