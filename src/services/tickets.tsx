/* eslint-disable max-len */
// @Scripts
import { config } from '../config';

// @Interfaces & Types
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
      return [];
    }
  }

  public getEvent(
    category: string,
    subcategory: string,
    event: string
  ): TicketInterface | null {
    try {
      if (category && subcategory) {
        const categoryFiltered: CategoryInterface = this.ticketsDataBase.filter(cat => cat.category === category)[0];
        const { events }: SubCategoriesInterface = categoryFiltered.subCategories.filter(sub => sub.id === subcategory)[0];
        const ticket: TicketInterface = events.filter(ev => ev.id === event)[0];
        return ticket;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}
