import styled from 'styled-components'


export const Navbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    padding:30px 0;
    transition: all 0.4s ease-in-out;

    .navbar__nav{
        padding:0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &--brand{
            display:none;
        }

        &--list{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap:30px;

            img{
                display:none;
            }

            &-items{
                position:relative;
                a{
                 color:var(--theme-color);
                }

                &:hover{
                    &:after{
                        content: '';
                        position:absolute;
                        bottom:-2px;
                        left:0;
                        right:0;
                        width:40px;
                        height:2px;
                        background:var(--theme-color);
                        margin:auto;
                    }
                }
                & .active{
                    font-weight:var(--font-weight-semi-bold);
                    &:after{
                        content: '';
                        position:absolute;
                        bottom:-2px;
                        left:0;
                        right:0;
                        width:40px;
                        height:2px;
                        background:var(--theme-color);
                        margin:auto;
                    }
                }
            }
        }



        &--social{
            display: flex;
            align-items: center;
            gap:6px;

            &-icon{
                display: flex;
                align-items: center;
                gap: 12px;

                &-box{
                    background: var(--white);
                    width:40px;
                    height:40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 1px 3px 1px #28144921;
                    border-radius: 8px;
                }
            }
        
        }

        @media (max-width:992px){
            &--brand{
                display:block;
                width:100px;
            }

            &--list{
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                padding: 20px;
                position: absolute;
                top: 0;
                right: 0;
                width: 80%;
                // height: 100vh;
                background: var(--white);
                transform: translateX(100%);
                transition: transform 0.4s ease-in-out;
                z-index: 9;
                box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);

                img{
                    width:100px;
                }

                &.showToggle{
                    transform: translateX(0%);
                }
            }
        }
    }
    &.sticky{

        background:var(--white);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(0);
        opacity: 0;
        animation: slideDown 0.6s ease forwards;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-40px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    
    .toggleBtn{
        display:none;

        @media (max-width:992px){
            display:block;
            z-index:100;
        }
    }
    

`