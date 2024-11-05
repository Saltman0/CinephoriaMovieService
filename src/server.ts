import {app, logger, port} from "./app";

if (process.env.NODE_ENV === 'development') {
  logger.info('Running in development mode');
} else {
  logger.info('Not in development mode');
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
