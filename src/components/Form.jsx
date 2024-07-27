import "../styles/Form.css";

function Form() {
    return (
        <section className="form-container">
            <h2><span>¿Tengo una pregunta?</span><span>Contáctenos</span></h2>
            <form action="/contact-response" method="post">
                <fieldset>
                    <div className="input-container">
                        <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
                        <input type="text" id="name" name="name" required placeholder="Nombre Completo*" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                        <input type="email" id="email" name="email" required placeholder="Correo*" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone"><i className="fa-solid fa-mobile"></i></label>
                        <input type="tel" id="phone" name="phone" placeholder="Teléfono*" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="message"><i class="fa-solid fa-message"></i></label>
                        <textarea id="message" name="message" required placeholder="Mensaje"></textarea>
                    </div>
                    <input type="submit" value="Enviar"></input>
                </fieldset>
            </form>
        </section>
    );
}

export default Form;