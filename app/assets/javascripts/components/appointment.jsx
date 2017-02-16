var Appointment = React.createClass({
  render: function(){
    return (
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{moment(this.props.appointment.apt_time).format('DD MMM YYYY, hh:mm:ss')}</p>
      </div>
    )
  }
});
