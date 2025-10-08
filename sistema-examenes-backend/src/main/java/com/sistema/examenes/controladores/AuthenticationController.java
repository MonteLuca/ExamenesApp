package com.sistema.examenes.controladores;

import com.sistema.examenes.configuraciones.JWTUtil;
import com.sistema.examenes.entidades.JWTRequest;
import com.sistema.examenes.entidades.JWTResponse;
import com.sistema.examenes.entidades.Usuario;
import com.sistema.examenes.excepciones.UsuarioNotFoundException;
import com.sistema.examenes.servicios.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generarToken(@RequestBody JWTRequest jwtRequest) throws Exception {

        try {

            autenticar(jwtRequest.getUsername(), jwtRequest.getPassword());

        } catch (UsuarioNotFoundException e) {

            e.printStackTrace();

            throw new Exception("USUARIO NO ENCONTRADO");

        }

        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());

        String token = this.jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JWTResponse(token));

    }

    private void autenticar(String username, String password) throws Exception {

        try {

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));

        } catch (DisabledException disabledException) {

            throw new Exception("USUARIO DESHABILITADO " + disabledException.getMessage());

        } catch (BadCredentialsException badCredentialsException) {

            throw new Exception("CREDENCIALES INVALIDAD " + badCredentialsException.getMessage());

        }

    }

    @GetMapping("/actual-usuario")
    public Usuario obtenerUsuarioactual(Principal principal) {
        return (Usuario) this.userDetailsService.loadUserByUsername(principal.getName());
    }

}