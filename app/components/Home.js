var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
    render: function(){
        return (
            <MainContainer>
                <h1>Perfect Summer</h1>
                <p className='lead'>Find your perfect destination for this summer.</p>
                <Link to='/playerOne'>
                    <button type="button" className='btn btn-lg btn-success'>Get Started</button>
                </Link>
            </MainContainer>
        )
    }
});

module.exports = Home;

