import { useState, useEffect } from 'react'
// import { supabase } from '../client'
// import Card from '../components/Card'

const CrewmateGallery = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // READ all post from table
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Posts')
                .select()
                .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data)
        }
        fetchPosts()
    }, [props])
    
    return (
        <div className="CrewmateGallery">
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => a.id - b.id)
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        title={post.title}
                        author={post.author}
                        description={post.description}
                        betCount={post.betCount}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default CrewmateGallery