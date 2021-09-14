function toHoursAndMinutes(number) {
    const hours = Math.floor(number/60); // floor method rounds down
    const minutes = number%60;

    let pluralOrSingularMinutes = ``
    if (minutes==1) {
        pluralOrSingularMinutes = `${minutes} minute`;
    } else if (minutes > 1) {
        pluralOrSingularMinutes = `${minutes} minutes`;
    }

    let pluralOrSingularHours = ``
    if (hours==1) {
        pluralOrSingularHours = `${hours} hour`;
    } else if (hours > 1) {
        pluralOrSingularHours = `${hours} hours`
    } else {
        return `${pluralOrSingularMinutes}.`
    }

    if (pluralOrSingularMinutes=='') {
        return `${pluralOrSingularHours}.`
    } else{  
        return `${pluralOrSingularHours}, ${pluralOrSingularMinutes}.`
    }
}