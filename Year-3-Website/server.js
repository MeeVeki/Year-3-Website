require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.log("Error connecting to MongoDB:", err));

// Define the Lesson Schema & Model
const lessonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    spaceAvailable: { type: Number, required: true }
});

const Lesson = mongoose.model('Lesson', lessonSchema);


// GET:
app.get('/lessons', async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.json(lessons);
    } catch (error) {
        res.status(500).json({ message: "Error fetching lessons", error });
    }
});

// POST:
app.post('/lessons', async (req, res) => {
    try {
        const { name, price, location, spaceAvailable } = req.body;
        if (!name || !price || !location || !spaceAvailable) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const lesson = new Lesson(req.body);
        await lesson.save();
        res.status(201).json(lesson);
    } catch (error) {
        res.status(400).json({ message: "Error adding lesson", error });
    }
});

// DELETE:
app.delete('/lessons/:id', async (req, res) => {
    try {
        const lesson = await Lesson.findByIdAndDelete(req.params.id);
        if (!lesson) {
            return res.status(404).json({ message: "Lesson not found" });
        }
        res.status(200).json({ message: "Lesson deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting lesson", error });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
