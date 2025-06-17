import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavDataConfig, socialIcon } from "../data/Data";
import { Container, Row } from "react-bootstrap";
import { Box, ButtonStyled, LazyImage, List, ListItem, Span } from "../../UI/Elements";
import { Link } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import { BsJustify, BsX } from "react-icons/bs";
import { Navbar } from "./Styled";
import { Logo } from "../../UI/AllImages";

const Header = () => {
    const { t } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        const element = document.querySelector(".navbar__nav--list");
        element.classList.toggle("showToggle");
    };
    const WhatsApp = () => {
        const phoneNumber = '+966533046533';
        const message = 'Hello, Sonood';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <Navbar className={`${isSticky ? 'sticky' : ''}`}>
            <Container>
                <Row className="w-100">
                    <Box className='navbar__nav'>
                        <Box className="navbar__nav--brand">
                            <LazyImage src={Logo} />
                        </Box>
                        <List className='navbar__nav--list'>
                            <Box className="d-none d-md-block">
                                <LazyImage src={Logo} />
                            </Box>
                            {NavDataConfig.map((item, key) => (
                                <ListItem key={key} className="navbar__nav--list-items">
                                    <Link to={item.to} spy={true} smooth={true} offset={-120} duration={500} activeClass="active" onClick={handleToggle}>{t(item.label)}</Link>
                                </ListItem>
                            ))}
                        </List>
                        <Box className='navbar__nav--social'>
                            <ButtonStyled className="btn btn-primary">
                                <FaPhoneAlt size="24px" />
                                <Span>+966 000 000 000</Span>
                            </ButtonStyled>
                            <Box className='navbar__nav--social-icon'>
                                {
                                    socialIcon.map((list, key) => (
                                        <Box className='navbar__nav--social-icon-box' key={key}>
                                            <a href={list.link} target="_blank" rel="noopener noreferrer">
                                                {list.img}
                                            </a>
                                        </Box>
                                    ))
                                }
                            </Box>
                            <Span className="toggleBtn" onClick={handleToggle}>
                                {toggle ? <BsX size={30} /> : <BsJustify size={30} />}
                            </Span>
                        </Box>
                    </Box>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header