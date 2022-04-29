> 참고 url <br> https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/ <br> https://codepen.io/springerkc/pen/aMxxyO <br> https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame

```
window.scrollTo(0,200)

window.scrollTo(x축, y축)
```

사용해서 자동 스크롤 하기.

```
window.scrollTo({
    top: 200,
    left:500,
    behavior: 'smooth'
})
```

스크롤할 때 매끄럽게 전환된다.

### requestAnimationFrame

- 대부분의 최신 브라우저에서는 성능과 배터리 수명 향상을 위해 requestAnimationFrame() 호출은 백그라운드 탭이나 hidden `<iframe>` 에서 실행이 중단됩니다.

```
window.requestAnimationFrame(callback);
```

### window.cancelAnimationFrame()

> https://developer.mozilla.org/ko/docs/Web/API/Window/cancelAnimationFrame
