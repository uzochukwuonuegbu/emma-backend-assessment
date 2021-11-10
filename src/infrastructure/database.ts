import Container from 'typedi';
import { Connection, ConnectionOptions, createConnection, useContainer } from 'typeorm';
// import config from '../config';

export default async (): Promise<Connection> => {
  // read connection options from ormconfig file (or ENV variables)
//   const connectionOptions = await getConnectionOptions();
  const connectionOptions: ConnectionOptions = {
    type: "cockroachdb",
    host: "crdb",
    port: 26257,
    // username: "uzochukwuonuegbu",
    // password: "zWyH-1ZZGEDEbbJi",
    database: "emma-backend",
    // ssl: true,
    // extra: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
    synchronize: true,
    logging: false,
    entities: ["src/models/**/*.ts"]
  };

  // typedi + typeorm
  useContainer(Container);

  // create a connection using modified connection options
  const connection = await createConnection(connectionOptions);

  return connection;
};


// username: uzochukwuonuegbu
// host: free-tier7.aws-eu-west-1.cockroachlabs.cloud
// port: 26257
// database: emma-assessment-656.defaultdb
// password: zWyH-1ZZGEDEbbJi