import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../app/common/form/TextInput";
import TextArea from "../../app/common/form/TextArea";

//Because we're using reduxForm, we also have access to
//the handle submit which is part of the props
const LoginForm = () => {
  return (
    <Form error size="large">
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="description"
          type="text"
          rows={3}
          component={TextArea}
          placeholder="What message would you like to send to this person?"
        />
        <Button fluid size="large" color="teal">
          Send Invitation
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({ form: "loginForm" })(LoginForm);
