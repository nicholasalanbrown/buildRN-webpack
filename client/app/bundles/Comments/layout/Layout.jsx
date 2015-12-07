import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import Navigation from '../components/Navigation';

export default class Layout extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  render() {
    return (
      <section>
        <Navigation />
        {this.props.children}
      </section>
    );
  }
}
