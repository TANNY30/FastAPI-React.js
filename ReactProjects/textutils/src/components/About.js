import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function About() {


    const [myStyleFont,setMyStyle]=useState({
        color: 'black',
        
    })

    const [myStyleDarkside,setMyStyleDarkside]=useState({
        backgroundColor: 'white', 
    })

    const [btntext,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyleFont.color === "black"){
            setMyStyle({
                color: 'white'
            })
            setMyStyleDarkside({
                backgroundColor: 'black',
                
            })
            setBtnText("Enable Light Mode")

        }
        else{
            setMyStyle({
                color: 'black'
            })
            setMyStyleDarkside({
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");

        }
    }

  return (
    
    <div className='container'  style={myStyleFont}>
        <div className="card my-3" width = "1 rem" style={myStyleDarkside}>
                <img className="card-img-top" src="https://4kwallpapers.com/images/walls/thumbs_3t/9277.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                <button onClick={toggleStyle} type="button" className="btn btn-dark mx-3">{btntext}</button>
            </div>
        </div>
        
    </div>
    
    
    
  )
}
