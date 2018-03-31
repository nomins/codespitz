# Web Workers

> link:
>- [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workersPI)
> - [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

## 1. 특징

- 외부 파일의 자바 코드를 별도의 쓰레드로 실행
- (중요)실행한 원본 코드와 다른 전역 컨텍스트에서 동작
  - dom 조작x
  - window 전역 객체 참조x
- Dedicated worker vs Shared worker
- window를 직접 참조할 수는 없지만 많은 항목을 사용 가능
  - ex. Websockets, IndexedDB등
- 메인 쓰레드와 워커 쓰레드간에는 메세징 시스템으로 통신
  - postMessge() 메서드, onMessage 이벤트
  - 메세지는 공유되는 것이 아니라 복사됨
- 네트워크 I/O를 위해 XMLHttpRequest API를 사용
- 워커는 다른 워커(sub-workers)를 실행할 수 있다.

## 2. Dedicated workers

- 워커를 호출한 스크립트에서만 접근 가능

## 3. Shared workers

## FAQ

1. Web Worker lifecycle?