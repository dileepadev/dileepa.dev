# Commit Message Guidelines

A good commit message should be descriptive and provide context about the changes made. This helps in understanding and reviewing the changes in the future.

## Commit Message Types

Use the following commit types to describe your changes:

| Type       | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| `feat`     | A new feature or enhancement to existing functionality.           |
| `fix`      | A bug fix or correction of an issue.                              |
| `docs`     | Documentation updates (e.g., README, comments).                   |
| `style`    | Code style changes (e.g., formatting, indentation).               |
| `refactor` | Code refactoring or restructuring without changing functionality. |
| `perf`     | Performance improvements.                                         |
| `test`     | Adding or modifying tests.                                        |
| `chore`    | Routine tasks, maintenance, or tooling changes.                   |

## Examples

Here are some examples of well-formatted commit messages:

- `feat: Add new endpoint for user authentication`
- `fix: Resolve issue with broken layout on mobile devices`
- `docs: Update installation instructions`
- `style: Format code according to style guide`
- `refactor: Improve database connection handling`
- `test: Add test suite for authentication service`
- `chore: Upgrade dependencies to the latest versions`

## Additional Tips

- **Keep commit messages concise** and to the point.
- **Use present tense** in your messages (e.g., "Add feature" instead of "Added feature").
- **Use imperative mood** for the summary (e.g., "Fix bug" instead of "Fixed bug").
- **Separate the subject** from the body of your message with a blank line when necessary.
- **Reference issues** if applicable, using the format: `Fixes #123` or `Closes #456`.
- **Start with a short summary** of the changes made in the commit.
- **Provide additional details** in the commit message body if necessary. This can include the reason for the change, impact, or any dependencies added/removed.
- **Keep the message within 72 characters per line** to ensure it's easy to read in Git log output.

**_Remember, writing descriptive commit messages can save time and frustration in the future, and help others understand the changes made to the codebase._**
