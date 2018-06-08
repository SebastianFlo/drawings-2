export interface Drawing {
    name: string;
    url: string;
    price: number;
}

export interface AppState {
    drawings: Drawing[];
}
