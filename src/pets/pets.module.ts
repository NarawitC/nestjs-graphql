import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { OwnersModule } from 'src/owner/owner.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule], // add this line
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
