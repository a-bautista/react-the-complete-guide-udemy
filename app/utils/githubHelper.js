/**
 * Created by abautista on 06/08/2016.
 */
var axios = require('axios');
var id = "client_id";
var sec = "secret_id";
var param = "?client_id=" + id + "&client_secret= " + sec;


function getUserInfo(username){
    //this is going to return a promise
     return axios.get('https://api.github.com/users/'+username + param)
}

var helpers ={
    getPlayersInfo: function(players){
    //fetch data from github
        return axios.all(players.map(function(username){
            return getUserInfo(username)
        })).then(function(info){
            //console.log('Info',info);
            return info.map(function(user){
                return user.data;
            })
        }).catch(function(error){
            console.warn('Error in getPlayersInfo',error);
        })
    }
};

module.exports = helpers;