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
      const categoryFiltered: CategoryInterface = this.ticketsDataBase.filter(cat => cat.category === category)[0];
      const subcategoryFiltered: SubCategoriesInterface[] = categoryFiltered.subCategories.filter(sub => sub.category === subcategory);
      return subcategoryFiltered;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
