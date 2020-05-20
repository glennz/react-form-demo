import { IStageTitle } from "../shared/IStageTitle";

const stages = [
    { stage: 1, title: 'Basic Info' },
    { stage: 2, title: 'Claim details' },
    { stage: 3, title: 'Confirmation' },
] as  Array<IStageTitle>;

export default {
    stages: stages
};