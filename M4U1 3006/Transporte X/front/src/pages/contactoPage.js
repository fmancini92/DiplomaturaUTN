import React from "react";

const ContactoPage = (props) =>{
    return (
        <main>
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre"/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" id=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" id=""/>
                    </p>
                    <p>
                        <label for="nombre">Nombre</label>
                        <textarea name=""></textarea>
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros utilizando los siguientes
                    medios
                </p>
                <ul>
                    <li>Telefono 43242388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>

                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;