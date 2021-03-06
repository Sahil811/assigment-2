import React from "react";
import "./Features.css";
import LineChart1 from "./subComponents/LineChart1";
import LineChart2 from "./subComponents/LineChart2";
import BarChart from "./subComponents/BarChart";
import PieChart from "./subComponents/PieChart";
import LoyaltyOutlinedIcon from "@material-ui/icons/LoyaltyOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import {} from "bootstrap/dist/css/bootstrap.min.css";

class Features extends React.Component {
  render() {
    let feature = (
      <Container fluid>
        <Row>
          <Col sm={6} className="badge-container">
            <div className="badge">
              <div className="symbol">
                <LoyaltyOutlinedIcon className="metaBadge" />
              </div>
              <h2 className="username">Congratulation John,</h2>
              <p className="sales">
                You have done 57.6% more sales today. Check your name badge in
                your Profile
              </p>
            </div>
          </Col>
          <Col sm={6} className="col-chart">
            <Row className="row-chart">
              <Col sm={6} className="max-chart">
                <div>
                  <LineChart1 />
                </div>
              </Col>
              <Col sm={6} className="max-chart-2">
                <div>
                  <LineChart2 />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col sm={6} className="bar-info">
            <Row>
              <Col>
                <div className="view-details">
                  <h2>2.7K</h2>
                  <p>Avg Sessions</p>
                  <h3>
                    <span>+5.2%</span>vs 7 Days
                  </h3>
                  <Button>
                    View Details &nbsp;
                    <ChevronRightIcon />
                  </Button>
                </div>
              </Col>
              <Col>
                <div className="view-details-2">
                  <div className="week__info extra-info">
                    Last 7 Days
                    <ExpandMoreIcon />
                  </div>
                  <BarChart />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="data-name">Goal $100000</div>
                <div className="base purple">
                  <div></div>
                </div>
              </Col>
              <Col>
                <div className="data-name">Users 100K</div>
                <div className="base orange">
                  <div></div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="data-name">Retention: 90%</div>
                <div className="base red">
                  <div></div>
                </div>
              </Col>
              <Col>
                <div className="data-name">Duration: 1yr</div>
                <div className="base green">
                  <div></div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={6}>
            <Col className="card-4">
              <Row>
                <Col>
                  <div className="view-details">
                    <div className="trackers">
                      <h4>Support Tracker</h4>
                      <h1>163</h1>
                      <p>Tickets</p>
                    </div>
                  </div>
                </Col>
                <Col sm={10} className="pie-container">
                  <div className="week__info">
                    Last 7 Days
                    <ExpandMoreIcon />
                  </div>
                  <PieChart />
                </Col>
              </Row>
              <Row className="view-details-4">
                <div>
                  <p>New Tickets</p>
                  <h3>29</h3>
                </div>
                <div>
                  <p>Open Tickets</p>
                  <h3>63</h3>
                </div>
                <div>
                  <p>Response Time</p>
                  <h3>1d</h3>
                </div>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    );

    return <React.Fragment> {feature} </React.Fragment>;
  }
}

export default Features;
