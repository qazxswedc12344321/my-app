import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [msg, setMsg] = useState("");

  const callAPI = async () => {
    try {
      const res = await fetch(`${API_URL}/ping`);
      const text = await res.text();
      setMsg(text); // 显示后端返回的 1234567
    } catch (err) {
      setMsg("调用失败");
    }
  };

  return (
    <div style={{ padding: "2rem", fontSize: "1.5rem" }}>
      <button onClick={callAPI}>点击调用后端</button>
      <p>返回内容：{msg}</p>
    </div>
  );
}

export default App;
