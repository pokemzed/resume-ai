export interface IUser {
    userInfo: IUserInfo | null;
    isLoading: boolean;
}
export interface IUserInfo {
    personalInformation: {
        name: string;
        location: string;
    } | null;
    contactInformation: {
        phone: string;
        email: string;
    } | null;
    professionalGoals: string | null;
    experience: IExperience[] | null;
    education: IEducation[] | null;
    skills: string[] | null;
    achievements: string[] | null;
    additionalInformation: string[] | null;
    about: string[] | null;
}
export interface IExperience {
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
}
export interface IEducation {
    institution: string | null;
    degree: string | null;
    years: string | null;
}
