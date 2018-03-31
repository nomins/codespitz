/* eslint-disable */

// 메세지 수신 이벤트 핸들러
// event 명세: https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent
onmessage = function(e) {
  console.log('[워커] 메세지 수신 완료 (메인쓰레드=>워커)');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);

  // 메인 쓰레드에 메세지 발신
  // https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage
  console.log('[워커] 메세지 발송 중 (워커=>메인쓰레드)');
  postMessage(workerResult);
}

// 에러 이벤트 핸들러
onerror = function(error) {
  console.log('[워커] 에러가 발생하였습니다.', error);
  // error.preventDefault(); // 에러 이벤트의 기본 행동 막기
}

// 워커 종료
// close();