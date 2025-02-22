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

    .content-invite {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 0 11rem;

        @media (max-width: 1024px) {
            padding: 0 6rem;
            flex-direction: column;
        }

        @media (max-width: 768px) {
            padding: 0 2rem;
        }

        @media (max-width: 414px) {
            padding: 0 1.5rem;
            gap: 1.5rem;
        }

        .leftContent {
            h2 {
                margin-top: 2rem;
                font-size: 3rem;
                font-weight: 500;
                line-height: 1.1;
                color: var(--gray-100);

                @media (max-width: 768px) {
                    font-size: 2.5rem;
                }

                @media (max-width: 414px) {
                    font-size: 2rem;
                }
            }

            h3 {
                margin-top: 2rem;
                font-size: 1.5rem;
                font-weight: 600;
                color: var(--gray-100);

                @media (max-width: 768px) {
                    font-size: 1.3rem;
                }

                @media (max-width: 414px) {
                    font-size: 1.1rem;
                }
            }

            p {
                margin-top: 1rem;
                font-size: 1.5rem;
                font-weight: 400;
                line-height: 1.1;
                color: var(--gray-400);
                font-family: var(--font-montserrat);
                width: 52rem;

                @media (max-width: 1024px) {
                    width: 100%;
                }

                @media (max-width: 768px) {
                    font-size: 1.2rem;
                }

                @media (max-width: 414px) {
                    font-size: 1rem;
                }
            }

            .link {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--gray-800);
                border-radius: 0.5rem;
                margin-top: 1rem;
                padding: 0.5rem 1rem;
                width: 50rem;
                max-width: 100%;

                @media (max-width: 1024px) {
                    width: 100%;
                }

                i {
                    font-size: 1.5rem;
                    padding: 0.5rem;
                    background: var(--gray-500);
                    border-radius: 0.5rem;
                }

                .left {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    min-width: 0;
                    flex: 1;

                    p {
                        margin: 0;
                        font-size: 1.2rem;
                        color: var(--gray-100);
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        @media (max-width: 768px) {
                            font-size: 1rem;
                        }

                        @media (max-width: 414px) {
                            font-size: 0.9rem;
                        }
                    }
                }

                .uil-copy {
                    cursor: pointer;
                    transition: all 0.3s ease;
                    flex-shrink: 0;

                    &:hover {
                        color: var(--blue);
                        background: var(--gray-600);
                    }
                }
            }

            .cards {
                display: flex;
                flex-direction: row;
                gap: 1rem;
                padding: 1.5rem 0.5rem;
                flex-wrap: wrap;
                width: 100%;

                @media (max-width: 768px) {
                    padding: 1.5rem 2rem;
                    gap: 0.75rem;
                }

                @media (max-width: 414px) {
                    padding: 1.25rem 1.5rem;
                    gap: 0.5rem;
                }

                @media (max-width: 375px) {
                    padding: 1rem;
                }

                .card {
                    background: var(--gray-800);
                    border-radius: 0.5rem;
                    padding: 1rem;
                    flex: 1;
                    width: 12rem;
                    height: 7rem;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

                    .header {
                        display: flex;
                        align-items: left;
                        flex-shrink: 0;

                        i {
                            font-size: 1.5rem;
                            color: var(--purple);
                            margin-top: -6rem;
                            margin-left: -11rem;
                        }
                    }

                    .content {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        text-align: center;
                        margin-top: -12rem;
                        flex: 1;
                        min-height: 0;

                        p {
                            font-size: 0.875rem;
                            font-weight: 400;
                            color: var(--gray-400);
                            padding: 0;
                            margin: 0;
                            line-height: 1.5;
                            width: 100%;
                            margin-top: -2rem;
                        }

                        h2 {
                            font-size: 1.8rem;
                            font-weight: 600;
                            color: var(--gray-100);
                            margin: 0 0 0.5rem;
                            width: 100%;
                        }
                    }

                    @media (max-width: 768px) {
                        min-width: calc(33.33% - 0.75rem);
                        height: 9rem;
                        padding: 0.75rem;

                        .header i {
                            font-size: 1.25rem;
                        }

                        .content {
                            margin-top: 0.75rem;

                            h2 {
                                font-size: 1.5rem;
                                margin: 0 0 0.25rem;
                            }

                            p {
                                font-size: 0.75rem;
                            }
                        }
                    }

                    @media (max-width: 414px) {
                        min-width: calc(33.33% - 0.5rem);
                        height: 8rem;
                        padding: 0.5rem;

                        .header i {
                            font-size: 1rem;
                        }

                        .content {
                            margin-top: 0.5rem;

                            h2 {
                                font-size: 1.25rem;
                                margin: 0 0 0.25rem;
                            }

                            p {
                                font-size: 0.7rem;
                            }
                        }
                    }
                }
            }
        }

        .rightContent {
            padding: 2rem;
            border-radius: 1rem;
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            @media (max-width: 1024px) {
                width: 100%;
            }

            .cards {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                flex-wrap: wrap;
                width: 100%;

                .card {
                    display: flex;
                    background: var(--gray-800);
                    border-radius: 0.5rem;
                    padding: 1rem;
                    flex: 1;
                    width: 30rem;
                    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

                    @media (max-width: 1024px) {
                        width: 100%;
                    }

                    .left {
                        margin-top: 0.5rem;
                        margin-left: 1rem;
                        width: 10rem;

                        @media (max-width: 768px) {
                            width: 8rem;
                            margin-left: 0.5rem;
                        }

                        h2 {
                            margin-top: 1rem;
                            display: flex;
                            align-items: center;

                            @media (max-width: 414px) {
                                font-size: 1.2rem;
                                margin-top: 0.5rem;
                            }

                            span {
                                font-size: 0.8rem;
                                margin-left: 1rem;
                                color: var(--gray-300);
                                background: var(--gray-700);
                                padding: 0.4rem 0.8rem;
                                border-radius: 0.5rem;

                                @media (max-width: 414px) {
                                    font-size: 0.7rem;
                                    padding: 0.3rem 0.6rem;
                                }
                            }
                        }

                        span {
                            color: var(--gray-100);
                        }

                        p {
                            width: 12rem;

                            @media (max-width: 768px) {
                                width: 100%;
                                font-size: 0.9rem;
                            }
                        }
                    }

                    .right {
                        margin-top: -1rem;
                        margin-left: 10rem;

                        @media (max-width: 768px) {
                            margin-left: auto;
                            margin-right: 1rem;
                        }

                        img {
                            width: 6rem;
                            height: 6rem;

                            @media (max-width: 414px) {
                                width: 4rem;
                                height: 4rem;
                            }
                        }
                    }
                }
            }
        }
    }
`

export default HomeDetails;
