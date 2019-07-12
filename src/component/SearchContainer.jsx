import React, { Component } from 'react';

class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked_val: 0
    };
  }

  componentDidMount() {}

  SearchKeyPress = e => {
    if (e.key == 'Enter' || e.keyCodee == 13) {
      this.props.onSearchReqs(
        'text_tx',
        this.SearchBox.value,
        this.state.checked_val
      );
    }
  };

  SortUp = () => {
    this.props.onSearchReqs('sort_up', null, -1);
  };

  SortDown = () => {
    this.props.onSearchReqs('sort_down', null, -1);
  };

  SetChecked = (e, types) => {
    this.setState({ checked_val: types });
  };

  render = () => {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter search Hotel or Restaurant"
            onKeyPress={e => this.SearchKeyPress(e)}
            ref={c => (this.SearchBox = c)}
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={e => this.SortDown()}
            >
              <i className="fas fa-sort-alpha-down" />
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={e => this.SortUp()}
            >
              <i className="fas fa-sort-alpha-up" />
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="customRadio"
              name="example"
              value="1"
              onChange={e => this.SetChecked(e, 1)}
            />
            <label className="custom-control-label" for="customRadio">
              <strong>Search for Restaurants</strong>
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="customRadio2"
              name="example"
              value="2"
              defaultChecked={true}
              onChange={e => this.SetChecked(e, 0)}
            />
            <label className="custom-control-label" for="customRadio2">
              <strong>Search for Hotels</strong>
            </label>
          </div>
        </div>
      </div>
    );
  };
}

export default SearchContainer;
