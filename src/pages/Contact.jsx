import { AMBER, AMBER_LIGHT, AMBER_DARK, INK, RULE, fontSerif, fontMono } from "../theme";

export default function Contact() {
  return (
    <div style={{ paddingTop: "9rem" }}>
      <section style={{ padding: "4rem 3rem 6rem", background: AMBER_LIGHT }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER_DARK, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Get in touch</div>
        <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(44px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 2rem 0", color: INK }}>
          Speaking. Consulting.<br /><em style={{ fontStyle: "italic", color: AMBER_DARK }}>The book, when it exists.</em>
        </h1>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, maxWidth: 580, margin: "0 0 2.5rem 0", fontFamily: fontMono }}>
          If you're a CFO, transformation executive, or board member thinking seriously about AI implementation — or if you're looking for a speaker who can make this concrete rather than conceptual — get in touch.
        </p>
        <a href="mailto:christopher_todd_johnson@hotmail.com" style={{ display: "inline-block", padding: "14px 32px", background: AMBER_DARK, color: "#fff", textDecoration: "none", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: fontMono }}>
          christopher_todd_johnson@hotmail.com
        </a>
      </section>
    </div>
  );
}
