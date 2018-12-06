import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {

        isLoggedIn: false,
        userId: '',
        name: '',
        first_name: ''

    };

    componentClicked = () => console.log();

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
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
                </div>

            );
        }
        else
        {
            fbContent = (<FacebookLogin
            appId="270892293782831"
            autoLoad={true}
            fields="name,first_name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
        }

        return <div>{fbContent}</div>;
    }
}


