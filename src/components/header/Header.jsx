import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavDataConfig } from "../data/Data";
import { Container, Row } from "react-bootstrap";
import { Box, List, ListItem, Span } from "../../UI/Elements";
import { Link } from "react-scroll";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsJustify, BsX } from "react-icons/bs";
import { Navbar } from "./Styled";
import ChangeButton from "../../languages/ChangeButton";
import { RiTwitterXLine } from "react-icons/ri";

const Header = () => {
    const WhatsApp = () => {
        const phoneNumber = '+966533046533';
        const message = 'Hello, Al faif';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    const { t } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        const element = document.querySelector(".nav-bar-list");
        element.classList.toggle("showToggle");
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
    const socialIcon = [
        {
            img: <RiTwitterXLine />,
            link: 'https://x.com/altaif2024?s=21&t=Wq0RMCoJloRUNeSTcfLPrg',
        },

        {
            img: <FaInstagram />,
            link: 'https://www.instagram.com/eltayef.sa/profilecard/?igsh=MWZ4c3Y1dmw0dXpreg==',
        },
        {
            img: <FaLinkedin />,
            link: 'https://www.snapchat.com/add/eltayef.sa?share_id=1vRxAMusgk4&locale=ar-AE',
        },

    ];

    return (

        <Navbar className={`navbar ${isSticky ? 'sticky' : ''} container-fluid`}>
            <Container>
                <Row>
                    <Box className='navbar__nav'>
                        <List className='navbar__nav--list'>
                            {NavDataConfig.map((item, key) => (
                                <ListItem key={key} className="navbar__nav--list-items">
                                    <Link to={item.to} spy={true} smooth={true} offset={-60} duration={500} activeClass="active" onClick={handleToggle}>{t(item.label)}</Link>
                                </ListItem>
                            ))}
                        </List>
                        <Box className='navbar__nav--social'>
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
            <ChangeButton />
        </Navbar>

    )
}

export default Header