var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    // object that will contain our change of values in form fields
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  setApptTime: function(e) {
    var name = 'apt_time';
    obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    var inputProps = { name: 'apt_time' };

    return (
      <div>
        <h2> Make a new Appointment </h2>
        <form onSubmit={this.handleSubmit} >

          <input name='title' placeholder='Appointment Title'
            value={this.props.input_title}
            onChange={this.handleChange} />

          <Datetime input={false} open={true} inputProps={inputProps}
            value={this.props.input_apt_time}
            onChange={this.setApptTime} />

          <input type='submit' value='Make Appointment' className='submit-button'/>
        </form>
      </div>
    )
  }
});
