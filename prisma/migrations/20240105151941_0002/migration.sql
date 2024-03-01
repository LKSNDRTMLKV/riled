/*
  Warnings:

  - You are about to drop the column `season` on the `League` table. All the data in the column will be lost.
  - Added the required column `season` to the `Standings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "League" DROP COLUMN "season";

-- AlterTable
ALTER TABLE "Standings" ADD COLUMN     "season" INTEGER NOT NULL;
