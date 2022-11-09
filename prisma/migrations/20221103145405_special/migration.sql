-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ParkingSpot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "blockID" TEXT NOT NULL,
    "occupied" BOOLEAN NOT NULL,
    "special" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_ParkingSpot" ("block", "blockID", "id", "name", "occupied", "special") SELECT "block", "blockID", "id", "name", "occupied", "special" FROM "ParkingSpot";
DROP TABLE "ParkingSpot";
ALTER TABLE "new_ParkingSpot" RENAME TO "ParkingSpot";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
