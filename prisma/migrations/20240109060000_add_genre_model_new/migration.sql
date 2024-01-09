/*
  Warnings:

  - Made the column `genreId` on table `Serial` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Serial` DROP FOREIGN KEY `Serial_genreId_fkey`;

-- AlterTable
ALTER TABLE `Serial` MODIFY `genreId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Serial` ADD CONSTRAINT `Serial_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
