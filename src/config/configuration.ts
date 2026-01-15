export default () => ({
  database: {
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT || '5432', 10),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    name: process.env.PG_DB,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});
