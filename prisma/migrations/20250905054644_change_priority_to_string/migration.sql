-- AlterTable
ALTER TABLE "public"."Complaint" ALTER COLUMN "priority" DROP DEFAULT,
ALTER COLUMN "priority" SET DATA TYPE TEXT;
