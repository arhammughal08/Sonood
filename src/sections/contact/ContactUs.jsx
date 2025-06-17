import { FaPhoneAlt } from 'react-icons/fa'
import { Box, HeadingStyled, MainTitle, Section, Span, TextStyled } from '../../UI/Elements'
import { Container, Row } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { socialIcon } from '../../components/data/Data'
import { Form } from '../../components'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
     const { t } = useTranslation();
    return (
        <Section id="contact" className="contact__wrapper">
            <Container>
                <Row>
                    <Box className="contact__wrapper--content">
                        <MainTitle> {t("contact_heading")} </MainTitle>
                        <TextStyled size="20px"> {t("contact_Content")} </TextStyled>
                    </Box>
                </Row>
                <Row>
                    <Box className="contact__wrapper--info">
                        <HeadingStyled size="24px" color='var(--white)'> {t("contact_banner")}</HeadingStyled>
                        <Box className='d-flex align-items-center justify-content-between'>
                            <Box className='contact__wrapper--info-detail'>
                                <TextStyled color="var(--white)">
                                    <FaPhoneAlt size="24px" />
                                    <Span>+966 123 654 789</Span>
                                </TextStyled>
                                <TextStyled color="var(--white)">
                                    <MdEmail size="24px" />
                                    <Span>johnsmith@gmail.com</Span>
                                </TextStyled>
                                <TextStyled color="var(--white)">
                                    <FaLocationDot size="24px" />
                                    <Span>Olaya District, 64965, Riyadh, Kingdom of Saudi Arabia</Span>
                                </TextStyled>
                            </Box>
                            <Box className='contact__wrapper--social-icon'>
                                {
                                    socialIcon.map((list, key) => (
                                        <Box className='contact__wrapper--social-icon-box' key={key}>
                                            <a href={list.link} target="_blank" rel="noopener noreferrer">
                                                {list.img}
                                            </a>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </Row>
                <Form />
            </Container>
        </Section>
    )
}

export default ContactUs