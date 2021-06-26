export function getAgeInMonths(oldDate){
    const date = new Date(oldDate);
    const currentDate = new Date();
    const year = currentDate.getFullYear() - date.getFullYear();
    const month = currentDate.getMonth() - date.getMonth();
    return year * 12 + month;
}