import React, { Component } from 'react';

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
                    Bedankt om te stemmen {this.props.id}
                </div>

            );
        }
        else
        {

            voteContent = (

                <div>
                    Je moet nog stemmen {this.props.id}
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