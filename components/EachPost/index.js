import React,{ useEffect , useState } from 'react'
import Axios from 'axios'
import  withHeader from '../HOC/WithHeader'


function EachPost(props) {
    
    const [ post, setpost ] = useState(null)
    const { match: { params: { slug }}} = props;
    console.log(props);
    useEffect(() => {
        Axios.get(`http://localhost:3000/api/articles/${slug}`)
            .then( res =>{
                setpost(res.data.article);
                }         
            )
    }, [slug])
    return(
       <div>
           {
                post && (
                    <>
                    <h1>{post.title}</h1>
                    <span>{post.userId}</span>
                    <p>{post.body}</p>
                    </>
                ) 
            }        
       </div>

    )
}
export default withHeader(EachPost)