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