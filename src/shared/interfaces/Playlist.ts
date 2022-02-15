type ImagesProps = {
  url: string;
};

export type ResponsePlaylistProps = {
  id: string;
  name: string;
  href: string;
  description?: string;
  images: ImagesProps[];
};
