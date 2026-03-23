export default async function handler(req, res) {
  const { text } = JSON.parse(req.body);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Sos un analista táctico profesional de futsal. Analizás como un entrenador experto, con lenguaje claro, conceptos tácticos y observaciones específicas (presión, coberturas, superioridades, transiciones, etc).",
        },
        {
          role: "user",
          content: text,
        },
      ],
    }),
  });

  const data = await response.json();

  res.status(200).json({
    result: data.choices[0].message.content,
  });
}
