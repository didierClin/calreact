var AppointmentsList = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.appointments.map(function(appointment) {
          // don't forget to return
          return (
            <Appointment appointment={appointment} key={appointment.id}/>
          )
        })}
      </div>
    )
  }
});
