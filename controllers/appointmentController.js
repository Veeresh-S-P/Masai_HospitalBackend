const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json({ message: 'Appointment created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAppointment) throw new Error('Appointment not found');
        res.status(200).json({ message: 'Appointment updated successfully', appointment: updatedAppointment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAppointment = await Appointment.findByIdAndDelete(id);
        if (!deletedAppointment) throw new Error('Appointment not found');
        res.status(200).json({ message: 'Appointment deleted successfully', appointment: deletedAppointment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
