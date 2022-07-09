import React from "react";
import './nav.css'

export default function Nav() {
    return (
        <nav>
            <div className="nav--logo cont">
            <h1 className="nav--logo">MusicSearch</h1>
            <input className="nav--search" placeholder="Search"></input>
            </div>
            <ul className="nav--items">
                <li>Song</li>
                <li>Artist</li>
                <li>Album</li>
            </ul>
        </nav>
    )
}