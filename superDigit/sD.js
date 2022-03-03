
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    // Write your code here
    let p = '';
    let num = 0;
    while (k > 0) {
      p += n;
      k--;
    }
    let arr = p.split('');
    for (let i = 0; i < arr.length; i++) {
      num += parseInt(arr[i]);
    }
    if (num.toString().length === 1) {
      return num;
    } else {
      return superDigit(num.toString(), 1);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const num = superDigit(n, k);

    ws.write(num + '\n');

    ws.end();
}
