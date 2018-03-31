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
           
        };
    }

    onChange = e => {
        this.setState({
            value: e.target.value
        });
    }
    
    render() {
        const { friendList } = this.props;
        const showDetails = friendList.map((data, index) => {
          return (
              <MyLocation key={index}>
                <FriendsMap google={this.props.google} data={data}/>                
              </MyLocation>
            );
        });

        return (
            <div>
                <Layout>
                    <Header>
                        <p className="has-text-centered">{constants.Header}</p>
                    </Header>
                    <MyLocation>
                        <MyMap google={this.props.google} />
                    </MyLocation>
                    {
                      showDetails
                    }
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

function mapDispatchToProps(dispatch) {
    return {
        initialUploadAction: (data) => dispatch(initialFetchAction(data))
    };
}

export default connect(mapStateToProps, null)(GoogleApiWrapper({
    apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
  })(App));