export type TBlog = {
  _id: string;
  title: string;
  content: string;
  image: string; // URL of the image
  category: string; // You can later make this a union type if you want fixed categories
};
