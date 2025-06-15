import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components"

export const Box = styled.div`
    background-color: ${({ bg }) => bg ? bg : ''};
`
export const Span = styled.span`
    background-color: ${({ bg }) => bg ? bg : ''};
`

export const LazyImage = (props) => {
    return (
        <LazyLoadImage className="image"
            {...props}
            effect="blur"
        />
    )
}

export const Section = styled.section`
    background-color: ${({ bg }) => bg ? bg : ''};
    background-image: ${({ bgImg }) => bgImg ? bgImg : ''};
    display: ${props => props.display ? props.display : ''};
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    background-position: ${({ bgPosition }) => bgPosition ? bgPosition : ''};
    background-repeat: ${({ bgRepeat }) => bgRepeat ? bgRepeat : ''};
    background-size: ${({ bgCover }) => bgCover ? bgCover : ''};
`


export const SpanStyled = styled.span`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : ''};
    font-weight:${props => props.weight ? props.weight : ''};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    font-family: ${props => props.family ? props.family : ""};
`
export const MainTitle = styled.h1`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : 'var(--h1)'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-semi-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arBold)"};
`

export const HeadingStyled = styled.h2`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : 'var(--h2)'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-semi-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arBold)"};
`

export const SubHeading = styled.h3`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : 'normal'};
    font-size:${props => props.size ? props.size : 'var(--h3)'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-semi-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arBold)"};
`

export const TextStyled = styled.p`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : ''};
    font-weight:${props => props.weight ? props.weight : 'var(--font-weight-medium)'};
    color:${props => props.color ? props.color : "var(--theme-color)"};
    text-transform: ${props => props.transform ? props.transform : 'math-auto'};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--medium)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arRegular)"};
`

export const LabelStyled = styled.label`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    line-height:${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : '16px'};
    font-weight:${props => props.weight ? props.weight : 'var(--font-weight-semi-bold)'};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    color:${props => props.color ? props.color : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arSemiBold)"};
`

export const List = styled.ul`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    font-size:${props => props.size ? props.size : ''};
    font-weight: ${props => props.weight ? props.weight : "var(--font-weight-medium)"};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arMedium)"};
    color:${props => props.color ? props.color : ''};
    display: ${props => props.display ? props.display : ''};
    line-height:${props => props.lh ? props.lh : ''};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    list-style: ${props => props.listStyle ? props.listStyle : 'none'};

`

export const ListItem = styled.li`
    Padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    font-size:${props => props.size ? props.size : '16px'};
    font-weight: ${props => props.weight ? props.weight : "var(--font-weight-medium)"};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arMedium)"};
    color:${props => props.color ? props.color : ''};
    display: ${props => props.display ? props.display : ''};
    line-height:${props => props.lh ? props.lh : ''};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    list-style: ${props => props.listStyle ? props.listStyle : 'none'};
    
`

export const ButtonStyled = styled.button`
    font-size:${props => props.size ? props.size : '18px'};
    font-weight:${props => props.weight ? props.weight : 'var(--font-weight-medium)'};
    background:${props => props.bg ? props.bg : "none"};
    color: ${props => props.color ? props.color : ""};
    padding: ${props => props.padding ? props.padding : ""};
    margin: ${props => props.margin ? props.margin : ''};
    border: ${props => props.border ? props.border : ""};
    width: ${props => props.width ? props.width : "100%"};
    line-height: ${props => props.lineHeight ? props.lineHeight : "normal"};
    border-radius: ${props => props.radius ? props.radius : ""};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arBold)"};
    
`
