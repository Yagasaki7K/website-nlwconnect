/* eslint-disable @next/next/no-img-element */
import HomeDetails from '@/components/HomeDetails'
import React from 'react'

const Invite = () => {
    return (
        <HomeDetails>
            <div className="header">
                <img src="/assets/logo.svg" alt="logo" />
            </div>

            <div className="content-invite">
                <div className="leftContent">
                    <h2><span>Inscrição Confirmada</span></h2>
                    <p>Para entrar no evento, acesse o link enviado para seu e-mail.</p>

                    <h3>Indique e Ganhe</h3>
                    <p>Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:</p>

                    <div className="link">
                        <div className="left">
                            <i className="uil uil-link" />
                            <p>devstage.com/codecraft-summit-2025/1289</p>
                        </div>

                        <i className="uil uil-copy" />
                    </div>

                    <div className="cards">
                        <div className="card">
                            <div className="header">
                                <i className="uil uil-mouse-alt" />
                            </div>
                            <div className="content">
                                <h2>942</h2>
                                <p>Acessos ao link</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="header">
                                <i className="uil uil-check-circle" />
                            </div>
                            <div className="content">
                                <h2>875</h2>
                                <p>Inscrições feitas</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="header">
                                <i className="uil uil-award" />
                            </div>
                            <div className="content">
                                <h2>3º</h2>
                                <p>Posição no ranking</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                    <h2>Ranking de Indicações</h2>
                    <div className="cards">

                        <div className="card">
                            <div className="left">
                                <p><span>1</span>º | Anderson Marlon</p>
                                <h2>1.128 <span>Você</span></h2>
                            </div>
                            <div className="right">
                                <img src="/assets/medal-gold.svg" alt="avatar" />
                            </div>
                        </div>

                        <div className="card">
                            <div className="left">
                                <p><span>2</span>º | Melissa Loures</p>
                                <h2>928</h2>
                            </div>
                            <div className="right">
                                <img src="/assets/medal-silver.svg" alt="avatar" />
                            </div>
                        </div>

                        <div className="card">
                            <div className="left">
                                <p><span>3</span>º | Rodrigo Gonçalves</p>
                                <h2>875</h2>
                            </div>
                            <div className="right">
                                <img src="/assets/medal-cooper.svg" alt="avatar" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </HomeDetails>
    )
}

export default Invite
