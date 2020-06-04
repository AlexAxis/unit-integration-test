// import React from 'react';
// import Header from './component/header'
// import Headline from './component/headline';
// import './app.scss'

// /* This const is not used within our app.
//    Although we are passing it to the Headline Component
//    it is only here as an exampleof testing PropTypes */
//    const tempArr = [{
//     fName: 'Joe',
//     lName: 'Bloggs',
//     email: 'joebloggs@gmail.com',
//     age: 24,
//     onlineStatus: true
//   }];

// function App() {
//   return (
//     <div className="App">
//       <p>React Redux Unit and Integration Testing with Jest and Enzyme</p>
//       <p>https://www.youtube.com/watch?v=EgJZv9Iyj-E</p>

//       <Header />
//       <section className="main">
//         <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
//       </section>

//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

const initialState = {
  hideBtn: false
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }


  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">

        <p>React Redux Unit and Integration Testing with Jest and Enzyme</p>
        <p>https://www.youtube.com/watch?v=EgJZv9Iyj-E</p>
        <p>https://github.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme</p>

        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          {!hideBtn &&
            <SharedButton {...configButton} />
          }

          {/* {posts.length === 0 &&
            <SharedButton {...configButton} />
          } */}

          {/* <SharedButton {...configButton} /> */}



          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
