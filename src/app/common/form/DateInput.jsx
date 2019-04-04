import React from 'react';
import { Form, Label } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'

const DateInput = ({input, width, placeholder, meta: {touched, error}, ...rest}) =>{
    return(
        <Form.Field error={touched && !!error} width={width} >
            <DatePicker
            {...rest}
            placeholderText={placeholder}
            //Had to change the field moment to new Date to fix date issue
            selected={input.value ? new Date(input.value) : null}
            onChange={input.onChange}
            />
            {touched && error && <Label basic color='red'>{error}</Label>}
        </Form.Field>
    )
}

export default DateInput