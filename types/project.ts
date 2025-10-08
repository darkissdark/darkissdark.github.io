export interface Project {
    title: string;
    description: string;
    tags: string[];
    visit?: string;
    source?: string;
    image: string;
    role?: string;
    viewDisabled?: boolean;
    cvDisabled?: boolean;
    type?: string;
}
