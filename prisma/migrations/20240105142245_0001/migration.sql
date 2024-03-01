-- CreateTable
CREATE TABLE "League" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "season" INTEGER NOT NULL,

    CONSTRAINT "League_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Standings" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "form" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "goalsDiff" INTEGER NOT NULL,
    "group" TEXT NOT NULL,
    "status" TEXT,
    "update" TEXT NOT NULL,
    "leagueId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "standingsAllId" TEXT NOT NULL,
    "standingsHomeId" TEXT NOT NULL,
    "standingsAwayId" TEXT NOT NULL,

    CONSTRAINT "Standings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandingsAll" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "played" INTEGER NOT NULL,
    "win" INTEGER NOT NULL,
    "draw" INTEGER NOT NULL,
    "lose" INTEGER NOT NULL,
    "goalsFor" INTEGER NOT NULL,
    "goalsAgainst" INTEGER NOT NULL,

    CONSTRAINT "StandingsAll_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandingsHome" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "played" INTEGER NOT NULL,
    "win" INTEGER NOT NULL,
    "draw" INTEGER NOT NULL,
    "lose" INTEGER NOT NULL,
    "goalsFor" INTEGER NOT NULL,
    "goalsAgainst" INTEGER NOT NULL,

    CONSTRAINT "StandingsHome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StandingsAway" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "played" INTEGER NOT NULL,
    "win" INTEGER NOT NULL,
    "draw" INTEGER NOT NULL,
    "lose" INTEGER NOT NULL,
    "goalsFor" INTEGER NOT NULL,
    "goalsAgainst" INTEGER NOT NULL,

    CONSTRAINT "StandingsAway_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Standings" ADD CONSTRAINT "Standings_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standings" ADD CONSTRAINT "Standings_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standings" ADD CONSTRAINT "Standings_standingsAllId_fkey" FOREIGN KEY ("standingsAllId") REFERENCES "StandingsAll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standings" ADD CONSTRAINT "Standings_standingsHomeId_fkey" FOREIGN KEY ("standingsHomeId") REFERENCES "StandingsHome"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standings" ADD CONSTRAINT "Standings_standingsAwayId_fkey" FOREIGN KEY ("standingsAwayId") REFERENCES "StandingsAway"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
