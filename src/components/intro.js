import React from "react";
import Logo from "../images/4montlogo.png";

class Intro extends React.Component {
    constructor(){
        super()
        this.state = {
            isScrolledForFade: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", () => {
            const isTop = window.scrollY < 100; 
            if (isTop !== true){
                this.setState({isScrolledForFade: true})
            } else {
                this.setState({isScrolledForFade: false})
            }
        })
    }
    
    render() {

        return (
            <div className={this.state.isScrolledForFade ? "fade" : "fade-back"}>
                <div className="test">
                <img className="main-logo" alt="Companies main logo" src={Logo}>
                </img>
                <div className="intro">
                    WELCOME TO OUR <span className="intro-black-background"> BLOG </span>
                </div>
                <div className="intro-text"> – Introducing to our vision, ideas <br />
                    and basicly shit we think is worth <br />
                    speaking about</div>
                </div>
            </div>
        )
    }
}

export default Intro 
