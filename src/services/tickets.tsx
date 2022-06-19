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
  ): void {
    try {
      const categoryFiltered: CategoryInterface = this.ticketsDataBase.filter(cat => cat.category === category)[0];
      console.log('cat', categoryFiltered);
      const subcategoryFiltered: SubCategoriesInterface[] = categoryFiltered.subCategories.filter(sub => sub.category === subcategory);
      console.log('sub', subcategoryFiltered);
    //   const { events }: TicketInterface[] = subcategoryFiltered;
    //   return subcategoryFiltered.events;
    } catch (error) {
      console.log(error);
    }
  }
}
