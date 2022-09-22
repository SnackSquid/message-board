const express = require('express');
const router = express.Router();

const title = 'New Message';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: title });
});

router.post('/', (req, res) => {
  const body = req.body;
  messages.push({ text: body.message, user: body.userName, added: new Date() });
  res.redirect('/')
});

module.exports = router;
