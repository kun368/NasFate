import React, { Component } from 'react';
import FilterWithSearch from './components/FilterWithSearch';
import TagMessageList from './components/TagMessageList';

export default class Search extends Component {
  static displayName = 'Search';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-page">
        <FilterWithSearch />
        <TagMessageList />
      </div>
    );
  }
}
