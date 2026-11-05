import { useEffect, useState } from "react";
import art from "../artIndex.json";

export default function Art() {
  /* Using setSelected re-renders the page */
  const [selected, setSelected] = useState(null);

  /* Runs initially when component is added to page, as well as whenever [selected] changes */
  useEffect(() => {
    if (!selected) return;
    const onKey = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <h1>Art page</h1>
      <div className="gallery">
        {art.map((name) => (
          <Drawing key={name} name={name} onOpen={() => setSelected(name)} />
        ))}
      </div>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected}
          onClick={() => setSelected(null)}
        >
          <button
            className="lightboxClose"
            type="button"
            aria-label="Close"
            onClick={() => setSelected(null)}
          >
          </button>
          <img
            src={`/art/${encodeURI(selected)}`}
            alt=""
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function Drawing({ name, onOpen }) {
  return (
    <button
      type="button"
      className="drawing"
      aria-label={`Open ${name}`}
      style={{ backgroundImage: `url(/art/${encodeURI(name)})` }}
      onClick={onOpen}
    />
  );
}
