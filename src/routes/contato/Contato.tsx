import "./Contato.css";

export default function Main() {
  return (
    <main className="contenido-main">
      <div className="titulo">
        <h1>Hable con nosotros</h1>
        <h2>Conpleta tus informaciones</h2>
      </div>
            <form>
              <fieldset className="grupo">

              <label htmlFor="nombre"><strong> Nome </strong></label>
              <input type="text" name="nombre" id="nombre" required/>

              <label htmlFor="apellido"><strong> Sobrenome </strong></label>
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
            <button className="btn-primary" type="submit"><a>HABLE CON NOSOTROS AHORA</a></button>
</main>
  );
}
