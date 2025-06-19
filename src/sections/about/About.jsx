import { Col, Container, Row } from "react-bootstrap"
import { Box, ButtonStyled, HeadingStyled, Section, SubHeading, TextStyled } from "../../UI/Elements"
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const WhatsApp = () => {
        const phoneNumber = '+966555557017';
        const message = 'Hello, Sonood';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <Section id="about" className="about__wrapper">
            <Container>
                <Row className="align-items-start row-gap-3">
                    <Col lg={5} md={5}>
                        <Box className="about__wrapper--content">
                            <HeadingStyled>{t("about_heading_1")} </HeadingStyled>
                            <TextStyled>{t("about_heading_1_content")}</TextStyled>
                        </Box>
                    </Col>
                    <Col lg={7} md={7}>
                        <Row className="row-gap-3">
                            <Col lg={6}>
                                <Box className="about__wrapper--content about__wrapper--border">
                                    <SubHeading>{t("about_heading_2")} </SubHeading>
                                    <TextStyled>{t("about_heading_2_content")}</TextStyled>
                                </Box>
                            </Col>
                            <Col lg={6}>
                                <Box className="about__wrapper--content about__wrapper--border">
                                    <SubHeading>{t("about_heading_3")} </SubHeading>
                                    <TextStyled>{t("about_heading_3_content")}</TextStyled>
                                </Box>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Box className="about__wrapper--banner">
                    <HeadingStyled color="var(--white)">{t("about_banner")}</HeadingStyled>
                    <ButtonStyled className="btn btn-primary" onClick={WhatsApp}> {t("btn")} </ButtonStyled>
                </Box>
            </Container>
        </Section>
    )
}

export default About