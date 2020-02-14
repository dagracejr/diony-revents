import React from 'react';
import { Form, Label, Select } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SelectInput = ({
  input, placeholder, multiple, options, meta: { touched, error },
}) => (
  <Form.Field error={touched && !!error}>
    <Select
      value={input.value || null}
      onChange={(e, data) => input.onChange(data.value)}
      placeholder={placeholder}
      options={options}
      multiple={multiple}
    />
    {touched && error && <Label basic color="red">{error}</Label>}
  </Form.Field>
);

SelectInput.propTypes = {
  input: PropTypes.shape(),
  placeholder: PropTypes.string,
  multiple: PropTypes.shape(),
  options: PropTypes.arrayOf(PropTypes.shape()),
  meta: PropTypes.shape(),
};

SelectInput.defaultProps = {
  input: null,
  placeholder: '',
  multiple: null,
  options: [],
  meta: null,
};

export default SelectInput;
