import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Vote from './Vote';

export default class Facebook extends Component {

    state = {

        isLoggedIn: false,
        id: '',
        name: '',
        first_name: ''

    };

    componentClicked = () => console.log();

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            id: response.id,
            name: response.name,
            first_name: response.first_name
        });
    };

    render() {

        let fbContent;

        if(this.state.isLoggedIn)
        {
            fbContent = (

                <div>
                    Hallo {this.state.first_name}
                    <Vote id={this.state.id}/>
                </div>

            );
        }
        else
        {
            fbContent = (<FacebookLogin
            appId="270892293782831"
            autoLoad={true}
            fields="name,first_name,email,picture,id"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
        }

        return <div>{fbContent}</div>;
    }
}


