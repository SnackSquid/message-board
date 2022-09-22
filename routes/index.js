const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hello there!',
    user: 'Obi Wan',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Calvin',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  const body = req.body;
  messages.push({ text: body.message, user: body.userName, added: new Date() });
  res.redirect('/')
});


module.exports = router;
