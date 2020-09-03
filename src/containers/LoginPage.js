import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authLogin, clearError } from "../actions/auth";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import Loader from "../components/Loader/Loader";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.authLogin(this.state);
  }

  isFormValid = () => {
    const { email, password } = this.state;

    return email && password;
  };

  render() {
    let redirect = null;
    if (!!this.props.authenticate) {
      redirect = <Redirect to="/dashboard" />;
    }

    const { email, password } = this.state;
    //
    let loginPage = "";
    let loginButton = ["login-btn"];
    if (!this.isFormValid()) {
      loginButton = ["login-btn", "login-btn:disabled"].join(" ");
    }

    if (!this.props.loading) {
      loginPage = (
        <React.Fragment>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <label className="label">Email: </label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                className="input"
                placeholder="you@email.com"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-container">
              <label className="label">Password: </label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
              <Link to="/resetpassword" className="link forgotten-password">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className={loginButton}
              disabled={!this.isFormValid()}
            >
              Login
            </button>
          </form>
          <p className="signup-label">
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Sign up
            </Link>
          </p>
        </React.Fragment>
      );
    } else {
      loginPage = <Loader />;
    }
    return (
      <div className="LoginPage">
        {redirect}
        {this.props.error ? (
          <Modal
            className="modal"
            onRequestClose={this.props.clearError}
            isOpen={this.props.error}
          >
            <h3>{this.props.error}</h3>
          </Modal>
        ) : (
          loginPage
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticate: state.user.token,
  loading: state.user.loading,
  error: state.user.error,
});

export default connect(mapStateToProps, { authLogin, clearError })(LoginPage);
