import React, { Component } from 'react';
import { Combobox } from 'react-widgets';
import Button from 'react-bootstrap/lib/Button';
import '../VoteCombobox.css';

export default class VoteCombobox extends Component {

    state = {

        hasVoted: false,
        partyId: null,
        userId: this.props.id-1

    };

    render() {
        let chooseVote;
        let parties  = [
            {id: 0, name:'N-VA'},
            {id: 1, name:'Open-VLD'},
            {id: 2, name:'SPA'},
            {id: 3, name:'Vlaams Belang'},
            {id: 4, name:'Groen'},
            {id: 5, name:'PVDA'},
            {id: 6, name:'CD&V'}
        ];
        var shuffle = require('shuffle-array');

        shuffle(parties);

        let comboBox = (
            <Combobox
            data={parties}
            valueField='id'
            textField='name'
            filter='contains'
            value={this.state.value}
            onChange={this.handleComboboxChange}
            className="VoteCombobox"
            />);

        chooseVote = (
            <div>
            <p>Kies een partij en druk op bevestigen om je stem uit te brengen</p>
            {comboBox}
                <p className="Button"><Button bsStyle="default" bsSize="large" block onClick={(e) => this.commitVote(e)} className="Button">Stem wijzigen</Button></p>
            </div>
        );

        return (
            <p>{chooseVote}</p>
        );
    }

    handleComboboxChange = (evt) => 
    {

        this.setState({partyId:evt.id});

    }

    commitVote()
    {

        let user = {userId: this.state.userId, partyId: this.state.partyId};

        const options = { 
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(user)
          
        } 

        fetch("https://stamxvote.azurewebsites.net/pollapi/user/", options)
            .then(result => {console.log(result)
            if(result.ok){

                this.setVoteFalse();

            }})
            .then((result) => {
                this.setState({

                    hasVoted: result

                });
            }
            
            )

    }

    setVoteFalse()
    {

        this.props.setVote(false);

    }

}

//export default Vote;