import { Address } from "./Address";
import { Email } from "./Email";
import { PhoneNumber } from "./PhoneNumber";

class User {

    constructor(lastName,firstName,address,email,phoneNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getLast() {
        return this.lastName;
    }

    getFirst() {
        return this.firstName;
    }

    getAddress() {
        return this.address;
    }

    getEmail() {
        return this.email;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

}
