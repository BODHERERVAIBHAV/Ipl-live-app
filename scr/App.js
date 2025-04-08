import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

const API_URL = "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-match-info?matchid=102040";
const API_KEY = "77a3bffc34msh787ceb9c143a27ap1eff05jsn4b1886eafb8f";

function App() {
  const { t } = useTranslation();
  const [match, setMatch] = useState(null);

  const fetchMatch = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          "X-Rapidapi-Key": API_KEY,
          "X-Rapidapi-Host": "free-cricbuzz-cricket-api.p.rapidapi.com",
        },
      });
      const data = await res.json();
      setMatch(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchMatch();
    const interval = setInterval(fetchMatch, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4">{t("title")}</h1>
      <LanguageSelector />
      {match ? (
        <div className="bg-white p-4 shadow rounded mt-4">
          <p className="text-gray-800 font-semibold">
            {match.matchHeader?.team1?.teamName} vs {match.matchHeader?.team2?.teamName}
          </p>
          <p className="text-sm text-gray-600">{match.matchHeader?.matchDescription}</p>
        </div>
      ) : (
        <p>{t("loading")}</p>
      )}
    </div>
  );
}

export default App;