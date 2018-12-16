function myNum(num) {
    document.form.textview.value = document.form.textview.value + num;
  }
  
  function equal() {
    var ans = document.form.textview.value;
  
    document.form.textview.value = eval(ans);
  }
  
  function del() {
    document.form.textview.value = document.form.textview.value * 0;
  }
  