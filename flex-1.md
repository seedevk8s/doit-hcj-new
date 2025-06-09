# 💡 Flexbox 실습 - flex-1.html

이 실습은 Flexbox의 `flex-direction` 속성을 연습하기 위한 것입니다.

## 🎯 목적
- `.container`를 **Flex 컨테이너**로 만들고
- `#opt1` ~ `#opt4`에 서로 다른 `flex-direction`을 지정해 박스 방향을 변경해봅니다.

## 🧱 HTML 구조

각 `.container` 안에 `.box`가 3개씩 들어 있습니다.

```html
<div class="container" id="opt1">
  <div class="box"><p>1</p></div>
  <div class="box"><p>2</p></div>
  <div class="box"><p>3</p></div>
</div>
```

## 🎨 실습할 스타일 예시

```css
#opt1 { display: flex; flex-direction: row; }
#opt2 { display: flex; flex-direction: row-reverse; }
#opt3 { display: flex; flex-direction: column; }
#opt4 { display: flex; flex-direction: column-reverse; }
```

## 📝 각 방향 의미
- `row`: 기본값, 좌→우로 배치
- `row-reverse`: 우→좌로 배치
- `column`: 위→아래로 세로 배치
- `column-reverse`: 아래→위로 세로 역순 배치
