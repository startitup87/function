require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./lib/errorHandler');
const validateEnv = require('./lib/validateEnv');

// Validate environment variables at startup
validateEnv();

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use('/api', routes);

// Centralized error handler
app.use(errorHandler);

// Graceful shutdown
const server = app.listen(PORT, () => console.log(`Functions Node live on port ${PORT}`));

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
  console.log('Shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });
  // Force shutdown after 10s
  setTimeout(() => process.exit(1), 10000);
}
