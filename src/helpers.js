// Helper functions.


/**
 * Updates a specific row in the game board with new content.
 *
 * @param {Array} board - The current state of the board, an array of rows.
 * @param {Object} targetRow - The row object to be updated.
 * @param {Array} updatedRowContent - New content for the specified row.
 * @returns {Array} - A new board array with the updated row content.
 */
export function updateBoardHelper(board, targetRow, updatedRowContent) {
  // Board update.
  const updatedBoard = board.map((row, index) => {
    if (index === targetRow.rowId) {
      // Update row.
      return { ...targetRow, rowContent: updatedRowContent };
    }
    // The rest haven't changed.
    return row;
  });
  return updatedBoard;
}

/**
 * Sets a peg in a specified position within a given row on the board.
 *
 * @param {Array} board - The current state of the board, an array of rows.
 * @param {number} targetRowId - The index of the row where the peg is to be set.
 * @param {number} pegPosition - The position in the row to place the peg.
 * @param {string} pegColor - The color of the peg.
 * @param {boolean} pegIsInActiveRow - Indicates if the peg is in an active row.
 * @returns {Array} - An updated row content with the new peg.
 */
export function setPegHelper(
  board,
  targetRowId,
  pegPosition,
  pegColor,
  pegIsInActiveRow
) {
  const newPeg = {
    position: pegPosition,
    color: pegColor,
    isInActiveRow: pegIsInActiveRow,
  };

  // Row update.
  const targetRow = board[targetRowId];
  const updatedRowContent = targetRow.rowContent.map((hole, index) => {
    if (index === pegPosition) {
      // Update peg.
      return { ...hole, holeContent: newPeg };
    } else {
      // The rest haven't changed.
      return hole;
    }
  });

  return updatedRowContent;
}

/**
 * Swaps two pegs in the specified row on the board.
 *
 * @param {Array} board - The current state of the board, an array of rows.
 * @param {number} targetRowId - The index of the row containing the pegs to swap.
 * @param {number} sourcePegPosition - The position of the source peg to swap.
 * @param {string} sourcePegColor - The color of the source peg.
 * @param {boolean} sourcePegIsInActiveRow - Indicates if the source peg is in an active row.
 * @param {number} currentPegPosition - The position of the current peg to swap.
 * @param {string} currentPegColor - The color of the current peg.
 * @param {boolean} currentPegIsInActiveRow - Indicates if the current peg is in an active row.
 * @returns {Array} - An updated row content reflecting the swapping of the pegs.
 */
export function swapPegsHelper(
  board,
  targetRowId,
  sourcePegPosition,
  sourcePegColor,
  sourcePegIsInActiveRow,
  currentPegPosition,
  currentPegColor,
  currentPegIsInActiveRow
) {
  const sourcePeg = {
    position: sourcePegPosition,
    color: currentPegColor,
    isInActiveRow: currentPegIsInActiveRow,
  };
  const targetPeg = {
    position: currentPegPosition,
    color: sourcePegColor,
    isInActiveRow: sourcePegIsInActiveRow,
  };

  // Row update.
  const targetRow = board[targetRowId];
  const updatedRowContent = targetRow.rowContent.map((hole, index) => {
    if (index === sourcePegPosition) {
      // Update source peg.
      return { ...hole, holeContent: sourcePeg };
    }
    if (index === currentPegPosition) {
      // Update target peg.
      return { ...hole, holeContent: targetPeg };
    }
    // The rest haven't changed.
    return hole;
  });

  return updatedRowContent;
}
