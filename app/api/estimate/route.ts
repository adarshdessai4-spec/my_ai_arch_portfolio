import { NextResponse } from "next/server";

function scoreInput(input: string) {
  return input.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export async function POST(request: Request) {
  const body = await request.json();
  const score =
    scoreInput(body.goal ?? "") +
    scoreInput(body.channel ?? "") +
    scoreInput(body.scale ?? "") +
    scoreInput(body.urgency ?? "");

  const timelineWeeks = (score % 6) + 4;
  const budget = (score % 3) + 1;

  const response = {
    architecture:
      "AI agent layer + automation orchestrator + analytics dashboard",
    phases: ["Discovery", "Prototype", "Build", "Launch"],
    timeline: `${timelineWeeks} - ${timelineWeeks + 2} weeks`,
    budget:
      budget === 1
        ? "$8k - $15k"
        : budget === 2
        ? "$15k - $35k"
        : "$35k - $75k",
    deliverables: [
      "AI workflow map",
      "Agent + automation build",
      "Dashboard + monitoring",
      "Deployment playbook"
    ],
    reasoning:
      "Your inputs suggest a balance of speed and reliability. This stack keeps iteration fast while preparing for scale."
  };

  return NextResponse.json(response);
}
