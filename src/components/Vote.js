import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class Vote extends Component {

    state = {

        hasVoted: false

    };

    render() {

        let voteContent

        if(this.state.hasVoted && !this.props.wantsVote)
        {
            voteContent = (

                <div>
                    <p>Bedankt om te stemmen!</p>
                    <p><Button bsStyle="default" bsSize="large" block onClick={(e) => this.setVote(e)}>Stem wijzigen</Button></p>
                </div>
            );
        }
        else if(!this.props.wantsVote)
        {

            voteContent = (

                <div>
                    Je hebt nog geen stem uitgebracht
                    <p><Button bsStyle="default" bsSize="large" block onClick={(e) => this.setVote(e)}>Stem uitbrengen</Button></p>
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

    setVote()
    {

        this.props.setVote(true);

    }

    }

//export default Vote;