import styled from "styled-components";

const HomeDetails = styled.div`
    width: 100%;
    height: 100vh;
    background: url('/background.png');
    background-size: cover;
    background-position: center;

    h1, h2, h3, h4 {
        font-family: var(--font-oxanium);
    }

    p, span, b {
        font-family: var(--font-montserrat);
    }

    .header {
        display: flex;
        padding: 6rem 11rem;
        flex-direction: column;

        @media (max-width: 1024px) {
            padding: 4rem 6rem;
        }

        @media (max-width: 768px) {
            padding: 3rem 2rem;
        }

        @media (max-width: 414px) {
            padding: 2rem 1.5rem;
        }

        @media (max-width: 375px) {
            padding: 2rem 1rem;
        }

        img {
            width: 7rem;

            @media (max-width: 768px) {
                width: 5rem;
            }

            @media (max-width: 414px) {
                width: 4rem;
            }
        }

        h1 {
            margin-top: 2rem;
            font-size: 6rem;
            font-weight: 500;
            line-height: 1.1;
            color: var(--blue);

            @media (max-width: 1024px) {
                font-size: 4.5rem;
            }

            @media (max-width: 768px) {
                font-size: 3.5rem;
            }

            @media (max-width: 414px) {
                font-size: 2.8rem;
            }

            @media (max-width: 375px) {
                font-size: 2.5rem;
            }

            span {
                color: var(--gray-100);
            }
        }
    }

    .content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 0 2rem;

        @media (max-width: 1024px) {
            flex-direction: column;
        }

        @media (max-width: 414px) {
            padding: 0 1.5rem;
            gap: 1.5rem;
        }

        @media (max-width: 375px) {
            padding: 0 1rem;
            gap: 1rem;
        }

        .leftContent {
            background: var(--gray-700);
            width: 53%;
            border-radius: 1rem;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

            @media (max-width: 1024px) {
                width: 100%;
            }

            .header {
                display: flex;
                padding: 1.5rem 3rem;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;

                @media (max-width: 768px) {
                    padding: 1.5rem 2rem;
                }

                @media (max-width: 414px) {
                    padding: 1.25rem 1.5rem;
                }

                @media (max-width: 375px) {
                    padding: 1rem;
                }

                .live {
                    color: var(--purple);
                    font-weight: 600;
                }
            }

            p {
                display: flex;
                align-items: center;
                padding: 1.5rem 3rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 2rem;
                color: var(--gray-300);

                @media (max-width: 768px) {
                    padding: 1.5rem 2rem;
                }

                @media (max-width: 414px) {
                    padding: 1.25rem 1.5rem;
                    font-size: 0.9rem;
                    line-height: 1.8rem;
                }

                @media (max-width: 375px) {
                    padding: 1rem;
                    font-size: 0.85rem;
                    line-height: 1.6rem;
                }

                img {
                    width: 1.5rem;
                    margin-right: 0.5rem;
                }
            }
        }

        .rightContent {
            background: var(--gray-700);
            border-radius: 1rem;
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 2.6rem 3rem;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

            @media (max-width: 1024px) {
                width: 100%;
                max-width: 500px;
            }

            @media (max-width: 768px) {
                padding: 2rem;
            }

            @media (max-width: 414px) {
                padding: 1.5rem;
                gap: 0.8rem;
            }

            @media (max-width: 375px) {
                padding: 1.25rem;
                gap: 0.7rem;
            }

            h2 {
                font-size: 1.5rem;
                font-weight: 600;

                @media (max-width: 414px) {
                    font-size: 1.3rem;
                }
            }

            .input {
                display: flex;
                align-items: center;
                background: var(--gray-800);
                border-radius: 0.5rem;

                span {
                    padding: 0.65rem 1rem;
                    margin-right: 0.5rem;

                    .error {
                        color: var(--danger);
                        border: none;
                    }

                    i {
                        font-size: 1.2rem;
                    }
                }

                input {
                    width: 100%;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 2rem;
                    color: var(--gray-300);
                    background: transparent;
                    border: none;
                    padding: 0.65rem 0rem;
                    font-family: var(--font-montserrat);
                    outline: none;

                    &::placeholder {
                        color: var(--gray-400);
                    }

                    @media (max-width: 414px) {
                        font-size: 0.9rem;
                        line-height: 1.8rem;
                    }
                }
            }

            .error {
                border: 1px solid var(--danger);
            }

            button {
                background: var(--gray-500);
                border: none;
                border-radius: 0.5rem;
                padding: 0.5rem 2rem;
                color: var(--blue);
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 0.5rem;
                margin-top: 1rem;
                font-size: 1.2rem;
                font-family: var(--font-montserrat);
                transition: all 0.3s ease;

                @media (max-width: 768px) {
                    font-size: 1rem;
                    padding: 0.5rem 1.5rem;
                }

                @media (max-width: 414px) {
                    font-size: 0.9rem;
                    padding: 0.5rem 1.25rem;
                    margin-top: 0.8rem;
                }

                &:hover {
                    background: var(--blue);
                    color: var(--gray-100);
                }

                i {
                    font-size: 2.5rem;

                    @media (max-width: 768px) {
                        font-size: 2rem;
                    }

                    @media (max-width: 414px) {
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }
`

export default HomeDetails;
