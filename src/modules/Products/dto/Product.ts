export type ProductDto = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number; 
  thumbnail: string; 
  reviews:ReviewDto[]
};
export type ReviewDto = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}