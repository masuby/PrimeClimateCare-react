import "./Background.css"
import video1 from "../../Assets/video1.mp4"
import image1 from "../../Assets/image1.png"
import image2 from "../../Assets/image2.png"
import image3 from "../../Assets/image3.png"
import image4 from "../../Assets/image4.png"
import image5 from "../../Assets/image5.png"
import image6 from "../../Assets/image6.png"
import image7 from "../../Assets/image7.png"



const Background = ({playStatus, heroCount}) => {
 
  if(playStatus){
    return(
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4"/>
      </video>
    )
  }
  else if (heroCount===0)
  {
    return <img src={image1} className="background fade-in"  alt=""/>
  }
  else if (heroCount===1)
  {
    return <img src={image2} className="background fade-in"  alt=""/>
  }
  else if (heroCount===2)
  {
    return <img src={image3} className="background fade-in"  alt=""/>
  }
  else if (heroCount===3)
  {
    return <img src={image4} className="background  fade-in"  alt=""/>
  }
  else if (heroCount===4)
  {
    return <img src={image5} className="background fade-in"  alt=""/>
  }
  else if (heroCount===5)
  {
    return <img src={image6} className="background fade-in"  alt=""/>
  }
  else if (heroCount===6)
  {
    return <img src={image7} className="background fade-in"  alt=""/>
  }
}

export default Background
