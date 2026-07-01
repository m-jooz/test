-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'LEAD', 'TESTER', 'VIEWER');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('WEB', 'ANDROID', 'IOS');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('WEB', 'ANDROID', 'IOS');

-- CreateEnum
CREATE TYPE "TestCaseType" AS ENUM ('MANUAL', 'E2E', 'API', 'UNIT', 'PERFORMANCE');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "TestRunStatus" AS ENUM ('PASS', 'FAIL', 'BLOCKED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "BugStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('IMAGE', 'VIDEO');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'TESTER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,
    "description" TEXT,
    "jira_project_key" TEXT,
    "jira_base_url" TEXT,
    "jira_api_token" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jira_tasks" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "jira_key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "current_status" TEXT,
    "current_assignee" TEXT,
    "jira_url" TEXT,
    "jira_updated_at" TIMESTAMP(3),
    "synced_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jira_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jira_task_views" (
    "id" TEXT NOT NULL,
    "jira_task_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "seen_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jira_task_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_cases" (
    "id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "jira_task_id" TEXT,
    "title" TEXT NOT NULL,
    "steps" TEXT NOT NULL,
    "expected_result" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "type" "TestCaseType" NOT NULL,
    "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_runs" (
    "id" TEXT NOT NULL,
    "test_case_id" TEXT NOT NULL,
    "status" "TestRunStatus" NOT NULL,
    "actual_result" TEXT,
    "notes" TEXT,
    "severity" "Severity",
    "is_bug" BOOLEAN NOT NULL DEFAULT false,
    "bug_details" TEXT,
    "bug_status" "BugStatus",
    "bug_reviewed_by" TEXT,
    "bug_reviewed_at" TIMESTAMP(3),
    "reject_reason" TEXT,
    "jira_comment_id" TEXT,
    "jira_status_before" TEXT,
    "jira_status_after" TEXT,
    "jira_reassigned_to" TEXT,
    "retest_of_run_id" TEXT,
    "executed_by" TEXT NOT NULL,
    "executed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_runs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attachments" (
    "id" TEXT NOT NULL,
    "test_run_id" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "type" "AttachmentType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attachments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "project_id" TEXT,
    "action" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "old_value" JSONB,
    "new_value" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "jira_tasks_project_id_jira_key_key" ON "jira_tasks"("project_id", "jira_key");

-- CreateIndex
CREATE UNIQUE INDEX "jira_task_views_jira_task_id_user_id_key" ON "jira_task_views"("jira_task_id", "user_id");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jira_tasks" ADD CONSTRAINT "jira_tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jira_task_views" ADD CONSTRAINT "jira_task_views_jira_task_id_fkey" FOREIGN KEY ("jira_task_id") REFERENCES "jira_tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jira_task_views" ADD CONSTRAINT "jira_task_views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_cases" ADD CONSTRAINT "test_cases_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_cases" ADD CONSTRAINT "test_cases_jira_task_id_fkey" FOREIGN KEY ("jira_task_id") REFERENCES "jira_tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_cases" ADD CONSTRAINT "test_cases_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_runs" ADD CONSTRAINT "test_runs_test_case_id_fkey" FOREIGN KEY ("test_case_id") REFERENCES "test_cases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_runs" ADD CONSTRAINT "test_runs_executed_by_fkey" FOREIGN KEY ("executed_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_runs" ADD CONSTRAINT "test_runs_bug_reviewed_by_fkey" FOREIGN KEY ("bug_reviewed_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_runs" ADD CONSTRAINT "test_runs_retest_of_run_id_fkey" FOREIGN KEY ("retest_of_run_id") REFERENCES "test_runs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attachments" ADD CONSTRAINT "attachments_test_run_id_fkey" FOREIGN KEY ("test_run_id") REFERENCES "test_runs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
