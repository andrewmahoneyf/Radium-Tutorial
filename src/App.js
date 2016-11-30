import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Intro to Radium for React</h1>
          <p>Powerful styling capabilities without CSS!</p>
          <Navigation />
        </header>

        <main>
          <Part1 />
          <Part2 />
          <Part3 />
        </main>

        <footer>
          <p>Site Designed and Developed by  <a href="mailto:drew102@uw.edu" alt="Spotify link">Andrew Mahoney-Fernandes</a></p>
        </footer>
      </div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <a href="#part1"> Part 1 </a>
        <a href="#part2"> Part 2 </a>
        <a href="#part3"> Part 3 </a>
      </div>
    );
  }
}

class Part1 extends React.Component {
  render() {
    return (
      <div id="part1">
        <h2>Part 1</h2>
        <h4> In this section we will start off basic by adding style to the paragraph bellow:</h4>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
      </div>
    );
  }
}

class Part2 extends React.Component {
  render() {
    return (
      <div id="part2">
        <h2>Part 2</h2>
        <h4> In this section we will add some in-line CSS to a button:</h4>
        <button type="button">Click Me!</button>
      </div>
    );
  }
}

class Part3 extends React.Component {
  render() {
    return (
      <div id="part3">
        <h2>Part 3</h2>
        <h4> In this section we will.....</h4>
      </div>
    );
  }
}

export default App;
