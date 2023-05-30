import React from "react"
import './searchbar.css'
import {useState} from "react";
import SearchGlass from '../../assets/searchGlass.svg'

const SearchBar = () => {
    const [query, setQuery] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <div className="container">
            <div className="searchBar">
                <input type="text" className="input" placeholder="Search" onChange={event => handleChange(event)} />
                <div className="searchGlass">
                    <img src={SearchGlass} alt="Search Glass"></img>
                </div>
            </div>

        </div>
    )
}

export default SearchBar