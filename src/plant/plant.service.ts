import { Injectable, NotFoundException } from "@nestjs/common";
import { PlantSummary } from "./types/plant-summary.type";

@Injectable()
export class PlantService {
  async getPlantByName(familyCommonName: string): Promise<PlantSummary> {
    const filter = encodeURIComponent(`filter[family_common_name]`) // need to correctly encode brackets
    const plants = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_API_KEY}&${filter}=${familyCommonName}`).then(res => res.json())
    if (plants.data.length === 0) {
      throw new NotFoundException(`No plant found with name ${familyCommonName}`)
    }

    const {scientific_name, year, links} = plants.data[0];
    
    const genius = await fetch(`https://trefle.io${links.genus}?token=${process.env.TREFLE_API_KEY}`).then(res => res.json())
    const {common_name} = genius.data.family

    const species = await fetch(`https://trefle.io${links.self}?token=${process.env.TREFLE_API_KEY}`).then(res => res.json())
    const {observations} = species.data

    return {
      scientific_name, 
      year, 
      genus_family_common_name: common_name, 
      species_observation: observations
    }
  }
}