import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import Navigation from '../components/Navigation';
import Modal from '../components/Modal';

export default class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {showModal: true};
  }
  static propTypes = {
    children: PropTypes.object.isRequired,
  }
  render() {
    return (
      <section>
        <Navigation />
        {this.state.showModal ? 
          <Modal closeModal={() => this.setState({showModal: false}) } /> : null}
        {this.props.children}
      </section>
    );
  }
}
