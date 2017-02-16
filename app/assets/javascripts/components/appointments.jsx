var Appointments = React.createClass({
  // single component above all the components that need the state in the hierarchy
  // https://facebook.github.io/react/docs/thinking-in-react.html
  getInitialState: function() {
    return {
      // return an object
      appointments: this.props.appointments,
      // rename input entries as title and apt_time
      title: 'Daily standup meeting',
      apt_time: 'Tomorrow at 9am'
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  render: function() {
    return (
      <div>
        {/* we now manage state */}
        <AppointmentForm
          input_title={this.state.title}
          input_apt_time={this.state.apt_time}
          onUserInput={this.handleUserInput} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
     )
  }
});
