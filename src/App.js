import React from 'react';
import Header from './component/header'
import Headline from './component/headline';
import './app.scss'

function App() {
  return (
    <div className="App">
      <p>React Redux Unit and Integration Testing with Jest and Enzyme</p>
      <p>https://www.youtube.com/watch?v=EgJZv9Iyj-E</p>

      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
      </section>

    </div>
  );
}

export default App;
