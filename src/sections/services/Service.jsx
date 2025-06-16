import { Col, Container, Row } from "react-bootstrap"
import { Box, MainTitle, Section, TextStyled } from "../../UI/Elements"
import { ServiceCard } from "../../components"
import { serviceData } from "../../components/data/Data"

const Service = () => {
    return (
        <Section id="service" className="service__wrapper">
            <Container>
                <Row>
                    <Box className="service__wrapper--content">
                        <MainTitle>Our services</MainTitle>
                        <TextStyled>We provide specialized educational consultations to help students choose the right language institute, a safe city, and the most suitable country based on their needs and goals. We also guide students in selecting the appropriate academic major according to their interests and cognitive abilities. We take pride in our partnerships with top-tier language institutes and educational institutions accredited by the Ministry of Education and Saudi cultural missions abroad.</TextStyled>
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