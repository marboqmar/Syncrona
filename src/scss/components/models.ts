export interface Cards {
  text: string;
  id: number;
}

export interface Board {
  Boards: newBoardArray[] ;
  id:number;
}

export interface newBoardArray {
  title: string;
  card: string;
  button: string;

}
