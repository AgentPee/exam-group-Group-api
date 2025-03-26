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

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedExam = req.body;
    
    exams = exams.map(exam => 
      exam.id === id ? { ...exam, ...updatedExam } : exam
    );
    
    res.json(updatedExam);
  });


