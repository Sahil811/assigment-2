import React from "react";
import "./Menu.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LayersOutlinedIcon from "@material-ui/icons/LayersOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { authLogout } from "../../actions/auth";
import { Container, Row, Col } from "react-bootstrap";
import {} from "bootstrap/dist/css/bootstrap.min.css";

class Menu extends React.Component {
  render() {
    let menu = (
      <div className="menu">
        <Container fluid>
          <Row>
            <Col>
              <div className="menu__info">
                <Button className="dashboard-button">
                  <HomeOutlinedIcon />
                  <div>Dashboard</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
              </div>
            </Col>

            <Col>
              <div className="menu__info">
                <Button className="dashboard-button-2">
                  <AppsIcon />
                  <div>Apps</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
              </div>
            </Col>

            <Col sm={1.2}>
              <div className="menu__info">
                <Button className="dashboard-button-2">
                  <LayersOutlinedIcon />
                  <div>UI Elements</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
              </div>
            </Col>

            <Col sm={1.2}>
              <div className="menu__info">
                <Button className="dashboard-button-2">
                  <CreateOutlinedIcon />
                  <div>Form & Tables</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
              </div>
            </Col>

            <Col>
              <div className="logout menu__info">
                <Button>
                  <FileCopyOutlinedIcon />
                  <div className="pages">Pages</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
                <ul>
                  <li onClick={() => this.props.authLogout()}>
                    <Button>Logout</Button>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={1.2}>
              <div className="menu__info">
                <Button className="dashboard-button-2">
                  <EqualizerOutlinedIcon />
                  <div>Charts & Maps</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
              </div>
            </Col>

            <Col>
              <div className="menu__info">
                <Button className="dashboard-button-2">
                  <RadioButtonUncheckedOutlinedIcon />
                  <div>Others</div>
                  <ExpandMoreOutlinedIcon />
                </Button>
              </div>
            </Col>

            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );

    return <div>{menu}</div>;
  }
}

export default connect(null, { authLogout })(Menu);
