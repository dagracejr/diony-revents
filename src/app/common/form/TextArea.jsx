import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TextArea = ({
  input, rows, width, placeholder, meta: { touched, error },
}) => (
  <Form.Field error={touched && !!error} width={width}>
    <textarea {...input} placeholder={placeholder} rows={rows} />
    {touched && error && <Label basic color="red">{error}</Label>}
  </Form.Field>
);

TextArea.propTypes = {
  input: PropTypes.shape(),
  placeholder: PropTypes.string,
  width: PropTypes.number,
  rows: PropTypes.number,
  meta: PropTypes.shape(),
};

TextArea.defaultProps = {
  input: null,
  placeholder: '',
  width: 16,
  rows: 3,
  meta: null,
};

export default TextArea;
