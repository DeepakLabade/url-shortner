import { Client } from "pg";

// Ensure environment variable is defined
if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is not set in environment variables");
}

const pgClient = new Client({
  connectionString: process.env.POSTGRES_URL,
});

pgClient.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error:', err));

export default pgClient;
