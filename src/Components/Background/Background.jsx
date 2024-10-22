import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1'
import image2 from '../../assets/image2'
import image3 from '../../assets/image3'

const Background = ({playstatus,heroCount}) => {

  if (playstatus){
    return(
      <video classname='background' autoplay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    )
  }

  else if(heroCount===0)
  {
    return<img src={image1} classname='background' alt=''/>
  }
  else if(heroCount===1)
  {
    return<img src={image2} classname='background' alt=''/>
  }
  else if(heroCount===2)
  {
    return<img src={image3} classname='background' alt=''/>
  }
 
}

export default Background
