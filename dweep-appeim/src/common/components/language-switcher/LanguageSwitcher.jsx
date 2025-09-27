import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";
import "./LanguageSwitcher.scss";
import arabicIcon from "../../../assets/images/arabic.svg";
import englishIcon from "../../../assets/images/english-icon.svg";

const LanguageSwitcher = ({ className = "" }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={`language-switcher ${className}`}>
      <Button onClick={toggleLanguage}>
        {i18n.language === "en" ? (
          <span className="lang-lbl">
            <span className="lang-icon">
              <img src={arabicIcon} alt="Arabic" />
            </span>
            {t("Arabic")}
          </span>
        ) : (
          <span className="lang-lbl">
            <span className="lang-icon">
              <img src={englishIcon} alt="English" />
            </span>
            {t("English")}
          </span>
        )}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
