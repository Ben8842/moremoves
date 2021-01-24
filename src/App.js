import "./App.css";
import React, { Component } from "react";

class Square extends React.Component {
  render() {
    return <button class="button gridbutton">{this.props.value}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Hello World";
    const elements = [];
    const elementz = [];
    var x;
    for (x = 0; x < 15; x++) {
      elements.push(<span>{this.renderSquare(x)}</span>);
    }

    const row = (
      <span>
        {elements.map((value, index) => {
          return <span key={index}>{value}</span>;
        })}
      </span>
    );

    var y;
    for (y = 0; y < 15; y++) {
      elementz.push(<div>{row}</div>);
    }

    return (
      <div class="button gridbutton">
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
    this.setState((state) => {
      return { xcoordinate: state.xcoordinate + 1 };
    });
  }

  incrementY() {
    this.setState((state) => {
      return { ycoordinate: state.ycoordinate + 1 };
    });
  }

  decrementX() {
    this.setState((state) => {
      return { xcoordinate: state.xcoordinate - 1 };
    });
  }

  decrementY() {
    this.setState((state) => {
      return { ycoordinate: state.ycoordinate - 1 };
    });
  }

  upwards() {
    this.incrementY();
  }

  downwards() {
    this.decrementY();
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
      <div id="griddisplay">
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
            <button onClick={() => this.downwards()} class="button gridbutton">
              Move DOWN
            </button>
          </div>
        </div>
        <Board />
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
