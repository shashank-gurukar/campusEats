const express = require("express");
const router = express.Router();
const Auth = require('../models/auth');

router.get('/home', (req, res) => {
  res.render('index');
});

router.post('/new', async (req, res) => {
  console.log(req.body);

  const { usn, dob } = req.body;

  try {
    const found = await Auth.findOne({ usn: usn });

    if (found && found.dob === dob) {
      res.render('userIndex', { found });
    } else {
      res.redirect('/home'); // Redirect to home if user not found or dob doesn't match
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/userIndex', (req, res) => {
  res.render('userIndex', { found: req.query.found });
});

module.exports = router;
