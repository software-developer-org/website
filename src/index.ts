import app from '@server';
import logger from '@shared/Logger';

// Start the server
const port = 3000;
app.listen(port, () => {
  logger.info('Express server started on port: ' + port);
});
