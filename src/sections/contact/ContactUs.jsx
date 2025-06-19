import { FaPhoneAlt } from 'react-icons/fa'
import { Box, MainTitle, Section, Span, SubHeading, TextStyled } from '../../UI/Elements'
import { Container } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import { socialIcon } from '../../components/data/Data'
import { Form } from '../../components'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
    const { t } = useTranslation();
    const handleCall = () => {
        window.location.href = 'tel:+966 590 957 017';
    };
    return (
        <Section id="contact" className="contact__wrapper">
            <Container>
                <Box className="contact__wrapper--content">
                    <MainTitle> {t("contact_heading")} </MainTitle>
                    <TextStyled size="20px"> {t("contact_Content")} </TextStyled>
                </Box>
                <Box className="contact__wrapper--info">
                    <SubHeading size="24px" color='var(--white)'> {t("contact_banner")}</SubHeading>
                    <Box className='contact__wrapper--info-wrap '>
                        <Box className='contact__wrapper--info-detail'>
                            <TextStyled cursor="pointer" color="var(--white)">
                                <FaPhoneAlt size="24px" />
                                <Span className='contact-No' onClick={handleCall}>+966 590 957 017</Span>
                            </TextStyled>
                            <TextStyled color="var(--white)">
                                <MdEmail size="24px" />
                                <a href="mailto:Abdulaziz@sonoodEdu.com">Abdulaziz@sonoodEdu.com</a>
                            </TextStyled>
                            <TextStyled color="var(--white)">
                                <MdEmail size="24px" />
                                <a href="mailto:Info@sonoodEdu.com">Info@sonoodEdu.com</a>
                            </TextStyled>

                            {/* <TextStyled color="var(--white)">
                                <FaLocationDot size="24px" />
                                <Span>Olaya District, 64965, Riyadh, Kingdom of Saudi Arabia</Span>
                            </TextStyled> */}
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
                <Form />
            </Container>
        </Section>
    )
}

export default ContactUs