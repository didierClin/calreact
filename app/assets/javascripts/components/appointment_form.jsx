var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    // object that will contain our change of values in form fields
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  render: function() {
    return (
      <div>
        <h2> Make a new Appointment </h2>
        <form>
          <input name='title' placeholder='Appointment Title'
            value={this.props.input_title}
            onChange={this.handleChange}
          />
          <input name='apt_time' placeholder='Appointment date and time'
            value={this.props.input_apt_time}
            onChange={this.handleChange} />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
