export const numberFomatter = (str) => {
    str = String(str);
    return Number(str.replace(/[^\d]*/g, ''));
};