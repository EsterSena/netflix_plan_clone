import React from 'react'
import '../Styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Main() {
    return (
        <>
            <body>

                <div className='main'>
                    <header>
                        <h1>Conheça nossos planos</h1>
                    </header>

                    <div className='body'>
                        <div className='card' id="card-basico">
                            <header id='basico'>Básico</header>
                            <h2>R$ 18,90</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr></hr>
                            <div id="vantagens">
                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />Lorem Ipsum is simply dummy tex
                            </div>
                            <input type="submit" value={'ASSINAR'}></input>
                        </div>

                        <div className='card' id="card-padrao">
                            <header id='padrao'>Padrão</header>
                            <h2 className='valor'>R$ 29,00</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr></hr>
                            <div id="vantagens">
                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex
                            </div>
                            <input type="submit" value={'ASSINAR'}></input>
                        </div>

                        <div className='card premium' >
                            <header className="premium_header">Premium</header>
                            <h2 className='valor'>R$ 59,00</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr></hr>
                            <div id="vantagens">
                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex
                            </div>
                            <input type="submit" value={'ASSINAR'}></input>
                        </div>

                        <div className='card premium' >
                            <header className="premium_header">Premium</header>
                            <h2 className='valor'>R$ 59,00</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr></hr>
                            <div id="vantagens">
                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex

                                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> Lorem Ipsum is simply dummy tex
                            </div>
                            <input type="submit" value={'ASSINAR'}></input>
                        </div>
                    </div>
                </div>
            </body>

        </>
    )
}

export default Main