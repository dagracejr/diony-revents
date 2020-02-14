import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapState = (state) => ({
  answer: state.test.answer,
});

class TestComponent extends PureComponent {
  render() {
    const {
      answer,
    } = this.props;
    return (
      <>
        <h1>Test Component</h1>
        <h3>{`The answers is: ${answer}`}</h3>
      </>
    );
  }
}

TestComponent.propTypes = {
  answer: PropTypes.number,
};

TestComponent.defaultProps = {
  answer: null,
};

export default connect(mapState)(TestComponent);
