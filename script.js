function DateTime() {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    hour = checkTime(hour);
    let minute = date.getMinutes();
    minute = checkTime(minute);
    let second = date.getSeconds();
    second = checkTime(second);
    let dateString = days[date.getDay()];
    let monthString = months[date.getMonth()];

    document.getElementById('date').innerHTML = `${day} ${monthString} ${year}`;
    document.getElementById('clock').innerHTML = `${hour}:${minute}:${second}`

    setTimeout(() => {
        DateTime();
    }, 500);
}

let checkTime = (x) => {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}

DateTime();