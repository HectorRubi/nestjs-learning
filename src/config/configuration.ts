export default () => ({
  varExample: process.env.VAR_EXAMPLE,
  port: parseInt(process.env.PORT || '3000', 10),
  nested: {
    variable: process.env.NESTED_VARIABLE,
    port: parseInt(process.env.NESTED_PORT || '5432', 10),
  },
});
