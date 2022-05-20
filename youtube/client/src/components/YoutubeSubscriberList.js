import React, { Component } from 'react';
import { gapi } from 'gapi-script';

class YoutubeSubscriberList extends Component {
    
    componentDidMount() {
      window.gapi.load('client:auth2', function() {
        window.gapi.client.init({
          apiKey: 'AIzaSyBMQ71meQ0v61kPDfj57caU7cCn25vEDc0',
          clientId: '136706325474-jqvg7u4aivmlu71i61335hqp0tj240aq.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/youtube.readonly',
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        }).then(function() { 
            const GoogleAuth = gapi.auth2.getAuthInstance()
            console.log(GoogleAuth)
            // Listen for sign-in state changes.
            // GoogleAuth.isSignedIn.listen(updateSigninStatus); 
        });
      });
    }

    listChannelsFollowed = () => {
        console.log('users channels are as follows');
            
            const request = gapi.client.youtube.subscriptions.list({
                "mySubscribers": true
              })
            // Execute the API request.
            request.execute(function(response) {
            console.log(response);
            });
    };
    

    login() {
      console.log('logging in...');
      window.gapi.auth2.getAuthInstance().signIn();
    }

    render() {
      return (
        <div>
          <button type="button" onClick={this.login.bind(this)}class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">+ Youtube Login</button>
          <button type="button" onClick={this.listChannelsFollowed.bind(this)}class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Pull Channel Info</button>

        </div>
      )
    }
  }


export default YoutubeSubscriberList