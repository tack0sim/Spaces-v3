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
  }
}
