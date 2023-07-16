
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
 
} from 'typeorm';


@Entity()
export class CreateHospitalDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;
 
}
