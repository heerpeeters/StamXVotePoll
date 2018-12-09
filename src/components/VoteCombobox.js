import React, { Component } from 'react';
import { Combobox } from 'react-widgets';
import Button from 'react-bootstrap/lib/Button';
import '../VoteCombobox.css';

export default class VoteCombobox extends Component {

    state = {

        hasVoted: false,
        partyId: null

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
            onChange={value => this.setState({ partyId:value })}
            />);

        chooseVote = (
            <div>
            <p>Kies een partij en druk op bevestigen om je stem uit te brengen</p>
            {comboBox}
                <p className="Button"><Button bsStyle="default" bsSize="large" block onClick={(e) => this.commitVote(e)}>Stem wijzigen</Button></p>
            </div>
        );

        return (
            <p>{chooseVote}</p>
        );
    }

    commitVote()
    {

        const user = {userId: this.state.id, partyId: this.state.partyId};

        fetch("https://stamxvote.azurewebsites.net/pollapi/user/", {

            method: 'PUT',
            body: JSON.stringify(user)

        })
            .then(result => {return result.json();})
            .then((result) => {
                this.setState({

                    hasVoted: result

                });
            }
            
            )

    }

}

//export default Vote;