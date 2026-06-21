import { AMBER, AMBER_DARK, INK, RULE, fontSerif, fontMono } from "../theme";

export default function Writing() {
  return (
    <div style={{ paddingTop: "9rem" }}>
      <section style={{ padding: "4rem 3rem 6rem", borderBottom: `0.5px solid ${RULE}` }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Writing</div>
        <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(44px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 2rem 0", color: INK }}>
          Ideas worth<br /><em style={{ fontStyle: "italic", color: AMBER_DARK }}>writing down.</em>
        </h1>
        <p style={{ fontSize: 12, color: "#666", lineHeight: 1.9, maxWidth: 560, fontFamily: fontMono }}>
          Articles, essays and excerpts from the book in progress. Coming shortly.
        </p>
      </section>
    </div>
  );
}
