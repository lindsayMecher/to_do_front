import React from 'react';

class HomePage extends React.Component{

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(!token){
            this.props.history.push('/login')
        }
    }
    
    render(){
        return(
            <h1>
                HomePage
            </h1>
        )
    }
};

export default HomePage;