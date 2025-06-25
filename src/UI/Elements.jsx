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
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    background-position: ${({ bgPosition }) => bgPosition ? bgPosition : ''};
    background-repeat: ${({ bgRepeat }) => bgRepeat ? bgRepeat : ''};
    background-size: ${({ bgCover }) => bgCover ? bgCover : ''};
`


export const SpanStyled = styled.span`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : ''};
    font-weight:${props => props.weight ? props.weight : ''};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    font-family: ${props => props.family ? props.family : ""};
`
export const BannerTitle = styled.h1`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : '45px'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-semi-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
`
export const MainTitle = styled.h1`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : '48px'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
`

export const HeadingStyled = styled.h2`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : '40px'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
`

export const SubHeading = styled.h3`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    color:${props => props.color ? props.color : ""};
    line-height: ${props => props.lh ? props.lh : 'normal'};
    font-size:${props => props.size ? props.size : '24px'};
    display: ${props => props.display ? props.display : ''};
    font-weight:${props => props.weight ? props.weight : "var(--font-weight-semi-bold)"};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
`

export const TextStyled = styled.p`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    line-height: ${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : '16px'};
    font-weight:${props => props.weight ? props.weight : 'var(--font-weight-medium)'};
    color:${props => props.color ? props.color : "var(--theme-color)"};
    text-transform: ${props => props.transform ? props.transform : 'math-auto'};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    cursor: ${props => props.cursor ? props.cursor : ''};
    font-family: ${props => props.direction === 'rtl' && props.family ? props.family : "var(--primary-font)"},
                ${props => props.direction === 'ltr' && props.family ? props.family : "var(--arabic-font)"};
`

export const LabelStyled = styled.label`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    line-height:${props => props.lh ? props.lh : ''};
    font-size:${props => props.size ? props.size : '16px'};
    font-weight:${props => props.weight ? props.weight : 'var(--font-weight-semi-bold)'};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    color:${props => props.color ? props.color : 'var(--theme-color)'};
`

export const List = styled.ul`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    font-size:${props => props.size ? props.size : ''};
    font-weight: ${props => props.weight ? props.weight : "var(--font-weight-medium)"};
    color:${props => props.color ? props.color : ''};
    display: ${props => props.display ? props.display : ''};
    line-height:${props => props.lh ? props.lh : ''};
    letter-spacing: ${props => props.spacing ? props.spacing : ''};
    text-transform: ${props => props.transform ? props.transform : ''};
    list-style: ${props => props.listStyle ? props.listStyle : 'none'};

`

export const ListItem = styled.li`
    padding: ${props => props.padding ? props.padding : ''};
    margin: ${props => props.margin ? props.margin : ''};
    font-size:${props => props.size ? props.size : '16px'};
    font-weight: ${props => props.weight ? props.weight : "var(--font-weight-medium)"};
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
    
`
