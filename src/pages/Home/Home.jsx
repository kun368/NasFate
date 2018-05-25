import React, { Component } from 'react';
import AbilityIntroduction from './components/AbilityIntroduction/AbilityIntroduction';
import ExcellentHomePage from './components/ExcellentHomePage/ExcellentHomePage';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <ExcellentHomePage/>
        <AbilityIntroduction/>
      </div>
    );
  }
}
