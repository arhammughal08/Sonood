import styled from "styled-components"
import { Box, HeadingStyled, LazyImage, TextStyled } from "../../UI/Elements"

const StudyCard = ({ icon, img, text }) => {
    return (
        <Card className="study__card" style={{ backgroundImage: `url(${img})` }}>
            <Box className="study__icon">
                <LazyImage src={icon} />
            </Box>
            <HeadingStyled margin="0" size="20px" color='var(--white)' weight="var(--font-weight-semi-bold)" >{text}</HeadingStyled>
        </Card>
    )
}

export default StudyCard

const Card = styled.div`
    position:relative;
    padding: 12px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 230px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    .study__icon {
        position:absolute;
        top:18px;
        right:15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:2px solid var(--white);
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: inherit;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: transform 0.3s ease-in-out;
        transform-origin: center;
        z-index: 0;
    }

    &:hover::before {
        transform: scale(1.05)
    }

    > * {
        position: relative;
        z-index: 1;
    }
`