import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TextInput = ({
  input, width, type, placeholder, meta: { touched, error },
}) => (
  <Form.Field error={touched && !!error} width={width}>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && <Label basic color="red">{error}</Label>}
  </Form.Field>
);

TextInput.propTypes = {
  input: PropTypes.shape(),
  width: PropTypes.number,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.shape(),
};

TextInput.defaultProps = {
  input: null,
  width: 16,
  placeholder: '',
  meta: null,
};

export default TextInput;
