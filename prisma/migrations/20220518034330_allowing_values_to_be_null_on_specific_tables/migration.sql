-- AlterTable
ALTER TABLE "Awards" ALTER COLUMN "nominateEndDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Options" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
