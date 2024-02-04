
function OutraLista({ itens }) {
  return (
    // retorna varios itens sem uma tag pai<></> fragment
    <>
      <h3>Lista de coisas</h3>

      {
        itens.length > 0 ? ( 
        itens.map((item, index) => (
        <p key={index}>{item}</p>
      )))   :  (
                <p>lista vazia </p>
      )
    
        }
    </>
  );
}
export default OutraLista;