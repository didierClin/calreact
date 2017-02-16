var Appointments = React.createClass({
  // single component above all the components that need the state in the hierarchy
  // https://facebook.github.io/react/docs/thinking-in-react.html
  getInitialState: function() {
    return {
      // return an object
      appointments: this.props.appointments,
      input_title: 'Daily standup meeting',
      input_apt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput: function(obj) {
    this.setStage(obj);
  },

  render: function() {
    return (
      <div>
        {/* we now manage state */}
        <AppointmentForm input_title={this.state.input_title}
          input_apt_time={this.state.input_apt_time}
          onUserInput={this.handleUserInput} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
     )
  }
});
