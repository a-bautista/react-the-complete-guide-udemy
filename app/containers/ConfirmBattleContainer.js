/**
 * Created by abautista on 06/08/2016.
 */
var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelper');

var ConfirmationBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function (){
        return {
            isLoading: true,
            playerInfo: []
        }
    },

    componentDidMount: function(){
        var query = this.props.location.query;
        //var that = this; // you catch the this function with that
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(players){
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0],players[1]]
                })
            }.bind(this))
    },

    render: function(){
        return (
         <ConfirmBattle
             isLoading={this.state.isLoading}
             playersInfo = {this.state.playersInfo}
         />
        );
    }


});

module.exports = ConfirmationBattleContainer;