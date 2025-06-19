import styled from "styled-components"
import { ChangeButton, Footer, Header } from "../components"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Applayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scroll({ top: 0, behaviour: 'smooth' })
    }, [location]);
    const { t } = useTranslation();
    useEffect(() => {
        document.title = t("TitleName");
    }, [t]);

    return (
        <Wrapper>
            <Header />
            <Outlet />
            <Footer />
            <ChangeButton />
        </Wrapper>
    )
}

export default Applayout

const Wrapper = styled.div`
    width:100%;
    overflow-x:hidden;
`