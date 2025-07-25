import React from "react";
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

const UpdateCrewmate = ({data}) => {

    const {id} = useParams()
    const [crewmate, setCrewmate] = useState({id: null, name: "", speed: "", color: ""})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.error('Error fetching post:', error)
            } else if (data) {
                setCrewmate({
                    id: data.id,
                    name: data.name || '',
                    speed: data.speed || '',
                    color: data.color || ''
                })
            }
            setLoading(false)
        }
        fetchCrewmate()
    }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .update({ name: crewmate.name, speed: crewmate.speed,  color: crewmate.color})
            .eq('id', id);

        window.location = "/gallery";
    }

    // UPDATE post
    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', id); 

        window.location = "/gallery";
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="UpdateCrewmate">
            <h1>Welcome to the Crewmate Gallery!</h1>
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

                <button type="submit" onClick={updateCrewmate}>Submit</button>
                <button onClick={deleteCrewmate}>Delete</button>
            </form>
        </div>
    );
}

export default UpdateCrewmate;