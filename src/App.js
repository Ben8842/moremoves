import "./App.css";
import React, { Component } from "react";

class Square extends React.Component {
  render() {
    return (
      <button className={this.props.className} id={this.props.id}>
        {this.props.value}
      </button>
    );
  }
}

class SquareS extends React.Component {
  render() {
    return (
      <button className={this.props.className} id={this.props.id}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} id="square" />;
  }
  renderSquareSpecial(i) {
    return <SquareS value={i} className="sp" id="square" />;
  }

  render() {
    const status = "";
    const elements = [];
    const elementz = [];

    var x;
    var y;
    for (y = 0; y < 15; y++) {
      for (x = 0; x < 15; x++) {
        if (x === this.props.xvalue && y === this.props.yvalue) {
          elements.push(<span>{this.renderSquareSpecial(x)}</span>);
        } else {
          elements.push(<span>{this.renderSquare(x)}</span>);
        }
      }

      elementz.push(
        <div className="border-row">
          <span>
            {elements.map((value, index) => {
              return <span key={index}>{value}</span>;
            })}
          </span>
        </div>
      );
      for (x = 0; x < 15; x++) {
        elements.pop();
      }
      console.log(elements);
    }
    /*
    const row = (
      <span>
        {elements.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}
      </span>
    );

    const rowSpecial = (
      <span>
        {elements.map((value, index) => {
          console.log(index + "index" + this.props.xvalue);
          if (index === this.props.xvalue) {
            return (
              <span
                class="squarespecial"
                style={{ color: "red !important" }}
                key={index}
              >
                {value}
              </span>
            );
          } else {
            return <span key={index}>{value}</span>;
          }
        })}
      </span>
    );

    var y;
    for (y = 0; y < 15; y++) {
      if (y === this.props.yvalue) {
        elementz.push(<div className="border-row">{rowSpecial}</div>);
      } else {
        elementz.push(<div className="border-row">{row}</div>);
      }
    }*/

    return (
      <div class="container">
        <div className="status">{status}</div>
        <div className="board-row">
          <span>
            {elementz.map((value, index) => {
              return <span key={index}>{value}</span>;
            })}
          </span>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,

      xcoordinate: 0,
      ycoordinate: 0,
    };
  }

  reset() {
    this.setState((state) => {
      return { count: 1 };
    });
  }

  incrementCount() {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  }

  learning() {
    this.incrementCount();
  }

  incrementX() {
    this.setState({ state: this.state });
    this.setState((state) => {
      return { xcoordinate: state.xcoordinate + 1 };
    });
  }

  incrementY() {
    this.setState({ state: this.state });
    this.setState((state) => {
      return { ycoordinate: state.ycoordinate + 1 };
    });
  }

  decrementX() {
    this.setState({ state: this.state });
    this.setState((state) => {
      return { xcoordinate: state.xcoordinate - 1 };
    });
  }

  decrementY() {
    this.setState({ state: this.state });
    this.setState((state) => {
      return { ycoordinate: state.ycoordinate - 1 };
    });
  }

  upwards() {
    this.decrementY();
  }

  downwards() {
    this.incrementY();
  }

  leftwards() {
    this.decrementX();
  }

  rightwards() {
    this.incrementX();
  }

  render() {
    var { xcoordinate, ycoordinate } = this.state;

    const gridDisplay = (
      <div>
        ( {xcoordinate} , {ycoordinate} )
      </div>
    );

    return (
      <div>
        <div className="squareZ">
          <div id="griddisplay">
            {gridDisplay}
            <div>
              <button onClick={() => this.upwards()} class="button gridbutton">
                Move UP
              </button>
            </div>
            <button onClick={() => this.leftwards()} class="button gridbutton">
              Move LEFT
            </button>
            <button onClick={() => this.rightwards()} class="button gridbutton">
              Move RIGHT
            </button>
            <div>
              <button
                onClick={() => this.downwards()}
                class="button gridbutton"
              >
                Move DOWN
              </button>
            </div>
          </div>
          <Board xvalue={xcoordinate} yvalue={ycoordinate} />
        </div>
      </div>
    );
  }
}

export default App;

/*
 <div>
          <button onClick={() => this.learning()}>
            click here to count {count}
          </button>
        </div>
        <button onClick={() => this.reset()}>RESET</button>
        {flag ? flaggingTrue : flaggingFalse}
        */
