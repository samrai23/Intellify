import React, { Component } from 'react';
import axios from 'axios';
import OTPCheck from './OTPCheck';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Form extends Component {
    state = {
        userMobile: '',
        api_res: '',
        responseMsg: '',
        isSuccess: false
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const userMobilenumber = event.target.userMobile.value
        axios
            //sends POST req to api
            .post(`https://cors-anywhere.herokuapp.com/https://restintellify.herokuapp.com/api/v1/login/`, this.state)
            .then(response => {
                // Sets api_res state to respons given back by api
                this.setState({
                    api_res: response.data,
                })
                // sets state after successfull submission
                if (this.state.api_res.Data.type === "success") {
                    const success = 'OTP sent successfully'
                    alert(success)
                    this.setState({
                        responseMsg: success
                    })
                    this.setState({
                        isSuccess: true
                    })

                } else {
                    const errMsg = 'Please enter a valid phone number'
                    this.setState({
                        responseMsg: errMsg,
                        isSuccess: false
                    })
                }
            })

            .catch(error => {
                console.log(error)
            })
    }

    render() {
        if (this.state.isSuccess == false) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {/* only allows numeric digits in field */}
                        <input id='mobileform' ref={(el) => this.myFormRef = el} type='number' pattern="[1-9]{1}[0-9]{9}" onInput={this.handleChange} name='userMobile' value={this.state.userMobile} placeholder='Enter Mobile no.' /><br />
                        <br/>
                        <button type='submit'>GET OTP</button>
                        <p className='Errorresponse'>{this.state.responseMsg}</p>
                    </form>
                </div>
            )
        } else if (this.state.isSuccess == true) {
            return (
                <OTPCheck userMobile={this.state.userMobile} />
            )
        }
    }
}

export default Form
