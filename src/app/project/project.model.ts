export class ProjectModel {
    name: string;
    thumbnailSrc: string;
    imagesSrc: Array<string>;
    date: string;
    excerpt: string;
    description: string | null;
    tags: Array<string>;
    links: Array<{
        title: string,
        url: string
    }>;

    /**
     * A personnal or professional project
     * @param name The name of the project
     * @param thumbnailSrc The 'src' attribute value for the thumbnail
     * @param date The date of this project
     * @param excerpt An excerpt for this project
     * @param description (Optional) A description for this project
     * @param tags (Optional) A list of tags related to this project
     * @param links (Optional) A list of links related to this project
     * @param imagesSrc (Optional) The 'src' attribute value for other image(s)
     */
    constructor(
        name: string,
        thumbnailSrc: string,
        date: string,
        excerpt: string,
        description: string | null = null,
        tags: Array<string> | null = null,
        links: Array<{
            title: string,
            url: string
        }> | null = null,
        imagesSrc: Array<string> | null = null
    ) {
        this.name = name;
        this.thumbnailSrc = thumbnailSrc;
        this.date = date;
        this.excerpt = excerpt;
        this.description = description;
        this.tags = tags ?? [];
        this.links = links ?? [];
        this.imagesSrc = imagesSrc ?? [];
    }
}