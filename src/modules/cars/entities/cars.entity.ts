import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Cars')
export class Cars {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  placa: string;

  @Column()
  chassi: string;

  @Column({ unique: true })
  renavam: string;

  @Column()
  modelo: string;

  @Column()
  marca: string;

  @Column()
  ano: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
