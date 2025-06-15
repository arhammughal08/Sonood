import styled from "styled-components"
import { Footer, Header } from "../components"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react";

const Applayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scroll({ top: 0, behaviour: 'smooth' })
    }, [location]);

    return (
        <Wrapper>
            <Header />
            <Outlet />
            {/* <Footer /> */}

        </Wrapper>
    )
}

export default Applayout

const Wrapper = styled.div`
`