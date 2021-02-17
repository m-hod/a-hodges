
export type Schema = {
    series: Series[];
    worlds: World[];
    about: About;
    socials: Socials;
}

export type Series = {
    id: number;
    title: string;
    subtitle: string;
    books: Book[];
    // hero carousel automatically pulls banner images from books, add more here for any additional art
    banners?: Image[];
    // world to assosciate series with (solo books don't neccessarily have a world)
    worldIdentifier?: string;
}

export type World = {
    id: number;
    title: string;
    subtitle: string;
    sections: WorldTimelineSection[];
    timelines: WorldTimeline[];
    // series to assosciate world with
    seriesIdentifier: string;
}

export type WorldTimeline = {
    id: number;
    // use to determine order between sections and timelines on page
    order: number;
    entries: WorldTimelineEntry[];
}

export type WorldTimelineEntry = {
    id: number;
    title: string;
    // string as md with replacers
    contents: string;
    images: Image[];
}

export type WorldTimelineSection = {
    id: number;
    // use to determine order between sections and timelines on page
    order: number;
    emphasis: string;
    // as md
    content: string;
    images: Image[];
}

export type Book = {
    id: number;
    title: string;
    subtitle: string;
    // as md
    summary: string;
    // if book is promo, first link is used for 'preorder' button on homepage
    orderLinks: Link[];
    cover: Image;
    banner: Image;
    quotes?: Quote[];
    // book will appear on home page if checked (can only be one checked at any time)
    is_promo?: boolean;
};

export type Quote = {
    id: number;
    content: string;
    author: string;
}

export type Link = {
    id: number;
    url: string;
    title: string;
}

export type Image = {
    id: number;
    // as url
    thumbnail: string;
    url: string;
    alt?: string;
}

export type About = {
    id: number;
    title: string;
    subtitle: string;
    // as md
    content: string;
    quotes: Quote[];
    profile: Image;
}

export type SocialsUnion = "facebook" | "twitter" | "instagram"

export type Socials =  {
    id: number;
    facebook?: string;
    twitter?: string;
    instagram?: string;
}