import { Injectable } from "@nestjs/common";

@Injectable()
export class PlantService {
  async getPlantByName(name: string) {
    const filter = encodeURIComponent(`filter[family_common_name]=${name}`)
    const response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_API_KEY}&${filter}`).then(res => res.json())
    const {scientific_name, year} = response.data[0];
    return {scientific_name, year}
  }
}