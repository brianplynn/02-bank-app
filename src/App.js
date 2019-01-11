import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import store from "./store";
import { setDollars } from "./actions";
import "./App.css";

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={dispatchBtn}>WITHDRAW $10,000</button>
          <button data-amount="5000" onClick={dispatchBtn}>WITHDRAW $5,000</button>
        </section>

        <p data-amount={totalAmount} 
        className="App__giveaway" 
        onClick={dispatchBtn}>Give away all your cash to charity</p>
      </div>
    );
  }
}

const dispatchBtn = (e) => {
  const amount = e.target.dataset.amount;
  store.dispatch(setDollars(amount)); 
}

export default App;
