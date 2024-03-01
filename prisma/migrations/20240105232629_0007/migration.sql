/*
  Warnings:

  - You are about to drop the column `externalId` on the `Standings` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Standings_externalId_key";

-- AlterTable
ALTER TABLE "Standings" DROP COLUMN "externalId",
ALTER COLUMN "description" DROP NOT NULL;
