const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend' });
});

app.get('/api/ready', (req, res) => {
  // aquí podrías chequear DB, Redis, etc
  res.status(200).json({ status: 'ready' });
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Aprender Kubernetes' },
    { id: 2, title: 'Practicar Helm' },
    { id: 3, title: 'Montar CI/CD con GitHub Actions' }
  ]);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
