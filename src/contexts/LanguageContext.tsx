
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "zh", name: "Chinese", nativeName: "中文" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "pl", name: "Polish", nativeName: "Polski" },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina" },
  { code: "cs", name: "Czech", nativeName: "Čeština" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar" },
];

type TranslationsType = {
  [key: string]: {
    [key: string]: string;
  };
};

// Sample translations for demonstration purposes
const translations: TranslationsType = {
  "document.edit.title": {
    en: "Edit Document",
    de: "Dokument bearbeiten",
    fr: "Modifier le document",
    es: "Editar documento",
    it: "Modifica documento",
    sk: "Upraviť dokument",
    cs: "Upravit dokument",
    hu: "Dokumentum szerkesztése",
    pl: "Edytuj dokument",
    pt: "Editar documento",
    hi: "दस्तावेज़ संपादित करें",
    zh: "编辑文档",
    ja: "ドキュメントを編集",
  },
  "document.edit.name": {
    en: "Document Name",
    de: "Dokumentname",
    fr: "Nom du document",
    es: "Nombre del documento",
    it: "Nome del documento",
    sk: "Názov dokumentu",
    cs: "Název dokumentu",
    hu: "Dokumentum neve",
    pl: "Nazwa dokumentu",
    pt: "Nome do documento",
    hi: "दस्तावेज़ का नाम",
    zh: "文档名称",
    ja: "ドキュメント名",
  },
  "document.edit.description": {
    en: "Description",
    de: "Beschreibung",
    fr: "Description",
    es: "Descripción",
    it: "Descrizione",
    sk: "Popis",
    cs: "Popis",
    hu: "Leírás",
    pl: "Opis",
    pt: "Descrição",
    hi: "विवरण",
    zh: "描述",
    ja: "説明",
  },
  "document.edit.type": {
    en: "Document Type",
    de: "Dokumenttyp",
    fr: "Type de document",
    es: "Tipo de documento",
    it: "Tipo di documento",
    sk: "Typ dokumentu",
    cs: "Typ dokumentu",
    hu: "Dokumentum típusa",
    pl: "Typ dokumentu",
    pt: "Tipo de documento",
    hi: "दस्तावेज़ प्रकार",
    zh: "文档类型",
    ja: "ドキュメントタイプ",
  },
  "document.edit.content": {
    en: "Document Content",
    de: "Dokumentinhalt",
    fr: "Contenu du document",
    es: "Contenido del documento",
    it: "Contenuto del documento",
    sk: "Obsah dokumentu",
    cs: "Obsah dokumentu",
    hu: "Dokumentum tartalma",
    pl: "Zawartość dokumentu",
    pt: "Conteúdo do documento",
    hi: "दस्तावेज़ सामग्री",
    zh: "文档内容",
    ja: "ドキュメント内容",
  },
  "document.edit.save": {
    en: "Save Changes",
    de: "Änderungen speichern",
    fr: "Enregistrer les modifications",
    es: "Guardar cambios",
    it: "Salva modifiche",
    sk: "Uložiť zmeny",
    cs: "Uložit změny",
    hu: "Változtatások mentése",
    pl: "Zapisz zmiany",
    pt: "Salvar alterações",
    hi: "परिवर्तन सहेजें",
    zh: "保存更改",
    ja: "変更を保存",
  },
  "document.edit.cancel": {
    en: "Cancel",
    de: "Abbrechen",
    fr: "Annuler",
    es: "Cancelar",
    it: "Annulla",
    sk: "Zrušiť",
    cs: "Zrušit",
    hu: "Mégsem",
    pl: "Anuluj",
    pt: "Cancelar",
    hi: "रद्द करें",
    zh: "取消",
    ja: "キャンセル",
  },
  "document.edit.template": {
    en: "Select Template",
    de: "Vorlage auswählen",
    fr: "Sélectionner un modèle",
    es: "Seleccionar plantilla",
    it: "Seleziona modello",
    sk: "Vyberte šablónu",
    cs: "Vyberte šablonu",
    hu: "Sablon kiválasztása",
    pl: "Wybierz szablon",
    pt: "Selecionar modelo",
    hi: "टेम्पलेट चुनें",
    zh: "选择模板",
    ja: "テンプレートを選択",
  },
  "document.edit.preview": {
    en: "Preview Template",
    de: "Vorschau der Vorlage",
    fr: "Aperçu du modèle",
    es: "Vista previa de la plantilla",
    it: "Anteprima del modello",
    sk: "Náhľad šablóny",
    cs: "Náhled šablony",
    hu: "Sablon előnézete",
    pl: "Podgląd szablonu",
    pt: "Visualizar modelo",
    hi: "टेम्पलेट प्रिव्यू",
    zh: "预览模板",
    ja: "テンプレートプレビュー",
  },
  "common.back": {
    en: "Back",
    de: "Zurück",
    fr: "Retour",
    es: "Volver",
    it: "Indietro",
    sk: "Späť",
    cs: "Zpět",
    hu: "Vissza",
    pl: "Powrót",
    pt: "Voltar",
    hi: "वापस",
    zh: "返回",
    ja: "戻る",
  },
};

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  languages: Language[];
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
  languages: [],
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("lifekey-language");
    return savedLanguage || navigator.language.split("-")[0] || "en";
  });

  useEffect(() => {
    localStorage.setItem("lifekey-language", language);
  }, [language]);

  const translate = (key: string): string => {
    if (!translations[key]) {
      return key;
    }

    return translations[key][language] || translations[key].en || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translate,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
