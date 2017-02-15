class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order('apt_time ASC')
    @appointment = Appointment.new
  end
end
