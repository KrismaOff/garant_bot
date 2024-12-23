import { handleGet } from '@/utils/backend/dbHandlers'

// export async function GET() {
//     return handleGet('dealAgreements')
// }

// export async function POST(req) {
//     const { userId, type, amount } = await req.json();
//     return handlePost(
//         'dealAgreements',
//         '(dealKey, userId, agreed, createdAt, updatedAt)', 
//         [generatorRandomNumber(), userId, type, amount]
//     )
// }

// export async function PUT(req) {
//     const { dealKey, userId, type, amount } = await req.json();
//     return handlePut(
//         'dealAgreements',
//         '"dealKey" = $2, "userId" = $3, "agreed" = $4, "updatedAt" = NOW()',
//         [dealKey, userId, type, amount] 
//     )
// }

// export async function DELETE(req) {
//     const { id } = await req.json();
//     return handleDelete('dealAgreements', [id])
// }