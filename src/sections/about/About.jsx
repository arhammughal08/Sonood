import { Col, Container, Row } from "react-bootstrap"
import { Box, HeadingStyled, Section, SubHeading, TextStyled } from "../../UI/Elements"

const About = () => {
    return (
        <Section id="about" className="about__wrapper">
            <Container>
                <Row className="align-items-start">
                    <Col lg={4}>
                        <Box className="about__wrapper--content">
                            <HeadingStyled> Who are we</HeadingStyled>
                            <TextStyled>
                                The idea of establishing an educational consulting team began with the personal experience of the project’s founder and several of his family members who studied abroad for several years in English-speaking countries. From this rich educational journey—full of experiences and challenges—came the desire to share knowledge and expertise by offering educational consultations based on real-life experience and a deep understanding of the opportunities and challenges involved, in order to ease the path for students wishing to study abroad.
                                The project was founded in 2008 under the name "Risalat Al-Ma'rifah" ("Message of Knowledge"), and a large number of students were coordinated to study abroad in accredited language institutes and universities. Due to the COVID-19 pandemic and other organizational reasons, operations were paused for a period to allow for updates and improvements, including renaming the initiative to "Sanoud Educational Consulting."
                            </TextStyled>
                        </Box>
                    </Col>
                    <Col lg={4}>
                        <Box className="about__wrapper--content about__wrapper--border">
                            <SubHeading>Accreditations </SubHeading>
                            <TextStyled>
                                Sanoud Educational Consulting holds an official license in the Kingdom of Saudi Arabia (License No. 294) and a Certified Education Agent certificate from the British Council (No. 68511). This represents formal recognition of our ability to provide high-quality, professional consulting services in accordance with globally recognized standards, thereby enhancing the quality of our services for students seeking to study abroad.
                            </TextStyled>
                        </Box>
                    </Col>
                    <Col lg={4}>
                        <Box className="about__wrapper--content about__wrapper--border">
                            <SubHeading>Our vision </SubHeading>
                            <TextStyled>
                                Our core objective at Sanoud Educational Consulting is to put our team's expertise at the service of our students—to be the bridge that connects students aspiring to study abroad with leading international educational institutions, from language institutes to prestigious universities. We remain in continuous contact with our students throughout their journey until they achieve their academic goals.
                            </TextStyled>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default About