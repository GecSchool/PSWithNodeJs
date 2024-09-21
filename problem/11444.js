let exNum = 0;
let curNum = 1;
for (let i = 1; i < 100; i++) {
    console.log(exNum);
    const tmp = exNum + curNum;
    exNum = curNum;
    curNum = tmp;
}
