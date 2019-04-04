import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import moment from 'moment';
import cuid from "cuid";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "templebar", text: "Temple Bar", value: "templebar" },
  { key: "running", text: "Running", value: "running" },
  { key: "exercise", text: "Exercise", value: "exercise" },
  { key: "singing", text: "Singing", value: "singing" },
  { key: "drink", text: "Drink", value: "drink" },
  { key: "travel", text: "Travel", value: "travel" }
];
const categoryContribution = [
  { key: "5", text: "5", value: "5" },
  { key: "10", text: "10", value: "10" },
  { key: "15", text: "15", value: "15" },
  { key: "20", text: "20", value: "20" },
  { key: "25", text: "25", value: "25" },
  { key: "30", text: "30", value: "30" }
];

const validate = combineValidators({
  title: isRequired({ message: "The TH title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters."
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired('date')
});

class EventForm extends Component {
  //When we click view on each TH,
  //We're going to be able to see the event with more details
  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        bigHero: "Ailem"
      };

      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment style={{ margin: "50px 0px" }}>
            <Header sub color="teal" content="Treasure Hunt Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="TH Name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your TH About?"
              />
              <Field
                name="description"
                type="text"
                rows={3}
                component={TextArea}
                placeholder="Tell us About your TH"
              />
              <Header sub color="teal" content="Treasure Hunt Location" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="TH City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="TH Venue"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="yyyy-MM-dd HH:mm"
                timeFormat='HH:mm'
                showTimeSelect
                placeholder="Date and Time of Treasure H"
              />
              <Header sub color="teal" content="Contribution (Euro)" />
              <Field
                name="contribution"
                type="text"
                component={SelectInput}
                options={categoryContribution}
                placeholder="TH Contribution in €"
              />
              <Button
                //Button is disabled unless we fill up the form
                disabled={invalid || submitting || pristine}
                positive
                style={{ background: "#008577", color: "white" }}
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
