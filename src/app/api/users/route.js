import { generatorRandomNumber } from '@/utils/backend/generatorRandomNumber';
import { handleGet, handlePost, handlePut, handleDelete } from '@/utils/backend/dbHandlers';

export async function GET() {
    return handleGet('users')
}

export async function POST(req) {
    
    const { username, balance, chatId } = await req.json();
    return handlePost(
        'users',
        '("id", "username", "balance", "chatId", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, NOW(), NOW())', 
        [generatorRandomNumber(), username, balance || 0.0, chatId]
    )
}

export async function PUT(req) {
  const { id, username, chatId, balance } = await req.json();
  return handlePut(
    "users",
    `"username" = COALESCE($2, "username"), 
    "balance" = COALESCE($3, "balance"),
    "chatId" = COALESCE($4, "chatId"),
    "updatedAt" = NOW()`,
    [id, username, balance, chatId]
  );
}

export async function DELETE(req) {
    const { id } = await req.json();
    return handleDelete('users', [id])
}
