export type TProject = {
  _id: string;
  title: string;
  description: string;
  shortDescription?: string; // Optional short summary
  images: string[]; // URL of the uploaded image
  liveLink: string; // URL to the live project
  technologies?: string[]; // Array of technologies used
  features?: string[]; // Optional array of key features
  createdAt?: Date; // Optional creation timestamp
  updatedAt?: Date; // Optional update timestamp
  githubRepo?: string; // Optional GitHub repository link
  status?: string; // Optional project status
  my_role?: string; // Optional project status
};
