import { Col, Container, Row } from "react-bootstrap"
import { BannerBg, BannerImage, Logo } from "../../UI/AllImages"
import { BannerTitle, Box, LazyImage, Section } from "../../UI/Elements"
import { useTranslation } from "react-i18next";

const Banner = () => {
    const { t } = useTranslation();
    return (
        <Section id='home' className="banner__wrapper" bgImg={`url(${BannerBg})`}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <Box className="banner__wrapper--content">
                            <LazyImage src={Logo} />
                            <BannerTitle >
                                {t("Banner_content")}
                            </BannerTitle>
                        </Box>
                    </Col>
                    <Col lg={6}>
                        <Box className="banner__wrapper--img">
                            <LazyImage src={BannerImage} />
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Banner

