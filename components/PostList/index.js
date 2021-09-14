import React,{ useState , useEffect } from 'react'
import Axios from 'axios'
import  withHeader from '../HOC/WithHeader'
import PostCard from './PostCard'
import Admin from '../Admin';
//import withFooter from '../HOC/WithFooter'

function PostList() {
    const key = localStorage.getItem('token');
    const [posts, setposts] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:3000/api/articles')
        .then(( res )=>{
            if (res.status===200){
                console.log(res.data);
                setposts(res.data.articles)
            }
        })
    }, [])
        return(
            <>
            {
                key ? <Admin />  : console.log('h')
            }
            <h2>The List Of Posts</h2>
            {
                posts && posts.map(post => {
                return <PostCard post= {post}  key= {post.createdAt}/>
                })
            }
            </>
        ) 
}
//export default withHeader(PostList)
export default withHeader(PostList)


