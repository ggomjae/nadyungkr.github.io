function dropDown() {
    var x = document.getElementById('dropSub');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
};

function dropTopDown() {
    var y = document.getElementById('lang');
    if (y.style.height === '0px') {
      y.style.height = '160%';
    } else {
      y.style.height = '0px';
    }
};