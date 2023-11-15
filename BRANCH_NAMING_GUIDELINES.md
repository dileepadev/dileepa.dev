# Branch Naming Guidelines

When creating a new branch, please follow the branch naming convention. This convention helps in providing a clear and standardized way to communicate the nature of the changes.

## Protected Branches

These are the protected branches in this repository:

- **These branches are protected and can only be directly updated by the repository administrators.**
- **If you are a contributor but not an administrator, you should not directly commit to these branches.**

| Branch Name | Description                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| main        | The source code for the latest stable and production-ready release of the website.                                       |
| dev         | New features and bug fixes that are being worked on but not yet ready for production. Only for preview upcoming changes. |

## Contributing Branches

These are the contributing branches in this repository:

- **These branches are open for contributions from all contributors.**

The branch name should follow the format:

| Branch Name | Description                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| feat/x      | Branches for adding new features or enhancing existing functionality. Replace `x` with a brief feature description.  |
| fix/x       | Branches for bug fixes or corrections. Replace `x` with a brief description of the issue being addressed.            |
| docs/x      | Branches used to update documentation. Replace `x` with a brief description of the documentation being updated.      |
| style/x     | Branches for code style changes. Replace `x` with a brief description of the style modification.                     |
| refactor/x  | Branches for code refactoring or restructuring without changing functionality. Replace `x` with a brief description. |
| perf/x      | Branches for performance improvements. Replace `x` with a brief description of the performance enhancement.          |
| test/x      | Branches for adding or modifying tests. Replace `x` with a brief description of the test being added or modified.    |
| chore/x     | Branches used for routine tasks, maintenance, or tooling changes. Replace `x` with a brief description of the task.  |

## Examples

- `feat/navbar` - Branch used to develop a new feature for the navbar.
- `fix/login` - Branch used to fix a bug with the login functionality.
- `docs/readme` - Branch used to update the README.
- `style/formatting` - Branch used to format the code according to the style guide.
- `refactor/database` - Branch used to refactor the database connection handling.
- `test/authentication` - Branch used to add a test suite for the authentication service.
- `chore/dependencies` - Branch used to upgrade dependencies to the latest versions.
