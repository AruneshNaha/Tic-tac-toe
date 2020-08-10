import React from 'react'
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

const Icon =({name}) => {
    switch(name){
        case 'circle': 
            return <FaRegCircle className="icon"></FaRegCircle>
        case 'cross':
            return <FaTimes className="icon"></FaTimes>
        default:
            return <FaPen className="icon"></FaPen>
    }
}

export default Icon