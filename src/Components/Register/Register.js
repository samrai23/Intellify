import React, { Component } from 'react'
import axios from 'axios';
import OTPCheck from '../OTPCheck'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userMobile: this.props.userMobile,
            isSuccess: false,
            userName: '',
            userEmail: '',
            responseMsg: '',
            userType: 'teacher'
        }
        this.radioChange = this.radioChange.bind(this)
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const utype = this.state.userType.toString()
        const uname = this.state.userName.toString()
        const ueamil = this.state.userEmail.toString()
        const data = {
            "userMobile": "9873835100",
            "userType": utype,
            "userName": uname,
            "userEmail": ueamil
        }
        axios.post('https://cors-anywhere.herokuapp.com/https://restintellify.herokuapp.com/api/v1/registration/', data)
            .then(response => {
                console.log(response)
                console.log(this.state)
            })
            .catch(error => {
                console.log(error.response)
                console.log(data)
            });
    }


    radioChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userName" onChange={this.handleChange} placeholder="Full Name..."></input><br />
                    <input type="email" name="userEmail" onChange={this.handleChange} placeholder="Email..."></input><br />
                    <input type="radio" value="teacher" checked={this.state.userType === 'teacher'} onChange={this.radioChange} name="userType" /> Teacher
                    <input type="radio" value="student" checked={this.state.userType === 'student'} onChange={this.radioChange} name="userType" /> Student
                    <input type="radio" value="parent" checked={this.state.userType === 'parent'} onChange={this.radioChange} name="userType" /> Parent
                    <p>{this.props.userMobile}</p>
                    <button type="submit">SIGN Up</button>
                </form>
            </div>
        )
    }
}

export default Register
