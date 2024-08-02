export type CourseType = {
  id: number;
  attributes: {
    title: string;
    price: number;
    description: string;
    thumbnail: {
      data: ImageType;
    };
    videos: {
      data: VideoType[];
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type VideoType = {
  id: number;
  attributes: {
    title: string;
    is_free: string;
    url: {
      data: UrlType;
    };
  };
};

export type ImageType = {
  id: number;
  attributes: {
    name: string;
    width: number;
    height: number;
    url: string;
  };
};

export type UrlType = {
  id: number;
  attributes: {
    url: string;
  };
};
