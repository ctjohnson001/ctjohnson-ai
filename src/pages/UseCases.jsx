import { AMBER, AMBER_DARK, INK, RULE, fontSerif, fontMono } from "../theme";

export default function UseCases() {
  return (
    <div style={{ paddingTop: "9rem" }}>
      <section style={{ padding: "4rem 3rem 6rem", borderBottom: `0.5px solid ${RULE}` }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Use Case Library</div>
        <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(44px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 2rem 0", color: INK }}>
          Not fluffy.<br />Not general.<br /><em style={{ fontStyle: "italic", color: AMBER_DARK }}>Implementable.</em>
        </h1>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, maxWidth: 580, fontFamily: fontMono }}>
          The full use case library is being built. Each entry includes tested prompts, step-by-step instructions, and before/after examples. Check back shortly.
        </p>
      </section>
    </div>
  );
}
