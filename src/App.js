import React from "react";
import 'aos/dist/aos.css';
import Intro from "./components/intro";
import Blogintro from "./components/blogintro";
import Blogentries from "./components/blogentries"
import Footer from "./components/footer"

class App extends React.Component {

  render() {
    return (
      <div>
      <Intro/>
      <Blogintro/>
      <Blogentries/>
      <Footer/> 
      </div>
    )
  }
};

export default App;