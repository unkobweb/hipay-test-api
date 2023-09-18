import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { PlantService } from "./plant.service";
import { PlantSummary } from "./types/plant-summary.type";

@Controller('plant')
export class PlantController {

  constructor(private readonly plantService: PlantService) { }

  @Get("/")
  async getPlant(
    @Query("family_common_name") familyCommonName: string,
  ): Promise<PlantSummary> {
    if (!familyCommonName) {
      throw new BadRequestException("Missing family_common_name parameter");
    }
    return this.plantService.getPlantByName(familyCommonName);
  }
}