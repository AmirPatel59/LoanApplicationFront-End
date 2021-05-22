import axios from 'axios';
import React, { Component } from 'react'

 class CustomerService extends Component {
   login(email,password)
   {
       return axios.get(`http://localhost:8080/loanApplication/customer/loginCustomer/${email}/${password}`);
   }
   addCustomer(customer)
   {
       return axios.post(`http://localhost:8080/loanApplication/customer/addCustomer`,customer);
   }
}
export default new CustomerService;