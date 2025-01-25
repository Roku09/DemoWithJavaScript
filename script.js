function displayGreeting() {
    const name = document.getElementById('userInput').value;
    document.getElementById('greeting').innerText = `Hello, ${name}! Welcome to the demo.`;
  }
  
  function checkNumber() {
    const number = parseInt(document.getElementById('numberInput').value, 10);
    const result = (number % 2 === 0) ? `${number} is Even` : `${number} is Odd`;
    document.getElementById('numberResult').innerText = result;
  }
  
  function generateList() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = `Item ${i}`;
      list.appendChild(listItem);
    }
  }
  