import { Test, TestingModule } from '@nestjs/testing';
import { PlantController } from './plant.controller';
import { PlantService } from './plant.service';
import { ConfigModule } from '@nestjs/config';

describe('PlantController', () => {
  let plantController: PlantController;
  let plantService: PlantService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PlantController],
      providers: [PlantService],
    }).compile();

    plantController = moduleRef.get<PlantController>(PlantController);
    plantService = moduleRef.get<PlantService>(PlantService);
  });

  describe('GET /', () => {
    it('Should return plant summary', async () => {
      const result = { scientific_name: "Quercus rotundifolia", year: 1785, genus_family_common_name: null, species_observation: "W. Medit." }
      jest.spyOn(plantService, 'getPlantByName').mockImplementation(async () => result);

      expect(await plantController.getPlant('oak')).toMatchObject(result);
    });
  });
});
