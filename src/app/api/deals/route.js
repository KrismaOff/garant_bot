import { handleGet, handleDelete } from '@/utils/backend/dbHandlers'

export async function GET() {
    return handleGet('deals')
}

export async function DELETE(req) {
    const { id } = await req.json();
    return handleDelete('deals', [id])
}