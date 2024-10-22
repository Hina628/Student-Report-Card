function calculateResults() {

    const mathMarks = parseFloat(document.getElementById('mathMarks').value);
    const scienceMarks = parseFloat(document.getElementById('scienceMarks').value);
    const englishMarks = parseFloat(document.getElementById('englishMarks').value);
    const historyMarks = parseFloat(document.getElementById('historyMarks').value);
    const peMarks = parseFloat(document.getElementById('peMarks').value);

    const marksArray = [mathMarks, scienceMarks, englishMarks, historyMarks, peMarks];
    const totalMarks = marksArray.reduce((total, mark) => total + (isNaN(mark) ? 0 : mark), 0);
    const averageMarks = totalMarks / marksArray.length;
  

    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('averageMarks').textContent = averageMarks.toFixed(2);
  
  
    const statusElements = document.querySelectorAll('.status');
    marksArray.forEach((marks, index) => {
      const status = statusElements[index];
      if (marks >= 50) {
        status.textContent = 'Pass';
        status.classList.add('pass');
        status.classList.remove('fail');
      } else {
        status.textContent = 'Fail';
        status.classList.add('fail');
        status.classList.remove('pass');
      }
    });
  
    const finalStatusElement = document.getElementById('finalStatus');
    if (averageMarks >= 50) {
      finalStatusElement.textContent = 'Status: Passed';
      finalStatusElement.style.color = '#28a745';
    } else {
      finalStatusElement.textContent = 'Status: Failed';
      finalStatusElement.style.color = '#dc3545';
    }
  }
  