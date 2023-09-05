import React from 'react'
import '../Styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Main(props) {
    const planos = props.planos
    console.log(planos)

    const usePlanos = planos.map((plano, index) => {
        return (
            <>
                <div className='card' id="card-padrao" >
                    <header id='padrao'>{plano.nome}</header>
                    <h2 className='valor'>R$ {plano.valor}</h2>
                    <p>{plano.texto}</p>
                    <hr></hr>
                    <div id="vantagens">
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> {plano.icontext}

                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />{plano.icontext}

                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} /> {plano.icontext}
                    </div>
                    <input type="submit" value={'ASSINAR'}></input>
                </div>
            </>
        );
    });

    return (
        <>
            <body>

                <div className='main'>
                    <header>
                        <h1>Conheça nossos planos</h1>
                    </header>
                    <div className='body'>
                        {usePlanos}
                    </div>
                </div>
            </body>

        </>
    )
}

export default Main