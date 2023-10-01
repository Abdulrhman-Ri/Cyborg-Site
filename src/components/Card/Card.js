import './Card.css'
import { FaDownload } from "react-icons/fa6";
import { BsFillBrightnessHighFill } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className='most-popular-item'>
        <div className='card-wrapper'>
            <img src={props.image} />
            <div className='most-popular-item-content'>
                <h4 className='most-popular-item-title'>
                    {props.title} <br/>
                    <span>{props.category}</span>
                </h4>
                <ul>
                    <li><span style={{"color": "var(--color-icons-1)"}}><BsFillBrightnessHighFill/></span> <span>{props.rate}</span></li>
                    <li><span style={{"color": "var(--color-icons-2)"}}><FaDownload/></span> <span>{props.download}</span></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card