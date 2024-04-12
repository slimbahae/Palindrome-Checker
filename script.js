function isPal() {
    var userStr = document.getElementById("userStr").value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var reversedStr = userStr.split('').reverse().join('');

    if (userStr === reversedStr) {
        document.getElementById("userOutput").textContent = `Yes,the word ${userStr} is a palindrome!`;
    } else {
        document.getElementById("userOutput").textContent = `No, the word ${userStr} is not a palindrome.`;
    }
}
