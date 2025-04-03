import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const { MONGO_URI } = process.env;

// App & Middlewares
const app = express();
app.use(express.json());
app.use(cors());

// DB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`MongoDB Connected!`))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Mongoose Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

// CRUD Operations
app.get('/students/all', async (_, res) => {
  const students = await Student.find();
  res.json(students);
});
app.post('/students', async (req, res) => {
  const { name, rollNo } = req.body;
  const newStudent = new Student({name: name, rollNo: rollNo.toUpperCase() });
  await newStudent.save();
  res.json(newStudent);
});
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student Deleted' });
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is Running on Port: ${PORT}`);
});
