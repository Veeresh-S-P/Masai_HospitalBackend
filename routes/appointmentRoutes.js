const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');



router.get('/', appointmentController.getAllAppointments);
router.post('/', appointmentController.createAppointment);
router.put('/:id', appointmentController.editAppointment);
router.delete('/:id', appointmentController.deleteAppointment);



module.exports = router;
