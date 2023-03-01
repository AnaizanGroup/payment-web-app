import React from "react"
import { FaPlay } from "react-icons/fa"
import "./CardText.scss"

export const CardText = ({title1, title2, para}) => {
    return (
        <div className="left-div">
            <h6>ANAIZAN MAKES IT EASY</h6>
            <h1>  {title1}
                <br />  {title2} </h1>
            <p>
                {para}
            </p>
            <p>
                <a href="">Get Started</a>
                <li> <button><FaPlay /> </button> Watch video</li>
            </p>
        </div>
    )
}