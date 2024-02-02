import Button from "./evento/Button"

 
 const Evento = ({numero}) => {

    // eventos 
    function meuevento(){ {/* criação da função meu evento */}
            console.log(`primeiro evento ativado ${numero}`)
    }

    function segundoEvento(){
        console.log('segundo evento ativado')
    }

    return (
        <>
            <p>clique para disparar um evento</p>
            <Button event={meuevento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>


           {/* <button  onClick={meuevento}> Ativar ! </button> {/* chamada da função meu evento */}
        </>
    )
}

export default Evento 

