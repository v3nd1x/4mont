import React from "react"; 
import PhotoOne from "../images/blog-photo-1.png";
import PhotoTwo from "../images/blog-photo-2.png";
import PhotoThree from "../images/blog-photo-3.png";
import LoadMore from "../images/load-more.png";


class Blogentries extends React.Component {
    constructor(){
        super()
        this.state = {
            isScrolledForFade: true
        }
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

   

    render(){

        let blogdata = [
            {
                title: <div className="left-s"><p className="blog-title">Lorem ipsum dolor sit amet</p></div>,
                image: <div  style={{maxWidth:"680px"}} className="img-right"><img className="blog-images" src={PhotoOne} alt="A person holding a magazine"/></div>,
                description: <div className="left-s"><p className="b-description">consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.</p></div>,
                button: <div className="buttondiv"><button className="read-more-button"> READ MORE </button></div>
            },
            {
                title: <div className="right-s"><p className="blog-title-right">Lorem ipsum dolor sit amet</p></div>,
                image: <div  style={{maxWidth:"680px"}} className="img-left"><img className="blog-images" src={PhotoTwo} alt="Malboro cigarette pack full with crayons"/></div>,
                description: <div className="right-s"><p className="b-description-right">consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.</p></div>,
                button: <div className="buttondiv"><button className="read-more-button-right"> READ MORE </button></div> 
            },
            {
                title: <div className="left-s"><p className="blog-title">Lorem ipsum dolor sit amet</p></div>,
                image: <div  style={{maxWidth:"680px"}} className="img-right"><img className="blog-images" src={PhotoThree} alt="Person looking in the mirror with a comouter error on face"/></div>,
                description: <div className="left-s"><p className="b-description">consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.</p></div>,
                button: <div className="buttondiv"><button className="read-more-button"> READ MORE </button></div>
            }
        ]

        return(
            <div className={this.state.isScrolledForFade ? "fade" : "fade-back"}>
                <ul>
               {blogdata.map((post)=> (
                   <li className="entry">
                       {post.image}
                       {post.title}
                       {post.description}
                       {post.button}
                   </li>
               ))}
               </ul>
               <div className="load-center"><img className="load-more-img" src={LoadMore} alt="Load more"/></div>
            </div>
        )
    }
}

export default Blogentries