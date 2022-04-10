import { User } from "./User"
import { Cart } from "./Cart"
 
class Sale {
    
    constructor(user, startDate, endDate, cart, totalPrice) {
        this.user = user;
        this.startDate = startDate;
        this.endDate = endDate;
        this.cart = cart;
        this.totalPrice = totalPrice;
    }

    getUser() {
        return this.user;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getCart() {
        return this.cart;
    }

    getTotalPrice() {
        return this.totalPrice;
    }
}
