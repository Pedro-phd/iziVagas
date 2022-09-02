-- CreateTable
CREATE TABLE "Blocks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slots" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ParkingSpot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "blockID" TEXT NOT NULL,
    "occupied" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parkingSpotId" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "entryDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exitDate" DATETIME NOT NULL
);
