import { Test, TestingModule } from '@nestjs/testing';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';
import { NotFoundException } from '@nestjs/common';

describe('PlantController', () => {
  let plantController: PlantController;
  let plantService: PlantService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PlantController],
      providers: [PlantService],
    }).compile();

    plantController = moduleRef.get<PlantController>(PlantController);
    plantService = moduleRef.get<PlantService>(PlantService);
  });

  describe('GET /', () => {
    it('Should return plant summary', async () => {
      const result = {scientific_name: "Crataegus monogyna", year: 1775, genus_family_common_name: "Rose family", species_observation: "Europe to Caucasus, N. Africa to Iraq"}
      jest.spyOn(plantService, 'getPlantByName').mockImplementation(async () => result);

      expect(await plantController.getPlant('Rose family')).toMatchObject(result);
    });
    it('Should throw BadRequestException', async () => {
      const result = {scientific_name: "Crataegus monogyna", year: 1775, genus_family_common_name: "Rose family", species_observation: "Europe to Caucasus, N. Africa to Iraq"}
      jest.spyOn(plantService, 'getPlantByName').mockImplementation(async () => result);

      try {
        await plantController.getPlant(undefined);
      } catch (error) {
        expect(error.message).toBe('Missing family_common_name parameter');
      }
    });
    it('Should throw NotFoundException', async () => {
      jest.spyOn(plantService, 'getPlantByName').mockImplementation(async () => {throw new NotFoundException(`No plant found with name Rose`)});

      try {
        await plantController.getPlant('Not an existing flower family name');
      } catch (error) {
        expect(error.message).toBe('No plant found with name Rose');
      }
    });
  });
});
