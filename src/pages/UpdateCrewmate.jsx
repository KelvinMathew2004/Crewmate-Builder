import React from "react";
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import crewmateImg from '../assets/crewmate.png';
import imposterImg from '../assets/imposter.png';

const UpdateCrewmate = ({data}) => {

    const {id} = useParams()
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "", type: "crewmate" });
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (crewmate.type === 'imposter') {
            setCrewmate(prev => ({ ...prev, speed: '3' }));
        }
    }, [crewmate.type]);

    useEffect(() => {
        const fetchCrewmate = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching post:', error);
            } else if (data) {
                setCrewmate({
                    id: data.id,
                    name: data.name || '',
                    speed: data.speed || '',
                    color: data.color || '',
                    type: data.type || 'crewmate'
                });
            }
            setLoading(false);
        };
        fetchCrewmate();
    }, [id]);

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
            .update({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color, type: crewmate.type })
            .eq('id', id);

        window.location = "/gallery";
    };

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
            <h1>Update Your Crewmate</h1>
            
            <div className="type-selector">
                <label className={`type-option ${crewmate.type === 'crewmate' ? 'crewmate-selected' : ''}`}>
                    <input type="radio" name="type" value="crewmate" checked={crewmate.type === 'crewmate'} onChange={handleChange} />
                    <img src={crewmateImg} alt="Select Crewmate" />
                </label>
                <label className={`type-option ${crewmate.type === 'imposter' ? 'imposter-selected' : ''}`}>
                    <input type="radio" name="type" value="imposter" checked={crewmate.type === 'imposter'} onChange={handleChange} />
                    <img src={imposterImg} alt="Select Imposter" />
                </label>
            </div>

            <form className='edit-form-container'>
                <div className='form-card'>
                    <h3>Crewmate Name</h3>
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-input" 
                            value={crewmate.name} 
                            onChange={handleChange} 
                            placeholder="Enter crewmate's name" 
                        />
                    </div>
                </div>

                <div className='form-card'>
                    <h3>Attributes</h3>
                    <div className='form-group'>
                        <label htmlFor="speed">Speed (mph):</label>
                        <input 
                            type="text" 
                            id="speed" 
                            name="speed" 
                            className="form-input" 
                            value={crewmate.speed} 
                            onChange={handleChange} 
                            placeholder={crewmate.type === 'imposter' ? 'Locked for Imposters' : "Enter speed in mph"}
                            disabled={crewmate.type === 'imposter'}
                        />
                        {crewmate.type === 'imposter' && (
                            <p className="help-text">Speed drops to 1 mph when lights are off.</p>
                        )}
                    </div>
                </div>

                <div className='form-card'>
                    <h3>Choose a Color</h3>
                    <div className='color-options-container'>
                        {['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'pink', 'rainbow'].map(color => (
                            <label className="color-option" key={color}>
                                <input
                                    type="radio"
                                    name="color"
                                    value={color}
                                    checked={crewmate.color === color}
                                    onChange={handleChange}
                                />
                                <span className={`color-swatch swatch-${color}`}></span>
                            </label>
                        ))}
                    </div>
                </div>
            </form>
            
            <div className="action-buttons">
                <button type="submit" onClick={updateCrewmate}>Update Crewmate</button>
                <button className="delete-button" onClick={deleteCrewmate}>Delete Crewmate</button>
            </div>
        </div>
    );
}

export default UpdateCrewmate;