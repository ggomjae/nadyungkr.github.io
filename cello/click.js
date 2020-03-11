function dropDown() {
    var x = document.getElementById('dropSub');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
};

function dropTopDown() {
    var lang = document.getElementById('lang');
    var langCh = document.getElementById('lang').childNodes;
    var langChT = langCh.item(2); 
    if (langChT.style.height === '160%') {
      langChT.style.height = '0px';
    } else {
      langChT.style.height = '160%';
    }
};

$(".tb_allMenu").click('on',function(){
  $(this).next().css({"width":"100%","display":"block"});
});

$(".tb_close_btn").click('on',function(){
  $(this).parent().css({"width":"0px","display":"none"});
});