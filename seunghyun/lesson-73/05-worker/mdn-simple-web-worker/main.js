/* eslint-disable */
var first = document.querySelector('#number1'); // 숫자를 입력하는 <input> 요소
var second = document.querySelector('#number2'); // 숫자를 입력하는 <input> 요소

var result = document.querySelector('.result'); // 결과를 출력하는 <p> 요소

if (window.Worker) { // 브라우저의 워커 API 호환여부 확인
	
	// 워커를 생성할 경우에는 스크립트명 필요
	// 크롬에서는 로컬파일에서 워커를 생성하는 것을 막는다. (but, 파이어폭스 ok!)
	// 제약: 워커 생성자의 인자로 URI 사용 시, same origin 정책을 준수해야 함
	//  - https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
	//  - 벤더 사마다 상이함
	var myWorker = new Worker("worker.js");

	// 첫 번째 입력창에 onchange 이벤트 핸들러 등록
	first.onchange = function() {
		// 워커에게 메세지 보내기
		// postMessage(): https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
	  myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker
	  console.log('[메인쓰레드] 메세지 전송 완료 (메인쓰레드=>워커)');
	};

	// 두 번째 입력창에 onchange 이벤트 핸들러 등록
	second.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('[메인쓰레드] 메세지 전송 완료 (메인쓰레드=>워커)');
	};

	// 워커에서 보낸 메세지를 수신하는 이벤트 핸들러
	myWorker.onmessage = function(e) {
		result.textContent = e.data;
	  console.log('[메인쓰레드] 메세지 수신 완료 (워커=>메인쓰레드)');
	};

	// 메인 쓰레드에서 워커 종료
	// myWorker.terminate();
}
