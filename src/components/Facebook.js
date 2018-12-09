import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Vote from './Vote';
import VoteCombobox from './VoteCombobox';

export default class Facebook extends Component {

    state = {

        isLoggedIn: false,
        wantsVote: false,
        id: '',
        name: '',
        first_name: ''

    };

    componentClicked = () => console.log();

    responseFacebook = response => {
        this.setState({
            isLoggedIn: true,
            wantsVote: false,
            id: response.id,
            name: response.name,
            first_name: response.first_name
        });
    };

    render() {

        let fbContent;
        let chooseVote;

        if(this.state.isLoggedIn)
        {
            fbContent = (

                <div>
                    Hallo {this.state.first_name}
                    <Vote id={this.state.id} setVote={this.setVote.bind(this)} wantsVote={this.state.wantsVote}/>
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
        if(this.state.wantsVote)
        {
            chooseVote = (

                <VoteCombobox userId={this.state.id}/>

            );
        }

        return <div>{fbContent}{chooseVote}</div>;
    }

    setVote(e){

        this.setState(
            {
                wantsVote: e
            }
        );

    }

}


