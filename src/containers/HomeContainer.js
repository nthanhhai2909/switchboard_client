import React from 'react'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

class HomeContainer extends React.Component {

    render(){
        return (
            <div>
                <Home />
                <NavBar />
            </div>
        )
    }
}

export default HomeContainer