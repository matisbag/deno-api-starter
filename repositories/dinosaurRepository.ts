import client from '@/db/client.ts';
import Dinosaur from '@/models/dinosaur.ts';

// ? Create BaseRepository Class

class DinosaurRepository {
  async getAll(): Promise<Dinosaur[]> {
    return await client.query(`select * from dinosaurs`);
  }

  async getById(id: number): Promise<Dinosaur | null> {
    const dinosaur = await client.query(
      `select * from dinosaurs where id = ?`,
      [id],
    );

    return dinosaur[0] || null;
  }

  async getByIdOrThow(id: number): Promise<Dinosaur> {
    const dinosaur = await this.getById(id);

    if (!dinosaur) {
      throw new Error(`Dinosaur not found`);
    }

    return dinosaur;
  }

  async create(dinosaur: Dinosaur): Promise<Dinosaur> {
    const createdDinosaur = await client.transaction(async (conn) => {
      const { affectedRows, lastInsertId } = await conn.execute(
        `insert into dinosaurs (name, description) values (?, ?)`,
        [dinosaur.name, dinosaur.description],
      );

      if (!affectedRows) {
        throw new Error('Failed to create dinosaur');
      }

      const { rows } = await conn.execute(
        `select * from dinosaurs where id = ?`,
        [lastInsertId],
      );

      if (!rows || !rows.length) {
        throw new Error('Failed to retrieve dinosaur');
      }

      return rows[0];
    });

    return createdDinosaur;
  }

  async update(id: number, dinosaur: Dinosaur): Promise<Dinosaur> {
    await client.execute(
      `update dinosaurs set name = ?, description = ? where id = ?`,
      [dinosaur.name, dinosaur.description, id],
    );

    const updatedDinosaur = await this.getByIdOrThow(id);

    return updatedDinosaur;
  }

  async delete(id: number): Promise<void> {
    await client.execute(`delete from dinosaurs where id = ?`, [id]);
  }
}

export default new DinosaurRepository();
