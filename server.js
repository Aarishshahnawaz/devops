// server.js
import express from 'express';

const app = express();
const PORT = 8081;

app.use(express.json());

app.post('/githubwebhook', (req, res) => {
  console.log('Webhook received:', req.body);
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
