# QA Testing Management Platform

A backend API for managing QA testing workflows: projects, test cases, test execution, bug tracking with two-way Jira sync, attachments, notifications, and reporting.

## Description

This platform lets QA teams organize testing work per project, write and execute test cases, file bug reports straight from a failed test run, and have approved bugs automatically commented, transitioned, and reassigned on the linked Jira issue. Leads and admins get a dashboard of pass/fail rates by platform and priority, a queue of bugs pending review, and the ability to generate and share point-in-time test reports.

Core workflow: **Project → Test Case → Test Run → (optional) Bug → Lead Review → Jira sync**.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) 11 + TypeScript
- **Database**: PostgreSQL, accessed via [Prisma ORM](https://www.prisma.io/) 7 (driver adapters / `@prisma/adapter-pg`)
- **Auth**: JWT (`@nestjs/jwt`, `passport-jwt`) + bcrypt password hashing
- **File upload**: Multer, served statically via `@nestjs/serve-static`
- **HTTP client**: Axios (Jira REST API integration)
- **Validation**: `class-validator` / `class-transformer` DTOs on every endpoint
- **Docs**: Swagger / OpenAPI at `/api/docs`

## Project Structure

```
src/
├── auth/              # register, login, JWT strategy, guards
├── users/             # user CRUD, role management
├── projects/          # projects (Jira config lives here)
├── jira/              # Jira sync, task views, Jira REST client
├── test-cases/        # test case CRUD
├── test-runs/         # test execution + bug approve/reject workflow
├── attachments/        # file upload for test runs
├── notifications/      # per-user notifications
├── reports/            # dashboard stats + shareable reports
├── activity-logs/      # audit trail, written to by every write action
└── common/
    ├── guards/         # JwtAuthGuard, RolesGuard
    ├── decorators/      # @Public, @Roles, @CurrentUser
    ├── interceptors/    # ResponseInterceptor (consistent envelope)
    └── filters/         # GlobalExceptionFilter
```

## How to Run Locally

### Prerequisites

- Node.js 20+
- Docker (for PostgreSQL) — or a PostgreSQL instance you point `DATABASE_URL` at

### 1. Start PostgreSQL with Docker

```bash
docker compose up -d
```

This starts a `postgres:16` container on `localhost:5434` with database `qa_platform` (matches the default `.env.example`). Data persists in a named Docker volume.

> If you already have a container named `qa-platform-db`, stop/remove it first or edit `docker-compose.yml`.

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` if your database connection or ports differ from the defaults. See [Environment Variables](#environment-variables) below.

### 4. Run database migrations

```bash
npx prisma migrate dev
```

This applies all migrations in `prisma/migrations` and generates the Prisma client.

### 5. Start the API

```bash
# development (watch mode)
npm run start:dev

# production build + run
npm run build
npm run start:prod
```

The API listens on `http://localhost:3000` by default. Swagger docs are available at `http://localhost:3000/api/docs`.

### Running tests

```bash
npm run test       # unit tests
npm run test:e2e   # end-to-end tests
npm run test:cov   # coverage
```

## Environment Variables

| Variable         | Description                                                                 | Example                                                              |
| ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `DATABASE_URL`    | PostgreSQL connection string used by Prisma.                                  | `postgresql://postgres:postgres@localhost:5434/qa_platform?schema=public` |
| `JWT_SECRET`      | Secret used to sign/verify JWT access tokens. Use a long random value in prod. | `change-this-to-a-long-random-secret-in-production`                     |
| `JWT_EXPIRES_IN`  | JWT access token lifetime (any [ms](https://github.com/vercel/ms) string).    | `1d`                                                                     |
| `PORT`            | Port the HTTP server listens on.                                              | `3000`                                                                   |

Per-project Jira credentials (`jiraBaseUrl`, `jiraProjectKey`, `jiraApiToken`) are **not** environment variables — they're stored on each `Project` record via `POST /projects` / `PATCH /projects/:id`, since each project can sync to a different Jira instance/project.

## API Endpoints

All responses are wrapped in a consistent envelope by the global `ResponseInterceptor`:

```json
{ "success": true, "statusCode": 200, "data": { ... }, "timestamp": "..." }
```

Errors are wrapped consistently by the `GlobalExceptionFilter`:

```json
{ "success": false, "statusCode": 404, "message": "...", "path": "...", "timestamp": "..." }
```

Every endpoint below requires a `Authorization: Bearer <token>` header **except** the ones marked **Public**. Endpoints marked with a role require the current user to have one of those roles (`RolesGuard`); unmarked endpoints just require any authenticated user.

### Auth (`/auth`)

| Method | Path             | Access | Description           |
| ------ | ---------------- | ------ | ---------------------- |
| POST   | `/auth/register` | Public | Register a new user (defaults to `TESTER` role) |
| POST   | `/auth/login`    | Public | Log in, returns a JWT access token |

### Users (`/users`)

| Method | Path               | Access      | Description                  |
| ------ | ------------------ | ----------- | ----------------------------- |
| GET    | `/users/me`         | Any user    | Current user's profile        |
| GET    | `/users`            | Admin, Lead | List all users                |
| GET    | `/users/:id`        | Admin, Lead | Get a user by id              |
| PATCH  | `/users/:id/role`   | Admin       | Change a user's role          |
| DELETE | `/users/:id`        | Admin       | Delete a user                 |

### Projects (`/projects`)

| Method | Path            | Access      | Description                                  |
| ------ | --------------- | ----------- | ---------------------------------------------- |
| POST   | `/projects`      | Admin, Lead | Create a project                               |
| GET    | `/projects`      | Any user    | List all projects                              |
| GET    | `/projects/:id`  | Any user    | Get a project with stats (test case/Jira task counts) |
| PATCH  | `/projects/:id`  | Admin, Lead | Update a project                               |
| DELETE | `/projects/:id`  | Admin       | Delete a project                               |

### Jira (`/jira`)

| Method | Path                                        | Access      | Description                                   |
| ------ | -------------------------------------------- | ----------- | ----------------------------------------------- |
| POST   | `/jira/:projectId/sync`                      | Admin, Lead | Pull tasks from Jira into `jira_tasks` (upsert) |
| GET    | `/jira/:projectId/tasks`                     | Any user    | List Jira tasks, each with an `unseen` badge    |
| GET    | `/jira/:projectId/tasks/:taskId`             | Any user    | Get a single Jira task                          |
| POST   | `/jira/:projectId/tasks/:taskId/seen`        | Any user    | Mark a task as seen by the current user          |

### Test Cases (`/test-cases`)

| Method | Path                | Access       | Description                       |
| ------ | -------------------- | ------------ | ----------------------------------- |
| POST   | `/test-cases`         | Lead, Tester | Create a test case                  |
| GET    | `/test-cases?projectId=` | Any user | List test cases for a project       |
| GET    | `/test-cases/:id`     | Any user     | Get a single test case              |
| PATCH  | `/test-cases/:id`     | Lead, Tester | Update a test case                  |
| DELETE | `/test-cases/:id`     | Lead         | Delete a test case                  |

### Test Runs (`/test-runs`)

| Method | Path                         | Access              | Description                                              |
| ------ | ----------------------------- | -------------------- | ------------------------------------------------------------ |
| POST   | `/test-runs`                   | Admin, Lead, Tester  | Submit a test run result; set `isBug: true` to file a bug report |
| GET    | `/test-runs?testCaseId=`       | Any user             | List test runs for a test case                                |
| GET    | `/test-runs/:id`               | Any user             | Get a single test run with full details                       |
| PATCH  | `/test-runs/:id/bug/approve`   | Admin, Lead          | Approve a pending bug: comments, transitions, and reassigns the linked Jira issue |
| PATCH  | `/test-runs/:id/bug/reject`    | Admin, Lead          | Reject a pending bug with a reason                             |

### Attachments (`/attachments`)

| Method | Path                       | Access                | Description                                  |
| ------ | --------------------------- | ----------------------- | ----------------------------------------------- |
| POST   | `/attachments/:testRunId`    | Any user                | Upload an image/video (jpg, png, mp4, webm; ≤10MB) for a test run |
| GET    | `/attachments/:testRunId`    | Any user                | List attachments for a test run                  |
| DELETE | `/attachments/:id`           | Owner of the test run   | Delete an attachment                              |

Uploaded files are served statically from `/uploads/*`.

### Notifications (`/notifications`)

| Method | Path                       | Access   | Description                          |
| ------ | --------------------------- | -------- | --------------------------------------- |
| GET    | `/notifications`             | Any user | List the current user's notifications, with unread count |
| PATCH  | `/notifications/read-all`    | Any user | Mark all of the current user's notifications as read |
| PATCH  | `/notifications/:id/read`    | Owner    | Mark a single notification as read     |

### Reports (`/reports`)

| Method | Path                          | Access   | Description                                            |
| ------ | ------------------------------ | -------- | ---------------------------------------------------------- |
| GET    | `/reports/dashboard?projectId=`| Any user | Dashboard stats: overview, by platform, by priority, recent activity, unseen Jira tasks, pending bug reviews |
| POST   | `/reports/generate`             | Any user | Generate and save a point-in-time report (optionally filtered) |
| GET    | `/reports/share/:shareToken`    | Public   | Fetch a saved report by its public share token              |
| GET    | `/reports?projectId=`           | Any user | List all reports for a project                              |
| GET    | `/reports/:id`                  | Any user | Get a single report                                          |

## Activity Log

Every write action (create/update/delete on projects, test cases, test runs, Jira syncs, report generation) is recorded to `activity_logs` with the acting user, the before/after values where applicable, and the affected entity — this powers the dashboard's "recent activity" feed and provides an audit trail.
