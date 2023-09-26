let selectedDay = '';

function showMeals(day) {
  selectedDay = day;
  document.getElementById('selectedDay').value = day;
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const meal = document.getElementById('meal').value;
  const foodName = document.getElementById('foodName').value;
  const review = document.getElementById('review').value;

  const table = document.getElementById('reviewTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(table.rows.length);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.innerHTML = selectedDay;
  cell2.innerHTML = meal;
  cell3.innerHTML = foodName;
  cell4.innerHTML = review;

  // Reset the form
  document.getElementById('meal').value = 'breakfast';
  document.getElementById('foodName').value = '';
  document.getElementById('review').value = '';
});
