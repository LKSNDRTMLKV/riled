/*
  Warnings:

  - You are about to drop the column `externalId` on the `StandingsAll` table. All the data in the column will be lost.
  - You are about to drop the column `externalId` on the `StandingsAway` table. All the data in the column will be lost.
  - You are about to drop the column `externalId` on the `StandingsHome` table. All the data in the column will be lost.
  - Changed the type of `externalId` on the `League` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `externalId` on the `Standings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `externalId` on the `Team` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "League" DROP COLUMN "externalId",
ADD COLUMN     "externalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Standings" DROP COLUMN "externalId",
ADD COLUMN     "externalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "StandingsAll" DROP COLUMN "externalId";

-- AlterTable
ALTER TABLE "StandingsAway" DROP COLUMN "externalId";

-- AlterTable
ALTER TABLE "StandingsHome" DROP COLUMN "externalId";

-- AlterTable
ALTER TABLE "Team" DROP COLUMN "externalId",
ADD COLUMN     "externalId" INTEGER NOT NULL;
