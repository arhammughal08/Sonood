import styled from "styled-components"
import { ChangeButton, Footer, Header } from "../components"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { WhatsAppLogo } from "../UI/AllImages";
import { LazyImage } from "../UI/Elements";

const Applayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scroll({ top: 0, behaviour: 'smooth' })
    }, [location]);
    const { t } = useTranslation();
    useEffect(() => {
        document.title = t("TitleName");
    }, [t]);
    const WhatsApp = () => {
        const phoneNumber = '+966555557017';
        const message = 'Hello, Sonood';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
            <span className="whatsapp" onClick={WhatsApp}>
                <LazyImage src={WhatsAppLogo} />
            </span>

        </Wrapper>
    )
}

export default Applayout

const Wrapper = styled.div`
    width:100%;
    overflow-x:hidden;

    .whatsapp {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1;

        @media (max-width:568px) {
        width:40px;
        height:40px;
        }
    }
`