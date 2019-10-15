/**
 * Created by alexbr on 8/3/16.
 */
/*This file will contain the UI for both player one and player two.
 push is used in objects where you pass objects and queries or routes.

* */

var React = require('react');
var Prompt = require('../components/Prompt');
var PromptContainer = React.createClass({

    contextTypes: {

        router: React.PropTypes.object.isRequired

    },

    getInitialState: function () {
        return {
            username: ''

        }
    },

    handleSubmitUser: function (e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            //go to battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })

        } else {
            //go to player two
            this.context.router.push('/playerTwo/' + this.state.username)
        }
    },

    handleUpdateUser: function (event) {
        this.setState({
            username: event.target.value
        });
    },


    render: function () {

        return (
            <Prompt onSubmitUser={this.handleSubmitUser} 
                    onUpdateUser={this.handleUpdateUser}
                    header={this.props.route.header}
                    username={this.state.username}/>
        )
    }
});

module.exports = PromptContainer;