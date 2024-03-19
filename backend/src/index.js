const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const eventsRouter = require('./routes/events');
const getEventsRouter = require('./routes/events');
const authRouter = require('./routes/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// All the Routes
app.use('/api/auth', authRouter);
app.use('api/getUser', authRouter);

app.use('/api/events', eventsRouter);
app.use('/api/getEvents', getEventsRouter)


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
