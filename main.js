const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const cost = document.querySelector('.cost');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const countBtn = document.querySelector('.count');

const check = () => {
    if (price.value === '' || people.value === '' || tip.value === '') {
        error.textContent = 'Wypełnij wszystkie pola!';
        costInfo.style.display = 'none';
    } else {
        const countTip = () => {
            const newPrice = parseInt(price.value);
            const newPeople = parseInt(people.value);
            const newTip = parseFloat(tip.value);
            const sum = (newPrice + (newPrice * newTip) / newPeople);
            costInfo.style.display = 'block';
            error.textContent = '';
            cost.textContent = sum.toFixed(2);
        };
        countTip();
    }
}

countBtn.addEventListener('click', check);