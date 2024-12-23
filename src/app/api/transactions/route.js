import { handleGet, handleDelete } from '@/utils/backend/dbHandlers';

export async function GET() {
    return handleGet('transactions')
}

export async function DELETE(req) {
    const { id } = await req.json();
    return handleDelete('transactions', [id])
}