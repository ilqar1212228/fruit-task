function addFruit() {
    var fruitInput = document.getElementById('fruit-input');
    var fruitName = fruitInput.value;

    if (fruitName !== '') {
      var fruitsList = document.getElementById('fruits-list');
      var newFruitItem = document.createElement('li');
      newFruitItem.textContent = fruitName;
      fruitsList.appendChild(newFruitItem);
      
      fruitInput.value = '';}
    }
    function getFruitsCount() {
        var fruitsList = document.getElementById('fruits-list');
        var fruitsCount = fruitsList.children.length;
        
        alert('Fruits count: ' + fruitsCount);
    }