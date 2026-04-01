/*
  Warnings:

  - You are about to drop the `incricoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `incricoes` DROP FOREIGN KEY `Incricoes_eventosId_fkey`;

-- DropForeignKey
ALTER TABLE `incricoes` DROP FOREIGN KEY `Incricoes_usuariosId_fkey`;

-- DropTable
DROP TABLE `incricoes`;

-- CreateTable
CREATE TABLE `Inscricoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_inscricao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('CONFIRMADA', 'LISTA_ESPERA', 'CANCELADA') NOT NULL DEFAULT 'CONFIRMADA',
    `usuariosId` INTEGER NOT NULL,
    `eventosId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_usuariosId_fkey` FOREIGN KEY (`usuariosId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inscricoes` ADD CONSTRAINT `Inscricoes_eventosId_fkey` FOREIGN KEY (`eventosId`) REFERENCES `Eventos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
