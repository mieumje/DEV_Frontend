def DFS(row, column, n):
    answer = 0

    if n == row:
        return 1

    for col in range(n):
        column[row] = col

        for i in range(row):
            if abs(row - i) == abs(column[row] - column[i]):
                break
            if column[row] == column[i]:
                break
        else:
            answer += DFS(row + 1, column, n)
    return answer


def solution(n):
    column = [0 for _ in range(n)]
    return DFS(0, column, n)


# 입출력 예
# n	result
# 4	2


n = 4
print(solution(n))
