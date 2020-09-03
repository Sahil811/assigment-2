import React from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Features from "../components/Features/Features";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import PropsTypes from "prop-types";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

function DashBoard(props) {
  let redirect = null;
  if (!props.authenticate) {
    redirect = <Redirect to="/" />;
  }

  let dashboard = "";
  if (!props.loading && !!props.authenticate) {
    dashboard = (
      <React.Fragment>
        <Header />
        <main>
          <div className="setting">
            <SettingsOutlinedIcon
              fontSize="medium"
              style={{ marginTop: "7px" }}
            />
          </div>
          <Menu />
          <Features />
        </main>
      </React.Fragment>
    );
  } else {
    dashboard = <Loader />;
  }
  return (
    <div className="dashboard">
      {redirect}
      {dashboard}
    </div>
  );
}

DashBoard.PropsTypes = {
  loading: PropsTypes.boolean,
  authenticate: PropsTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authenticate: state.user.token,
  loading: state.user.loading,
});

export default connect(mapStateToProps, null)(DashBoard);
