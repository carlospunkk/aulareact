import { useState } from "react";

function Condicional() {

      {/*use state*/}
      const [email,setEmail]=useState()
      const [userEmail,setUserEmail]=useState()

      // métodos 

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log("email enviado" ,email)


    }
    function limparEmail(){
        
        setUserEmail('')
        console.log("email apagado com sucesso")


    }



  
 return (
    <div>
      <h2>cadastre seu email:</h2>
      <form>
        <input 
        type="email" 
        placeholder="digite seu email" 
        onChange={(e)=> setEmail(e.target.value)}> 
    </input>

        <button type="submit" onClick={enviarEmail}>enviar</button>

        {userEmail && (
            <div>
               <p>o email do usuário é :{email}</p>
               <button onClick={limparEmail}> limpar</button>
            </div>
        )}

      </form>
      
    </div>
  );
}

export default Condicional;
