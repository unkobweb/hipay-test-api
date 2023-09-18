import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { PlantService } from "./plant.service";
import { PlantSummary } from "./types/plant-summary.type";

@Controller('plant')
export class PlantController {

  constructor(private readonly plantService: PlantService) { }

  @Get("/")
  async getPlant(
    @Query("search") search: string,
  ): Promise<PlantSummary> {
    if (!search) {
      throw new BadRequestException("Missing search parameter");
    }
    return this.plantService.getPlantByName(search);
  }
}