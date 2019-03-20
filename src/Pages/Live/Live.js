import React, { Component } from 'react';
import ReactFlowPlayer from "react-flow-player";
import '../Css/PagesCSS.css';



class Live extends Component {
    state = {
        controlVideo:0,
        hasUrl: false,
        videoUrl: 'boş',
        rotate: 0,
        rotateString: 'rotate(0deg)',
        rotateConstant: 10,
        zoom: 1,
        horizontal:0,
        vertical:0,
        showChannels:true,
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
                visibility:true
            },
            {
                name: "2. dvr",
                channels: [
                    {
                        name: "kanal 1",
                        url: "kanal 1 urlsi gelecek buraya"
                    }
                ],
                visibility:true
            },
            {
                name: "dvr 3",
                channels: [

                ],
                visibility:true
            }
        ]
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
        this.setState({hasUrl:true, videoUrl:e.target.id})
        console.log(e.target.id)
    }

    tick(){
        if(this.state.hasUrl === true){
            if(this.state.controlVideo<100){
                this.setState({controlVideo:this.state.controlVideo + 0.2})
            }
            else{
                this.setState({controlVideo:100})
            }
        }
        
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1);
    }

    setVisibility = (e) => {
        const items  = this.state;
        
        items.dvrs.map((dvr) => {if(dvr.name === e.target.id){dvr.visibility = !dvr.visibility}});
        this.setState({items});
        console.log(items);
    }

    pushDown = (e) => {
        this.setState({vertical:this.state.vertical+10})
    }

    pushUp = (e) => {
        this.setState({vertical:this.state.vertical-10})
    }

    pushRight = (e) => {
        this.setState({horizontal:this.state.horizontal+10})
    }

    pushLeft = (e) => {
        this.setState({horizontal:this.state.horizontal-10})
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
                    <button onClick={this.hideChannels} className="channelShowHide"><i class="fa fa-caret-left" aria-hidden="true"></i></button>
                    <ul>
                        {this.state.dvrs.map((dvr) => { return (<li  data-id={dvr.name} key={dvr.name} ><b>{dvr.visibility ? "-":"+"}</b><b id={dvr.name} onClick={this.setVisibility}>{dvr.name}</b>
                            <ul>
                                {dvr.visibility? dvr.channels.map((channel) => { return(<li id={dvr.name} data-id={channel.url} key={channel.url} ><pre id={channel.url} onClick={this.setChannel}>  {channel.name} </pre></li>)}) : null}
                            </ul></li>
                        )})}
                    </ul>
                    
                </div>: <div className="dvrchannels" style={{width:'25px'}}><button onClick={this.hideChannels} className="channelShowHide"><i class="fa fa-caret-right" aria-hidden="true"></i></button></div>}
                {this.state.hasUrl ? <div className="videoplayer">
                    <button onClick={this.hideVideo} className="closeVideo"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    <div className="videoInfo"><b>Bilgiler Buraya gelecek</b><br/><b>Mesela url:</b> <a>{this.state.videoUrl}</a></div>
                    <video src="http://edge.flowplayer.org/functional.webm" controls ></video>
                </div>:""}
                
                <div className="footerImage"></div>
            </div>
        );
    }

}

export default Live