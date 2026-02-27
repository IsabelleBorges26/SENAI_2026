/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Clientes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `clientes` MODIFY `cpf` VARCHAR(191) NOT NULL,
    MODIFY `cnh` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Clientes_email_key` ON `Clientes`(`email`);
