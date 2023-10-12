-- CreateTable
CREATE TABLE `transcripts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `html` LONGTEXT NOT NULL,

    UNIQUE INDEX `transcripts_url_key`(`url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
