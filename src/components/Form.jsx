import { useForm } from "react-hook-form";
import { useState } from "react";
import "../styles/Form.css";

function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        reset();
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <section className="form-container">
            <h2><span>¿Tengo una pregunta?</span><span>Contáctenos</span></h2>
            {formSubmitted && (
                <div className="form-submitted">
                    <p>¡Gracias por contactarnos!</p>
                    <p>En breve nos comunicaremos con usted.</p>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <div className="input-container">
                        <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
                        <input 
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su nombre completo"
                                },
                                minLength: {
                                    value: 3,
                                    message: "El nombre debe tener al menos 3 caracteres"
                                }
                            })}
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Nombre Completo*"
                        />
                    </div>
                    {errors.name && <p className="error">{errors.name.message}</p>}
                    <div className="input-container">
                        <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                        <input 
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su correo"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: "Por favor, ingrese un correo válido"
                                }
                            })}
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Correo*"
                        />
                    </div>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <div className="input-container">
                        <label htmlFor="phone"><i className="fa-solid fa-mobile"></i></label>
                        <input 
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese su teléfono"
                                },
                                pattern: {
                                    value: /^(\+?(\d{1,3}))?[\s.-]?(\(?\d{2,4}\)?[\s.-]?)?\d{4,8}[\s.-]?\d{4}?$/,
                                    message: "Por favor, ingrese un teléfono válido"
                                }
                            })}
                            type="tel" 
                            id="phone"
                            name="phone"
                            placeholder="Teléfono* (Con código de país)"
                        />
                    </div>
                    {errors.phone && <p className="error">{errors.phone.message}</p>}
                    <div className="input-container">
                        <label htmlFor="message"><i className="fa-solid fa-message"></i></label>
                        <textarea 
                            {...register("message", {
                                required: {
                                    value: true,
                                    message: "Por favor, ingrese un mensaje"
                                },
                                minLength: {
                                    value: 10,
                                    message: "El mensaje debe tener al menos 10 caracteres"
                                }
                            })}
                            id="message"
                            name="message"
                            placeholder="Mensaje"
                        />
                    </div>
                    {errors.message && <p className="error">{errors.message.message}</p>}
                    <input type="submit" value="Enviar" />
                </fieldset>
            </form>
        </section>
    );
}

export default Form;
