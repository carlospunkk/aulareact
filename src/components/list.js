import Item from "./item"


function Lista(){


return (

    <>
        <h1> minha lista </h1>
        <ul>
            <Item marca="ferrari" lancamento={1999}/>
            <Item marca="fiat" lancamento={2000}/>
            <Item />
        </ul>
    </>

)
}
export default Lista