import { useTranslation } from 'react-i18next'
import { StudyCard } from '../../components'
import { studyData } from '../../components/data/Data'
import { Box, ButtonStyled, HeadingStyled, Section, TextStyled } from '../../UI/Elements'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'

const StudyAbroad = () => {
    const { t } = useTranslation();
    const WhatsApp = () => {
        const phoneNumber = '+966555557017';
        const message = 'Hello, Sonood';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
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
        // <Section id="studyAborad" className="study__wrapper">
        //     <Container>
        //         <Row>
        //             <Box className="study__wrapper--content">
        //                 <MainTitle> {t("study_heading")} </MainTitle>
        //                 <TextStyled size="24px" weight="var(--font-weight-semi-bold)"> {t("study_heading_content")} </TextStyled>
        //             </Box>
        //         </Row>
        //         <Row className="row-gap-3 my-4  my-md-5">
        //             {studyData.map((item, idx) => (
        //                 <Col lg={3} md={6} key={idx}>
        //                     <StudyCard {...item} />
        //                 </Col>
        //             ))}
        //         </Row>
        //     </Container>
        // </Section>
        <Section id="studyAborad" className="studyDestination__wrapper">
            <Container>
                <Row className='row-gap-5'>
                    <Col lg={4}>
                        <Box className="studyDestination__wrapper--content">
                            <HeadingStyled color='var(--white)'> {t("study_heading")} </HeadingStyled>
                            <TextStyled size="16px" color='var(--white)' weight="var(--font-weight-semi-bold)"> {t("study_heading_content")} </TextStyled>
                            <ButtonStyled className="btn btn-primary w-50 d-block" onClick={WhatsApp}> {t("btn")} </ButtonStyled>
                        </Box>
                    </Col>
                    <Col lg={8}>
                        <Slider {...settings}>
                            {studyData.map((item, idx) => (
                                <Col lg={3} md={6} key={idx}>
                                    <StudyCard {...item} />
                                </Col>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Section>

    )
}

export default StudyAbroad