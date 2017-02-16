var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h2> Make a new Appointment </h2>
        <form>
          <input name='title' placeholder='Appointment Title' />
          <input name='apt_time' placeholder='Appointment date and time' />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
