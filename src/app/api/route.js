import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

export const pool = new Pool({
  user: 'wtfxbtfq',
  host: 'cornelius.db.elephantsql.com',
  database: 'wtfxbtfq',
  password: 'RRhewN5JqS-4G18FmlMaqE39eOU0jLTu',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function GET() {
    try {
      const data = await pool.query('SELECT * FROM db_ifms_campus');
      return NextResponse.json(data.rows);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };