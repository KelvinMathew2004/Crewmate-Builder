import React from "react"
import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client'

const CrewmateDetails = ({data}) => {

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

    if (loading) return <p>Loading...</p>

    return (
        <div className="CrewmateDetails">
            <h1>Crewmate: {crewmate.name}</h1>
            <h1>Stats:</h1>
            <h2>Color: {crewmate.color}</h2>
            <h2>Speed: {crewmate.speed} mph</h2>
            { crewmate.speed < 3 ? <h2 className="warning">You may want to find a Crewmate with more speed, this one is kind of slow 😬</h2> : null }
            <Link to={'edit/'+ props.id}><button>Edit Crewmate</button></Link>
        </div>
    )
}   

export default CrewmateDetails;