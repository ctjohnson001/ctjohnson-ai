import { AMBER, AMBER_DARK, INK, RULE, fontSerif, fontMono } from "../../theme";

const linkStyle = {
  color: AMBER_DARK,
  textDecoration: "none",
  borderBottom: `0.5px solid ${AMBER_DARK}55`,
  fontFamily: fontMono,
};

export default function TheBindingConstraint() {
  return (
    <div style={{ paddingTop: "9rem" }}>

      {/* ── HERO ── */}
      <section style={{ padding: "4rem 3rem 5rem", borderBottom: `0.5px solid ${RULE}` }}>
        <div style={{ fontSize: 9, letterSpacing: "0.22em", color: AMBER, marginBottom: "0.75rem", textTransform: "uppercase", fontFamily: fontMono }}>
          Writing · Essay
        </div>
        <h1 style={{ fontFamily: fontSerif, fontSize: "clamp(38px, 4.5vw, 58px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 1rem 0", color: INK }}>
          Why You Use AI for a Fraction of What You Could
        </h1>
        <p style={{ fontFamily: fontSerif, fontSize: "clamp(17px, 2vw, 21px)", fontWeight: 300, fontStyle: "italic", color: AMBER_DARK, margin: "0 0 1.5rem 0", lineHeight: 1.4 }}>
          The constraint isn't capability. It's context — and the cost of supplying it every single time.
        </p>
        <div style={{ fontSize: 10, letterSpacing: "0.08em", color: "#999", textTransform: "uppercase", fontFamily: fontMono }}>
          July 2026
        </div>
      </section>

      {/* ── OPENING ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          Watch a capable professional use an AI model for a week and you'll notice something odd. They're clearly impressed by it. They'll tell you it's remarkable. And they use it for a tiny fraction of the work it could plausibly do.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          They use it to draft the email they already know how to write, to clean up prose, to summarise a document, to rubber-duck a decision they've mostly made. What they don't use it for is the work that actually fills their day: which of three stakeholders to approach and how, whether to push back on the board or concede, how to frame a number so a specific sceptical reader will accept it. The consequential, relationship-shaped judgment calls — the ones where getting it right is worth real money — they still do in their own head.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          Why?
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          The answer most commonly given is that the model isn't good enough yet. Give it another generation or two and it'll handle the hard stuff. I think that answer is wrong, and I think it's wrong in a way that matters commercially, because it points everyone at the wrong problem.
        </p>
      </section>

      {/* ── THE MISDIAGNOSIS ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 1.75rem 0", color: INK, lineHeight: 1.3 }}>
          The misdiagnosis
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          Here's what I actually see happening. The professional doesn't delegate the hard work because delegating it would require telling the model everything it needs to know to do it well — who these people are, what each of them wants, what the history is, where the landmines sit, what the professional is trying to achieve and what constraints they're under. And that telling costs more than the work saved. Every time. So they don't. Not because the model couldn't reason about it, but because loading it with the context takes longer than just doing the task themselves.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          I call this the <em style={{ fontStyle: "italic" }}>delegation conjecture</em>: for most professional work, the binding constraint on how much you actually hand to an AI system is not the capability of the model, it's the absence of a maintained model of your relational world, and the cost of supplying that context afresh every single time.
        </p>
      </section>

      {/* ── WHY THIS IS STRUCTURAL ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 1.75rem 0", color: INK, lineHeight: 1.3 }}>
          Why this is structural, not a passing inconvenience
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          This sounds like a temporary friction but it is not; it is a structural issue.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          A large language model begins every conversation blank with respect to the people you work with and through. It has no record of the supplier whose tone has been cooling for two months, no model of which of your counterparts actually holds the authority, no memory of the last three exchanges that make this fourth one legible. You can supply all of that inside a session, and the model will use it well. But it doesn't persist. Tomorrow's conversation starts blank again.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          This is not a gap that scale closes. A bigger model, a longer context window, more fine-tuning — none of them change the fact that the system holds no persistent model of your relational situation between sessions. It's architectural. And because the quality of relational advice depends almost entirely on how well the adviser understands the people involved, a system that starts blank is capped — no matter how brilliant — at roughly the quality of advice you'd get from an extraordinarily capable stranger who knows nothing about your situation. That's a real ceiling, and no amount of raw intelligence lifts it.
        </p>
      </section>

      {/* ── MOST OF YOUR WORK ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 1.75rem 0", color: INK, lineHeight: 1.3 }}>
          Most of your work is like this, even the parts that don't look like it
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          You might object that this only bites on the obviously interpersonal work — negotiations, difficult conversations, stakeholder management — and that most professional work isn't like that. I'd have said the same thing before I looked closely. But it isn't true.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          Take something that looks purely quantitative: a cash-flow projection. The arithmetic is fixed; there's a right answer given the inputs. But which projection you actually build — which assumptions you adopt, which sensitivities you foreground, how you frame the result — is governed almost entirely by who the projection is for and how you expect them to react to it. The version you build for a board looking for a reason to cut costs is a different document from the one you build for a lender you're trying to reassure, even though the underlying model is identical. The number is arithmetic. The choices around the number are relational. And the choices are most of the work.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          I spent twenty-five years as a finance executive, and almost nothing that crossed my desk was settled by the calculation alone. The calculation was the easy part. The work was in the anticipation — how will this land, with this person, given everything that's come before. Most professional work is like this, whatever its surface form: it's mediated by someone's response. A system that can't hold a model of the people whose responses mediate your work can't help you with the part that's actually hard.
        </p>
      </section>

      {/* ── WHAT IT WOULD TAKE ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 1.75rem 0", color: INK, lineHeight: 1.3 }}>
          What it would take to lift the cap
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          Not a smarter model. A model that maintains the context the work depends on. Concretely, that means holding three things and keeping them current:
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          A model of the other people in your world — not facts about them, but what each of them actually <em style={{ fontStyle: "italic" }}>wants</em>, which is what predicts what they'll do. A model of your own position — your goals, your constraints, the credibility you hold with each party — because whether a move works depends as much on where you stand as on who you're moving. And a model of the structural conditions that bound what's achievable at all: the budgets, the freezes, the mandates that no amount of relational skill can wish away.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          And — this is the part that turns out to matter most — it has to maintain all of that over the accumulated <em style={{ fontStyle: "italic" }}>history</em> of the relationship, not just the present moment. Here's why history is load-bearing rather than nice-to-have. A curt, three-word reply from a colleague is hostility from one person and completely unremarkable from another. Nothing in the message itself tells you which. Only the record of every exchange that came before it does. A system working from a perfect snapshot of the present — every current fact correct — still misreads that reply, because what it means isn't in the present at all. It's in the history. Sever the advice from the record, and you get advice that's fluent and confidently wrong precisely where the stakes are highest.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          I've set out the full version of this argument — the architecture, where it sits relative to the existing research, and a specification precise enough to be proven wrong — in a working paper. It's early, and I've tried hard to keep it honest about what's established versus what's still a bet. But the core claim is simple enough: supplying and maintaining the relational context of your work is a distinct, buildable thing, and it's the part the current generation of tools doesn't do.
        </p>
      </section>

      {/* ── I BUILT IT ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 1.75rem 0", color: INK, lineHeight: 1.3 }}>
          I built it, to see whether it was true
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          I didn't only want to argue this. I wanted to see whether it held up. So I built a tool to test it.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          It's called ReactAI, and its narrow job is to predict how a specific stakeholder will react to a specific move, given a maintained model of who that person is and what they want. When the context is there, it works — it's genuinely good at anticipating how people will respond, and at suggesting better ways to approach them. The first time people see it do this, the reaction is almost always the same: some version of <em style={{ fontStyle: "italic" }}>I can't believe it can do that</em>, followed immediately by a list of situations they'd use it for.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          And then they don't use it again.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          The reason is exactly what the paper predicts: keeping the relational context current — feeding the tool the updates, the new exchanges, the shifts — with ReactAI as a separate, standalone tool, all of that sits outside the flow of the user's actual work. It's a separate chore. And a separate chore, however valuable, loses to the demands of the day, every time. The prediction engine isn't the problem — the prediction is solvable; it's solved. The maintenance is the frontier.
        </p>
      </section>

      {/* ── WHERE THE LEVERAGE IS ── */}
      <section style={{ padding: "4rem 3rem", borderBottom: `0.5px solid ${RULE}`, maxWidth: 760 }}>
        <h2 style={{ fontFamily: fontSerif, fontSize: 26, fontWeight: 400, margin: "0 0 1.75rem 0", color: INK, lineHeight: 1.3 }}>
          Where the leverage actually is
        </h2>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          This points at where I think the real leverage in professional AI sits, and it isn't where most of the attention is going. The race everyone's watching is the capability race — the next model, the higher benchmark. That race matters, but for the work that fills most professionals' days, it's running past the binding constraint. The model is already capable enough to do far more of your work than you currently trust it with. What's missing isn't intelligence. It's the maintained context that would let that intelligence engage with your actual situation — and, above all, context maintenance that lives <em style={{ fontStyle: "italic" }}>inside</em> your workflow rather than beside it as one more thing to keep up.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem", fontFamily: fontMono }}>
          Solve that, and the amount of real work a capable professional can hand to an AI system doesn't improve incrementally. It changes category.
        </p>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, fontFamily: fontMono }}>
          That's the bet, and it's a falsifiable one: hold the model fixed, give people maintained relational context at a low enough cost, and watch whether they delegate meaningfully more of the work that matters. I think they will. The paper says why. The prototype shows me where the difficulty actually lives.
        </p>
      </section>

      {/* ── EPILOGUE + OUTBOUND LINKS ── */}
      <section style={{ padding: "5rem 3rem 6rem", background: "#F5F3EE", borderBottom: `0.5px solid ${RULE}` }}>
        <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, maxWidth: 660, marginBottom: "3rem", fontFamily: fontMono, fontStyle: "italic" }}>
          If you want to see the prediction piece for yourself, it's at{" "}
          <a href="https://reactai.tech" target="_blank" rel="noreferrer" style={linkStyle}>reactai.tech</a>.{" "}
          If you want the argument in full, the working paper is{" "}
          <a href="/RCL_Paper_v0_5.pdf" style={linkStyle}>here</a>.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <a
            href="/RCL_Paper_v0_5.pdf"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              border: `0.5px solid ${AMBER_DARK}`,
              color: AMBER_DARK,
              textDecoration: "none",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: fontMono,
            }}
          >
            Read the working paper (PDF)
          </a>
          <a
            href="https://reactai.tech"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 10,
              letterSpacing: "0.06em",
              color: "#999",
              textDecoration: "none",
              borderBottom: "0.5px solid #ccc",
              paddingBottom: 2,
              fontFamily: fontMono,
            }}
          >
            ReactAI — the applied platform that prompted this framework →
          </a>
        </div>
      </section>

    </div>
  );
}
