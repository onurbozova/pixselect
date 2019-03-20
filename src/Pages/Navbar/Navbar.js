import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/NavbarCSS.css';

class Navbar extends Component {
    state = {
        liveStyle: "#d8151d",
        recordStyle: "#1c66de",
        alarmStyle: "#1c66de"
    }

    inLive = (e) => {
        this.setState({
            liveStyle: "#d8151d",
            recordStyle: "#1c66de",
            alarmStyle: "#1c66de"
        })
    }

    inRecord = (e) => {
        this.setState({
            liveStyle: "#1c66de",
            recordStyle: "#d8151d",
            alarmStyle: "#1c66de"
        })
    }

    inAlarm = (e) => {
        this.setState({
            liveStyle: "#1c66de",
            recordStyle: "#1c66de",
            alarmStyle: "#d8151d"
        })
    }

    render() {
        return (
            <nav className="nav-wrapper">
                <div className="logo"></div>
                <ul>
                    <li><NavLink to="Live" onClick={this.inLive} style={{backgroundColor:this.state.liveStyle}}><a>Canlı İzle</a></NavLink></li>
                    <li><NavLink to="Record" onClick={this.inRecord} style={{backgroundColor:this.state.recordStyle}} ><a>Kayıt İzle</a></NavLink></li>
                    <li><NavLink to="Alarm" onClick={this.inAlarm} style={{backgroundColor:this.state.alarmStyle}} ><a>Alarm Logları</a></NavLink></li>
                    <li className="logOut" onClick={this.inLive}><NavLink to="Logout"><a>Çıkış</a></NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar