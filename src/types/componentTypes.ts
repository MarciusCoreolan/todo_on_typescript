export interface Iinput {
  holder?: string;
  type?: string;
  onChange(text: string): void;
  value: string;
}

export interface Itodo {
  todo: {
    completed: boolean;
    todoText: string;
    id: string;
  };
  handleDelete(id: string): void;
  handleCompleted(id: string): void;
  delAnim: string;
}

export interface Ibutton {
  text: string;
  handleClick(): void;
}
