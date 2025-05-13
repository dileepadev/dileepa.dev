# Commit Message Guidelines

A good commit message should be descriptive and provide context about the changes made. This helps improve code review, debugging, and long-term maintainability.

## Commit Message Format

Use the following format for commit messages:

```md
<type>: <short message> (optional issue references)
```

### `<type>`

The `<type>` field indicates the nature of the changes made in the commit. Use one of the following values:

| Type     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| feat     | A new feature or enhancement to existing functionality.       |
| fix      | A bug fix or correction of an issue.                          |
| docs     | Documentation updates (e.g., README, code comments).          |
| style    | Code style changes (e.g., formatting, indentation, no logic). |
| refactor | Code refactoring without changing external behavior.          |
| perf     | Performance improvements.                                     |
| test     | Adding or modifying tests.                                    |
| chore    | Routine tasks, maintenance, or tooling changes.               |

### `<short message>`

The `<short message>` should be a concise summary of the changes made.

#### Tips for Writing the Short Message

- Use the imperative mood (e.g., “Add” instead of “Added”).
- Start with a capital letter.
- Do not end with a period.
- Keep it under 50 characters if possible.
- Be specific and descriptive about what was changed.
- Avoid vague terms like "fix" or "update" without context.
- Avoid using "I" or "we" in the message.
- Avoid using "this commit" or "this change" in the message.
- If the commit message is longer than 50 characters, add a longer description after a blank line.

  ```md
  <type>: <short message> (optional issue references)

  <BLANK LINE>
  <longer description>
  ```

  Example:

  ```md
  feat: Add user profile page (fixes #88)

  This commit introduces a new user profile page that allows users to view and edit their profile information.
  ```

### `(optional issue references)`

If the commit relates to a specific issue or task, you can include a reference to it at the end of the commit message. To link commits with GitHub issues for better traceability, include the issue reference at the end of the commit title in parentheses.

#### Referencing Format

```md
(optional issue references) = (<Action> #<issue_number>)
```

Examples:

```md
<type>: <short message> (fixes #123)
<type>: <short message> (refs #123)
```

#### Tips for Issue References

- Recommended action keywords are `fixes` and `refs`.
- Use `fixes` if the commit resolves the issue and you want GitHub to close it automatically when the commit is merged.
- Use `refs` if the commit is related to the issue but does not resolve it, or if you want to keep the issue open for further discussion.
- Use the issue number preceded by a `#` symbol (e.g., `#123`)

## Examples

- `feat: Add user profile page (fixes #88)`
- `fix: Correct login validation logic (fixes #42)`
- `docs: Update README installation steps (refs #34)`
- `style: Format code using Prettier (refs #56 #57)`
- `refactor: Simplify database connection flow (refs #77)`
- `test: Add unit tests for auth service`
- `chore: Upgrade dependencies to latest versions`

## Summary Table for Issue Linking

| Purpose                | Example Commit Message                   | Result                         |
| ---------------------- | ---------------------------------------- | ------------------------------ |
| Close single issue     | `fix: Update API endpoint (fixes #12)`   | Links & closes issue #12       |
| Reference single issue | `docs: Update README (refs #34)`         | Links issue #34 only           |
| Close multiple issues  | `feat: Add caching (fixes #56, #57)`     | Links & closes issues #56, #57 |
| Reference multiple     | `refactor: Cleanup code (refs #33, #38)` | Links only                     |
