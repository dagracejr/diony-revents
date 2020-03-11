import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import PropTypes from 'prop-types';

function DateInput({
  input: { value, onChange, ...restInput }, width, placeholder, meta: { touched, error }, ...rest
}) {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value).toDate() : null}
        onChange={onChange}
        {...restInput}
      />
      {touched && error && <Label basic color="red">{error}</Label>}
    </Form.Field>
  );
}

DateInput.propTypes = {
  input: PropTypes.shape().isRequired,
  width: PropTypes.number,
  placeholder: PropTypes.string,
  meta: PropTypes.shape().isRequired,
};

DateInput.defaultProps = {
  width: 16,
  placeholder: '',
};

export default DateInput;
