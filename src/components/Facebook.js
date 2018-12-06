import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {

        isLoggedIn: false,
        userId: '',
        name: '',

    };

    componentClicked = () => console.log();

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name
        });
    };

    render() {

        let fbContent;

        if(this.state.isLoggedIn)
        {
            fbContent = (

                <div>
                    Welcome {this.state.name}
                </div>

            );
        }
        else
        {
            fbContent = (<FacebookLogin
            appId="270892293782831"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
        }

        return <div>{fbContent}</div>;
    }
}

