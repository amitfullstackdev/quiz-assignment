export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export function updateSelected(selected) {
  return {type: UPDATE_SELECTED, payload: selected};
}

export function updateProgress(progress) {
  return {type: UPDATE_PROGRESS, payload: progress};
}
export function updateScore(score) {
  return {type: UPDATE_SCORE, payload: score};
}