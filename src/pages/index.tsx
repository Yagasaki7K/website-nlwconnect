/* eslint-disable @next/next/no-img-element */
import HomeDetails from '@/components/HomeDetails'
import React from 'react'

const Home = () => {
    return (
        <HomeDetails>
            <div className="header">
                <img src="/assets/logo.svg" alt="logo" />

                <h1>CodeCraft <br /> <span>Summit 2025</span></h1>
            </div>

            <div className="content">
                <div className="leftContent">
                    <div className="header">
                        <h2>Sobre o evento</h2>
                        <p className="live"> <img src="/assets/radio.svg" alt="live" />AO VIVO</p>
                    </div>

                    <p>
                        Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.
                    </p>

                    <p>Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito </p>
                </div>
                <div className="rightContent">
                    <h2>Inscrição</h2>
                    <div className="input error">
                        <span><i className="uil uil-user error" /></span>
                        <input type="text" placeholder="Nome completo" />
                    </div>

                    <div className="input error">
                        <span><i className="uil uil-envelope error" /></span>
                        <input type="email" placeholder="Email" />
                    </div>
                    <button onClick={() => window.location.href = '/invite'}>Confirmar <i className="uil uil-arrow-right" /></button>
                </div>
            </div>
        </HomeDetails>
    )
}

export default Home
