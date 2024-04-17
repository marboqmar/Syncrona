export interface Cards {
  text: string;
  id: number;
}

export interface Board {
   
  id:number;
  Boards: newBoardArray[];
}

export interface newBoardArray {
  title: string;
  card: string;
  button: string;

}
