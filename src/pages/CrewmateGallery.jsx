import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const CrewmateGallery = (props) => {

    const [crewmates, setCrewmates] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // READ all post from table
        const fetchCrewmates = async () => {
            const {data} = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true })

            // set state of posts
            setCrewmates(data)
            setLoading(false)
        }
        fetchCrewmates()
    }, [props])

    if (loading) return <p>Loading...</p>
    
    return (
        <div className="CrewmateGallery">
            <h1>Your Crewmate Gallery!</h1>
            {
                crewmates && crewmates.length > 0 ?
                [...crewmates]
                .sort((a, b) => a.id - b.id)
                .map((crewmate,index) => 
                    <Card 
                        key={crewmate.id}
                        id={crewmate.id} 
                        name={crewmate.name}
                        speed={crewmate.speed}
                        color={crewmate.color}
                    />
                ) : <h2>You haven't made a crewmate yet!</h2>
            }
            <Link to="/new"><button>Create one here!</button></Link>
        </div>  
    )
}

export default CrewmateGallery