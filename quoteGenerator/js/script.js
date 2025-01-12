const quotes = [
    { text:"Секрет успеха в том, чтобы начать.", author:"Марк Твен"},
    { text:"Сделай сегодня то, что другие не хотят и завтра ты будешь там, где другие не могут", author:"Джерри Райс"},
    { text:"Не важно, насколько медленно ты двигаешься, главное - не останавливаться", author:"Конфуций"},
    { text:"Успех - это способность двигаться от неудачи к неудаче, не теряя энтузиазма", author:"Уинстон Черчиль"},
    { text:"Величайшая слава не в том, чтобы никогда не падать, а в том, чтобы пониматься каждый раз, когда падаешь", author:"Нельсон Мандела"},
    { text:"Не жди. Время никогда не будет подходящим.", author:"Наполеон Хилл"},
    { text:"Только тот, кто предпринимает абсурдные попытки, сможет достичь невозможного", author:"Альберт Энштейн"},
    { text:"Всё, что нас не убивает, делает нас сильнее", author:"Фридрих Ницше"},
    { text:"Чтобы изменить мир, нужно изменить себя.", author:"Махатма Ганди"},
    { text:"Неудача - это просто возможность начать снова, но уже более мудро.", author:"Генри Форд"},
];

function getRandomDarkColor() {
    let color = "#";
    for (let i = 0; i < 3; i++) {
        const component = Math.floor(Math.random() * 51);
        color += component.toString(16).padStart(2, '0');
    }

    return color;
};

const loadQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `<p>${quote.text}</p> <cite>${quote.author}</cite>`;

    const randomDarkColor = getRandomDarkColor()
    document.querySelector('body').style.backgroundColor = randomDarkColor;
    quoteElement.style.color = randomDarkColor;
    
    quoteElement.classList.remove('visible');
    setTimeout(() => {
        quoteElement.classList.add('visible');
    })
};

document.addEventListener('DOMContentLoaded', loadQuote);

document.getElementById('generate-btn').addEventListener('click', loadQuote);