import { Controller, Get, Query } from "@nestjs/common";
import { PlantService } from "./plant.service";

@Controller('plant')
export class PlantController {

  constructor(private readonly plantService: PlantService) { }

  @Get("/")
  async getPlant(
    @Query("search") search: string,
  ) {
    return this.plantService.getPlantByName(search);
  }
}