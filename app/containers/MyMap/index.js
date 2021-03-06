import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: ''
    };
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    const { google } = this.props;
    if (google) {
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      if(navigator.geolocation) {
        let geocoder = new google.maps.Geocoder;
        let currentPos;             
          navigator.geolocation.getCurrentPosition((position) => {
            currentPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            const mapConfig = Object.assign({}, {
              center: currentPos,
              zoom: 2,
              mapTypeId: 'roadmap'
            });
            this.map = new maps.Map(node, mapConfig);
            const marker = new google.maps.Marker({
              position: currentPos,
              map: this.map,
              title: 'my-location'
            });
        });
    }
    }
  }


  render() {
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}