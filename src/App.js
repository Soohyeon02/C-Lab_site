import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Notice from './components/Notice/Notice';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
    <div className="App">
        <Header></Header>
        <Section></Section>
        <Notice></Notice>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;
