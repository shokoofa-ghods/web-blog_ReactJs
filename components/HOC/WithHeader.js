import React from 'react'
import Header from '../Header'
//import { withRouter } from 'react-router-dom'


function withRouter(WrapperComponent) {
    return function(props){
        return(
            <>
                <Header />
                <WrapperComponent {...props} />
            </>
        )
    }
}
export default withRouter

