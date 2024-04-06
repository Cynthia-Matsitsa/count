let birthdayDate;

document.getElementById("start-countdown").addEventListener("click", function () {
    const inputDate = document.getElementById("birthday-input").value;

    if (!isValidDate(inputDate)) {
        alert("Please enter a valid date (YYYY-MM-DD).");
        return;
    }

    birthdayDate = new Date(inputDate + "T14:03:00").getTime();
    document.querySelector(".input-container").style.display = "none";
    updateCountdown();
});

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const currentDate = new Date().getTime();
    const timeLeft = birthdayDate - currentDate;
}