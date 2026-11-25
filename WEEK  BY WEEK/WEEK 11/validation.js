const form = document.getElementById('gradeForm');   // the whole form, used to catch the submit

// turn a score into a letter grade
function getLetterGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();          // stop the page reloading

  const studentName = document.getElementById('studentName').value.trim(); // typed name, extra spaces removed
  const scoreText   = document.getElementById('score').value;              // score as text, '' if left empty
  const score       = Number(scoreText);                                   // score as a real number for comparing
  const subject     = document.getElementById('subject').value;            // chosen subject, '' if none picked
  const term        = document.querySelector('input[name="term"]:checked'); // selected radio button, null if none
  const confirmed   = document.getElementById('confirm').checked;          // true if the box is ticked

  const errors = [];   // list that collects every mistake found
  if (studentName.length < 3) errors.push('Student name must be at least 3 characters');
  if (scoreText === '' || score < 0 || score > 100) errors.push('Score must be from 0 to 100');
  if (subject === '') errors.push('Please choose a subject');
  if (term === null) errors.push('Please choose a term');
  if (!confirmed) errors.push('Please confirm the score is correct');

  if (errors.length > 0) {
    alert('Please fix: ' + errors.join('; '));
    return;
  }

  const letter = getLetterGrade(score);                  // A, B, C, D or F
  const status = score >= 60 ? 'Passed' : 'Failed';      // 60 and above passes

  alert(studentName + ': ' + score + ' in ' + subject + ' (' + term.value + ' term). Grade ' + letter + ', ' + status + '.');
});