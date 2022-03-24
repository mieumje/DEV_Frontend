function solution(genres, plays) {
    let answer = [];
    let dict = {};          // 장르별 누적 회수 count
    let genresInform = {};  // 장르별 idx, idx 별 재생 횟수
    let palyCounts = [];    // 누적 회수를 내림 차순으로 정렬
    genres.forEach((genre,i) => {
        if(dict[genre]){
            dict[genre] += plays[i];
        }else{
            dict[genre] = plays[i];
        }
        if(!genresInform[genre]) genresInform[genre] = [];

        const information = {
            genre,
            play : plays[i],
            idx : i
        };

        genresInform[genre].push(information);
    });

    for(let key in dict){
        palyCounts.push({
            genres : key,
            count : dict[key]
        });
    }
    palyCounts.sort((a,b) => b.count - a.count);

    palyCounts.forEach((element) => {           // 누적 횟수가 많은 장르 순서대로 탐색
        let tmp = genresInform[element.genres]; 
        tmp.sort((a,b) => b.play - a.play);     // 해당 장르에서 횟수가 높은 순서대로 정렬
        for(let i=0; i<2; i++){                 // 상위 2곡의 idx만 정답 push
            if(tmp[i]) answer.push(tmp[i].idx); 
        }
    });
    
    return answer;
}

// genres	                                        plays	                    return
// ["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];

console.log(solution(genres,plays));