export interface EnvironmentVariables {
  database: {
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
}
