import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn({ comment: '用户编码' })
  userId: number;

  // @Column({ nullable: false, comment: '用户编码' })  
  // userId: string;

  @Column({ nullable: false, comment: '用户名称' })
  userName: string;

  @Column({ nullable: false, comment: '用户角色(创业者创业者Entrepreneur、合伙人partner)' })
  role: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;
}