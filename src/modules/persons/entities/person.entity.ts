import { DefaultEntity } from 'src/common/entities/default.entity';
import { OwerEntity } from 'src/modules/ower/entities/ower.entity';
import { TokenEntity } from 'src/modules/tokens/entities/token.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity({ name: 'persons' })
export class PersonEntity extends DefaultEntity<PersonEntity> {
  @Column({ name: 'cpf' })
  cpf: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'pass' })
  password: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'is_email_verified' })
  isEmailVerified: boolean;

  @Column({ name: 'is_first_login' })
  isFirstLogin: boolean;

  @Column({ name: 'is_banned' })
  isBanned: boolean;

  @OneToMany(() => TokenEntity, (token) => token.person)
  tokens: TokenEntity[];

  @OneToOne(() => OwerEntity, (ower) => ower.person)
  ower: OwerEntity;
}
