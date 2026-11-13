import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postsTable } from './schema';
import { resolve } from 'path';
import Database from 'better-sqlite3';
import { defineRelations } from 'drizzle-orm';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqliteDatabase = new Database(sqliteDatabasePath);

//! No novo drizzleORM v1, é necessário registrar as tabelas usando "defineRelations" e passar o schema da tabela:

const dbRelations = defineRelations({ postsTable });

export const drizzleDb = drizzle({
  client: sqliteDatabase,
  relations: dbRelations,
});
