# Sathvar Partner Contributing Guide

Before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Sathvar Partner Contributing Guide](#sathvar-partner-contributing-guide)
    - [Commit Convention](#commit-convention)
  - [Pull Request Guidelines](#pull-request-guidelines)
    - [Steps to PR](#steps-to-pr)
  - [Development Setup](#development-setup)
  - [Visual Changes](#visual-changes)
  - [Documentation](#documentation)



### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Pull Request Guidelines

- The `main` branch is basically a snapshot of the latest production version. All development must be done in dedicated branches and will be merged to `canary` branch.
- Make sure that Github Actions are green
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you add a new feature:
  - Add the test case that accompanies it.
  - Provide a compelling reason to add this feature. Ideally, I would first open a suggestion topic and green it before working on it.
- If you correct an error:
  - If you are solving a special problem, add (fix #xxxx [, # xxx]) (# xxxx is the problem identification) in your PR title for a better launch record, for example update entities encoding / decoding (fix # 3899).
  - Provide a detailed description of the error in the PR. Favorite live demo.
  - Add the appropriate test coverage, if applicable.

### Steps to PR

1. Fork of the sathvar-partner repository and clone your fork

2. Create a new branch out of the `canary` branch. We follow the convention
   `[type/scope]`. For example `fix/dropdown-hook`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/DDIndia-biz/sathvar-partner/blob/main/CONTRIBUTING.md#commit-convention).

## Development Setup

After cloning the repository, execute the following commands in the root folder:

1. Install dependencies

```bash
pnpm i

#or

pnpm install
```

2. You can use the following command to start the webpack dev server:

```bash
## Start the dev babel server of sathvar-partner core components
pnpm dev
```

## Visual Changes

When making a visual change, please provide screenshots
and/or screencasts of the proposed change. This will help us to understand the
desired change easier.

## Documentation

Please update the docs with any visual changes, the visual changes and docs should always be in sync.

The main documentation lives in the [Learning Hub](https://github.com/DDIndia-biz/Resources) folder, the project uses MDX.
