import React, { Component } from 'react';
import Radium from 'radium'
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div>
        <header className="well jumbotron">
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

        <main className="container">
          {this.props.children}
        </main>

        <footer>
          <br /><p>Site Designed and Developed by  <a href="mailto:drew102@uw.edu" alt="Spotify link">Andrew Mahoney-Fernandes</a></p>
        </footer>
      </div>
    );
  }
}


class Part1 extends React.Component {
  render() {
    return (
      <div id="part1">
        <h2>Part 1</h2>
        <h4> In this section we will start off basic by adding style to the paragraphs bellow: </h4>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.Donec eu libero sit amet quam egestas semper.Aenean ultricies mi vitae est.Mauris placerat eleifend leo.Quisque sit amet est et sapien ullamcorper pharetra.Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.Donec non enim in turpis pulvinar facilisis.Ut felis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      </div>
    );
  }
}


class Part2 extends React.Component {
  render() {
    var styles = {
      base: {
        background: 'blue',
        borderRadius: 4,
        color: 'white',
        padding: '1.5em'
      },
      warning: {
        background: 'red',
        borderRadius: 4,
        color: 'white',
        padding: '1.5em'
      }
    };
    return (
      <div id="part2">
        <h2>Part 2</h2>
        <h4> In this section we will add some in-line CSS to a button: </h4>
        <button type="button" style={styles.warning}>Click Me!</button>
      </div>
    );
  }
}
Part2 = Radium(Part2);


class Part3 extends React.Component {
  render() {
    return (
      <div id="part3">
        <h2>Part 3</h2>
        <h4> In this section we will......</h4>
        <form action="#" method="post">
          <div>
            <label htmlFor="name">Text Input: </label>
            <input type="text" name="name" id="name" value="" tabIndex="1" />
          </div>

          <div>
            <h4>Radio Button Choice</h4>

            <label htmlFor="radio-choice-1">Choice 1</label>
            <input type="radio" name="radio-choice-1" id="radio-choice-1" tabIndex="2" value="choice-1" />

            <label htmlFor="radio-choice-2">Choice 2</label>
            <input type="radio" name="radio-choice-2" id="radio-choice-2" tabIndex="3" value="choice-2" />
          </div>

          <div>
            <label htmlFor="select-choice">Select Dropdown Choice: </label>
            <select name="select-choice" id="select-choice">
              <option value="Choice 1">Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="textarea">Textarea: </label>
            <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
          </div>

          <div>
            <label htmlFor="checkbox">Checkbox: </label>
            <input type="checkbox" name="checkbox" id="checkbox" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

export {App, Part1, Part2, Part3};