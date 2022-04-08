- [ ] users api를 통해 사용자 목록을 그리고, 클릭하면 해당 사용자의 todo 목록을 가져오게 합니다.
- [ ] 할 일을 추가하면 화면에 추가되고, API 호출을 통해 서버에도 추가됩니다.
- [ ] TODO를 추가하고 삭제하는 동안 낙관적 업데이트를 사용합니다.
- [ ] 서버와 통신하는 동안 서버와 통신중임을 알리는 UI적 처리를 합니다.

## API 사용법

### 데이터 형태
```
{
  "_id": 할 일의 고유값. 숫자와 문자가 섞여있는 문자로 되어있음,
  "content": 할 일 text,
  "isCompleted": 할 일의 완료여부
}
```

### 유저 목록 불러오기
- API Url: https://kdt-frontend.todo-api.programmers.co.kr/users

    유저 목록을 불러옵니다.

    사용예시    

    ```
    fetch('https://kdt-frontend.todo-api.programmers.co.kr/users').then()...
    ```

### 할 일 목록 불러오기
- API Url: https://kdt-frontend.todo-api.programmers.co.kr/:username

    할일과 관련된 모든 API에는 username이 들어가게 되어있습니다.
    
    본인의 username을 적당히 넣으시면 됩니다.

    사용예시

    ```
    fetch('https://kdt-frontend.todo-api.programmers.co.kr/roto').then()...
    ```

### 할 일 추가하기
- API Url: https://kdt-frontend.todo-api.programmers.co.kr/:username

```
fetch('https://kdt-frontend.todo-api.programmers.co.kr/roto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content: '자바스크립트 공부하기'
  })
}).then(function(){
  ....
})
```

### 할 일 삭제하기
- API url: https://kdt-frontend.todo-api.programmers.co.kr/:username/:todo_id
- 서버에서 불러온 todo 데이터는 _id 라는 이름으로 해당 todo의 id가 있습니다.
    + 이것을 url의 <todo_id> 부분에 넣으면 됩니다.
    ```
    fetch('https://kdt-frontend.todo-api.programmers.co.kr/roto/5d11cf671e050d3f7c583166', {
    method: 'DELETE'
    }).then(function(){
    ....
    })
    ```

### 할 일 완료여부 토글하기
- API url: https://kdt-frontend.todo-api.programmers.co.kr/:username/:todo_id/toggle
- todo_id에 해당하는 todo가 완료상태인 경우 미완료처리, 미완료 상태인 경우 완료처리를 합니다.

```
fetch('https://kdt-frontend.todo-api.programmers.co.kr/roto/5d11cf671e050d3f7c583166/toggle', {
  method: 'PUT'
}).then(function(){
```