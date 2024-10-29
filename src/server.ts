import {app, logger, port} from "./app";

logger.info("test");
logger.warn("alerte");
logger.error("erreur 4565");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
