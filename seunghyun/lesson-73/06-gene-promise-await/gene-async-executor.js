/* eslint-disable */

// 비동기 로직을 generator를 사용하여 동기적으로 표현한 것이 핵심!
// 상세: ajax콜을 두번 호출하여 데이터(added) 만들고 end함수를 호출한다.
const profile = function* (end, next, r) {
    // next콜백에서 iter.next()를 호출하여 yield를 진행한다.
    const userId = yield $.post('memeber.php', { r }, next); 
    // next콜백에서 iter.next()를 호출하여 yield를 진행한다.
    let addded = yield $.post('detail.php', { userId }, next);
    added = added.split(',');
    end({ userId, nick: added[0], thumb: added[1] });
};

const executor = (end, gene, ...arg) => {
    // iter가 정의되어 있지 않아도 되는 이유: javascript의 함수는 실제 정의 여부는 런타임시 확인한다.
    // iterator의 next()호출을 함수로 구현하여 재귀로 반복 호출하는 것이 핵심
    const next = v => iter.next(v);
    const iter = gene(end, next, ...arg); // iterator 생성
    iter.next(); // iterator 시작!
};

// profile 데이터를 가공하는 비동기 로직(profile함수)과 만들어진 데이터를 처리하는 처리부(console.log)를 분리했다.
executor(console.log, profile, 123);
