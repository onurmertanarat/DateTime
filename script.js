(function () {
    const dateElement = document.getElementById('date');
    const clockElement = document.getElementById('clock');

    // 'tr-TR' or 'en-US' 
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long'
    });

    function updateClock() {
        const now = new Date();

        const dateString = dateFormatter.format(now);

        const timeString = now.toLocaleTimeString('tr-TR');

        dateElement.textContent = dateString;
        clockElement.textContent = timeString;
    }

    setInterval(updateClock, 1000);

    updateClock();
})();