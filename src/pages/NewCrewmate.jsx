import React from "react";
import { useState } from 'react'
import { supabase } from '../client'

const NewCrewmate = () => {

    const [crewmate, setCrewmate] = useState({name: "", speed: "", color: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .insert({name: crewmate.name, speed: crewmate.speed, color: crewmate.color})
            .select();

        window.location = "/gallery";
    }

    console.log("Current crewmate state:", crewmate);

    return (
        <div className="NewCrewmate">
            <h1>Create a New Crewmate</h1>
            <form className='edit-form-container'>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="form-input" value={crewmate.name} onChange={handleChange} placeholder="Enter crewmate's name" />
                </div>

                <div className='form-group'>
                    <label htmlFor="speed">Speed (mph):</label>
                    <input type="text" id="speed" name="speed" className="form-input" value={crewmate.speed} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="color">Color:</label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='red'
                            checked={crewmate.color === 'red'}
                            onChange={handleChange}
                        />
                        Red
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='green'
                            checked={crewmate.color === 'green'}
                            onChange={handleChange}
                        />
                        Green
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='blue'
                            checked={crewmate.color === 'blue'}
                            onChange={handleChange}
                        />
                        Blue
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='purple'
                            checked={crewmate.color === 'purple'}
                            onChange={handleChange}
                        />
                        Purple
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='yellow'
                            checked={crewmate.color === 'yellow'}
                            onChange={handleChange}
                        />
                        Yellow
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='orange'
                            checked={crewmate.color === 'orange'}
                            onChange={handleChange}
                        />
                        Orange
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="color"
                            value='pink'
                            checked={crewmate.color === 'pink'}
                            onChange={handleChange}
                        />
                        Pink
                    </label>
                    <label>
                        <input
                            type="radio"
                            name='rainbow'
                            value={crewmate.color}
                            checked={crewmate.color === 'rainbow'}
                            onChange={handleChange}
                        />
                        Rainbow
                    </label>
                </div>

                <button type="submit" onClick={createCrewmate}>Create Crewmate</button>
            </form>
        </div>
    );
}

export default NewCrewmate;