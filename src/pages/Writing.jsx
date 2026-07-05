import { Link } from "react-router-dom";
import { AMBER, AMBER_DARK, INK, RULE, fontSerif, fontMono } from "../theme";

const essays = [
  {
    slug: "/writing/the-binding-constraint",
    date: "July 2026",
    title: "Why You Use AI for a Fraction of What You Could",
    description: "The binding constraint on professional AI delegation isn't capability — it's the absence of maintained relational context.",
  },
];

export default function Writing() {
  return (
    <div style={{ paddingTop: "9rem" }}>
      <section style={{ padding: "4rem 3rem 6rem", borderBottom: `0.5px solid ${RULE}` }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Writing</div>
        <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(44px, 5vw, 68px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 2rem 0", color: INK }}>
          Ideas worth<br /><em style={{ fontStyle: "italic", color: AMBER_DARK }}>writing down.</em>
        </h1>
        <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, maxWidth: 580, fontFamily: fontMono }}>
          Articles, essays and excerpts from the book in progress.
        </p>
      </section>

      {/* ── ESSAY LIST ── */}
      <section style={{ padding: "3rem 3rem 6rem" }}>
        {essays.map(({ slug, date, title, description }) => (
          <div key={slug} style={{ borderBottom: `0.5px solid ${RULE}`, padding: "2.5rem 0" }}>
            <div style={{ fontSize: 9, letterSpacing: "0.18em", color: "#aaa", textTransform: "uppercase", fontFamily: fontMono, marginBottom: "0.6rem" }}>
              {date}
            </div>
            <Link
              to={slug}
              style={{ textDecoration: "none", display: "block", marginBottom: "0.6rem" }}
            >
              <span style={{ fontFamily: fontSerif, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, color: INK, lineHeight: 1.2, borderBottom: `0.5px solid transparent`, transition: "color 0.2s, border-color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = AMBER_DARK; e.currentTarget.style.borderBottomColor = AMBER_DARK; }}
                onMouseLeave={e => { e.currentTarget.style.color = INK; e.currentTarget.style.borderBottomColor = "transparent"; }}
              >
                {title}
              </span>
            </Link>
            <p style={{ fontSize: 13, color: "#777", lineHeight: 1.75, maxWidth: 600, fontFamily: fontMono, margin: 0 }}>
              {description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
