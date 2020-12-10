import React, { useState } from 'react'
import Faker from 'faker'
Faker.locale = "es_MX"
export default function CalculationForm(props) {
    const [numero, setNumero] = useState(5)
    const [alumno, setAlumno] = useState({
        documento: Faker.random.uuid(),
        nombres: Faker.name.firstName(),
        apellidos: Faker.name.lastName(),
        telefono_celular: Faker.phone.phoneNumber(),
        tipo_documento: Faker.random.arrayElement(["CC", "TI", "PP"]),
        genero: Faker.random.arrayElement(["hombre", "mujer"])
    })

    const actualizarInformacionEstudiante = () => {
        fetch(`https://api-fake-c5-1-h32cioae7.vercel.app/actores/${Faker.random.arrayElement([1,2,3,4,5,6])}`)
        .then(respuesta => respuesta.json())
        .then(alumno => setAlumno(alumno))
    }

    console.log("Entro en el formulario de IMC")
    return (
        <article className="col">
            <p>Numero : {numero}</p>
            <button className="btn btn-danger" onClick={() => setNumero(numero + 10)}>Incrementar Número</button>
            <form className="form">
                <div className="mb-3">
                    <label htmlFor="peso" className="col-sm-2 col-form-label">Peso (kilos)</label>
                    <input type="number" className="form-control" id="peso" name="peso" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="altura" className="col-sm-2 col-form-label">Altura (cm)</label>
                    <input type="number" className="form-control" id="altura" name="altura" required />
                </div>
            </form>
            
            <div>
                <button className="btn btn-primary" onClick={actualizarInformacionEstudiante}>Actualizar estudiante</button>

                <p>Nombre: {alumno.nombres}</p>
                <p>Apellidos: {alumno.apellidos}</p>
                <p>Documento: {alumno.documento}</p>


            </div>
        
        </article>
    )
}
