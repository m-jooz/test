-- CreateEnum
CREATE TYPE "QaOverallStatus" AS ENUM ('PASS', 'FAIL');

-- AlterTable
ALTER TABLE "jira_tasks" ADD COLUMN     "previous_assignee_id" TEXT,
ADD COLUMN     "previous_assignee_name" TEXT,
ADD COLUMN     "qa_requested_by_id" TEXT,
ADD COLUMN     "qa_requested_by_name" TEXT,
ADD COLUMN     "sent_to_qa_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "qa_submissions" (
    "id" TEXT NOT NULL,
    "jira_task_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "overall_status" "QaOverallStatus" NOT NULL,
    "pass_count" INTEGER NOT NULL DEFAULT 0,
    "fail_count" INTEGER NOT NULL DEFAULT 0,
    "total_count" INTEGER NOT NULL DEFAULT 0,
    "jira_comment" TEXT NOT NULL,
    "label_added" TEXT,
    "jira_status_after" TEXT,
    "submitted_by" TEXT NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "qa_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "qa_submissions_jira_task_id_idx" ON "qa_submissions"("jira_task_id");

-- CreateIndex
CREATE INDEX "qa_submissions_project_id_idx" ON "qa_submissions"("project_id");

-- AddForeignKey
ALTER TABLE "qa_submissions" ADD CONSTRAINT "qa_submissions_jira_task_id_fkey" FOREIGN KEY ("jira_task_id") REFERENCES "jira_tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_submissions" ADD CONSTRAINT "qa_submissions_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_submissions" ADD CONSTRAINT "qa_submissions_submitted_by_fkey" FOREIGN KEY ("submitted_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
