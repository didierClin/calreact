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

  handleFormSubmit: function() {
    var appointment = {title: this.state.title, apt_time: this.state.apt_time}
    $.post('/appointments',
            {appointment: appointment})
      .done(function(data) {
              this.addNewAppointment(data);
            }
            .bind(this));
  },

  addNewAppointment: function(appointment) {
    // add react addons (collection of utilities) in config file application
    //
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.apt_time) - new Date(b.apt_time);
      })
    });
  },

  render: function() {
    return (
      <div>
        {/* we now manage state */}
        <AppointmentForm
          input_title={this.state.title}
          input_apt_time={this.state.apt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
     )
  }
});
