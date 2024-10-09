import { IStateSchema } from '@/app/providers/store/types';

export const getUserInfo = (state: IStateSchema) => state.user.userInfo;

export const getUserPersonalInfo = (state: IStateSchema) =>
    state.user.userInfo?.personalInformation;

export const getUserContactInfo = (state: IStateSchema) =>
    state.user.userInfo?.contactInformation;

export const getUserProfessionalGoals = (state: IStateSchema) =>
    state.user.userInfo?.professionalGoals;

export const getUserExperience = (state: IStateSchema) =>
    state.user.userInfo?.experience;

export const getUserEducation = (state: IStateSchema) =>
    state.user.userInfo?.education;

export const getUserSkills = (state: IStateSchema) =>
    state.user.userInfo?.skills;

export const getUserAchievements = (state: IStateSchema) =>
    state.user.userInfo?.achievements;

export const getUserAdditionalInformation = (state: IStateSchema) =>
    state.user.userInfo?.additionalInformation;

export const getUserAbout = (state: IStateSchema) => state.user.userInfo?.about;
