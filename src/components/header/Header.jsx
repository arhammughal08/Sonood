import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavDataConfig, socialIcon } from "../data/Data";
import { Container, Row } from "react-bootstrap";
import { Box, ButtonStyled, LazyImage, List, ListItem, Span } from "../../UI/Elements";
import { Link } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import { BsJustify, BsX } from "react-icons/bs";
import { MenuOverlay, Navbar } from "./Styled";
import { Logo } from "../../UI/AllImages";
import { useNavigate } from "react-router-dom";
import ChangeButton from "../../languages/ChangeButton";

const Header = () => {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        const element = document.querySelector(".navbar__nav--wrap");
        element.classList.toggle("showToggle");
    };
    const handleCall = () => {
        window.location.href = 'tel:+966 590 957 017';
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
        <>
            {toggle && <MenuOverlay onClick={handleToggle} />}
            <Navbar className={`${isSticky ? 'sticky' : ''}`}>
                <Container>
                    <Box className='navbar__nav'>
                        <Box className="navbar__nav--brand" onClick={() => navigate("/")}>
                            <LazyImage src={Logo} />
                        </Box>
                        <Box className='navbar__nav--wrap'>
                            <Box className="navbar__nav--wrap-mobile-brand">
                                <LazyImage src={Logo} />
                            </Box>
                            <List className='navbar__nav--wrap-list'>
                                {NavDataConfig.map((item, key) => (
                                    <ListItem key={key} className="navbar__nav--wrap-list-items">
                                        <Link to={item.to} spy={true} smooth={true} offset={-160} duration={500} activeClass="active" onClick={handleToggle}>{t(item.label)}</Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box className='navbar__nav--social'>
                            <ButtonStyled className="btn btn-primary" onClick={handleCall}>
                                <FaPhoneAlt size="24px" />
                                <Span>+966 590 957 017</Span>
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
                            <ChangeButton />
                            <Span className="toggleBtn" onClick={handleToggle}>
                                {toggle ? <BsX size={30} /> : <BsJustify size={30} />}
                            </Span>

                        </Box>
                    </Box>
                </Container>
            </Navbar>
        </>
    )
}

export default Header