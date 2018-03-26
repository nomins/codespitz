/* eslint-disable */

// generator는 iterator를 반환하는 fatory함수.
function* idMaker() {
    var index = 0;
    while(true)
        yield index++; // next()호출시 이전 yield(첫 next()는 처음부터 진행)부분에서 다음 yield부분까지 진행 후 함수 탈출
}

var gen = idMaker(); // iterator 생성

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
