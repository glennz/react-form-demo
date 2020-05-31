import ControlDataType from "./ControlDataType";

type DateOfBirthType = {
    day: ControlDataType,
    month: ControlDataType,
    year: ControlDataType,
    date: Date | null,
};

export default DateOfBirthType;