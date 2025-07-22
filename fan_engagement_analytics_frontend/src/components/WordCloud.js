import React from "react";
import "./WordCloud.css";

// PUBLIC_INTERFACE
function WordCloud({ words }) {
  /**
   * words: [{text: string, weight: number}]
   * Renders with variable font size.
   */
  if (!words || words.length === 0) return <div>No word data</div>;
  const maxWeight = Math.max(...words.map(w => w.weight), 1);
  return (
    <div className="wordcloud-root">
      {words.map((word, idx) => (
        <span
          key={idx}
          className="wordcloud-word"
          style={{
            fontSize: 13 + (30 * word.weight / maxWeight),
            color: "var(--accent, #f59e42)",
            marginRight: idx % 3 === 0 ? 18 : 9,
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
}

export default WordCloud;
