const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Index Route
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

// New Message Form Route
router.get('/new', (req, res) => {
  res.render('form', { title: 'Add New Message' });
});

// Handle Form Submission
router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

// Individual Message Route
router.get('/messages/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const message = messages[id];

  if (message) {
    res.render('message', { title: 'Message Details', message });
  } else {
    res.status(404).send('Message not found');
  }
});

module.exports = router;
