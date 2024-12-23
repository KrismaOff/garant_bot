export async function handleRequest(handler) {
    try { return await handler(); }
    catch (error) {
        console.error('Error:', error.message);
        return Response.json(
            { success: false, message: 'Internal Server Error', error: error.message },
            { status: 500 }
        );
    }
}
