import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentsForm }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const nameChange = (e) => {
    setObjectState((prevState) => ({ ...prevState, name: e.target.value }));
  };

  const priceChange = (e) => {
    setObjectState((prevState) => ({ ...prevState, price: e.target.value }));
  };

  const todayChange = (e) => {
    setObjectState((prevState) => ({ ...prevState, today: e.target.value }));
  };

  const buttonSubmitHandler = (e) => {
    e.preventDefault();

    getPaymentsForm(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  console.log(objectState);

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input type="text" value={objectState.name} onChange={nameChange} />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={objectState.price}
              onChange={priceChange}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={objectState.today}
              onChange={todayChange}
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
