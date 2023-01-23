import React, { useState } from "react";
import cx from "classnames";
import { getAPI } from "../utils/FormatData"
import "../styles/components/switch.css"


/**
 * @component React component to display a switch and change the state of the switch
 * @returns {JSX.Element}
*/

const Switch = ({ rounded = true, }) => {
    const sliderCX = cx('slider', {
        'rounded': rounded
    })

    /**
     * @param {boolean} isChecked - state of the switch
     * @param {function} setIsChecked - function to change the state of the switch
     */
    const [isChecked, setIsChecked] = useState([])
    let change = getAPI()
    const handleChange = event => {
        /**
         * @type {object} event - event of the switch
         * @type {object} change - object of the API
         * @param {boolean} change - change the state of the switch 
         * @param {function} changeMockMode - function to change the state of the switch in the API
         */
        if (event.target.checked) {
            change.changeMockMode(false)
            console.log("checked", change);
        } else {
            change.changeMockMode(true)
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