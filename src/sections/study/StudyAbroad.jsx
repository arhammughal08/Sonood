import { StudyCard } from '../../components'
import { studyData } from '../../components/data/Data'
import { Box, MainTitle, Section, TextStyled } from '../../UI/Elements'
import { Col, Container, Row } from 'react-bootstrap'

const StudyAbroad = () => {
    return (
        <Section id="studyAborad" className="study__wrapper">
            <Container>
                <Row>
                    <Box className="study__wrapper--content">
                        <MainTitle>Discover the world with Snood</MainTitle>
                        <TextStyled>Through our international relationships and experience, we are able to secure acceptance anywhere in the world. Below are examples of study abroad countries.</TextStyled>
                    </Box>
                </Row>
                <Row className="row-gap-3 my-5">
                    {studyData.map((item, idx) => (
                        <Col lg={3} md={4} sm={6} xs={12} key={idx}>
                            <StudyCard {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Section>
    )
}

export default StudyAbroad