import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium, {StyleRoot} from 'radium'


class App extends Component {
  render() {
    var style = {
      background: 'slateblue',
      color: 'white',
      margin: 0,
    };
    return (
      <div>
        <header className="well jumbotron" style={style}>
          <h1>Intro to Radium for React</h1>
          <p>Powerful styling capabilities without CSS!</p>
        </header>

        <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <li><Link to="/part1" id="part1">Part 1</Link></li>
            <li><Link to="/part2" id="part2">Part 2</Link></li>
            <li><Link to="/part3" id="part3">Part 3</Link></li>
          </ul>
        </nav>

        <StyleRoot>
          <main className="container">
            {this.props.children}
          </main>
        </StyleRoot>

        <footer>
          <br /><p>Site Designed and Developed by <a href="mailto:drew102@uw.edu" alt="my email">Andrew Mahoney-Fernandes</a></p>
        </footer>
      </div>
    );
  }
}

class Part1 extends React.Component {
  render() {
    var styles = {
      base: {
        color: 'white',
        borderRadius: 4,
        padding: '1.5em'
      },
      primary: {
        background: 'blue'
      },
      warning: {
        background: 'red'
      }
    };
    return (
      <div>
        <h2>Part 1</h2>
        <h4> In this section we will start off basic by adding style to the paragraphs bellow using an array of styles: </h4>
        <p style={[styles.base, styles.primary]}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est.Mauris placerat eleifend leo.</p>
        <p style={[styles.base, styles.warning]}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Quisque sit amet est et sapien ullamcorper pharetra.Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.Donec non enim in turpis pulvinar facilisis.Ut felis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      </div>
    );
  }
}
Part1 = Radium(Part1);


class Part2 extends React.Component {
  render() {
    var styles = {
      base: {
        color: 'white',
        borderRadius: 4,
        padding: '1.5em',
      },
      primary: {
        background: 'blue',
        ":hover": {
          backgroundColor: 'darkblue'
        },
        ":active": {
          backgroundColor: 'red'
        },
        ':focus': {
          backgroundColor: 'green'
        },
      },
      warning: {
        background: 'red',
        ":active": {
          backgroundColor: 'black'
        }
      },
      small: {
        width: '80px',
        height: '80px',
      },
      large: {
        width: '200px',
        height: '200px'
      }
    };
    return (
      <div>
        <h2>Part 2</h2>
        <h4> In this section we will add some in-line CSS to a button with browser states: </h4>
        <button type="button" key="one" style={[styles.base, styles.primary, styles.small]}>Click Me!</button>
        <button type="button" key="two" style={[styles.base, styles.warning, styles.large]}>Click Me!</button>
      </div>
    );
  }
}
Part2 = Radium(Part2);


class Part3 extends React.Component {
  render() {
    var style = {
      width: '100%',

      '@media (min-width: 480px)': {
        width: '50%'
      }
    };
    return (
      <div>
        <h2>Part 3</h2>
        <h4> In this section we will add media queries to a form using in-line CSS: </h4>
        <form action="#" method="post">
          <div>
            <label htmlFor="name">Text Input: </label>
            <input type="text" name="name" id="name" value="" tabIndex="1"  style={style}/>
          </div>

          <div>
            <label htmlFor="select-choice">Select Dropdown Choice: </label>
            <select name="select-choice" id="select-choice" style={style}>
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="textarea">Textarea: </label>
            <br />
            <textarea cols="40" rows="8" name="textarea" id="textarea" style={style}></textarea>
          </div>

          <div>
            <input type="submit" value="Submit"  style={style}/>
          </div>
        </form>
      </div>
    );
  }
}
Part3 = Radium(Part3);



export default App;

export {App, Part1, Part2, Part3};