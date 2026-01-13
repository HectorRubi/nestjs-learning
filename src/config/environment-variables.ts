export interface EnvironmentVariables {
  varExample: string;
  port: number;
  nested: {
    variable: string;
    port: number;
  };
}
