import React,{useRef,useState} from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ButtonStyle, InputStyle} from '../../Style'


function Admin(props) {

    const title = useRef(null)
    const description = useRef(null)
    const body = useRef(null)
    const tags = useRef([])
    const key = localStorage.getItem('token');
    const [check, setcheck] = useState(false)
    const history = useHistory()
   
       function CreateHandler(e) {
           e.preventDefault();
           key && Axios
               .post('http://localhost:3000/api/articles',
                   {
                       "article": {
                           "title": title.current.value,
                           "description": description.current.value,
                           "body": body.current.value,
                           "tagList": tags.current.value
                       }
                   },
                   {
                       headers: {
                           Authorization:
                               "Bearer " + key
                       }
                   }
               )
               .then(res => {
                   console.log(res.data)
                   setcheck( !check )
                   //reload(true)
                   return history.push('/')
                }
               )
               .catch(error => console.log(error))
   
       }
   
       return (
           <div>
               <h2>create post</h2>
               <form>
                   <InputStyle type="text" placeholder="title" defaultValue="" ref={title} />
                   <InputStyle type="text" placeholder="description" defaultValue="" ref={description} />
                   <InputStyle type="text" placeholder="body" defaultValue="" ref={body} />
                   <InputStyle type="text" placeholder="tags" defaultValue="" ref={tags} />
                   <ButtonStyle type="submit" onClick={CreateHandler}>Create</ButtonStyle>
               </form>
           </div>
   
       )
   }

export default Admin