import { useState } from "react"

function Form(){

    // método
    function meucadastro(event){
        event.preventDefault()
        console.log(nome)
        console.log('cadastrado com sucesso')
        console.log(senha)
      
    }
    {/*use state*/}
    const [nome,setnome]= useState()
    const [senha,setsenha]= useState()


    return(
        <>
            <h1>cadastro</h1>

            <form onSubmit={meucadastro}>

            <div>
                <label htmlFor="nome">Nome:</label>
                <input 
                id="nome" 
                name="nome" 
                type="text" 
                placeholder="digite seu nome"
                onChange={(e) => setnome(e.target.value)}
                >
                

                </input>
            </div>

            <div>
                <label htmlFor="senha">Senha:</label>
                <input   
                id="senha" 
                name="senha" 
                type="password" 
                placeholder="digite sua senha"
                onChange={(e)=> setsenha(e.target.value)}
                >
                    
                </input>
            </div>

            <div>
                <input type="submit" value="cadastrar"></input>
            </div>

            </form>
        </>

    )
}
export default Form