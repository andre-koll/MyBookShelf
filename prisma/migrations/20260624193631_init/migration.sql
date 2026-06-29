/*
  Warnings:

  - You are about to drop the column `assetId` on the `Shelf` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Shelf` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Shelf" DROP CONSTRAINT "Shelf_assetId_fkey";

-- DropIndex
DROP INDEX "Shelf_assetId_userId_key";

-- AlterTable
ALTER TABLE "Shelf" DROP COLUMN "assetId",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "lang" TEXT NOT NULL DEFAULT 'en',
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'User';

-- CreateIndex
CREATE UNIQUE INDEX "Shelf_userId_key" ON "Shelf"("userId");
