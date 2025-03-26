const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: `Group <your_group> API` });
});



router.put('/:id', (req, res) => {
    try {
      const exam = exams.find(ex => ex.id === parseInt(req.params.id));
  
      if (!exam) {
        return res.status(404).json({
          success: false,
          error: 'Exam not found'
        });
      }
  
      const updatedExam = {
        id: exam.id,
        name: req.body.name || exam.name,
        date: req.body.date || exam.date
      };
  
      exams = exams.map(ex => 
        ex.id === parseInt(req.params.id) ? updatedExam : ex
      );
  
      res.status(200).json({
        success: true,
        data: updatedExam
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  });
  



module.exports = router;