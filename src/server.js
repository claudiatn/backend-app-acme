const express = require('express');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
  logger.info({
    service: 'backend',
    env: process.env.NODE_ENV || 'dev',
    trace_id: req.headers['x-trace-id'] || 'no-trace',
    endpoint: '/api/health',
    status: 'ok'
  }, 'Health check hit');
  res.status(200).json({ status: 'ok' });
});




app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend' });
});

app.get('/api/ready', (req, res) => {
   // aquí podrías chequear DB, Redis, etc
  res.status(200).json({ status: 'ready' });
  logger.info({ userId: 123, action: 'create-user' }, 'Usuario creado correctamente');
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
