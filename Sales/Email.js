class Email {

    constructor(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }
    
    addEmail(newEmail) {
        this.email.add(newEmail);
    }
}
