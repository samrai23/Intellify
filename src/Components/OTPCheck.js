import React, { Component } from 'react'
import axios from 'axios';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from './Register/Register.js';

class OTPCheck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userMobile: this.props.userMobile,
            otp: '',
            api_res: '',
            isSuccess: false,
            responseMsg: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        const stuserMobile = this.state.userMobile.toString()
        var type = typeof stuserMobile
        console.log(type)
        const Uotp = this.state.otp.toString()
        console.log(Uotp)
        event.preventDefault();
        const data = {
            "userMobile": stuserMobile,
            "otp": Uotp
        }
        axios.post('https://cors-anywhere.herokuapp.com/https://restintellify.herokuapp.com/api/v1/OTPCheck/', data)
            .then(response => {
                console.log(response)
                this.setState({
                    isSuccess: true,
                    api_res: response.data
                })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error.response)
                this.setState({
                    api_res: error.response.data
                })
                if (this.state.api_res.type === "error") {
                    this.setState({
                        isSuccess: false,
                        responseMsg: 'OTP incorrect please try again'
                    })
                } else if (this.state.api_res.type === 'success') {
                    this.setState({
                        isSuccess: true
                    })
                    console.log(this.state.userMobile)
                }
            });
    }

    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "grey",
            padding: "10px",
            fontFamily: "Arial"
        };
        const newStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }
        const success = this.state.isSuccess
        return (
            <div>
                <Router>
                    <Route path="/register" component={() => (<Register userMobile="value" />)} />
                </Router>
                <form onSubmit={this.handleSubmit}>
                    <input type='number' pattern="[1-9]{1}[0-9]{9}" onInput={this.handleChange} name='otp' value={this.state.otp} placeholder='Enter OTP...'></input><br />
                    <button type='submit' style={success ? newStyle : mystyle}>{success ? <Link to="/register">NEXT</Link> : 'SUBMIT'}</button>
                </form>
                {!success ? <p>{this.state.responseMsg}</p> : <p></p>
                }
            </div>
        )
    }
}

export default OTPCheck
