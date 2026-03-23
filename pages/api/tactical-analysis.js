export default async function handler(req, res) {
  const { text } = JSON.parse(req.body);

  // Simulación de análisis táctico estilo PRO (después conectamos IA real)
  let analysis = "";

  if (text.toLowerCase().includes("arquero jugador")) {
    analysis = "Detecto uso de arquero jugador. Posible superioridad numérica en primera línea. Revisar ocupación del segundo palo y tiempos de circulación.";
  } else if (text.toLowerCase().includes("presion")) {
    analysis = "El equipo aplica presión alta. Evaluar coordinación en coberturas y riesgo en espalda de última línea.";
  } else {
    analysis = "Análisis general: revisar organización ofensiva, transiciones y eficacia en finalización.";
  }

  res.status(200).json({ result: analysis });
}
