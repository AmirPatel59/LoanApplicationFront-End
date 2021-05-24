import React, { Component } from 'react'
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
import { NavLink } from 'react-router-dom'
import CustomerService from '../Services/CustomerService'

export default class LoginCs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
          
        }
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changepasswordHandler = this.changepasswordHandler.bind(this);
        // this.saveFlight = this.saveFlight.bind(this);
        // this.validate = this.validate.bind(this);
      }


    changeEmailHandler=(event)=>{
        this.setState({email:event.target.value})        
    }

    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value})
    }

    login=(e)=>{
        e.preventDefault();
        alert(this.state.email)
        alert(this.state.password)
        CustomerService.login(this.state.email,this.state.password).then((response)=>{
             alert(response.data)
             console.log(response.data)
         });
     }
     componentDidMount(){
         this.setState( )
        return this.props.history.push("/customerHome");
     }
    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100" style={{ backgroundImage: `url('/images/bg-01.jpg')` }}>
                        <div className="wrap-login100 p-t-30 p-b-50">
                            <span className="login100-form-title p-b-41">
                                Customer Account Login
				</span>
                            <form className="login100-form validate-form p-b-33 p-t-5">

                                <div className="wrap-input100 validate-input" data-validate="Enter username">
                                    <input className="input100" type="text" name="username" placeholder="User name" onChange={this.changeEmailHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter password">
                                    <input className="input100" type="password" name="pass" placeholder="Password" onChange={this.changePasswordHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-32">
                                    <button className="login100-form-btn" onClick={this.login}>
                                        Login
						</button>
                                </div>
                                <div style={{paddingTop:"1.3rem"}}>
                                    <center><NavLink to="register">Register Here</NavLink></center>                                         
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
