import "./Contato.css";

export default function Main() {
  return (
    <main className="content-main">
            <h1>Hable con nosotros</h1>
            <h2>Conpleta tus informaciones</h2>
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
                    <label htmlFor="¿Por dónde se enteró de mi Portafolio?"><strong> ¿Por dónde se enteró de mi Portafolio? </strong></label>
                    <label>
                    <input type="radio" name="elección" value="Redes Sociales"/>Amigos
                        <input type="radio" name="elección" value="Amigos"/>Familiares
                        <input type="radio" name="elección" value="Familiares"/>Redes Sociales
                    </label>
              </div>

            </form>
            <button className="btn-primary" type="submit"><a>HABLE CON NOSOTROS AHORA</a></button>
</main>
  );
}
