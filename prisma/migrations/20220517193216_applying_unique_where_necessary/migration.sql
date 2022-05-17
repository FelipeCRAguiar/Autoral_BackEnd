/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Awards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Awards_name_key" ON "Awards"("name");
