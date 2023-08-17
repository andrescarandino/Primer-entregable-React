import { useState } from "react";
const Form = ({onAddMoto}) => {

    const [marca,setMarca]=useState("");
    const [modelo,setModelo]=useState("");
    const [anio, setAnio]= useState("");
    const [cilindrada, setCilindrada]= useState("");

    function validarInputs(marca, modelo) {
        let validacion = true;
        if (marca.length < 3 || marca.trim() !== marca || marca === ""){
            validacion = false;
        }else if(modelo.length < 6 || modelo === ""){
            validacion = false;
        }
        return validacion;
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validarInputs(marca, modelo)){
            onAddMoto({marca, modelo, anio, cilindrada});
            setMarca("");
            setCilindrada("");
            setAnio("");
            setModelo("");
        }else{
            alert("Por favor chequea que la información sea correcta");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese la marca de la moto" value={marca} onChange={(e)=>setMarca(e.target.value)} />
            <input type="text" placeholder="Ingrese el modelo de la moto" value={modelo} onChange={(e)=>setModelo(e.target.value)} />
            <input type="text" placeholder="Ingrese el cilindrada de la moto" value={cilindrada} onChange={(e)=>setCilindrada(e.target.value)} />
            <input type="text" placeholder="Ingrese el año de la moto" value={anio} onChange={(e)=>setAnio(e.target.value)} />
            <button type="submit">Agregar Moto</button>        
        </form>
    )

}
export default Form