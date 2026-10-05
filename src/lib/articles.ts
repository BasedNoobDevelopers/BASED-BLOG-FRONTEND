export interface Article {
 publicUserResponseDTO: PublicUserResponseDTO;
  blogID: string;
  blogTitle: string;
  blogSubTitle: string;
  blogContent: string;
  blogTopic: string;
  createdDate: string;
  editedDate: string | null;
  blogCoverImage: BlogCoverImage;
  edited: boolean;
};

export interface PublicUserResponseDTO {
  userName: string;
  imageResponseDTO: BlogCoverImage
}

export interface BlogCoverImage {
        imageKey: string;
        imageUrl: string
        thumbnailUrl: string
}

export const articles: Article[] = [];

