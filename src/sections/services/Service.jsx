import { Col, Container, Row } from "react-bootstrap"
import { Box, MainTitle, Section, TextStyled } from "../../UI/Elements"
import { ServiceCard } from "../../components"
import { serviceData } from "../../components/data/Data"
import { useTranslation } from "react-i18next"
import Slider from "react-slick"

const Service = () => {
    const { t } = useTranslation();
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Section id="service" className="service__wrapper">
            <Container>
                <Row>
                    <Box className="service__wrapper--content">
                        <MainTitle>{t("service_heading")} </MainTitle>
                        <TextStyled size="20px"> {t("service_heading_content")}</TextStyled>
                    </Box>
                </Row>
                {/* <Row className="row-gap-3 mt-5">
                    {serviceData.slice(0, 4).map((item, idx) => (
                        <Col lg={3} md={6} key={idx}>
                            <ServiceCard {...item} />
                        </Col>
                    ))}
                    {serviceData.slice(4).map((item, idx) => (
                        <Col lg={4} md={6} key={idx}>
                            <ServiceCard {...item} />
                        </Col>
                    ))}
                </Row> */}
                <Row className="row-gap-4 mt-5">
                    <Slider {...settings}>
                        {serviceData.map((item, idx) => (
                            <Col lg={3} md={6} key={idx}>
                                <ServiceCard {...item} />
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </Section>
    )
}

export default Service