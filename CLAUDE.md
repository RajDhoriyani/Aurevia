# Aurevia

Aurevia is a local-first open-source desktop productivity app built with Electron + React.

The app combines:
- Workflow
- Calendar
- Design
- Planning
- Recent Files

Version 1 is local-only and beginner-friendly.

## Commands

```bash
npm install
npm start
```

If the repo later adds more scripts, update this section.

## Project Goals

- Build a clean desktop productivity app for PC
- Keep the UI minimal and easy to use
- Support modular growth in phases
- Keep all project data local in V1
- Stay open-source and maintainable

## Core Product Rules

IMPORTANT:
- V1 is local-only
- Do not add cloud sync unless explicitly requested
- Do not add auth unless explicitly requested
- Do not add backend services unless explicitly requested
- Do not overengineer
- Build incrementally in phases
- Prefer simple architecture over clever architecture

## Working Style

When working on a task:
1. Inspect the current repo structure first
2. Understand existing files before editing
3. Keep diffs minimal
4. Do not refactor unrelated code
5. Reuse existing patterns where possible
6. Explain files created or edited after implementation

## Project Priorities

Prioritize:
- clarity
- maintainability
- modularity
- beginner-friendly UX
- local-first storage
- predictable interactions

## Product Direction

Main sections of the app:
- Home
- Workflow
- Calendar
- Design
- Planning
- Recent Files

Users should be able to:
- start with a single module
- later convert it into a larger workflow
- keep data stored locally on device

## Suggested Structure

```text
src/
  components/
  modules/
  storage/
  utils/
```

This structure may evolve, but changes should stay practical.

## Coding Conventions

- Use clear and descriptive names
- Prefer small reusable components
- Avoid giant files when possible
- Keep components focused
- Keep styling simple in early phases
- Avoid unnecessary dependencies
- Prefer readable code over clever abstractions

## UX Direction

The app should feel:
- calm
- clean
- minimal
- structured
- easy to understand

The UI should not feel flashy or cluttered.

## Phase Rules

When starting a new phase:
- define the goal clearly
- implement only that phase
- do not jump ahead
- stop after the requested scope is done

## Output Expectations

After completing work:
- list all files created or edited
- explain important changes
- mention assumptions
- provide exact run instructions
- suggest the next best step only if asked