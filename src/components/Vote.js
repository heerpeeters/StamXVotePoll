import React, { Component } from 'react';

export default class Vote extends Component {

    state = {

        hasVoted: false

    };

    render() {

        let voteContent

        this.hasVoted(this.props.userId)

        if(this.state.hasVoted)
        {
            voteContent = (

                <div>
                    Bedankt om te stemmen
                </div>

            );
        }
        else
        {

            voteContent = (

                <div>
                    Je moet nog stemmen
                </div>

            );

        }

        return (
            <div>{voteContent}</div>
        );
    }

    hasVoted(props){

        fetch("http://stamxvote.azurewebsites.net/pollapi/auth/" + this.props.userId)
            .then(res => res.json())
            .then((result) => {
                this.setState({

                    hasVoted: result

                });
            }
            )
        }
    }

//export default Vote;