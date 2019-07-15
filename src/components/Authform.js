import React, { Component } from 'react'

export default class Authform extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            username:"",
            password:"",
            profileImageUrl:"",
        };
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSumit=(e)=>{
        console.log(this.state)
        e.preventDefault();
        e.stopPropagation();
        const authType = this.props.signUp ? "signup" : "signin";
        console.log(authType,this.state)
    this.props.onAuth(authType, this.state).then(()=>{
       console.log("LOGGED IN SUCCESSFULLY")
       this.props.history.push("/")
    }).catch(err=>{
        return console.log(err);
    });
    }
    render() {
        
        const {email,username,password, profileImageUrl} = this.state;
        const {heading, signUp, buttonText, errors, history,removeError}=this.props;
        history.listen(()=>{removeError()})
        return (
            <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                    <form onSubmit={this.handleSumit}>
                        <h2>{heading}</h2>

                        {errors.message &&<div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{errors.message}</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>}
                        <label htmlFor="email">Email:</label>
                        <input 
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                        type="text"
                        />

                        <label htmlFor="password">Password:</label>
                        <input 
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                     
                        type="password"
                        />
                        {
                            signUp && (
                                <div>
                                     <label htmlFor="username">Username:</label>
                                    <input 
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    onChange={this.handleChange}
                                    value={username}
                                    type="text"
                                    />

                                    <label htmlFor="image-url">profileImageUrl:</label>
                                    <input 
                                    className="form-control"
                                    id="image-url"
                                    name="image-url"
                                    onChange={this.handleChange}
                                    type="text"
                                    />
                                </div>
                            )
                        }
                        <button 
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        >{buttonText}</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
