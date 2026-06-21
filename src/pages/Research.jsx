import { AMBER, AMBER_DARK, INK, RULE, fontSerif, fontMono } from "../theme";

const layers = [
  ["Navigator layer", "A first-person model of the person being served — their own goals, constraints and resources."],
  ["Relational layer", "Other actors, held as context-conditioned estimates of what they want — not fixed facts, but discounted, revisable estimates."],
  ["Contextual layer", "The structural conditions that bound what's achievable, independent of any actor's preferences."],
];

const abstractParagraphs = [
  "Large language models are stateless with respect to the user's relational world: each interaction begins without a persistent model of the people the user must work with and through, of the user's own goals and constraints, or of the structural conditions that bound what the user can achieve. This caps the quality of relational assistance at that obtainable from a capable interlocutor who knows nothing of the user's situation, and it is an architectural property, not a deficit that scale will close. The setting is support of response-mediated work: professional tasks whose success is mediated by other people's responses, whether or not the work is interpersonal in form.",
  "I propose the Relational Context Layer (RCL), a reference architecture for systems supporting such work — architecture in the systems-engineering sense of components, layers, and a maintenance regime arranged to meet constraints prior arrangements did not, not in the formal sense of a new representational grammar. RCL integrates a first-person model of the served human (navigator layer), other actors held as context-conditioned estimates of what they want (relational layer), and the structural conditions bounding the possibility space (contextual layer), maintained over the accumulated record of the relationship.",
  "Formally, RCL is expressible as a finitely nested interactive POMDP under an epistemic reward, with the served human as one modelled agent and a dimension-specifically discounted self-report channel. I state this mapping rather than contest it. The formalism has existed for two decades; it was never deployed at realistic scale because exact solution is intractable and because no machinery existed to populate its distributions from the unstructured social evidence of real work — email, meetings, tone, history. Large language models remove the population barrier, which is why near-neighbour systems are now appearing: the field is arriving not at the idea but at its feasibility. RCL is feasible where I-POMDP deployment was not because it asks for radically less — no policy optimisation, recursion bounded at two to three levels on behavioural grounds, and approximate inference in place of exact belief update.",
  "The architecture's central empirical bet, which no reduction can absorb because it concerns the world the model faces rather than any representation of it, is longitudinal: much of what makes an actor's behaviour interpretable is history-constituted, carried by the relationship's record and absent from the present moment, so a system that severs want-inference from that record predicts worse — most sharply on exactly the actions whose meaning lives in the history. The architecture's signature parameterisation, motivated by established findings about the humans the system models, is to distrust the served human's self-account on evaluative, ego-involved dimensions while trusting it on internal wants — a modelling choice no integrated-agent practitioner makes by default, and one settled by ablation rather than argument.",
  "Claims carry explicit maturity tags; the relational layer is operationalised to the point of falsifiability; the validation programme specifies corpus, metrics, effect-size thresholds, and decision rules in advance. An early prototype, ReactAI, in which the author has a commercial interest, is noted as provenance only.",
];

export default function Research() {
  return (
    <div style={{ paddingTop: "9rem" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "4rem 3rem 5rem", borderBottom: `0.5px solid ${RULE}` }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>
          Independent Research
        </div>
        <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(38px, 4.5vw, 58px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 1.25rem 0", color: INK }}>
          The Relational Context Layer
        </h1>
        <div style={{ fontSize: 10, letterSpacing: "0.08em", color: AMBER_DARK, textTransform: "uppercase", marginBottom: "2rem", fontFamily: fontMono }}>
          Working paper · v0.5 · June 2026 · not yet peer-reviewed
        </div>
        <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, maxWidth: 640, fontFamily: fontMono }}>
          Large language models are stateless with respect to the people a user works with and through: each
          conversation begins without a persistent model of who those people are, what they want, or the history
          between them. This is an architectural property, not a deficit that scale will close. This paper proposes
          a reference architecture for systems that maintain that context over time, scoped to professional work
          whose success is mediated by other people's responses.
        </p>
      </section>

      {/* ── THREE LAYERS ── */}
      <section style={{ padding: "5rem 3rem", borderBottom: `0.5px solid ${RULE}` }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>
          The architecture
        </div>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 2rem 0", color: INK, maxWidth: 580, lineHeight: 1.3 }}>
          Three layers, maintained over the accumulated record of the relationship.
        </h2>
        <div style={{ borderLeft: `2px solid ${AMBER}`, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 28, maxWidth: 640 }}>
          {layers.map(([t, d]) => (
            <div key={t}>
              <div style={{ fontSize: 11, fontWeight: 500, color: INK, marginBottom: 6, letterSpacing: "0.04em", textTransform: "uppercase", fontFamily: fontMono }}>{t}</div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.8, fontFamily: fontMono }}>{d}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#666", lineHeight: 1.9, maxWidth: 640, marginTop: "2.5rem", fontFamily: fontMono }}>
          The central claim — held as a working position, tested by ablation — is that much of what makes a
          person's behaviour interpretable is carried by the history of the relationship and absent from the
          present moment, so a system that severs want-inference from that record predicts worse, most sharply
          on the actions whose meaning lives in the history.
        </p>
      </section>

      {/* ── WORKING PAPER ── */}
      <section style={{ padding: "5rem 3rem", borderBottom: `0.5px solid ${RULE}`, background: "#F5F3EE" }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: "#999", marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>
          Working paper
        </div>
        <h2 style={{ fontFamily: fontSerif, fontSize: 22, fontWeight: 500, margin: "0 0 1.75rem 0", color: INK, maxWidth: 700, lineHeight: 1.4 }}>
          The Relational Context Layer: A Reference Architecture for AI Support of Response-Mediated Work
        </h2>
        <div style={{ maxWidth: 680, marginBottom: "2rem" }}>
          {abstractParagraphs.map((p, i) => (
            <p key={i} style={{ fontSize: 12, color: "#555", lineHeight: 1.9, marginBottom: "1.25rem", fontFamily: fontMono }}>{p}</p>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <a href="/RCL_Paper_v0_5.pdf" style={{ display: "inline-block", padding: "12px 28px", border: `0.5px solid ${AMBER_DARK}`, color: AMBER_DARK, textDecoration: "none", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: fontMono }}>
            Download the paper (PDF)
          </a>
          <a href="https://reactai.tech" target="_blank" rel="noreferrer" style={{ fontSize: 10, letterSpacing: "0.06em", color: "#999", textDecoration: "none", borderBottom: "0.5px solid #ccc", paddingBottom: 2, fontFamily: fontMono }}>
            ReactAI — the applied platform that prompted this framework →
          </a>
        </div>
      </section>

      {/* ── CORRESPONDENCE ── */}
      <section style={{ padding: "4rem 3rem 6rem" }}>
        <p style={{ fontSize: 12, color: "#666", lineHeight: 1.9, fontFamily: fontMono }}>
          Correspondence: <a href="mailto:christopher.todd.johnson@gmail.com" style={{ color: AMBER_DARK, textDecoration: "none", borderBottom: `0.5px solid ${AMBER_DARK}55` }}>christopher.todd.johnson@gmail.com</a>
        </p>
      </section>

    </div>
  );
}
