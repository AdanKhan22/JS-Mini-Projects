const elements = [
    document.getElementById("section1"),
    document.getElementById("section2"),
    document.getElementById("section3"),
    document.getElementById("section4"),
    document.getElementById("section5"),
    document.getElementById("section6"),
    document.getElementById("section7"),
    document.getElementById("section8"),
    document.getElementById("section9")
  ];
  
  let isPlayerOneTurn = true;
  
  function startGame() {
    elements.forEach(element => {
      element.addEventListener("click", handleClick);
    });
  }
  
  function handleClick(event) {
    const cell = event.target;
  
    if (cell.textContent === '') {  // Only allow marking empty cells
      cell.textContent = isPlayerOneTurn ? 'X' : 'O';
      isPlayerOneTurn = !isPlayerOneTurn;
      checkGameStatus();
    }
  }
  
  function checkGameStatus() {
    const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
  
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (elements[a].textContent && 
          elements[a].textContent === elements[b].textContent &&
          elements[a].textContent === elements[c].textContent) {
        alert(`${elements[a].textContent} wins!`);
        resetGame();
        return;
      }
    }
  }
  
  function resetGame() {
    elements.forEach(element => {
      element.textContent = '';
    });
    isPlayerOneTurn = true;
  }
  
  startGame();
  