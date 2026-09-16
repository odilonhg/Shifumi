let labells = {
    victory: document.getElementById("victory-labell"),
    defeat: document.getElementById("defeat-labell"),
    draw: document.getElementById("draw-labell")
};

let values = {
    victory: 3,
    defeat: 2,
    draw: 1
};

labells.victory.textContent = "Test, vous me recevez ?";

/**
 * Updates the display counters for victories, defeats and draws
 *
 * @param {HTMLElement} labellVictory - The labell about the victories that is updated
 * @param {HTMLElement} labellDefeat - The labell about the defeats that is updated
 * @param {HTMLElement} labellDraw - The labell about the equalities that is updated
 * @param {number} nbVictories
 * @param {number} nbDefeats
 * @param {number} nbDraws
 * @returns {void}
 */
function refreshScore(labellVictory, labellDefeat, labellDraw, nbVictories, nbDefeats, nbDraws) {
    if(nbVictories > 1) {
        labellVictory.textContent = `Victoires : ${nbVictories}`;
    }
    else {
        labellVictory.textContent = `Victoire : ${nbVictories}`;
    }

    if(nbDefeats > 1) {
        labellDefeat.textContent = `Défaites : ${nbDefeats}`;
    }
    else {
        labellDefeat.textContent = `Défaite : ${nbDefeats}`;
    }

    if(nbDraws > 1) {
        labellDraw.textContent = `Egalités : ${nbDraws}`;
    }
    else {
        labellDraw.textContent = `Egalité : ${nbDraws}`;
    }
}

refreshScore(
    labells.victory,
    labells.defeat,
    labells.draw,
    values.victory,
    values.defeat,
    values.draw
);