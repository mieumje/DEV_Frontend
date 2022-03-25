// index = 0은 생략
// left 정점 = index * 2
// right 정점 = (index * 2) + 1
// 부모 = floor(index / 2)

const tree = [
    undefined,
    // 1번 index
    10,
    // 2번 idnex = 1 * 2, 3번 index = 1 * 2 + 1
    13, 15,
    // 4번 = 2*2, 5번 = 2*2+1, 6번 = 3*2, 7번 = 3*2+1
    7, 11, undefined, 3
]

console.log(tree)