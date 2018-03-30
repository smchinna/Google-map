import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class FriendsMap extends Component {
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
    const { google, data } = this.props;
    if (google) {
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      if (navigator.geolocation) {
        let geocoder = new google.maps.Geocoder;
        let position = {};
        geocoder.geocode({'address': data.address}, (results, status) => {
          position.lat = results[0].geometry.location.lat();
          position.lng = results[0].geometry.location.lng();
          const mapConfig = Object.assign({}, {
          center: position,
          zoom: 2,
          mapTypeId: 'roadmap'
        });
        this.map = new maps.Map(node, mapConfig);
        const marker = new google.maps.Marker({
          position: position,
          map: this.map,
          title: data.address
        });
        })
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