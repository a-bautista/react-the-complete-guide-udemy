/**
 * Created by alexbr on 8/3/16.
 */
/*
 * If we want to use a class in JS we need to refer to it as className
 * */

var React = require('react');

var Main = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;