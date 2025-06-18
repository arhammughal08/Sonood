import styled from 'styled-components'

export const MenuOverlay = styled.div`
    @media(max-width:1025px) {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6); 
        backdrop-filter: blur(8px); 
        transition: all 0.3s ease;
    }

`
export const Navbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    padding: 30px 0;
    transition: all 0.4s ease-in-out;

    @media(max-width:1025px) {
        padding: 15px 0;
    }

    .navbar__nav {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &--brand {
            display: none;
        }

        &--mobile-brand {
            display: none;
        }

        &--wrap{
            &-mobile-brand{
                display:none;
            }

            &-list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 50px;

                @media(max-width:1199px) {
                    gap: 30px;
                }

                img {
                    display: none;
                }

                &-items {
                    position: relative;

                    a {
                        font-weight: var(--font-weight-medium);
                        color: var(--theme-color);
                        font-size: 16px;
                    }

                    &:hover,
                    & .active {
                        &:after {
                            content: '';
                            position: absolute;
                            bottom: -8px;
                            left: 0;
                            right: 0;
                            width: 40px;
                            height: 2px;
                            background: var(--theme-color);
                            margin: auto;
                        }
                    }

                    & .active{
                        font-weight: var(--font-weight-bold);
                    }
                }
            }
        }

        

        &--social {
            display: flex;
            align-items: center;
            gap: 12px;

            @media (max-width:768px) {
                button{
                    display:none;
                }
            }

            &-icon {
                display: flex;
                align-items: center;
                gap: 12px;

                &-box {
                    background: var(--white);
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 1px 3px 1px #28144921;
                    border-radius: 8px;
                }
                @media (max-width:768px) {
                    display:none;
                }
            }

        }

        @media (max-width:1030px) {
            &--brand {
                display: block;
                width: 100px;
            }

            &--mobile-brand {
                display: block;
                width: 100px;
            }

            &--wrap{
                position: absolute;
                top: 0;
                right: 0;
                width: 85%;
                height: 100vh;
                background: var(--theme-color);
                transform: translateX(100%);
                transition: transform 0.4s ease-in-out;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: 60px;
                padding-top: 30px;

                &-mobile-brand{
                    display: block;
                    background: var(--white);
                    border-radius: 16px;
                    padding: 12px 20px;
                    width: 120px;
                }

                &-list {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 25px;
                    padding: 20px;
                    width: 100%;

                    a {
                        color: var(--white);
                    }

                    img {
                        width: 100px;
                    }

                    
                }
                &.showToggle {
                    
                    transform: translateX(0%);
                    box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
                    z-index: 200;

                    &~div {
                        .toggleBtn {
                            svg {
                                color: var(--white);
                            }
                        }
                    }
                }
            } 
        }
    }

    &.sticky {
        background: var(--theme-color);
        box-shadow: 0 4px 12px #2814493b;
        transform: translateY(0);
        opacity: 0;
        animation: slideDown 0.6s ease forwards;

        & .navbar__nav--wrap-list-items {

            a {
                color: var(--white);
            }

            &:hover,
            & .active {
                &:after {
                    background: var(--white);
                }
            }

        }

        & .navbar__nav--brand {
            background: var(--white);
            border-radius: 16px;
            padding: 12px 20px;
            width: 100px;
        }

        .toggleBtn {
            &>svg {
                color: var(--white);
            }
        }
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

    .toggleBtn {
        display: none;

        @media (max-width:1030px) {
            display: block;
            z-index: 300;
        }
    }

`