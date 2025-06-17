import { useTranslation } from 'react-i18next'
import { StudyCard } from '../../components'
import { studyData } from '../../components/data/Data'
import { Box, MainTitle, Section, TextStyled } from '../../UI/Elements'
import { Col, Container, Row } from 'react-bootstrap'

const StudyAbroad = () => {
    const { t } = useTranslation();
    return (
        <Section id="studyAborad" className="study__wrapper">
            <Container>
                <Row>
                    <Box className="study__wrapper--content">
                        <MainTitle> {t("study_heading")} </MainTitle>
                        <TextStyled size="24px" weight="var(--font-weight-semi-bold)"> {t("study_heading_content")} </TextStyled>
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