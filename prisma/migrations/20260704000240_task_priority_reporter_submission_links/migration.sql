-- AlterTable
ALTER TABLE "jira_tasks" ADD COLUMN     "current_reporter" TEXT,
ADD COLUMN     "priority" TEXT;

-- AlterTable
ALTER TABLE "qa_submissions" ADD COLUMN     "share_token" TEXT,
ADD COLUMN     "test_run_ids" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "qa_submissions_share_token_key" ON "qa_submissions"("share_token");

