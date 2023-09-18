import { Module } from "@nestjs/common";
import { PlantController } from "./plant.controller";
import { PlantService } from "./plant.service";

@Module({
  imports: [],
  controllers: [PlantController],
  providers: [PlantService],
  exports: []
})
export class PlantModule {}