import React, { Component } from 'react';
import '../Css/PagesCSS.css';


class Alarm extends Component {
    state = {
        alarms: [
            {
                id: 1,
                dvrname: "siyahdvr",
                ip: "10.1",
                category: "ofis",
                county: "İstanbul",
                channelNumber: 8,
                actualChannel: 2,
                online: "evet",
                access: "evet",
                reportDate: "12.12.2012",
                workStatus: "2/8",
                waitingWorkStatus: "Ok",
                channelCondition: "10000000",
                waitingChannelCondition: "10000000",
                recordCondition: "11111110",
                waitingRecordCondition: "11111110",
                channelRecordCondition: "1011010",
                waitingChannelRecordCondition: "1010101",
                diskCondition: "normal",
                diskCapacity: 382546,
                freeCapacity: 121212,
                usedCapacity: 242312,
                NTPusage: "1",
                deviceTime: "12:12",
                NTPtime: "",
                DSTcondition: "0",
                DVRmodel: "asdasd",
                DVRserialnumber: "126356",
                SWversion: "1.46",
                recordTime: "60 gün",
                info: "durum iyi",
                seen:false
            },
            {
                id: 2,
                dvrname: "beyazdvr",
                ip: "5.9",
                category: "ofis",
                county: "İstanbul",
                channelNumber: 4,
                actualChannel: 1,
                online: "hayır",
                access: "evet",
                reportDate: "12.01.2012",
                workStatus: "1/4",
                waitingWorkStatus: "Ok",
                channelCondition: "1000",
                waitingChannelCondition: "10000000",
                recordCondition: "11111110",
                waitingRecordCondition: "11111110",
                channelRecordCondition: "1011010",
                waitingChannelRecordCondition: "1010101",
                diskCondition: "normal",
                diskCapacity: 382546,
                freeCapacity: 121212,
                usedCapacity: 242312,
                NTPusage: "1",
                deviceTime: "12:12",
                NTPtime: "",
                DSTcondition: "0",
                DVRmodel: "asdasd",
                DVRserialnumber: "126356",
                SWversion: "1.46",
                recordTime: "60 gün",
                info: "durum iyi",
                seen:false
            }
        ]
    }

    readAlarm = (e) => {
        const items = this.state;
        items.alarms.map((alarm) =>{if(String(alarm.id) === e.target.id){alarm.seen=true;}})
        alert(e.target.id + ' ID li alarm okundu!')
        this.setState({ items });
    }

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>DVR İsmi</th>
                        <th>IP</th>
                        <th>Kategori</th>
                        <th>Şehir</th>
                        <th>Kamera Sayısı</th>
                        <th>Aktuel Kamera Sayısı</th>
                        <th>Online</th>
                        <th>Erişim</th>
                        <th>Rapor Alma Zamanı</th>
                        <th>Çalışma Durumu</th>
                        <th>Beklenen Çalışma Durumu</th>
                        <th>Kanal Durumu</th>
                        <th>Beklenen Kanal Durumu</th>
                        <th>Kayıt Durumu</th>
                        <th>Beklenen Kayıt Durumu</th>
                        <th>Kanal Kayıt Durumu</th>
                        <th>Beklenen Kayıt Durumu</th>
                        <th>Disk Durumu</th>
                        <th>Kapasitesi</th>
                        <th>Kullanılabilir Alan</th>
                        <th>Kullanım Alanı</th>
                        <th>NTP Kullanımı</th>
                        <th>Chiaz Saati</th>
                        <th>NTP Saati</th>
                        <th>DST Durum</th>
                        <th>DVR Model</th>
                        <th>DVR Seri No</th>
                        <th>SW Versiyonu</th>
                        <th>Kayıt Süresi</th>
                        <th>Bilgi</th>
                    </tr>

                    {this.state.alarms.map((alarm) => {
                        if(alarm.seen ===false){
                            return (
                            <tr key={alarm.id} id={alarm.id} onClick={this.readAlarm}>
                                <td id={alarm.id}>{alarm.id}</td>
                                <td id={alarm.id}>{alarm.dvrname}</td>
                                <td id={alarm.id}>{alarm.ip}</td>
                                <td id={alarm.id}>{alarm.category}</td>
                                <td id={alarm.id}>{alarm.county}</td>
                                <td id={alarm.id}>{alarm.channelNumber}</td>
                                <td id={alarm.id}>{alarm.actualChannel}</td>
                                <td id={alarm.id}>{alarm.online}</td>
                                <td id={alarm.id}>{alarm.access}</td>
                                <td id={alarm.id}>{alarm.reportDate}</td>
                                <td id={alarm.id}>{alarm.workStatus}</td>
                                <td id={alarm.id}>{alarm.waitingWorkStatus}</td>
                                <td id={alarm.id}>{alarm.channelCondition}</td>
                                <td id={alarm.id}>{alarm.waitingChannelCondition}</td>
                                <td id={alarm.id}>{alarm.recordCondition}</td>
                                <td id={alarm.id}>{alarm.waitingRecordCondition}</td>
                                <td id={alarm.id}>{alarm.channelRecordCondition}</td>
                                <td id={alarm.id}>{alarm.waitingChannelRecordCondition}</td>
                                <td id={alarm.id}>{alarm.diskCondition}</td>
                                <td id={alarm.id}>{alarm.diskCapacity}</td>
                                <td id={alarm.id}>{alarm.freeCapacity}</td>
                                <td id={alarm.id}>{alarm.usedCapacity}</td>
                                <td id={alarm.id}>{alarm.NTPtime}</td>
                                <td id={alarm.id}>{alarm.deviceTime}</td>
                                <td id={alarm.id}>{alarm.NTPtime}</td>
                                <td id={alarm.id}>{alarm.DSTcondition}</td>
                                <td id={alarm.id}>{alarm.DVRmodel}</td>
                                <td id={alarm.id}>{alarm.DVRserialnumber}</td>
                                <td id={alarm.id}>{alarm.SWversion}</td>
                                <td id={alarm.id}>{alarm.recordTime}</td>
                                <td id={alarm.id}>{alarm.info}</td>
                            </tr>
                        )
                        }
                        
                    })}
                </tbody>
            </table>
        )
    }

}

export default Alarm