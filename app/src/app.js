import ReactDOM from 'react-dom';
import React from 'react';
import { Component } from 'react';
import Nav from './components/nav';

export class App extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <section>
          <article className="flex-container">
            <div className="flex-item">
              <img src="../resources/photo.jpg" alt="my photo" />
            </div>
          </article>
          <footer className="flex-container">
            <div className="pull-right">
              <a href="https://github.com/Lulubul" alt="github" >
                <img src="../resources/git.png" alt="git link" height="62" width="62" />
              </a>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);