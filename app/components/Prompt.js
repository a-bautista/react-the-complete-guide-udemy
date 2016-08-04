/**
 * Created by alexbr on 8/3/16.
 */
var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;
/*It throws errors when something is not appropriate with the correct data type.
* */

//functional stateless components which renders UI

function Prompt (props){
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Github user"
                               onChange={props.onUpdateUser}
                               value={props.username}
                               type="text" />
                    </div>
                    <div className="form-group col-sm4 col-sm-offset-4">
                        <button className="btn btn-block btn-success"
                                type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


Prompt.propTypes = {
        header: PropTypes.string.isRequired,
        onUpdateUser: PropTypes.func.isRequired,
        onSubmitUser: PropTypes.func.isRequired,
        username: PropTypes.string.isRequired
    }

module.exports = Prompt;