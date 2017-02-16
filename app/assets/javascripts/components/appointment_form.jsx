var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h2> Make a new Appointment </h2>
        <form>
          <input name='title' placeholder='Appointment Title' value={this.props.input_title}/>
          <input name='apt_time' placeholder='Appointment date and time' value={this.props.input_apt_time}/>
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
