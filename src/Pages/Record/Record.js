
import React, { Component } from 'react';
//import ReactPlayer from 'react-player';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Record extends Component {
    state = {
        startTime: new Date(),
        endTime: new Date(),
        hasUrl: false,
        showChannels:true,
        channel: "Seçilmiş kanal yok",
        videoUrl: "",
        rotate: 0,
        rotateString: 'rotate(0deg)',
        rotateConstant: 10,
        zoom: 1,
        horizontal:0,
        vertical:0,
        dvrs: [
            {
                name: "dvr1",
                channels: [
                    {
                        name: "Channel1",
                        url: "Channel1 urlsi gelecek buraya"
                    },
                    {
                        name: "Channel2",
                        url: "Channel2 urlsi gelecek buraya"
                    }
                ],
                visibility: true
            },
            {
                name: "2. dvr",
                channels: [
                    {
                        name: "kanal 1",
                        url: "kanal 1 urlsi gelecek buraya"
                    }
                ],
                visibility: true
            },
            {
                name: "dvr 3",
                channels: [

                ],
                visibility: true
            }
        ]
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleStartDateChange = (e) => {
        this.setState({
            startTime: e
        })
    }

    handleEndDateChange = (e) => {
        this.setState({
            endTime: e
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.setState({
            videoUrl: this.state.channel + 'startTime=' + this.state.startTime.getFullYear() + months[this.state.startTime.getMonth()] + this.state.startTime.getDate() + 'T' + this.state.startTime.getHours() + this.state.startTime.getMinutes() + this.state.startTime.getSeconds() + 'z&endTime=' + this.state.endTime.getFullYear() + months[this.state.endTime.getMonth()] + this.state.endTime.getDate() + 'T' + this.state.endTime.getHours() + this.state.endTime.getMinutes() + this.state.endTime.getSeconds() + 'z',
            hasUrl:true
        })
        console.log(this.state);
    }

    setVideoUrl = (e) => {
        this.setState({
            videoUrl: e.target.value
        })
    }

    handleRotateLeft = (e) => {
        console.log('this.state.rotate')
        this.setState({
            rotate: this.state.rotate - 10,

            rotateString: 'rotate(' + String(this.state.rotate - 10) + 'deg)'
        })
        console.log(this.state.rotate)
    }

    handleRotateRight = (e) => {
        console.log('this.state.rotate')
        this.setState({
            rotate: this.state.rotate + 10,

            rotateString: 'rotate(' + String(this.state.rotate + 10) + 'deg)'
        })
        console.log(this.state.rotate)
    }

    resetRotate = (e) =>{
        this.setState({
            rotate: 0,
            rotateString:'rotate(0deg)'
        })
    }

    zoomIn = (e) => {
        this.setState({
            zoom: this.state.zoom + 0.1
        })
    }

    zoomOut = (e) => {
        this.setState({
            zoom: this.state.zoom - 0.1
        })
    }

    zoomReset = (e) => {
        this.setState({
            zoom: 1
        })
    }

    setChannel = (e) => {
        console.log(e.target.id)
        this.setState({
            channel: e.target.id
        })
    }

    setVisibility = (e) => {
        const items = this.state;

        items.dvrs.map((dvr) => { if (dvr.name === e.target.id) { dvr.visibility = !dvr.visibility } });
        this.setState({ items });
        console.log(items);
    }

    pushDown = (e) => {
        this.setState({vertical:this.state.vertical+10})
    }

    pushUp = (e) => {
        this.setState({vertical:this.state.vertical-10})
    }

    pushLeft = (e) => {
        this.setState({horizontal:this.state.horizontal-10})
    }

    pushRight = (e) => {
        this.setState({horizontal:this.state.horizontal+10})
    }

    positionReset = (e) => {
        this.setState({
            horizontal:0,
            vertical:0
        })
    }

    hideChannels = (e) => {
        this.setState({showChannels:!this.state.showChannels})
    }

    hideVideo = (e) => {
        this.setState({hasUrl:false})
    }

    render() {
        return (
            <div className="container">
            <div className="mapContainer"><iframe height="470px" width="100%" frameborder="0" scrolling="no" src="https://developers.google.com/maps/documentation/javascript/examples/full/add_map_iframe" allowfullscreen=""></iframe></div>
            {this.state.showChannels ? <div className="dvrchannels">
                    <ul>
                        {this.state.dvrs.map((dvr) => {
                            return (<li data-id={dvr.name} key={dvr.name} ><b>{dvr.visibility ? "-" : "+"}</b><b id={dvr.name} onClick={this.setVisibility}>{dvr.name}</b>
                                <ul>
                                    {dvr.visibility ? dvr.channels.map((channel) => { return (<li id={dvr.name} data-id={channel.url} key={channel.url} ><pre id={channel.url} onClick={this.setChannel}>  {channel.name}</pre></li>) }) : null}
                                </ul></li>
                            )
                        })}
                    </ul>
                    <button onClick={this.hideChannels} className="channelShowHide"><i class="fa fa-caret-left" aria-hidden="true"></i></button>
                </div>: <div className="dvrchannels" style={{width:'25px'}}><button onClick={this.hideChannels} className="channelShowHide"><i class="fa fa-caret-right" aria-hidden="true"></i></button></div>}

                {this.state.hasUrl ? <div className="videoplayer">
                    <button onClick={this.hideVideo} className="closeVideo"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    <div className="videoInfo"><b>Bilgiler Buraya gelecek</b><br/><b>Mesela url:</b> <a>{this.state.videoUrl}</a></div>
                    <video src="http://edge.flowplayer.org/functional.webm" controls ></video>
                </div>:""}



                <form className="dateForm" style={{width:'220px',zIndex:'150'}}>
                    <table style={{maxWidth:'100%'}}>
                        <tbody>
                            <tr >
                                <td style={{width:'10%'}}><label htmlFor="startTime">Başlangıç Zamanı:</label></td>
                                <td>
                                    <DatePicker
                                        selected={this.state.startTime}
                                        onChange={this.handleStartDateChange}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={1}
                                        dateFormat="dd.MM.yyyy HH:mm"
                                        timeCaption="time"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td ><label htmlFor="endTime">Bitiş Zamanı:</label></td>
                                <td>
                                    <DatePicker
                                    style={{width:'300px'}}
                                        selected={this.state.endTime}
                                        onChange={this.handleEndDateChange}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={1}
                                        dateFormat="dd.MM.yyyy HH:mm"
                                        timeCaption="time"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>





                    <button style={{ marginLeft: '50%',zIndex:'150' }} onClick={this.handleSubmit}>Yükle</button>
                </form>

                
                <div className="footerImage"></div>
            </div>

        )
    }
}


export default Record