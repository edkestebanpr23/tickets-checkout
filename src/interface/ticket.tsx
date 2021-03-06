export interface TicketInterface {
  event: string;
  place: string;
  location: string;
  hour: string;
  date: string;
  id: string;
  image: string;
}

export interface SubCategoriesInterface {
    category: string;
    id: string;
    events: TicketInterface[];
}

export interface CategoryInterface {
    category: string;
    subCategories: SubCategoriesInterface[];
}
