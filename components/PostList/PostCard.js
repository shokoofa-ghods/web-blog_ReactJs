import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { ButtonStyle } from '../../Style'

function POstCard(props){
    const key = localStorage.getItem('token');
    function deletehandler(){
        Axios.delete(`http://localhost:3000/api/articles/${props.post.slug}`,
        { 
            data:{
              foo: 'bar'
            },
              
            headers: {
                Authorization: "Bearer "+ key
          }
          
        })       
        .then(res=>{
            if(res.status === 200){
                console.log(res.data)
            }
        })
            
    }

    return(
        <>
        <listStyle>
            <p>{props.post.title}</p>
            
                { 
                    key ? <ButtonStyle onClick= {deletehandler} >delete</ButtonStyle>  : console.log('h')
                }
                <br></br> 
                <Link to=  {`/api/articles/${props.post.slug}`}>Read More</Link>
                
            
            

        </listStyle>
        </>
    )
}
export default POstCard