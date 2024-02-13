import client from '@/db/client.ts';

// ? can add up and down functions

client.execute(`
  CREATE TABLE IF NOT EXISTS dinosaurs (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(191) NOT NULL,
    description VARCHAR(191) NOT NULL,

    PRIMARY KEY (id)
  ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
`);
