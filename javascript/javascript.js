
function add() {
    
    const task = document.getElementsByClassName("task")[0].value;
    const date = document.getElementsByClassName("date")[0].value;
    const newrow = document.createElement("tr");
    newrow.innerHTML = `
      <td>${task}</td>
      <td>${date}</td>
      <td><button onclick="deleteTransaction(this)">Delete</button></td>
    `;
    document.getElementsByTagName("table")[0].append(newrow);      
  }
  function deleteTransaction(button){
    button.parentNode.parentNode.remove();
  }
