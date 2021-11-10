import * as express from 'express';
import config from './config';
import infrastructure from './infrastructure';

async function main() {
  const app = express();
  await infrastructure(app);

  app.listen(config.port, () => {
    console.log(`Server listening on port: ${config.port}`);
  });
}

main();