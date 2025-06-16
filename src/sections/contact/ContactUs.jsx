import { FaPhoneAlt } from 'react-icons/fa'
import { Box, HeadingStyled, MainTitle, Section, Span, TextStyled } from '../../UI/Elements'
import { Container, Row } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { socialIcon } from '../../components/data/Data'

const ContactUs = () => {
    return (
        <Section id="contact" className="contact__wrapper">
            <Container>
                <Row>
                    <Box className="contact__wrapper--content">
                        <MainTitle>Start your global journey</MainTitle>
                        <TextStyled>Please fill out the form below — a Snood advisor will contact you within 24 hours.</TextStyled>
                    </Box>
                </Row>
                <Row>
                    <Box className="contact__wrapper--info">
                        <HeadingStyled size="24px" color='var(--white)'>Do you have questions? We are ready to help you.</HeadingStyled>
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
            </Container>
        </Section>
    )
}

export default ContactUs