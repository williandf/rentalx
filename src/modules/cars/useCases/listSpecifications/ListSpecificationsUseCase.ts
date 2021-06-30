import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private categoriesRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListSpecificationsUseCase };
