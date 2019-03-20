import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../Css/PagesCSS.css';




class Login extends Component {
    state = {
        userName: null,
        password: null,
        redirectPermission: false,
        cloud1Pos:0,
        cloud2Pos:0,
        cloud3Pos:0,
        cloud4Pos:0,
        cloud5Pos:0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    tick() {
        if(this.state.cloud1Pos<90){
            this.setState({
                cloud1Pos:this.state.cloud1Pos+0.05
            })
        }
        else{
            this.setState({
                cloud1Pos:0
            })
        }
        if(this.state.cloud2Pos<90){
            this.setState({
                cloud2Pos:this.state.cloud2Pos+0.02
            })
        }
        else{
            this.setState({
                cloud2Pos:0
            })
        }
        if(this.state.cloud3Pos<90){
            this.setState({
                cloud3Pos:this.state.cloud3Pos+0.1
            })
        }
        else{
            this.setState({
                cloud3Pos:0
            })
        }
        if(this.state.cloud4Pos<90){
            this.setState({
                cloud4Pos:this.state.cloud4Pos+0.01
            })
        }
        else{
            this.setState({
                cloud4Pos:0
            })
        }
        if(this.state.cloud5Pos<90){
            this.setState({
                cloud5Pos:this.state.cloud5Pos+0.07
            })
        }
        else{
            this.setState({
                cloud5Pos:0
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10);
    }

    handleSubmit = (e) => {

        if (this.state.userName === "admin" && this.state.password === "admin") {


            this.setState(() => ({
                redirectPermission: true
            }))
            this.props.action();
        }
    }


    render() {
        if (this.state.redirectPermission === true) {
            return <Redirect to='/' />
        }

        return (

            <div className="containerLogin">
                <div className="header"></div>
                <div className="login">
                    <div style={{ height: '100%', width: '100%' }}>
                        <input style={{ minWidth: '100%' }} className="user" id="userName" onChange={this.handleChange} placeholder="Kullanıcı Adı" />
                        <br />
                        <br />
                        <input style={{ minWidth: '100%' }} className="pass" id="password" onChange={this.handleChange} placeholder="Şifre" />
                        <br />
                        <br />
                        <button style={{ marginLeft: '40%' }} type="button" onClick={this.handleSubmit}>Giriş</button>
                    </div>
                </div>

                <div className="welcome-thumbnail" style={{left:'40%'}}>
				
                    <img src={require('../../Assets/bg-img/2.png')} alt="" style={{width:'100%',height:'100%'}}/>
                </div>

                <div className="clouds">
                    <img src={require('../../Assets/core-img/cloud-1.png')} style={{right:String(this.state.cloud1Pos)+'%'}} alt="" className="cloud-1" />
                    <img src={require('../../Assets/core-img/cloud-2.png')} style={{right:String(this.state.cloud2Pos)+'%'}} alt="" className="cloud-2" />
                    <img src={require('../../Assets/core-img/cloud-3.png')} style={{right:String(this.state.cloud3Pos)+'%'}} alt="" className="cloud-3" />
                    <img src={require('../../Assets/core-img/cloud-4.png')} style={{right:String(this.state.cloud4Pos)+'%'}} alt="" className="cloud-4" />
                    <img src={require('../../Assets/core-img/cloud-5.png')} style={{right:String(this.state.cloud5Pos)+'%'}} alt="" className="cloud-5" />
                </div>

            </div>


        )
    }
}

export default Login