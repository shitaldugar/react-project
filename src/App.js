import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Form from "./Components/Form";
import Content2 from './Components/Content2';
import BlogList from './Components/BlogList';
import Content3 from './Components/Content3';
import Footer from './Components/Footer';

class App extends React.Component {
  render(){
    return(
     <div className="app">
      <div class="scroll">
        <div id="box1">
        <Header />
        <Content />

        <div id="box2">
          <Form />
        </div>
        </div>
        <div id="box3">
            <Content2 />
        </div>
        <div id="box4">
            <BlogList />
        </div>
        <div id="box5">
          <Content3 />
        </div>
          <Footer />
        
          
            
      </div>
    </div>
   
   
  );
}
}

export default App;
