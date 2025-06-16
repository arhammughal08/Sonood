import styled from "styled-components"
import { Box, LazyImage, TextStyled } from "../../UI/Elements"

const ServiceCard = ({ icon, text }) => {
    return (
        <Card className="service__card">
            <Box className="service__icon">
                <LazyImage src={icon} />
            </Box>
            <TextStyled weight="var(--font-weight-medium)">{text}</TextStyled>
        </Card>
    )
}

export default ServiceCard
const Card = styled.div`
    padding: 30px 24px;
    border-radius: 16px;
    border: 1px solid var(--theme-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    text-align: center;
    height: 210px;

    .service__icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: var(--theme-color);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }


`