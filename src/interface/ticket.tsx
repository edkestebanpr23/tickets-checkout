export interface TicketInterface {
  event: string;
  place: string;
  location: string;
  hour: string;
  date: string;
  id: string;
}

export interface SubCategoriesInterface {
    category: string;
    events: TicketInterface[];
}

export interface CategoryInterface {
    category: string;
    subCategories: SubCategoriesInterface[];
}
