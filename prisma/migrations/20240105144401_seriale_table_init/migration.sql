/*
  Warnings:

  - You are about to drop the `seriale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `seriale`;

-- CreateTable
CREATE TABLE `serial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(191) NULL,
    `platform` VARCHAR(191) NULL,
    `yearStart` INTEGER NOT NULL,
    `yearEnd` INTEGER NOT NULL,

    UNIQUE INDEX `serial_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
