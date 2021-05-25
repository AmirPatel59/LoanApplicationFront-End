import { event } from 'jquery'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CustomerService from '../Services/CustomerService'
import '../Assets/Login/css/main.css'
import '../Assets/Login/css/util.css'
import '../Assets/Login/js/main.js'
import '../Assets/Login/images/icons/favicon.ico'
import '../Assets/Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../Assets/Login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
import '../Assets/Login/vendor/animate/animate.css'
import '../Assets/Login/vendor/css-hamburgers/hamburgers.min.css'
import '../Assets/Login/vendor/animsition/css/animsition.min.css'
import '../Assets/Login/vendor/select2/select2.min.css'
import '../Assets/Login/vendor/daterangepicker/daterangepicker.css'
import '../Assets/Login/vendor/bootstrap/css/bootstrap.min.css'
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {            
                age: 0,
                email: "",
                firstName: '',
                gender: '',
                lastName: '',
                mobileNumber: 0,
                password: ''
        }
    }
    
    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value})        
    }

    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value})
    }

    fNameHandler=(event)=>{
        this.setState({firstName:event.target.value})
    }

    lNameHandler=(event)=>{
        this.setState({lastName:event.target.value})
    }
    ageHandler=(event)=>{
        this.setState({age:event.target.value})
    }

    genderHandler=(event)=>{
        this.setState({gender:event.target.value})
    }

    mobileHandler=(event)=>{
        this.setState({mobileNumber:event.target.value})
    }

    register=(e)=>{
        e.preventDefault();
        let customer={
            age: this.state.age,
                email: this.state.email,
                firstName: this.state.firstName,
                gender: this.state.gender,
                lastName: this.state.lastName,
                mobileNumber: this.state.mobileNumber,
                password: this.state.password
        }
        
        CustomerService.addCustomer(customer).then((response)=>{
             alert("customer Added Sucesfully")
             console.log(response.data)
             this.props.history.push('/')
         });
     }
    render() {   
        return (
            <div>
                 <div>
                    <div className="container-fluid" style={{ backgroundImage: `url('/images/bg-01.jpg')` }}>
                        <div className="card p-t-30 p-b-50">
                            <span className="login100-form-title p-b-41">
                                Register Customer Account
				            </span>
                            <form className="login100-form validate-form p-b-33 p-t-5">
                                <div className="row">
                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Enter username">
                                    <input className="input100" type="text" name="username" placeholder="Email-Id" onChange={this.changeEmailHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>                                    
                                </div>

                                <div className="wrap-input100 col-sm-6 validate-input" data-validate="Enter password">
                                    <input className="input100" type="password" name="pass" placeholder="Password" onChange={this.changePasswordHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter First Name">
                                    <input className="input100" type="text" name="pass" placeholder="First Name" onChange={this.fNameHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter Last Name">
                                    <input className="input100" type="text" name="pass" placeholder="Last Name" onChange={this.lNameHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Age">
                                    <input className="input100" type="number" name="pass" placeholder="Age" onChange={this.ageHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Gender">
                                    <input className="input100" type="text" name="pass" placeholder="Gender" onChange={this.genderHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Mobile Number">
                                    <input className="input100" type="mobile" name="mobile" placeholder="Mobile Number" onChange={this.mobileHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-32">
                                    <button className="login100-form-btn" onClick={this.register}>
                                        Register
						</button>
                                </div>
                                <div style={{paddingTop:"1.3rem"}}>
                                    <center><NavLink to="/">Back to Login Page</NavLink></center>                                         
                                </div>
                            </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
