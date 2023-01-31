import React, { useState } from "react";
import cx from "classnames";
import { getAPI } from "../utils/FormatData"
import "../styles/components/switch.css"


/**
 * @file React component to display a switch and change the state of the switch
 * @returns {JSX.Element}
*/

/**
 * @param {boolean} isChecked - state of the switch
 * @param {function} setIsChecked - function to change the state of the switch
 * @param {boolean} rounded - boolean to change the shape of the switch
 * @param {function} handleChange - function to change the state of the switch
 * @param {string} sliderCX - class name of the switch
 * @param {boolean} change - change the state of the switch
 * @param {function} changeMockMode - function to change the state of the switch in the API
 * @returns {JSX.Element} switch
 */
const Switch = ({ rounded = true, }) => {
    const sliderCX = cx('slider', {
        'rounded': rounded
    })
   
    const [isChecked, setIsChecked] = useState([])
    let change = getAPI()
    const handleChange = event => {
        /**
         * event of the switch
         */
        if (event.target.checked) {
            change.changeMockMode(false)
            alert("recuperation des datas a partir de l' API")
            console.log("checked", change);
        } else {
            change.changeMockMode(true)
            alert("recuperation des datas a partir du json")
            console.log("unChecked", change);
        }
        setIsChecked(current => !current)
    }
    return <div>
        <span>mock  </span>
        <label className="switch">
            <input type="checkbox" value={isChecked} onChange={handleChange} />
            <span className={sliderCX} />
        </label>
        <span>  API</span>
    </div>
};

export default Switch