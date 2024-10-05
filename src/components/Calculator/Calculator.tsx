import { Space } from "antd";
import React, { useState } from "react";

export const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const inputNum = (e: any) => {
    let input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const porcentagem = (e: any) => {
    setNum(num / 100);
  };

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const operatorHandler = (e: any) => {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  };

  return (
    <div className="calculator">
      <Space>
        <div className="wrapper">
          <h1 className="resultado">{num}</h1>
          <button className="grey-light" onClick={clear}>
            C
          </button>
          <button className="grey-light" onClick={changeSign}>
            +/-
          </button>
          <button className="grey-light" onClick={porcentagem}>
            %
          </button>
          <button className="orange" onClick={operatorHandler} value={"/"}>
            ÷
          </button>
          <button className="grey-number" onClick={inputNum} value={7}>
            7
          </button>
          <button className="grey-number" onClick={inputNum} value={8}>
            8
          </button>
          <button className="grey-number" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value={"X"}>
            x
          </button>
          <button className="grey-number" onClick={inputNum} value={4}>
            4
          </button>
          <button className="grey-number" onClick={inputNum} value={5}>
            5
          </button>
          <button className="grey-number" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value={"-"}>
            -
          </button>
          <button className="grey-number" onClick={inputNum} value={1}>
            1
          </button>
          <button className="grey-number" onClick={inputNum} value={2}>
            2
          </button>
          <button className="grey-number" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value={"+"}>
            +
          </button>
          <button className="grey-zero" onClick={inputNum} value={0}>
            0
          </button>
          <button className="grey-number" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
      </Space>
    </div>
  );
};
