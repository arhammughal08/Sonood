import { Col, Container, Row } from "react-bootstrap"
import { Box, MainTitle, Section, TextStyled } from "../../UI/Elements"
import { ServiceCard } from "../../components"
import { serviceData } from "../../components/data/Data"
import { useTranslation } from "react-i18next"

const Service = () => {
    const { t } = useTranslation();
    return (
        <Section id="service" className="service__wrapper">
            <Container>
                <Row>
                    <Box className="service__wrapper--content">
                        <MainTitle>{t("service_heading")} </MainTitle>
                        <TextStyled size="20px"> {t("service_heading_content")}</TextStyled>
                    </Box>
                </Row>
                <Row className="row-gap-3 mt-5">
                    {serviceData.slice(0, 4).map((item, idx) => (
                        <Col md={3} sm={6} xs={12} key={idx}>
                            <ServiceCard {...item} />
                        </Col>
                    ))}
                    {serviceData.slice(4).map((item, idx) => (
                        <Col md={4} sm={6} xs={12} key={idx}>
                            <ServiceCard {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Section>
    )
}

export default Service