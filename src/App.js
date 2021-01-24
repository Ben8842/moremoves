import "./App.css";
import React, { Component } from "react";

function hellofunction() {
  console.log("hello");
}

function goodbyefunction() {
  console.log("good bye");
}

function Morebuttons(props) {
  const elements = [];
  var y = props.name * 2;
  var x;
  for (x = 0; x < y; x++) {
    elements.push(
      <span>
        <button>boom {props.name}</button>
      </span>
    );
  }
  const booming = (
    <span>
      {elements.map((value, index) => {
        return <span key={index}>{value}</span>;
      })}
    </span>
  );

  return booming;
}

function Createbuttons(props) {
  const elements = [];
  var y = props.name;
  console.log(y);
  var x;
  for (x = 0; x < props.name; x++) {
    elements.push(
      <span>
        <button onClick={() => hellofunction()}>HELLO </button>

        <button onClick={() => goodbyefunction()}>GoodBye </button>
      </span>
    );
  }

  console.log({ elements });
  const boating = (
    <span>
      {elements.map((value, index) => {
        return <span key={index}>{value}</span>;
      })}
    </span>
  );

  return boating;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      count: 1,
      arry: [5, 6, 7],
      xcoordinate: 0,
      ycoordinate: 0,
    };
  }

  flip() {
    this.setState({ flag: false });
  }
  flipO() {
    this.setState({ flag: true });
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
    var { flag, count, arry, xcoordinate, ycoordinate } = this.state;

    const training = (
      <div>
        {flag} {count} {arry}
      </div>
    );

    const flaggingTrue = (
      <div>
        <button onClick={() => this.flip()}>Flag Flip is true</button>
      </div>
    );

    const flaggingFalse = (
      <div>
        <button onClick={() => this.flipO()}>Flag Flip is false</button>
      </div>
    );

    const gridDisplay = (
      <div>
        ( {xcoordinate} , {ycoordinate} )
      </div>
    );

    return (
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
