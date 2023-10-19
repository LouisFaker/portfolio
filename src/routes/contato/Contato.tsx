import { useState } from 'react'
import "./Contato.css";

export default function Main() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    fuente: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario);
  };

  return (
    <main className="contenido-main">
      <div className="titulo">
        <h1>Entre en contacto conmigo</h1>
        <h2>Conpleta tus informaciones</h2>
      </div>
            <form>
              <fieldset className="grupo">

              <label htmlFor="nombre"><strong> Nombre </strong></label>
              <input type="text" name="nombre" id="nombre" required onChange={handleChange} value={formulario.nombre}/>

              <label htmlFor="apellido"><strong> Apellido </strong></label>
              <input type="text" name="apellido" id="apellido" required/>
              <label htmlFor="email"><strong> Email </strong></label>
              <input type="email" name="email" id="email" required/>
              </fieldset>

              <div className="campo">
                    <label htmlFor="¿Por dónde se enteró de mi Portafolio?"><strong className="question-box"> ¿Por dónde se enteró de mi Portafolio? </strong></label>
                    <label className="box">
                    <select id="Selecione el pais en que estara conprando la pasaje">
                        <option selected disabled value="">Seleccione</option>
                        <option>Familiares</option>
                        <option>Amigos</option>
                        <option>Redes Sociales</option>
                    </select>
                    </label>
              </div>

            </form>
            <button className="btn-primary" type="submit"><a>ENTRE EN CONTACTO CONMIGO AHORA</a></button>

      <div>
        <h3>Informações do Formulário:</h3>
        <p>Nombre: {formulario.nombre}</p>
        <p>Apellido: {formulario.apellido}</p>
        <p>Email: {formulario.email}</p>
        <p>Fuente: {formulario.fuente}</p>
      </div>
</main>
  );
}
