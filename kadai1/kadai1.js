document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
  
      let result = document.createElement('div');
      result.id = ('result');
      let resultcontents = document.getElementById('resultcontents');
      if (resultcontents.hasChildNodes()) {
          resultcontents.removeChild(resultcontents.firstChild);
      }
      resultcontents.appendChild(result);
  
      let fizznum = document.getElementById('FizzNum');
      let buzznum = document.getElementById('BuzzNum');
      let fizznumVal = document.getElementById('FizzNum').value;
      let buzznumVal = document.getElementById('BuzzNum').value;
  
      if (fizznumVal ==="" || buzznumVal ==="") {
        result.textContent = ('整数値を入力してください');
      } else if (isNaN(fizznumVal)){
        result.textContent = ('整数値を入力してください');
      } else if (isNaN(buzznumVal)){
        result.textContent = ('整数値を入力してください');
      } else {
      const fizzbuzz = (fizz, buzz) => {
        for (let i = 1; i < 100; i++)  {
          if (i % fizz === 0 && i % buzz === 0) {
              result.innerHTML += (`FizzBuzz ${i}<br>`);
          } else if (i % fizz === 0 && i % buzz !== 0) {
              result.innerHTML += (`Fizz ${i}<br>`);
          } else if (i % fizz !== 0 && i % buzz === 0) {
              result.innerHTML += (`Buzz ${i}<br>`);
          }
        }
      };
      
      fizzbuzz(fizznumVal, buzznumVal);   
        }
    }, false)
  }, false)
  