-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "isMistake" BOOLEAN NOT NULL DEFAULT false,
    "observation" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);
