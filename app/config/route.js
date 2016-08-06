/*
 <Route path="playerOne" component={PromptContainer}/>
 <Route path="playerTwo/:playerOne" component={PromptContainer}/>
 The above line indicates that playerOne will make a reference for playerTwo.
 * */

var React        = require('react');
var ReactRouter  = require('react-router');
var Router       = ReactRouter.Router;
var Route        = ReactRouter.Route;
var IndexRoute   = ReactRouter.IndexRoute;
var hashHistory  = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var route = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}/>
            <Route path='playerOne' header='Player One' component={PromptContainer}/>
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
            <Route path='battle' component ={ConfirmBattleContainer} />
        </Route>
    </Router>

);

module.exports = route