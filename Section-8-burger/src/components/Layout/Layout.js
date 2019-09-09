import React, { Component } from "react";
import Aux from "../../higher order component (hoc)/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

/*
    This is a functional component and we can return a json object, a div or an array (but you need to return a key).
    The alternative to these options is to wrap everythin in an auxiliary component.  
*/

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  // The main is only for providing the margin top of the burger.
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
