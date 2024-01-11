//달력 만들기
let dayCnt = 1;
const weeksElem = document.querySelector(".weeks");

for (let week = 1; week < 5; week++) {
    const weekElem = document.createElement('tr');
    weekElem.classList.add('week');//중요

    for (let day = 0; day < 7; day++) {
        const dayElem = document.createElement('td');
        dayElem.classList.add('day');//중요

        const dayValueElem = document.createElement('div')
        dayValueElem.classList.add('dayValue'); //중요

        const contentValueElem = document.createElement('div')
        contentValueElem.id = dayCnt; //중요
        contentValueElem.classList.add('contentValue'); //중요

        dayValueElem.textContent = dayCnt++;
        contentValueElem.textContent = "";

        dayElem.append(dayValueElem);
        dayElem.append(contentValueElem);
        weekElem.append(dayElem);
    }
    weeksElem.append(weekElem);
}

// 달력 날짜 클릭시 이벤트
$('.day').click(function () {
    const dayText = $(this).find('.dayValue').text();
    $('.dayText').val(dayText);
})

// 내용 적고 작성 버튼 누를 때 이벤트
$('button').click(function () {
    const findId = $('.dayText').val();
    $('#' + findId).text($('.contentText').val());
})
