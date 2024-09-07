const races = ["Норд", "Орк", "Редгард", "Каджит",
    "Босмер", "Альтмер", "Бретонец", "Данмер", "Имперец", "Аргонианин"];

const stones = ["Воин", "Леди", "Лорд", "Башня",
    "Маг", "Ученик", "Атронах", "Ритуал", "Конь",
    "Вор", "Любовник", "Тень", "Змей"];

const paths = ["Праведник", "Вестник смерти", "Вампир", "Оборотень"];

const toolkit = ["Двуручное оружие", "Крики", "Открытый Лук", "Кулачник",
    "Дуал", "Призывное оружие",
    "Колдовство: На призывных существах", "Скрытность-лучник",
    "Скрытность-кинжал", "Открытый кинжал", "Одноручное оружие и щит", 
    "Разрушение: Огонь", "Разрушение: Мороз", "Разрушение: Молния", "Разрушение: Физический лед",
    "Восстановление: Яд", "Колдовство: Призванное оружие", "Иллюзия", "Изменение: Боевая магия", "Изменение: Арктус"];

const clothes = [
    { type: "Легкая", summonable: true },
    { type: "Тяжелая", summonable: true },
    { type: "Ткань", summonable: false }
];

const raceColors = {
    "Норд": "#b6e2e7",
    "Орк": "#9effbb",
    "Редгард": "#9e8a77",
    "Каджит": "#a2a8a8",
    "Босмер": "#d0e088",
    "Альтмер": "#e6ec8f",
    "Бретонец": "#b7f0f0",
    "Данмер": "#98c5ca",
    "Имперец": "#e2c7c5",
    "Аргонианин": "#abca99"
};

const stoneColors = {
    "Воин": "#ffcce6",
    "Леди": "#ffcce6",
    "Лорд": "#ffcce6",
    "Башня": "#ffcce6",
    "Маг": "#b3d9ff",
    "Ученик": "#b3d9ff",
    "Атронах": "#b3d9ff",
    "Ритуал": "#b3d9ff",
    "Конь": "#b3ffb3",
    "Вор": "#b3ffb3",
    "Любовник": "#b3ffb3",
    "Тень": "#b3ffb3",
    "Змей": "#b3ffb3"
};

const clothesColors = {
    "Тяжелая": "#ffd2e1",
    "Легкая": "#c9f1d1",
    "Ткань": "#c6dbff",
    "Тяжелая Призывная": "#ffcc00", // Пример цвета для типа одежды "Тяжелая Призывная"
    "Легкая Призывная": "#ff9900",  // Пример
  };


function generateCharacter() {
    const randomRace = races[Math.floor(Math.random() * races.length)];
    const randomStone = stones[Math.floor(Math.random() * stones.length)];
    const randomPath = paths[Math.floor(Math.random() * paths.length)];
    const randomToolkit = toolkit[Math.floor(Math.random() * toolkit.length)];
    const randomClothes = clothes[Math.floor(Math.random() * clothes.length)];


   /* const randomClothesIndex = Math.floor(Math.random() * clothes.length);
    const randomClothes = clothes[randomClothesIndex]; */

    // Выбираем случайный тип одежды с учетом приписки "Призывная"


    const clothesText = randomClothes.summonable && Math.random() < 0.05
    ? `${randomClothes.type} Призывная`
    : randomClothes.type;

    // Отображение результатов в элементах span
    document.getElementById("race").innerText = randomRace;
    document.getElementById("stone").innerText = randomStone;
    document.getElementById("path").innerText = randomPath;
    document.getElementById("toolkit").innerText = randomToolkit;
    document.getElementById("clothes").innerText = clothesText;

    // Сброс цвета фона для всех дивов  
    const boxDivs = document.querySelectorAll('.box > div');
    boxDivs.forEach(div => {
        div.style.backgroundColor = '#f9f9f9';  // Устанавливаем стандартный цвет
    });

    // Установка цвета фона в зависимости от расы и камня
    const raceDiv = document.getElementById("race").parentElement; // Получаем родительский элемент
    const stoneDiv = document.getElementById("stone").parentElement; // Получаем родительский элемент
    const clothesDiv = document.getElementById("clothes").parentElement; // Получаем родительский элемент
    raceDiv.style.backgroundColor = raceColors[randomRace];
    stoneDiv.style.backgroundColor = stoneColors[randomStone];
    clothesDiv.style.backgroundColor = clothesColors[randomClothes.type];
}

// Задержка вызова функции для тестирования
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("race").parentElement.style.backgroundColor = '#f9f9f9';  // Устанавливаем стандартный цвет при загрузке
    document.getElementById("stone").parentElement.style.backgroundColor = '#f9f9f9';
    document.getElementById("clothes").parentElement.style.backgroundColor = '#f9f9f9';  // Устанавливаем стандартный цвет при загрузке
});