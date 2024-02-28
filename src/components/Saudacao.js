function Saudacao({ nome }) {

    function gerarSaudacao(algumaSaudacao){
        return `ola, ${algumaSaudacao} , tudo bem?`
    }

  return (
    <>
      {nome && 
      <p>{gerarSaudacao(nome)}</p>
      }
    </>
  );
}

export default Saudacao;
