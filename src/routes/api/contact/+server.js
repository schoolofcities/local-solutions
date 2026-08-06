export async function POST({ request }) {
    const data = await request.formData();

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyYLU7g3U5a5lTJZZqBsSzSqx1_TGqC6wcCNDnzg9wQzRPGUf8opGZOLvfAgtLqR30Ung/exec",
        {
            method: "POST",
            body: data
        }
    );

    return new Response(await response.text(), {
        status: response.status
    });
}