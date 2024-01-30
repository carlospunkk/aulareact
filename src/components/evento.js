 const Evento = ({numero}) => {

    // eventos 
    function meuevento(){ {/* criação da função meu evento */}
            console.log(`fui ativado ${numero}`)
    }

    return (
        <>
            <p>clique para disparar um evento</p>
            <button onClick={meuevento}> Ativar ! </button> {/* chamada da função meu evento */}
        </>
    )
}

export default Evento 

