let rows = 5;

for (let i = rows; i >= 1; i--) {
    let row = "";

    for (let s = 0; s < rows - i; s++) {
        row += " ";
    }

    let num = 1;

    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num = num * (i - j) / j;
    }

    console.log(row);

}


