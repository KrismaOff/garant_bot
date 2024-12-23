import { Pool } from 'pg';
import { handleRequest } from './handleRequest';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export async function handleGet(name) {
    return handleRequest(async () => {
        const result = await pool.query(`SELECT * FROM public."${name}" ORDER BY id ASC`);
        return Response.json({ success: true, data: result.rows });
    })
}

export async function handlePost(name, query, values) {
    return handleRequest(async () => {
        const result = await pool.query(`
        INSERT INTO public."${name}" ${query}
        RETURNING *`, 
        values);
        return Response.json({ success: true, data: result.rows[0] });
    })
}

export async function handlePut(name, query, values) {
    return handleRequest(async () => {
        const result = await pool.query(`
        UPDATE public."${name}" SET ${query} WHERE "id" = $1
        RETURNING *`,
        values);
        if (result.rowCount === 0) return Response.json({ success: false, message: 'Item not found' }, { status: 404 });
        return Response.json({ success: true, data: result.rows[0] });
    })
}

export async function handleDelete(name, values) {
    return handleRequest(async () => {
        const result = await pool.query(`DELETE FROM public."${name}" WHERE "id" = $1 RETURNING *`, values);
        if (result.rowCount === 0) return Response.json({ success: false, message: 'User not found' }, { status: 404 });
        return Response.json({ success: true, message: 'User deleted' });
    });
}