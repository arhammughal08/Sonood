import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { Box, MainTitle, Section, Span, SubHeading, TextStyled } from '../../UI/Elements'
import { Container } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import { socialIcon } from '../../components/data/Data'
import { Form } from '../../components'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const ContactUs = () => {
    const { t } = useTranslation();
    const handleCall = () => {
        window.location.href = 'tel:+966 590 957 017';
    };
    const WhatsApp = () => {
        const phoneNumber = '+966555557017';
        const message = 'Hello, Sonood';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <Section id="contact" className="contact__wrapper">
            <Container>
                <Box className="contact__wrapper--content">
                    <MainTitle> {t("contact_heading")} </MainTitle>
                    <TextStyled size="20px"> {t("contact_Content")} </TextStyled>
                </Box>
                <Box className="contact__wrapper--info">
                    <SubHeading size="24px" color='var(--white)' margin="0"> {t("contact_banner")}</SubHeading>
                    <ContactNumber className='content-banner-2 m-0' size="24px" color='var(--white)'>
                        {t("contact_banner2")}
                    </ContactNumber>


                    <Box className='contact__wrapper--info-wrap '>
                        <Box className='contact__wrapper--info-detail'>
                            <TextStyled cursor="pointer" color="var(--white)">
                                <FaPhoneAlt size="24px" />
                                <Span className=' d-flex gap-2 align-items-center flex-wrap' >
                                    {t("calls_during")}
                                    <Span className='contact-No' onClick={handleCall}> +966 590 957 017</Span>
                                </Span>
                            </TextStyled>
                            <TextStyled cursor="pointer" color="var(--white)">
                                <FaWhatsapp size="24px" />
                                <Span className=' d-flex gap-2 align-items-center flex-wrap' >
                                    {t("calls_whatapp")}
                                    <Span className='contact-No' onClick={WhatsApp}>+966 555 557 017</Span>
                                </Span>
                            </TextStyled>
                            <TextStyled color="var(--white)">
                                <MdEmail size="24px" />
                                <Span className='d-flex flex-column align-items-start'>
                                    <a href="mailto:info@sonoodedu.com">info@sonoodedu.com</a>
                                </Span>
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
const ContactNumber = styled.h3`
color: var(--white);

font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arabic-font)"};
    
`