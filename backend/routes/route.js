const express = require('express');
const router = express.Router();


  //default route 
  router.get('/', (req, res) => {
    res.send('Welcome to your Express app!');
  });
  
  // ample API route
  router.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example API endpoint' });
  });

  
  module.exports = router;