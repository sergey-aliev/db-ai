import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { profilesTable } from "./schema" 

config({ path: ".env.local" });

const schema = {
    profile: profilesTable
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle(pool, { schema });