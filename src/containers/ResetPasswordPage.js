import React from "react";
import "./LoginPage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetPassword, clearError } from "../actions/auth";
import Modal from "react-modal";
import Loader from "../components/Loader/Loader";

class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      dateOfBirth: "",
      password: "",
      passwordConfirm: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleChangeDate = (value) => {
    this.setState({ dateOfBirth: value });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.resetPassword(this.state);
  }

  render() {
    let redirect = null;
    if (!!this.props.authenticate) {
      redirect = <Redirect to="/dashboard" />;
    }
    const {
      email,
      password,
      contact,
      dateOfBirth,
      name,
      passwordConfirm,
    } = this.state;

    let form = "";

    if (!this.props.loading) {
      form = (
        <React.Fragment>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-container change">
              <label className="label">Name: </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="John"
                value={name}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container change">
              <label className="label">Email: </label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@email.com"
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container change">
              <label className="label">Contact: </label>
              <input
                type="text"
                name="contact"
                className="input"
                placeholder=""
                value={contact}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container change">
              <label className="label">Date of Birth: </label>
              <DatePicker
                selected={dateOfBirth}
                isClearable
                showYearDropdown
                scrollableYearDropdown
                maxDate={new Date()}
                name="dateOfBirth"
                onChange={(value) => this.handleChangeDate(value)}
                className="input"
              />
            </div>

            <div className="input-container change">
              <label className="label">New Password: </label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-container change">
              <label className="label">Confirmed Password: </label>
              <input
                type="password"
                name="passwordConfirm"
                className="input"
                placeholder="confirmed password"
                value={passwordConfirm}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" id="login-btn">
              Reset Password
            </button>
          </form>
          <p className="signup-label">
            Don't Have an account?
            <Link to="/signup" className="link">
              Sign up
            </Link>
          </p>
        </React.Fragment>
      );
    } else {
      form = <Loader />;
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
          form
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

export default connect(mapStateToProps, { resetPassword, clearError })(
  ResetPasswordPage
);
