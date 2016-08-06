/**
 * Created by abautista on 06/08/2016.
 */
var React = require('react');

function puke(object){
    return <pre>{JSON.stringify(object,null,' ')}</pre>
}

function ConfirmBattle(props){

    return props.isLoading === true

        ? <p>Loading!</p>
        : <div>Confirm battle: {puke(props)}</div>
};

module.exports = ConfirmBattle;