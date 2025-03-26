const express = require('express');
const router = express.Router();

module.exports = router;




let exams = [
  { id: 1, name: "Integrative Programming Final", date: "2025-06-15" },
  { id: 2, name: "Information Security and Assurance Midterm", date: "2025-06-20" },
  { id: 2, name: "System Management and Databases Midterm", date: "2025-06-25" }
];


router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: exams.length,
      data: exams
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});
