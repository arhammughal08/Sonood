import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Cookies from "js-cookie";
import { LazyImage } from "../UI/Elements";
import { ArabicLogo, EnglishLogo, WhatsAppLogo } from "../UI/AllImages";
import { Loading } from "../components";

const ChangeButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const WhatsApp = () => {
    const phoneNumber = '+966555557017';
    const message = 'Hello, Sonood';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };
  const { i18n } = useTranslation();
  const [isEnglishSelected, setIsEnglishSelected] = useState(
    Cookies.get("lang") === "en" ? false : true
  );

  const changeLanguageAndDirection = (lng, dir) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = dir;
    document.body.classList.toggle("rtl", dir === "rtl");
    Cookies.set("lang", lng);
    Cookies.set("dir", dir);
  };
  const handleLanguageChange = (lng, dir) => {
    setIsLoading(true);
    setTimeout(() => {
      changeLanguageAndDirection(lng, dir);
      setIsEnglishSelected(!isEnglishSelected);
      Cookies.set("lang", lng, { expires: 60, path: "/" });
      Cookies.set("dir", dir, { expires: 60, path: "/" });
      setIsLoading(false); // 👈 hide loader
    }, 1200);
    // changeLanguageAndDirection(lng, dir);
    // setIsEnglishSelected(!isEnglishSelected);
    // Cookies.set("lang", lng, { expires: 60, path: "/" });
    // Cookies.set("dir", dir, { expires: 60, path: "/" });
  };

  useEffect(() => {
    const savedLang = Cookies.get("lang");
    const savedDir = Cookies.get("dir");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
    else {
      i18n.changeLanguage("ar");
      Cookies.set("lang", "ar", { expires: 60, path: "/" });
    }
    if (savedDir) {
      document.documentElement.dir = savedDir;
      document.body.classList.toggle("rtl", savedDir === "rtl");
    }
    else {
      document.documentElement.dir = "rtl";
      document.body.classList.toggle("rtl", true);
      Cookies.set("dir", "rtl", { expires: 60, path: "/" });
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <ButtonBox>
        <span className="whatsapp" onClick={WhatsApp}>
          <LazyImage src={WhatsAppLogo} />
        </span>
        {isEnglishSelected ? (
          <span
            className="change-Btn"
            onClick={() => handleLanguageChange("en", "ltr")}
          >
            <LazyImage src={EnglishLogo} className="english_icon" alt="USA" />
          </span>
        ) : (
          <span
            className="change-Btn"
            onClick={() => handleLanguageChange("ar", "rtl")}
          >
            <LazyImage src={ArabicLogo} className="arabic_icon" alt="Arabic" />
          </span>
        )}
      </ButtonBox>
    </>
  );
};
const ButtonBox = styled.div`
  padding: 0 20px;
  cursor: pointer;
  z-index: 1;
  .whatsapp {
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 1;

     @media (max-width:568px) {
      width:40px;
      height:40px;
    }
  }
  .change-Btn {
    position: fixed;
    bottom: 10px;
    right: 10px;
    @media (max-width:568px) {
      width:40px;
      height:40px;
    }
  }
  .english_icon {
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
  .arabic_icon {
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
`;

export default ChangeButton;
