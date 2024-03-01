/*
  Warnings:

  - You are about to drop the column `country` on the `League` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "League" DROP COLUMN "country",
ADD COLUMN     "countryId" TEXT,
ADD COLUMN     "type" TEXT,
ALTER COLUMN "logo" DROP NOT NULL,
ALTER COLUMN "flag" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Standings" ALTER COLUMN "update" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "flag" TEXT,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "League" ADD CONSTRAINT "League_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
