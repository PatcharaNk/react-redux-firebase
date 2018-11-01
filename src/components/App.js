import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import BookList from '../container/book-list';
import BookDetail from '../container/book-detail';
class App extends Component {
  constructor(props) {
    super(props)
  //   this.state = {}
  //   const config = {
  //     apiKey: "AIzaSyDdAezV3lAI82DbALtboUmzkRgSm6487xU",
  //     authDomain: "fir-project-1540458574542.firebaseapp.com",
  //     databaseURL: "https://fir-project-1540458574542.firebaseio.com",
  //     projectId: "firebase-project-1540458574542",
  //     storageBucket: "firebase-project-1540458574542.appspot.com",
  //     messagingSenderId: "639285828022"
  //   };

  //   firebase.initializeApp(config);
  //   console.log("---start---")
  //   this.getData()
  // }

  // getData() {
  //   var ref = firebase.database().ref("portfolio/about");
  //   var data
  //   ref.on('value', snapshot => {
  //     data = snapshot.val()
  //     console.log(data)
  //     this.setState(data)
  //   })
  //   return data
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <BookDetail />
          <BookList />

        </header>
      </div>
    );
  }
}

export default App;
