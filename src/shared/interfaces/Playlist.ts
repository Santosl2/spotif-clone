type ImagesProps = {
  url: string;
};

type Artists = {
  name: string;
  id?: string;
};

export type ResponsePlaylistProps = {
  id: string;
  name: string;
  href: string;
  description?: string;
  artists?: Artists[];
  images: ImagesProps[];
};
