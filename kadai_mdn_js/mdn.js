const date = new Date();
let [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
];
console.log(year + "年" + month + "月" + day + "日");