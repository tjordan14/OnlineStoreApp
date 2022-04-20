class Login {

    constructor(username,password) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getPassword() { 
        return this.password;
    }

    validateLogin() {
        /* 
            1. Check if the given username is in the database
                1a) Show username is incorrect
                1b) Maybe suggest creating an account
            2. Check if the password is correct given the username is correct
                2a) Show password is incorrect
            3. Successful login
        
        */
       return 1;
    }

    createNewAccount() {
        /*
            1. Add new username to the database
            2. Add new password to the database
            3. Maybe add a new email and phonenumber to the database
            
        */
    }

}
