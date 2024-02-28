

function SeuNome({ setnome }) {
  return (
    <>
      <p>Digite seu nome:</p>
      <input
        type="Text"
        placeholder="qual é o seu nome"
        onChange={(e) => setnome(e.target.value)}
      ></input>
    </>
  )
}

export default SeuNome