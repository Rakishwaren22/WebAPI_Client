import React, { Component } from 'react';
import './web_base.css';

class WebHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render = () => {
    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar-dark sticky-top"
          id="main_navbar"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-title">
                Nearby Hotel and Restaurant Finder System
              </div>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#menu_collp"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="menu_collp">
              <ul className="nav navbar-nav ml-auto sm" id="main_menu_item" />
            </div>
          </div>
        </nav>
      </div>
    );
  };
}

class WebFooter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render = () => {
    return (
      <div className="footer-content ">
        <footer className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-white">
              Copyright &copy; Rakesh Inc.
            </div>
          </div>
        </footer>
      </div>
    );
  };
}

export { WebHeader, WebFooter };
