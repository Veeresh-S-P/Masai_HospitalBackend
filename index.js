const express = require('express');
const app = express();
const db = require('./database/db');
 const cors = require('cors');

 
app.use(express.json());


app.use(cors());


const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');



app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);



app.get("/",async(req,res)=>{
    return res.status(200).send({message:`Hello, this is the base endpoint!`})
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
