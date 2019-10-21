import React from "react"
import GridChange from "../images/4mont-grid-1.png";

class Blogintro extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: "MUSIC",
            isScrolledForFade: true
        }
        this.updateCategory = this.updateCategory.bind(this)
    }

    componentDidMount(){
        window.addEventListener("scroll", () => {
            const isTop = window.scrollY < 100; 
            if (isTop !== true){
                this.setState({isScrolledForFade: false})
            } else {
                this.setState({isScrolledForFade: true})
            }
        })
    }

    updateCategory(selectedCategory) {
        this.setState({
            selectedCategory
        })
    }

    render() {

        const navBar = ["MUSIC", "ARTS", "DESIGN", "WORTH IT"]

        return (
            <div className={this.state.isScrolledForFade ? "fade" : "fade-back"}>
                <p className="blog-intro">DAILY BASICS</p>

                <img onClick={()=> alert("Grid button under construction")}className="grid-change" src={GridChange} alt="grid-view-change" />
                <p className="blog-description"> Lorem ipsum dolor sit amet, consectetuer <br />
                    adipiscing elit, sed diam nonummy nibh <br />
                    euismod tincidunt ut</p>
                <ul className="flex-center">
                    {navBar.map((category) => (
                        <li key={category}>
                            <button className="btn-clear nav-link"
                                onClick={() => this.updateCategory(category)}
                                style={category === this.state.selectedCategory ? { textDecoration: "underline", fontWeight: "bold" } : null}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Blogintro