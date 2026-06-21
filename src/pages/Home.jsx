import { useState } from "react";
import { AMBER, AMBER_LIGHT, AMBER_DARK, INK, PAPER, RULE, fontSerif, fontMono } from "../theme";

const stats = [
  ["$85m",  "Operating result improvement in the last three years"],
  ["25+",   "Years in finance, operations and transformation leadership"],
  ["4",     "Continents — Australia, US, China, Europe and Russia"],
  ["$2B+",  "In enterprise contracts negotiated across global markets"],
];

const useCases = [
  { tag: "Finance",    title: "Board reporting in a fraction of the time",  desc: "Build a context layer once. Generate board-ready commentary in minutes, not hours." },
  { tag: "Operations", title: "Stakeholder challenge anticipation",          desc: "Profile your audience before every major presentation. Never be caught off guard again." },
  { tag: "Healthcare", title: "Clinical documentation automation",           desc: "Structured, compliant, fast. The prompts and process that actually work in a regulated environment." },
  { tag: "Risk",       title: "Compliance monitoring at scale",              desc: "From policy to surveillance to reporting — AI applied through the full compliance cycle." },
  { tag: "HR",         title: "Workforce planning and modelling",            desc: "Scenario modelling, org design, and succession planning with AI augmentation." },
  { tag: "Strategy",   title: "Strategic plan development",                  desc: "From environmental scan to initiative design — a structured, AI-augmented process." },
];

const career = [
  ["Catholic Healthcare",   "CFO · 2023 to present"],
  ["Huawei Technologies",   "Head of Global Pricing & Corporate Controller · 2012–2015"],
  ["Ericsson",              "VP Commercial Management · 2006–2012"],
  ["Funding Doctor",        "Managing Director · 2015–2022"],
  ["Ernst & Young",         "Audit Manager, Dallas & Moscow · 1993–1998"],
  ["SUN Brewing Company",   "CFO, Moscow · 1998–2000"],
];

function UseCaseCard({ tag, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background: hovered ? AMBER_LIGHT : PAPER, padding: "2rem", cursor: "pointer", transition: "background 0.25s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, textTransform: "uppercase", marginBottom: "1rem", fontFamily: fontMono }}>{tag}</div>
      <h3 style={{ fontFamily: fontSerif, fontSize: 21, fontWeight: 400, margin: "0 0 0.75rem 0", lineHeight: 1.3, color: INK }}>{title}</h3>
      <p style={{ fontSize: 11, color: "#666", lineHeight: 1.75, margin: 0, fontFamily: fontMono }}>{desc}</p>
    </div>
  );
}

function ToolCard({ name, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ border: `0.5px solid ${hovered ? AMBER : "#2E2E2A"}`, padding: "1.75rem", background: "#222", cursor: "pointer", transition: "border-color 0.25s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: 12, color: AMBER, marginBottom: 10, fontFamily: fontMono, letterSpacing: "0.05em" }}>{name}</div>
      <p style={{ fontSize: 11, color: "#888", lineHeight: 1.75, margin: 0, fontFamily: fontMono }}>{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative" }}>

        {/* Left */}
        <div style={{ padding: "11rem 3rem 5rem 3rem", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.22em", color: AMBER, marginBottom: "2.5rem", fontFamily: fontMono }}>
            33°51′S 151°12′E · SYDNEY · AUSTRALIA
          </div>
          <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(44px, 5.5vw, 74px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.025em", margin: "0 0 2.25rem 0", color: INK }}>
            The executive who<br />
            <em style={{ fontStyle: "italic", color: AMBER_DARK, fontWeight: 400 }}>actually builds</em><br />
            with AI.
          </h1>
          <p style={{ fontSize: 12, lineHeight: 1.9, color: "#555", maxWidth: 420, margin: "0 0 3rem 0", fontFamily: fontMono }}>
            25 years turning around organisations across four continents. Now building the frameworks and tools that help finance and operations leaders get real work done with AI — not theory, but implementation.
          </p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="/use-cases" style={{ display: "inline-block", padding: "12px 28px", background: AMBER, color: "#fff", textDecoration: "none", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: fontMono }}>Explore Use Cases</a>
            <a href="/about" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", textDecoration: "none", borderBottom: "0.5px solid #aaa", paddingBottom: 2, fontFamily: fontMono }}>About CT →</a>
          </div>
        </div>

        {/* Right: Relational Context Layer */}
        <div style={{ borderLeft: `0.5px solid ${AMBER}35`, padding: "11rem 3rem 5rem 3.5rem", display: "flex", flexDirection: "column", justifyContent: "center", background: `linear-gradient(160deg, ${AMBER_LIGHT}28 0%, transparent 55%)`, position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 9, letterSpacing: "0.24em", color: AMBER, marginBottom: "1.5rem", textTransform: "uppercase", fontFamily: fontMono }}>Owned Concept</div>
          <h2 style={{ fontFamily: fontSerif, fontSize: 34, fontWeight: 400, lineHeight: 1.15, margin: "0 0 1.5rem 0", color: INK }}>
            The Relational<br />Context Layer
          </h2>
          <p style={{ fontSize: 11, lineHeight: 1.9, color: "#555", margin: "0 0 2.25rem 0", maxWidth: 360, fontFamily: fontMono }}>
            Generic AI gives generic output. The difference between an AI tool that impresses in a demo and one that actually delivers in your organisation is context — who you are, how you work, what you know.
          </p>
          <div style={{ borderLeft: `2px solid ${AMBER}`, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              ["Who you are",  "Your role, your organisation, your decision-making context"],
              ["How you work", "Your processes, vocabulary, standards and constraints"],
              ["What you know","Your data, history, relationships and institutional memory"],
            ].map(([t, d]) => (
              <div key={t}>
                <div style={{ fontSize: 10, fontWeight: 500, color: INK, marginBottom: 4, letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: fontMono }}>{t}</div>
                <div style={{ fontSize: 11, color: "#777", lineHeight: 1.65, fontFamily: fontMono }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coordinate grid overlay */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "50%", backgroundImage: `linear-gradient(${AMBER}07 1px, transparent 1px), linear-gradient(90deg, ${AMBER}07 1px, transparent 1px)`, backgroundSize: "44px 44px", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* ── CREDIBILITY STRIP ── */}
      <section style={{ borderTop: `0.5px solid ${RULE}`, borderBottom: `0.5px solid ${RULE}`, padding: "2.5rem 3rem", background: "#F5F3EE" }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: "#aaa", marginBottom: "1.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Proven in practice</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {stats.map(([stat, label]) => (
            <div key={stat}>
              <div style={{ fontFamily: fontSerif, fontSize: 46, fontWeight: 300, color: AMBER_DARK, lineHeight: 1 }}>{stat}</div>
              <div style={{ fontSize: 11, color: "#777", lineHeight: 1.65, marginTop: 10, fontFamily: fontMono }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section style={{ padding: "6rem 3rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Use Case Library</div>
            <h2 style={{ fontFamily: fontSerif, fontSize: 44, fontWeight: 400, margin: 0, lineHeight: 1.1 }}>Not theory.<br />Implementation.</h2>
          </div>
          <a href="/use-cases" style={{ fontSize: 10, letterSpacing: "0.1em", color: "#999", textDecoration: "none", borderBottom: "0.5px solid #ccc", paddingBottom: 2, fontFamily: fontMono }}>View all use cases →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: RULE }}>
          {useCases.map(uc => <UseCaseCard key={uc.title} {...uc} />)}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ padding: "6rem 3rem", background: INK, color: "#F5F3EE" }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Interactive Tools</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: fontSerif, fontSize: 46, fontWeight: 400, margin: "0 0 1.75rem 0", lineHeight: 1.1, color: "#F5F3EE" }}>
              AI content that<br /><em style={{ color: AMBER }}>actually uses AI.</em>
            </h2>
            <p style={{ fontSize: 12, lineHeight: 1.9, color: "#999", margin: "0 0 2.5rem 0", maxWidth: 400, fontFamily: fontMono }}>
              Most content about AI is delivered as dense text — books, PDFs, long articles. There's an irony there. These tools let you interact with the ideas and build something useful for your organisation, right now, in the browser.
            </p>
            <a href="/tools" style={{ display: "inline-block", padding: "12px 28px", border: `0.5px solid ${AMBER}`, color: AMBER, textDecoration: "none", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: fontMono }}>Explore the Tools</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ToolCard name="Context Layer Builder" desc="Build your relational context layer through a guided interview. Get a finished context statement ready to paste into any AI project or platform." />
            <ToolCard name="Prompt Generator"      desc="Select your use case. Describe your context. Get a tested, optimised prompt back — instantly, ready to use." />
            <ToolCard name="ROI Calculator"        desc="Model the return on an AI implementation in your finance or operations function. Based on real numbers from a real executive." />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "6rem 3rem", borderTop: `0.5px solid ${RULE}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem" }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>About CT</div>
            <h2 style={{ fontFamily: fontSerif, fontSize: 38, fontWeight: 400, margin: "0 0 1.5rem 0", lineHeight: 1.15 }}>
              Executive.<br />Strategist.<br />Builder.
            </h2>
            <p style={{ fontSize: 12, color: "#666", lineHeight: 1.9, margin: "0 0 1.25rem 0", fontFamily: fontMono }}>
              I've spent 25 years in finance and executive leadership across Australia, the US, Russia, China and Europe. Currently serving as CFO of a major aged care provider, where I've led an $85m operating result turnaround and built an AI strategy for the support functions.
            </p>
            <p style={{ fontSize: 12, color: "#666", lineHeight: 1.9, margin: "0 0 2rem 0", fontFamily: fontMono }}>
              I'm a CPA and MBA, a former EY Audit Manager, and I build in Python and SQL in my spare time. I'm working on a book.
            </p>
            <a href="/about" style={{ fontSize: 10, letterSpacing: "0.1em", color: "#999", textDecoration: "none", borderBottom: "0.5px solid #ccc", paddingBottom: 2, fontFamily: fontMono }}>Full biography →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 2rem" }}>
            {career.map(([co, role]) => (
              <div key={co} style={{ borderBottom: `0.5px solid ${RULE}`, paddingBottom: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: INK, marginBottom: 5, fontFamily: fontMono }}>{co}</div>
                <div style={{ fontSize: 10, color: "#999", letterSpacing: "0.04em", lineHeight: 1.5, fontFamily: fontMono }}>{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "6rem 3rem", background: AMBER_LIGHT, borderTop: `0.5px solid ${AMBER}35` }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER_DARK, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>Get in touch</div>
          <h2 style={{ fontFamily: fontSerif, fontSize: 46, fontWeight: 400, margin: "0 0 1.5rem 0", lineHeight: 1.1 }}>
            Speaking. Consulting.<br />The book, when it exists.
          </h2>
          <p style={{ fontSize: 12, color: "#666", lineHeight: 1.9, margin: "0 0 2.5rem 0", fontFamily: fontMono }}>
            If you're a CFO, transformation executive, or board member thinking seriously about AI implementation — or if you're looking for a speaker who can make this concrete rather than conceptual — get in touch.
          </p>
          <a href="mailto:christopher_todd_johnson@hotmail.com" style={{ display: "inline-block", padding: "14px 32px", background: AMBER_DARK, color: "#fff", textDecoration: "none", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: fontMono }}>
            christopher_todd_johnson@hotmail.com
          </a>
        </div>
      </section>
    </>
  );
}
