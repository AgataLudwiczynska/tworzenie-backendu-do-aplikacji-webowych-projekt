/*
  Warnings:

  - You are about to drop the column `genre` on the `Serial` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Serial` DROP COLUMN `genre`,
    ADD COLUMN `genreId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Genre` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Genre_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Serial` ADD CONSTRAINT `Serial_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
