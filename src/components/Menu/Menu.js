import React from "react";
import "./Menu.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AppsIcon from "@material-ui/icons/Apps";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { authLogout } from "../../actions/auth";

class Menu extends React.Component {
  render() {
    let menu = (
      <nav className="menu">
        <Button className="dashboard-button">
          <HomeOutlinedIcon />
          <div>Dashboard</div>
          <ExpandMoreOutlinedIcon />
        </Button>

        <Button className="dashboard-button-2">
          <AppsIcon />
          <div>Apps</div>
          <ExpandMoreOutlinedIcon />
        </Button>

        <Button className="dashboard-button-2">
          <LayersOutlinedIcon />
          <div>UI Elements</div>
          <ExpandMoreOutlinedIcon />
        </Button>

        <Button className="dashboard-button-2">
          <CreateOutlinedIcon />
          <div>Form & Tables</div>
          <ExpandMoreOutlinedIcon />
        </Button>
        <div className="logout menu__info">
          <Button>
            <FileCopyOutlinedIcon />
            <div className="pages">Pages</div>
            <ExpandMoreOutlinedIcon />
          </Button>
          <ul>
            <li onClick={() => this.props.authLogout()}>
              <Button>
                <ExitToAppIcon />
                Logout
              </Button>
            </li>
          </ul>
        </div>
        <Button className="dashboard-button-2">
          <EqualizerOutlinedIcon />
          <div>Charts & Maps</div>
          <ExpandMoreOutlinedIcon />
        </Button>

        <Button className="dashboard-button-2">
          <RadioButtonUncheckedOutlinedIcon />
          <div>Others</div>
          <ExpandMoreOutlinedIcon />
        </Button>
      </nav>
    );

    return <div>{menu}</div>;
  }
}

export default connect(null, { authLogout })(Menu);
