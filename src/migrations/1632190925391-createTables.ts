import { identity } from 'rxjs';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTables1632190925391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
        columns: [
          { name: 'id', type: 'uui', isPrimary: true },
          { name: 'name', type: 'varchar' },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'device',
        columns: [
          { name: 'id', type: 'uui', isPrimary: true },
          { name: 'category', type: 'Category' },
          { name: 'color', type: 'varchar' },
          { name: 'partNumber', type: 'int' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('device');
    await queryRunner.dropTable('category');
  }
}
