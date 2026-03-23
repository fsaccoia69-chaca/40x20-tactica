import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const analyze = async () => {
    const res = await fetch("/api/tactical-analysis", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>40x20 Táctica</h1>

      <textarea
        placeholder="Describí el partido..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />

      <br /><br />

      <button onClick={analyze}>Analizar con IA</button>

      <div style={{ marginTop: 20 }}>
        <h3>Resultado:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
