package com.sistema.examenes.excepciones;

public class UsuarioNotFoundException extends Exception {

    public UsuarioNotFoundException() {
        super("El usuario con ese username no existe, intente con otro");
    }

    public UsuarioNotFoundException(String mensaje) {
        super(mensaje);
    }

}