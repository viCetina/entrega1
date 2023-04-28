import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Shop</button>
      </React.Fragment>
    );
  }
}

export default Cart;