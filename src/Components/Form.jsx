import React from 'react'
import { useState } from 'react'
import './form.css'
import Card from './Card'

const Form = () => {
    const [estudiante, setEstudiante] = useState({
        nombre: '',
        apellido: '',
        zodiaco:'',
    }) 

    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    
    const handleSubmit = () => {
        if(estudiante.nombre.length > 3 && estudiante.apellido.length > 6) {
            setEnviado(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    return <div className='formulario'>
    <h3>Completa los siguientes datos</h3>
    <label>Tu nombre</label>
    <input type="text" onChange={(event) => setEstudiante({...Estudiante, nombre: event.target.value})}/>
    <label>Tu Apellido</label>
    <input type="text" onChange={(event) => setEstudiante({...Estudiante, apellido: event.target.value})}/>
    <label>¿Cual es tu signo?</label>
    <input type="text" onChange={(event) => setEstudiante({...Estudiante, zodiaco: event.target.value})}/>
    <button onClick={handleSubmit}>Enviar</button>
    {enviado && <Card/>}
    {error && <h3 style={{color: 'red'}}>Por favor llene los campos correctamente</h3>}
    </div>

}


export default Form