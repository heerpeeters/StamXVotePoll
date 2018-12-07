import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class Vote extends Component {

    state = {

        hasVoted: false

    };

    render() {

        let voteContent

        if(this.state.hasVoted)
        {
            voteContent = (

                <div>
                    <p>Bedankt om te stemmen!</p>
                    <p><Button bsStyle="default" bsSize="large" block>Stem wijzigen</Button></p>
                </div>
            );
        }
        else
        {

            voteContent = (

                <div>
                    Je hebt nog geen stem uitgebracht
                </div>

            );

        }

        return (
            <div>{voteContent}</div>
        );
    }

    componentDidMount(){

        fetch("https://stamxvote.azurewebsites.net/pollapi/auth/" + Number(this.props.id))
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