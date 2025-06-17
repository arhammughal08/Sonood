import { Col, Container, Row } from 'react-bootstrap'
import { Box, HeadingStyled, LazyImage, Section, TextStyled } from '../../UI/Elements'
import { ScholarshipImg } from '../../UI/AllImages'
import { useTranslation } from 'react-i18next';

const Scholarship = () => {
    const { t } = useTranslation();
    return (
        <Section id="scholarship">
            <Container>
                <Box bg={`var(--theme-color)`} className="scholarship__wrapper">
                    <Row className='align-items-center row-gap-3'>
                        <Col lg={6}>
                            <Box className="scholarship__wrapper--content pe-3">
                                <HeadingStyled color="var(--white)" margin="0 0 22px 0"> {t("scholarships_heading")} </HeadingStyled>
                                <TextStyled color="var(--white)" margin="0 0 20px 0">{t("scholarships_content1")}</TextStyled>
                                <TextStyled color="var(--white)" margin="0 0 20px 0">{t("scholarships_content2")}</TextStyled>
                                <TextStyled color="var(--white)">{t("scholarships_content3")}</TextStyled>
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