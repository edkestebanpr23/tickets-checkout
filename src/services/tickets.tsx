/* eslint-disable max-len */
import { config } from '../config';
import { CategoryInterface, SubCategoriesInterface, TicketInterface } from '../interface/ticket';

export class Ticket {
  ticketsDataBase: CategoryInterface[];

  constructor() {
    this.ticketsDataBase = config.mockdata.categories;
  }

  public getTicketsByCategory(
    category: string,
    subcategory: string
  ): SubCategoriesInterface[] {
    try {
      if (category && subcategory) {
        const categoryFiltered: CategoryInterface = this.ticketsDataBase.filter(cat => cat.category === category)[0];
        const subcategoryFiltered: SubCategoriesInterface[] = categoryFiltered.subCategories.filter(sub => sub.id === subcategory);
        return subcategoryFiltered;
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
