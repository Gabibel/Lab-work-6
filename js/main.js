document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Button2').addEventListener('click', function() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const province = document.getElementById('province').value;
        const membership = document.querySelector('input[name="membership"]:checked').value;

        const fullName = `${firstName} ${lastName}`;

        const output = `
            Full Name: ${fullName}<br>
            Email: ${email}<br>
            Address: ${address}, ${city}, ${province}<br>
            Membership: ${membership}
        `;

        document.getElementById('output').innerHTML = output;
    });
});


document.getElementById('Button3').addEventListener('click', function() {
    const numberStr = document.getElementById('numbers').value.trim();

    if (numberStr === '') {
        alert('Enter numbers.');
        return;
    }

    const numberArr = numberStr.split(' ').map(num => num.trim()).filter(num => num !== '').map(Number);
    let result = 0;

    if (document.getElementById('sum').checked) {
        result = numberArr.reduce((acc, curr) => acc + curr, 0);
    } else if (document.getElementById('avg').checked) {
        const total = numberArr.reduce((acc, curr) => acc + curr, 0);
        result = total / numberArr.length;
    } else if (document.getElementById('max').checked) {
        result = Math.max(...numberArr);
    } else if (document.getElementById('min').checked) {
        result = Math.min(...numberArr);
    }

    document.getElementById('result').innerHTML = `Result: ${result}`;
});
