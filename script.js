
function wordSelector(sent){
  var max = 0;
  var val = {};
  var words = [];
  sent = sent.split(/\W/);
  console.log('sent: ', sent);
  sent.forEach(function(w){
    val = checkWord(w);
    for (var v in val){
      if(val[v] >= max){
        max = val[v];
        words.push(w);
      }
    }
    console.log('max: ', max);
    console.log('words: ', words);
  });
}

function checkWord(str) {
    var temp = {};
    for(var i = str.length-1; i >= 0; i--) {
        var c = str.charAt(i);
        if(c in temp) {
            temp[c] += 1;
        }
        else {
            temp[c] = 1;
        }
    }
    var result = {};
    for(c in temp) {
        if(temp.hasOwnProperty(c)) {
            if(temp[c] > 1){
                result[c] = temp[c];
            }
        }
    }
    console.log('result: ', result);
    return result;
}

var output = checkWord("attribute");
 console.log('output: ', output);

  wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale");

  // returns => words:  ["attribute", "success"]
