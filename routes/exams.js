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

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedExam = req.body;
    
    exams = exams.map(exam => 
      exam.id === id ? { ...exam, ...updatedExam } : exam
    );
    
    res.json(updatedExam);
  });