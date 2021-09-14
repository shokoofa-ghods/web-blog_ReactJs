import Axios from 'axios'

export async function getArticle(){ 
    
        const response = await Axios.get('http://localhost:3000/api/articles')
            console.log(response.data);
            return response.data
            
      
}
