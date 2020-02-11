import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

const mapState = (state) => ({
  answer: state.test.answer,
});

export class TestComponent extends PureComponent {
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

export default connect(mapState)(TestComponent);
