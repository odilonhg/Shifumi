let labells = {
    victory: document.getElementById("victory-labell"),
    defeat: document.getElementById("defeat-labell"),
    draw: document.getElementById("draw-labell")
};

let values = {
    victory: 0,
    defeat: 0,
    draw: 0
};

let ia_choice = document.getElementById("ia-choice");

/**
 * Updates the display counters for victories, defeats and draws
 * @returns {void}
 */
function refreshScore() {
    if (values.victory > 1) {
        labells.victory.textContent = `Victoires : ${values.victory}`;
    }
    else {
        labells.victory.textContent = `Victoire : ${values.victory}`;
    }

    if (values.defeat > 1) {
        labells.defeat.textContent = `Défaites : ${values.defeat}`;
    }
    else {
        labells.defeat.textContent = `Défaite : ${values.defeat}`;
    }

    if (values.draw > 1) {
        labells.draw.textContent = `Egalités : ${values.draw}`;
    }
    else {
        labells.draw.textContent = `Egalité : ${values.draw}`;
    }
}

/**
 * Allow the user to play a round against the IA
 * @param {int} move The choice of the user (determined with the button he pushed)
 * @returns {void}
 */
function play(move) {
    // The IA choose between 0 and 2;
    let IA_choice = Math.floor(Math.random() * 3);
    if (IA_choice == 0) { ia_choice.textContent = "L'IA a choisi Pierre !" }
    else if (IA_choice == 1) { ia_choice.textContent = "L'IA a choisi Feuille !" }
    else { ia_choice.textContent = "L'IA a choisi Ciseaux !" }


    if (move == 0 && IA_choice == 0) { values.draw += 1; refreshScore() }
    else if (move == 0 && IA_choice == 1) { values.defeat += 1; refreshScore() }
    else if (move == 0 && IA_choice == 2) { values.victory += 1; refreshScore() }

    if (move == 1 && IA_choice == 0) { values.victory += 1; refreshScore() }
    else if (move == 1 && IA_choice == 1) { values.draw += 1; refreshScore() }
    else if (move == 1 && IA_choice == 2) { values.defeat += 1; refreshScore() }

    if (move == 2 && IA_choice == 0) { values.defeat += 1; refreshScore() }
    else if (move == 2 && IA_choice == 1) { values.victory += 1; refreshScore() }
    else if (move == 2 && IA_choice == 2) { values.draw += 1; refreshScore() }
}

/**
 * Allow the user to reset the scoring board
 * @returns {void}
 */
function resetScore() {
    values.victory = 0;
    values.defeat = 0;
    values.draw = 0;
    ia_choice.textContent = "";
    refreshScore();
}

// Initialize the scoring board
refreshScore();