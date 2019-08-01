import React, { Component } from "react";
import Button from "../Button";
import TextField from "../TextField";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        ".",
        "+",
        "-",
        "*",
        "/",
        "D",
        "C",
        "="
      ],
      operators: ["+", "-", "*", "/", "="],
      result: 0,
      operation: "",
      operationResult: 0,
      currentOperators: []
    };
  }

  handleInput = async e => {
    const { operation, operators, currentOperators, result } = this.state;

    !isNaN(e) || e === "."
      ? this.setState({
          operation: operation + e.toString()
        })
      : this.setState({
          operation: operation + " " + e + " "
        });

    switch (e) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        this.setState({
          operation: operation + e.toString()
        });
        break;
      case "C":
        this.setState({
          operation: "",
          operationResult: 0,
          result: 0
        });
        break;
      case "D":
        this.setState({
          operation: operation.slice(0, -1)
        });
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        const operator = operation.charAt(operation.length - 1);
        if (operators.includes(operator)) {
          this.setState({
            operation
          });
        } else {
          this.setState({
            operation: operation + " " + e + " ",
            currentOperators: [...currentOperators, e]
          });
        }
        break;
      default:
        const numbers = operation
          .split(/[+\-/*]|\s/)
          .filter(char => char !== "");
        console.log(numbers);

        if (numbers.length >= 2 && currentOperators.length >= 1) {
          for (let i = 0; i <= numbers.length; i++) {
            const { result } = this.state;
            // if(currentOperators.includes('/')){
            //   const currentOperator = currentOperators[currentOperators.indexOf('')]
            // }
            const currentOperator = currentOperators.shift();
            const firstNum = Number(numbers.shift());
            const secondNum = Number(numbers.shift());

            console.log(result);

            switch (currentOperator) {
              case "+":
                await this.setState({
                  result: firstNum + secondNum || result + firstNum
                });
                break;

              case "-":
                await this.setState({
                  result: firstNum - secondNum || result - firstNum
                });
                break;

              case "*":
                await this.setState({
                  result: firstNum * secondNum || result * firstNum
                });
                break;

              default:
                await this.setState({
                  result: firstNum / secondNum || result / firstNum
                });
                break;
            }
          }
        } else if (numbers.length < 2 && currentOperators.length < 1) {
          const firstNum = Number(numbers.shift());
          this.setState({
            result: firstNum
          });
        } else if (numbers.length < 2 && currentOperators.length === 1) {
          const { result } = this.state;
          const firstNum = Number(numbers.shift());
          const currentOperator = currentOperators.shift();
          console.log(result);
          switch (currentOperator) {
            case "+":
              this.setState({
                result: result + firstNum
              });
              break;

            case "-":
              this.setState({
                result: result - firstNum
              });
              break;

            case "*":
              this.setState({
                result: result * firstNum
              });
              break;

            default:
              this.setState({
                result: result / firstNum
              });
              break;
          }
        } else {
          const firstNum = Number(numbers.shift());
          const currentOperator = currentOperators.shift();
          const { result } = this.state;
          switch (currentOperator) {
            case "+":
              this.setState({
                result: result + firstNum
              });
              break;

            case "-":
              this.setState({
                result: result - firstNum
              });
              break;

            case "*":
              this.setState({
                result: result * firstNum
              });
              break;

            default:
              this.setState({
                result: result / firstNum
              });
              break;
          }
        }
    }
  };

  renderButtons = buttons => {
    return (
      <div>
        <div className="row my-2 ">
          {buttons.slice(0, 5).map((button, index) => {
            return (
              <div key={index} className="col-2 mx-1">
                <Button value={button} handleBtn={this.handleInput} />
              </div>
            );
          })}
        </div>

        <div className="row my-2 ">
          {buttons.slice(5, 10).map((button, index) => {
            return (
              <div key={index} className="col-2 mx-1">
                <Button value={button} handleBtn={this.handleInput} />
              </div>
            );
          })}
        </div>

        <div className="row my-2">
          {buttons.slice(10, 15).map((button, index) => {
            return (
              <div key={index} className="col-2 mx-1">
                <Button value={button} handleBtn={this.handleInput} />
              </div>
            );
          })}
        </div>

        <div className="row my-2">
          <div className="col-2 mx-1 text-center"></div>
          {buttons.slice(15).map((button, index) => {
            return (
              <div key={index} className="col-2 mx-1 text-center">
                <Button value={button} handleBtn={this.handleInput} />
              </div>
            );
          })}
          <div className="col-2 mx-1 text-center"></div>
        </div>
      </div>
    );
  };

  render() {
    const { buttons } = this.state;
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-4 d-none d-lg-block"></div>
          <div className="col-12 col-lg-4 ">
            <TextField
              valueOperation={this.state.operation}
              valueResult={this.state.result}
              handleBtn={this.handleInput}
            />
          </div>

          <div className="col-12 col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-4">
            <div className="text-center">{this.renderButtons(buttons)}</div>
          </div>
          <div className="col-4 d-none d-lg-block"></div>
        </div>
      </div>
    );
  }
}

export default Main;
