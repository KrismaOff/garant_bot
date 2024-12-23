import { handleGet, handlePut, handleDelete } from '@/utils/backend/dbHandlers';

export async function GET() {
    return handleGet('reviews')
}

export async function PUT(req) {
    const { id, userId, type, amount } = await req.json();
    return handlePut(
        'reviews',
        `"userId" = $2, "type" = $3, "amount" = $4, "updatedAt" = NOW() VALUES ($1, $2, $3, $4, NOW(), NOW())`,
        [id, userId, type, amount]
    )
}

export async function DELETE(req) {
    const { id } = await req.json();
    return handleDelete('reviews', [id])
}