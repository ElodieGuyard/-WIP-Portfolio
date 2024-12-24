import { tag } from './Tag';

export interface project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectlink: string;
    pictures: string[];
    tags: tag[];
}