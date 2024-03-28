import { Author } from "./Author";

export interface ReviewResponse {
    id: number;
    rating: number;
    createdAt: string;
    comment: string;
    author: Author;
}