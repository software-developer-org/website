// test script for hello world
document.body.onload = addElement;

function addElement(): Element {
  const newDiv = document.createElement('h1');
  const newContent = document.createTextNode('Hello');
  newDiv.appendChild(newContent);

  const currentDiv = document.getElementById('h1');
  document.body.insertBefore(newDiv, currentDiv);
  return newDiv;
}

export = addElement;
