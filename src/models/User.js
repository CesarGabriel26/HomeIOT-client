// src/models/User.js

export default class User {
    constructor({ username, email, password, pfp }) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.pfp = pfp;
    }

    // Método para validar os dados do usuário
    validate() {
        if (!this.username || !this.password || !this.email) {
            throw new Error('All fields are required');
        }
        // Adicione outras validações conforme necessário
    }

    // Método para converter os dados do usuário em um formato JSON
    toJSON() {
        return {
            username: this.username,
            password: this.password,
            email: this.email,
            pfp: this.pfp
        };
    }
}
