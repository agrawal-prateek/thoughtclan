export const capitalizeFirstLetter = s => {
    return s.toLowerCase().replace(/\b./g, function (a) {
        return a.toUpperCase();
    });
};