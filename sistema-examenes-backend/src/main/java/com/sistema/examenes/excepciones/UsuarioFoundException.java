package com.sistema.examenes.excepciones;

public class UsuarioFoundException extends Exception {

    public UsuarioFoundException() {
        super("El usuario con ese username no existe, intente con otro");
    }

    public UsuarioFoundException(String mensaje) {
        super(mensaje);
    }

}