-- RedefineIndex
CREATE UNIQUE INDEX `dinosaurs_name_key` ON `dinosaurs`(`name`);
DROP INDEX `Dinosaur_name_key` ON `dinosaurs`;
