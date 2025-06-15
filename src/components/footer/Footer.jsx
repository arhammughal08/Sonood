import styled from "styled-components"
import { Logo } from "../../UI/AllImages"
import { NavDataConfig } from "../data/Data"
import { Col, Container, Row } from "react-bootstrap"
import { Box, LazyImage, List, ListItem } from "../../UI/Elements"
import { Link } from "react-scroll"
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    return (
        <FooterWrap>
            <Container>
                <Row>
                    <Col lg={10}>
                        <Box className="footer__nav">
                            <List className='footer__nav--list'>
                                <Box className="footer__nav--brnad">
                                    <LazyImage src={Logo} />
                                </Box>
                                {NavDataConfig.map((item, key) => (
                                    <ListItem key={key} className="footer__nav--list-items">
                                        <Link to={item.to} spy={true} smooth={true} offset={-60} duration={500} activeClass="active">{t(item.label)}</Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </FooterWrap>
    )
}

export default Footer

const FooterWrap = styled.footer`
    background:var(--theme-color);
    padding:20px 0;

    .footer__nav{


        &--brnad{
            background:var(--white);
            border-radius:16px;
            padding:12px 20px;
            img{
                width:100px;
            }
        }

        &--list{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            // gap: 30px;

            
            &-items{

                a{
                    position:relative;
                    color:var(--white);
                    &:hover{
                        color:var(--white);
                        &:after{
                        content: '';
                        position:absolute;
                        bottom:-2px;
                        left:0;
                        right:0;
                        width:40px;
                        height:2px;
                        background:var(--white);
                        margin:auto;
                    }
                }
            }
            
        }    
    }

`