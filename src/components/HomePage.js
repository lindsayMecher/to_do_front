import React from 'react';
const USER = 'http://localhost:3000/current_user';

class HomePage extends React.Component{

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(!token){
            this.props.history.push('/login')
        } else {

            // send request to backend to verify correct token
            // retrieve the logged in user and save to store
            const reqObj = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }
            fetch(USER, reqObj)
                .then(resp => resp.json())
                .then(userData => {
                    console.log(userData)
                    if(userData.error) {
                        this.props.history.push('/login')
                    } else {
                        this.props.loginUser(userData)
                    }
                })
                .catch(err => console.log(err))
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