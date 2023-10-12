-- DropIndex
DROP INDEX `transcripts_url_key` ON `transcripts`;

-- AlterTable
ALTER TABLE `transcripts` MODIFY `url` TEXT NOT NULL;
