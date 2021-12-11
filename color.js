import React, { useState } from 'react'
import Select from 'react-select'
import './App.css';

function Color() {

    var colors = [
    {
        value:1,
        label:"Red",
        color:"red"
    },
    {
        value:2,
        label:"Green",
        color:"green"
    },
    {
        value:3,
        label:"Blue",
        color:"blue"
    },
    {
        value:4,
        label:"Orange",
        color:"orange"
    }
    ];

    var [setcolor,handlevalue]=useState(colors.color);
    var handle = e =>
    {
        handlevalue(e.color);
    }
    return(
        <div>
            <style>{'p {background-color:'+setcolor+';'}</style>
            <h2>
                <center className="heading">Color Changer</center>
            </h2>
            <Select options={colors} onChange={handle} className="select"></Select>
            <center>
                <div>
                    <p></p>
                </div>
            </center>
        </div>
    )
}

export default Color;