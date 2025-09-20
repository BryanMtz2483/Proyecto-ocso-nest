import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    @Column('text')
    locationName: String;
    @Column('text')
    locationAddress:string;
    @Column('float', { array: true })
    locationLatLng: number[];
}
