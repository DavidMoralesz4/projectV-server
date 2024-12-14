import { PORT } from "./config";
import { dbConf } from "./db/dbConf";
import { server } from "./server";

dbConf().then((res) => {
  server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
});
