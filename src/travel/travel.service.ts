import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto.js';
import { UpdateTravelDto } from './dto/update-travel.dto.js';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class TravelService {
  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  findAll() {
    return { status: 200, message: 'Liste des voyages', data: this.trips };
  }

  findOne(id: number) {
    const trip = this.trips.find((trip) => trip.id === id);
    if (!trip) {
      return new NotFoundException(`Voyage avec l'ID ${id} non trouvé`);
    }
    return { status: 200, message: 'Voyage trouvé', data: trip };
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }

  volplan(): string {
    return 'Planifier un nouveau voyage ici';
  }
}
