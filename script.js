const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now();

    const diff_ms = today - birtday.getTime();
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970;
};

console.log(myAge('1998-09-23'));