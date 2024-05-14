export interface Card {
  text: string;
  id: number;
}

export interface Board {
   
  id:number;
  cards: Card[];
}

export interface newBoardArray {
  title: string;
  card: string;
  button: string;

}

export const ItemTypes = {
  CARD: 'card',
}