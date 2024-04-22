import { useState } from "react";
import "./App.scss";

const App = () => {
  const [url, setUrl] = useState("");

  function isValidUrl(url: string) {
    const youtubeUrlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?.*v=|embed\/|v\/)|youtu\.be\/)[\w-]{11}.*$/;
    return youtubeUrlPattern.test(url);
  }

  return (
    <div className="app">
      <div className="logo">
        <img src="note.png" alt="Note" />
        <h2>MP3 Converter</h2>
      </div>
      <div className="converter">
        <input
          type="text"
          placeholder="Enter youtube link"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <span>It might take a moment to convert the video</span>
      </div>
      <button disabled={!isValidUrl(url)}>Download</button>
    </div>
  );
};

export default App;
