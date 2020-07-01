import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something...', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            value={this.state.text}
            onChange={this.onChange}
            type="text"
            name="text"
            placeholder="Search Users..."
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-block btn-dark"
          />
        </form>
        {showClear && (
          <button className="btn btn-block btn-light" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
