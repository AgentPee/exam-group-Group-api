const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const examGroupRoute = require('./routes/exam-group');
const examsRoute = require('./routes/exams');

// Use routes
app.use('/exam-group', examGroupRoute);
app.use('/exams', examsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});