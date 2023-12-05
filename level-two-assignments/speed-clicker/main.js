
const getClickCount = () => {
    return parseInt(localStorage.getItem('clickCount')) || 0;
}

const setClickCount = (value) => {
    localStorage.setItem('clickCount', value);
    document.getElementById('clickCounter').textContent = value;
}
const click = () => {
    let count = getClickCount();
    count += 1;
    setClickCount(count);
}

document.addEventListener('click', function() {
    click();
});



