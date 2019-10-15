/**
 * Created by alexbr on 7/2/16.
 */
/*
 * changeURL: function() is a method inside of a component and it gets activated
 * when the function is rendered and then you click on the Link.
 * */

var React    = require('react');
var ReactDOM = require('react-dom');
var routes   = require('../app/config/route.js');


ReactDOM.render(
    routes,
    document.querySelector('.container')
);