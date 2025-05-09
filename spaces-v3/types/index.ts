import type { PortableTextBlock } from "@portabletext/types";

declare global {
  interface ArtworkData {
    id: number;
    title: string;
    artist_title: string;
    image_id: string;
    thumbnail: {
      lqip: string;
      alt_text: string;
    };
  }

  interface Artworks {
    data: ArtworkData[];
    config: {
      iiif_url: string;
    };
    pagination: {
      total_pages: number;
      limit: number;
      current_page: number;
      next_url: string;
    };
  }

  // Sanity types
  interface Posts {
    _id: string;
    slug: string;
    title: string;
    author: string;
    body: PortableTextBlock[];
    mainImage: string;
  }

  interface Gallery {
    _id: string;
    title: string;
    date: string;
    slug: string;
    categories: string[];
    mainImage: string;
  }
}
