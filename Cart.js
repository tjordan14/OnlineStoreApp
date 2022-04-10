/* Cart class has a user to which it belongs to and a list of items 
which are in the cart */
import { User } from "./User"

class Cart {

    constructor(user, items) {
        this.user = user;
        this.items = items;
    }

    getUser() {
        return this.user;
    }

    getItems() {
        return this.items;
    }
}