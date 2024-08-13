document.addEventListener('DOMContentLoaded', function () {
    const predictions = [
        { racer: "Jake Dennis", img: "Jake_Dennis_Car.jpg", yes: 3.80, no: 1.80, type: "racer" },
        { racer: "Stoffell Vandoorne", img: "vandoorne_car.jpg", yes: 1.80, no: 2.60, type: "racer" },
        { racer: "Jaguar TCS Racing", img: "jaguar_racing_car.jpg", yes: 2.50, no: 4.90, type: "team" },
        { racer: "Sette Camara", img: "nyck_car.jpg", yes: 7.80, no: 2.20, type: "racer" },
        { racer: "Jake Hughes", img: "Hughes_car.jpg", yes: 4.80, no: 2.40, type: "racer" },
        { racer: "Pascal Wehrlein", img: "pascal-wehrlein_car.jpg", yes: 2.80, no: 3.20, type: "racer" },
        { racer: "Robin Frijns", img: "robin_car.webp", yes: 7.80, no: 1.20, type: "racer" },
        { racer: "Edoardo Mortara", img: "edoardo_car.jpg", yes: 4.80, no: 1.70, type: "racer" },
        { racer: "Nyck de Vries", img: "nyck_car.jpg", yes: 6.80, no: 1.20, type: "racer" },
        { racer: "Mitch Evans", img: "mitch_car.jfif", yes: 2.80, no: 2.20, type: "racer" },
        { racer: "Jean-Eric Vergne", img: "jean_eric.jpg", yes: 3.50, no: 1.90, type: "racer" },
        { racer: "Antonio Felix da Costa", img: "antonio_car.jpg", yes: 4.20, no: 2.10, type: "racer" },
        { racer: "Sam Bird", img: "sam_bird_car.jpg", yes: 3.00, no: 1.50, type: "racer" },
        { racer: "Alexander Sims", img: "Alexander-Sims_car.jpg", yes: 5.00, no: 2.50, type: "racer" },
        { racer: "Oliver Rowland", img: "oliver_car.jpg", yes: 4.50, no: 2.30, type: "racer" },
        { racer: "Lucas di Grassi", img: "lucas_car.jpg", yes: 3.80, no: 1.70, type: "racer" },
        { racer: "Mercedes EQ Formula E Team", img: "lucas_car.jpg", yes: 2.20, no: 3.40, type: "team" },
        { racer: "DS Techeetah", img: "techeetah-car.jpg", yes: 2.60, no: 3.80, type: "team" },
        { racer: "Mahindra Racing", img: "Mahindra-car.webp", yes: 3.20, no: 4.40, type: "team" },
        { racer: "Maximilian Günther", img: "maxilian-car.webp", yes: 4.00, no: 2.20, type: "racer" },
    ];

    const predictionsSection = document.getElementById('predictions');

    // Generate the cards dynamically
    predictions.forEach(prediction => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset[`${prediction.type}`] = prediction.racer;
        card.dataset.yes = prediction.yes;
        card.dataset.no = prediction.no;

        card.innerHTML = `
            <img id="back" src="../../assets/img/${prediction.img}" alt="${prediction.racer}">
            <p>${prediction.racer}<br>${prediction.type === "racer" ? "para vencer a corrida:" : "estar no pódio:"}</p>
            <button class="yes">sim ${prediction.yes}x</button>
            <button class="no">não ${prediction.no}x</button>
        `;

        predictionsSection.appendChild(card);
    });

    // Now set up the event listeners
    const menuIcon = document.querySelector('.openbtn');
    const cards = document.querySelectorAll('.card');
    let selectedCard = null;
    let selectedPrediction = null;

    menuIcon.addEventListener('click', function () {
        document.querySelector('.sidebar').classList.toggle('showing');
    });

    cards.forEach(card => {
        const yesButton = card.querySelector('.yes');
        const noButton = card.querySelector('.no');

        if (yesButton && noButton) {
            yesButton.addEventListener('click', () => selectPrediction(card, 'yes'));
            noButton.addEventListener('click', () => selectPrediction(card, 'no'));
        }
    });

    document.getElementById('confirmBet').addEventListener('click', function () {
        const betAmount = parseFloat(document.getElementById('betAmount').value);

        if (selectedCard && selectedPrediction && !isNaN(betAmount) && betAmount > 0) {
            const multiplier = parseFloat(selectedCard.dataset[selectedPrediction]);
            const potentialWinnings = betAmount * multiplier;
            alert(`Aposta confirmada! Se ganhar, você receberá e${potentialWinnings.toFixed(2)}.`);
            document.getElementById('betAmount').value = '';
            selectedCard = null;
            selectedPrediction = null;
        } else {
            alert('Por favor, selecione uma aposta e insira um valor válido.');
        }
    });

    function selectPrediction(card, prediction) {
        selectedCard = card;
        selectedPrediction = prediction;
        alert(`Você escolheu "${prediction === 'yes' ? 'sim' : 'não'}" para ${card.dataset.racer || card.dataset.team}.`);
    }
});
