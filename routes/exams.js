const express = require('express');
const router = express.Router();

module.exports = router;



router.get('/', (req, res) => {
    const exams = [
        { id: 1, name: "Perry Ian Mendoza" },
      { id: 2, name: "Adonis Espinosa" },
      { id: 3, name: "Cyrus Joven" },
      { id: 4, name: "Pearl Marie Monceda" }
    ];
    res.json(exams);
  });

let exams = []; 

router.post('/', (req, res) => {
  const newExam = req.body;
  exams.push(newExam);
  res.status(201).json(newExam);
});



router.post('/', (req, res) => {
    try {
      if (!req.body.name || !req.body.date) {
        return res.status(400).json({
          success: false,
          error: 'Please include name and date'
        });
      }
  
      const newExam = {
        id: exams.length + 1,
        name: req.body.name,
        date: req.body.date
      };
  
      exams.push(newExam);
      
      res.status(201).json({
        success: true,
        data: newExam
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  });