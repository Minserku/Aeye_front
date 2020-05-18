import React, { Component } from 'react';
import axios from 'axios';
import { Spring } from 'react-spring/renderprops'
//구글맵 API Import
import Maps from './Maps';

import traffic from '../images/traffic_light.png';
import crosswalk from '../images/crosswalk.png';
import busstop from '../images/bus_stop.png';

import '../css/location.css';

import Location_form from './Location_form';
import Location_list from './Location_list';
import Loader from '../Loader';

export default class Location extends Component {
    state = {
        on:false,
        location_datas: [],
        location_data: {},
        loader : false,
        url: "/api/locations"
    };
    
    componentDidMount() {
        this.getDatas();
    };

    // 생성
    createDatas = async data => {
        this.setState({ loader: true });

        await axios.post(this.state.url, {
            location_name: data.location_name,
            location_explain: data.location_explain,
            location_lat: data.location_lat,
            location_lng: data.location_lng,
        });

        this.getDatas();
    };
    
    // 조회
    getDatas = async() => {
        this.setState({ loader: true });
        const location_datas = await axios.get(this.state.url);
        this.setState({ location_datas: location_datas.data, loader: false });
        console.log(location_datas);
    };

    editDatas = async data => {
        // clear datas obj
        this.setState({ location_data: {}, loader: true });

        await axios.put(`${this.state.url}/${data.id}`, {
            location_name: data.location_name,
            location_explain: data.location_explain,
            location_lat: data.location_lat,
            location_lng: data.location_lng,
        });
        this.getDatas();
    };

    //삭제
    deleteDatas = async id => {
        this.setState({ loader: true });
        await axios.delete(`${this.state.url}/${id}`);

        this.getDatas();
    };

    onFormSubmit = data => {
        if(data.isEdit) {
            //is edit true
            this.editDatas(data);
        } else {
            //is eidt false
            this.createDatas(data);
        }
    };

    onDelete = id => {
        this.deleteDatas(id);
    }

    onEdit = data => {
        this.setState({ location_data: data });
        this.setState({
            on:!this.state.on
        })
    }

    render() {
        return (
            <div className="location">
              <div className="blackline" />
                <div className="map_section">
                  <div className="map_section_left">
                    <Location_form
                      location_data={this.state.location_data}
                      onFormSubmit={this.onFormSubmit} 
                    />
                    <div className="map_section_category">
                      <div className="child category_section">
                        <img src={traffic} className="category_img"></img>
                        <Spring
                          from={{number :0 }}
                          to={{number:99}}
                          delay={200}
                        >
                          {props => <div>{props.number}</div>}
                        </Spring>
                      </div>
                      <div className="child category_section">
                        <img src={crosswalk} className="category_img"></img>
                        <p>qwe</p>
                      </div>
                      <div className="child category_section">
                        <img src={busstop} className="category_img"></img>
                        <p>qwe</p>
                      </div>
                    </div>
                    {/* <Location_list
                        location_datas={this.state.location_datas}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                    /> */}
                    
                  </div>
                                    
                  <div className="map_section_right">
                    {this.state.loader ? <Loader /> : ""}
                    <Maps />
                  </div>
                  

                    
                </div>
            </div>
        );
    }
}

