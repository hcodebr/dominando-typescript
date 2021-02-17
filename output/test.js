"use strict";
class MeuUsuario {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando email para: ${usuario.email}`);
        return true;
    }
}
//# sourceMappingURL=test.js.map