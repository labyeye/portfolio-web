export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    // Since the AI-related functionality is removed, no further processing is done here.
    // You can replace this section with other logic if needed.

    // Example response without AI-related functionality
    return new Response(
      JSON.stringify({ message: "Chatbot functionality has been removed." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
