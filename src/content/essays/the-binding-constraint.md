# Why You Use AI for a Fraction of What You Could

*The constraint isn't capability. It's context — and the cost of supplying it every single time.*

---

Watch a capable professional use an AI model for a week and you'll notice something odd. They're clearly impressed by it. They'll tell you it's remarkable. And they use it for a tiny fraction of the work it could plausibly do.

They use it to draft the email they already know how to write, to clean up prose, to summarise a document, to rubber-duck a decision they've mostly made. What they don't use it for is the work that actually fills their day: which of three stakeholders to approach and how, whether to push back on the board or concede, how to frame a number so a specific sceptical reader will accept it. The consequential, relationship-shaped judgment calls — the ones where getting it right is worth real money — they still do in their own head.

Why?

The answer most commonly given is that the model isn't good enough yet. Give it another generation or two and it'll handle the hard stuff. I think that answer is wrong, and I think it's wrong in a way that matters commercially, because it points everyone at the wrong problem.

## The misdiagnosis

Here's what I actually see happening. The professional doesn't delegate the hard work because delegating it would require telling the model everything it needs to know to do it well — who these people are, what each of them wants, what the history is, where the landmines sit, what the professional is trying to achieve and what constraints they're under. And that telling costs more than the work saved. Every time. So they don't. Not because the model couldn't reason about it, but because loading it with the context takes longer than just doing the task themselves.

I call this the delegation conjecture: for most professional work, the binding constraint on how much you actually hand to an AI system is not the capability of the model, it's the absence of a maintained model of your relational world, and the cost of supplying that context afresh every single time.

## Why this is structural, not a passing inconvenience

This sounds like a temporary friction but it is not; it is a structural issue.

A large language model begins every conversation blank with respect to the people you work with and through. It has no record of the supplier whose tone has been cooling for two months, no model of which of your counterparts actually holds the authority, no memory of the last three exchanges that make this fourth one legible. You can supply all of that inside a session, and the model will use it well. But it doesn't persist. Tomorrow's conversation starts blank again.

This is not a gap that scale closes. A bigger model, a longer context window, more fine-tuning — none of them change the fact that the system holds no persistent model of your relational situation between sessions. It's architectural. And because the quality of relational advice depends almost entirely on how well the adviser understands the people involved, a system that starts blank is capped — no matter how brilliant — at roughly the quality of advice you'd get from an extraordinarily capable stranger who knows nothing about your situation. That's a real ceiling, and no amount of raw intelligence lifts it.

## Most of your work is like this, even the parts that don't look like it

You might object that this only bites on the obviously interpersonal work — negotiations, difficult conversations, stakeholder management — and that most professional work isn't like that. I'd have said the same thing before I looked closely. But it isn't true.

Take something that looks purely quantitative: a cash-flow projection. The arithmetic is fixed; there's a right answer given the inputs. But which projection you actually build — which assumptions you adopt, which sensitivities you foreground, how you frame the result — is governed almost entirely by who the projection is for and how you expect them to react to it. The version you build for a board looking for a reason to cut costs is a different document from the one you build for a lender you're trying to reassure, even though the underlying model is identical. The number is arithmetic. The choices around the number are relational. And the choices are most of the work.

I spent twenty-five years as a finance executive, and almost nothing that crossed my desk was settled by the calculation alone. The calculation was the easy part. The work was in the anticipation — how will this land, with this person, given everything that's come before. Most professional work is like this, whatever its surface form: it's mediated by someone's response. A system that can't hold a model of the people whose responses mediate your work can't help you with the part that's actually hard.

## What it would take to lift the cap

Not a smarter model. A model that maintains the context the work depends on. Concretely, that means holding three things and keeping them current:

A model of the other people in your world — not facts about them, but what each of them actually *wants*, which is what predicts what they'll do. A model of your own position — your goals, your constraints, the credibility you hold with each party — because whether a move works depends as much on where you stand as on who you're moving. And a model of the structural conditions that bound what's achievable at all: the budgets, the freezes, the mandates that no amount of relational skill can wish away.

And — this is the part that turns out to matter most — it has to maintain all of that over the accumulated *history* of the relationship, not just the present moment. Here's why history is load-bearing rather than nice-to-have. A curt, three-word reply from a colleague is hostility from one person and completely unremarkable from another. Nothing in the message itself tells you which. Only the record of every exchange that came before it does. A system working from a perfect snapshot of the present — every current fact correct — still misreads that reply, because what it means isn't in the present at all. It's in the history. Sever the advice from the record, and you get advice that's fluent and confidently wrong precisely where the stakes are highest.

I've set out the full version of this argument — the architecture, where it sits relative to the existing research, and a specification precise enough to be proven wrong — in a working paper. It's early, and I've tried hard to keep it honest about what's established versus what's still a bet. But the core claim is simple enough: supplying and maintaining the relational context of your work is a distinct, buildable thing, and it's the part the current generation of tools doesn't do.

## I built it, to see whether it was true

I didn't only want to argue this. I wanted to see whether it held up. So I built a tool to test it.

It's called ReactAI, and its narrow job is to predict how a specific stakeholder will react to a specific move, given a maintained model of who that person is and what they want. When the context is there, it works — it's genuinely good at anticipating how people will respond, and at suggesting better ways to approach them. The first time people see it do this, the reaction is almost always the same: some version of *I can't believe it can do that*, followed immediately by a list of situations they'd use it for.

And then they don't use it again.

The reason is exactly what the paper predicts: keeping the relational context current — feeding the tool the updates, the new exchanges, the shifts — with ReactAI as a separate, standalone tool, all of that sits outside the flow of the user's actual work. It's a separate chore. And a separate chore, however valuable, loses to the demands of the day, every time. The prediction engine isn't the problem — the prediction is solvable; it's solved. The maintenance is the frontier.

## Where the leverage actually is

This points at where I think the real leverage in professional AI sits, and it isn't where most of the attention is going. The race everyone's watching is the capability race — the next model, the higher benchmark. That race matters, but for the work that fills most professionals' days, it's running past the binding constraint. The model is already capable enough to do far more of your work than you currently trust it with. What's missing isn't intelligence. It's the maintained context that would let that intelligence engage with your actual situation — and, above all, context maintenance that lives *inside* your workflow rather than beside it as one more thing to keep up.

Solve that, and the amount of real work a capable professional can hand to an AI system doesn't improve incrementally. It changes category.

That's the bet, and it's a falsifiable one: hold the model fixed, give people maintained relational context at a low enough cost, and watch whether they delegate meaningfully more of the work that matters. I think they will. The paper says why. The prototype shows me where the difficulty actually lives.

---

*If you want to see the prediction piece for yourself, it's at [reactai.tech](https://reactai.tech). If you want the argument in full, the paper is [here](https://doi.org/10.5281/zenodo.21182571).*
