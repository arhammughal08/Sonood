import { Col, Container, Row } from 'react-bootstrap'
import { Box, HeadingStyled, LazyImage, Section, TextStyled } from '../../UI/Elements'
import { ScholarshipImg } from '../../UI/AllImages'

const Scholarship = () => {
    return (
        <Section id="scholarship">
            <Container>
                <Box bg={`var(--theme-color)`} className="scholarship__wrapper">
                    <Row className='align-items-center row-gap-3'>
                        <Col lg={6}>
                            <Box className="scholarship__wrapper--content">
                                <HeadingStyled color="var(--white)">Grants and scholarships</HeadingStyled>
                                <TextStyled color="var(--white)" margin="0 0 10px 0">The Kingdom of Saudi Arabia offers various scholarships to Arab and Muslim students for many programs at Saudi universities.</TextStyled>
                                <TextStyled color="var(--white)" margin="0 0 10px 0">As for the scholarship of Saudi students to study abroad, it began during the reign of King Abdulaziz, when a number of students were sent to study in Egypt and the United Kingdom. In 2005, the Custodian of the Two Holy Mosques Scholarship Program was launched for those wishing to pursue undergraduate and graduate education abroad, with the aim of obtaining academic qualifications that meet labor market needs and contribute to the development plans of the Kingdom of Saudi Arabia.</TextStyled>
                                <TextStyled color="var(--white)">The Custodian of the Two Holy Mosques Scholarship Program has undergone several phases of development. Most recently, four scholarship tracks have been defined, each with specific fields of study and designated universities, detailed on the Ministry of Education’s website. It is worth noting that several ministries and government-owned companies also offer scholarship programs in various disciplines, which lead to employment upon graduation with the sponsoring entity. This provides job security for graduates and enhances the alignment between educational outcomes and labor market needs.</TextStyled>
                            </Box>
                        </Col>
                        <Col lg={6}>
                            <Box className="scholarship__wrapper--img">
                                <LazyImage src={ScholarshipImg} />
                            </Box>
                        </Col>
                    </Row>
                </Box>
            </Container>
        </Section>
    )
}

export default Scholarship