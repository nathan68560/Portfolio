export class ExperienceModel {
    startDate: string;
    endDate: string;
    position: string;
    company: string;
    description: string | null;
    tags: Array<string>;

    /**
     * A work experience.
     * @param position The name of the position held
     * @param company The name of the company
     * @param startDate The start date of this work experience
     * @param endDate (optionnal) The end date of this work experience (default to present)
     * @param description (optionnal) A description of the work done
     * @param tags (optionnal) An array of tags
     */
    constructor(
        position: string,
        company: string,
        startDate: string,
        endDate: string = "present",
        description: string | null = null,
        tags: Array<string> = []
    ) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.position = position;
        this.company = company;
        this.description = description;
        this.tags = tags;
    }
}