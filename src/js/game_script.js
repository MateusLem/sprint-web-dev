const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const trackImg = new Image();
trackImg.src = '../../assets/img/pista.png';

const carImg = new Image();
carImg.src = '../../assets/img/carro.png';

const path = [
    {x: 0.53, y: 0.90}, // Largada
    {x: 0.01, y: 0.90}, // Left
    {x: 0.01, y: 0.001}, // Up
    {x: 0.95, y: 0.001}, // Right
    {x: 0.95, y: 0.90}, // Down
    {x: 0.07, y: 0.90}, // Left
];

let car = {
    x: canvas.width * 0.53,
    y: canvas.height * 0.93,
    width: 50,
    height: 100,
    speed: 10,
    points: 0,
    laps: 0,
    upgrade: 5,
    direction: 3 // 0 = up, 1 = right, 2 = down, 3 = left
};
let currentTargetIndex = 1;
let lastX = car.x;

const pointsElement = document.getElementById('points');
const upgradeElement = document.getElementById('upgrade');
const upgradeButton = document.getElementById('upgrade-button');

function drawTrack() {
    ctx.drawImage(trackImg, 0, 0, canvas.width, canvas.height);
}

function drawCar() {
    ctx.save();
    ctx.translate(car.x + car.width / 2, car.y + car.height / 2);
    ctx.rotate(car.direction * Math.PI / 2);
    ctx.drawImage(carImg, -car.width / 2, -car.height / 2, car.width, car.height);
    ctx.restore();
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTrack();
    drawCar();

    // Coordenadas do ponto alvo atual
    const target = {
        x: path[currentTargetIndex].x * canvas.width,
        y: path[currentTargetIndex].y * canvas.height
    };
    
    // Cálculo da direção do movimento
    const dx = target.x - car.x;
    const dy = target.y - car.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < car.speed) {
        car.x = target.x;
        car.y = target.y;
        currentTargetIndex++;
        if (currentTargetIndex >= path.length) {
            currentTargetIndex = 1; // Reinicia o caminho (ignora o ponto inicial)
        }

        // Atualiza a direção do carro baseado no movimento
        const nextTarget = {
            x: path[currentTargetIndex].x * canvas.width,
            y: path[currentTargetIndex].y * canvas.height
        };
        if (nextTarget.y < car.y) {
            car.direction = 0; // Up
        } else if (nextTarget.x > car.x) {
            car.direction = 1; // Right
        } else if (nextTarget.y > car.y) {
            car.direction = 2; // Down
        } else if (nextTarget.x < car.x) {
            car.direction = 3; // Left
        }
    } else {
        car.x += (dx / distance) * car.speed;
        car.y += (dy / distance) * car.speed;
    }

    if ((car.x <= 0.53 * canvas.width && lastX > 0.53 * canvas.width) && car.y === 0.93 * canvas.height) {
        car.points++;
        pointsElement.innerText = car.points;
    }


    lastX = car.x;
    requestAnimationFrame(updateGame);
}

function upgradeCar() {
    if (car.points >= car.upgrade) {
        car.points -= car.upgrade;
        car.speed += 1;
        car.upgrade *= 1.5;
        upgradeElement.innerText = car.upgrade;
        pointsElement.innerText = car.points;
    }
    console.log(car.points);
}

trackImg.onload = () => {
    carImg.onload = () => {
        updateGame();
    };
};
