export interface IPost {
   id: number;
    userName: string;
    userImage: string;
    postDescription: string;
    postImage: string;
    isLiked: boolean;
  comments: string[];
   createdAt: Date;
    editing?: boolean; 
}

