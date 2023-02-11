function greetingUserWithDayTime(firstName) {
    let time = new Date();
    let nowHour = Number(time.getHours());
    console.log(time);
    console.log(nowHour);
    if (nowHour < 7) {;
        console.log(`Доброй ночи, ${firstName}`);
    }
    else if ( nowHour < 13) {
        console.log(`Доброе утро, ${firstName}`);
    }
    else if (nowHour < 18) {
        console.log(`Добрый день, ${firstName}`);
    }
    else{
        console.log(`Добрый вечер, ${firstName}`);
    }
}

let userName = prompt("Введите ваше имя");
greetingUserWithDayTime(userName);