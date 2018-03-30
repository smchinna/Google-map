import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react'
import MyMap from 'containers/MyMap';
import FriendsMap from 'containers/FriendsMap';
import { Layout, MyLocation, Header } from 'components/Layout/style';
import * as constants from './constants';
import { connect } from 'react-redux';
import { getNameSelectors } from 'services/friend/selectors';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPos: { lat: 12.00, lng: 22.12 }
        };
    }
    
    render() {
        const { currentPos } = this.state;
        console.log(this.props);
        return (
            <div>
                <Layout>
                    <Header>
                        <p className="has-text-centered">{constants.Header}</p>
                    </Header>
                    <MyLocation>
                        <MyMap google={this.props.google} />
                    </MyLocation>
                    <MyLocation>
                        <div className="columns is-mobile is-desktop is-tablet">
                        </div>
                        <FriendsMap google={this.props.google} currentPos={currentPos} place="London"/>
                    </MyLocation>
                </Layout>
            </div>
        );
    }
}

function mapStateToProps(state) {
   return {
        friendList: getNameSelectors(state)
   }
}

export default connect(mapStateToProps, null)(GoogleApiWrapper({
    apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  })(App));