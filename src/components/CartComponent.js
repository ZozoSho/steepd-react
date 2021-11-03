import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            total: "Cart is Empty"
        }
        
    }
    render() {
        return(
            <div class="col text-center customizer-tally">
                <h2>Your Tea</h2>
                {this.state.total}
            </div>
        )
    }
}
export default Cart;