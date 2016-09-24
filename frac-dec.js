// given two real numbers a, b, where b != 0
// returns ["<non-repeating>", "<repeating>"]
function decimal(a, b){
  var move = Math.max(R.declen(a), R.declen(b));
  if (move != 0){
    a = R.right(a, move);
    b = R.right(b, move);
  }
  
  a = R.tostr(a);
  b = R.tostr(b);
  
  var quot = "";
  var curr = "";
  var k;
  var arr = ["0", b, R.addInt(b, b)];
  var remainders = [];
  var alen = a.length;
  for (var i = 0; true; i++){
    if (i < alen){
      if (curr !== "" || a[i] !== '0')curr += a[i];
    } else {
      if (curr == "")return [quot, ""];
      if (i == alen){
        if (quot === "")quot += "0";
        quot += ".";
      }
      curr += "0";
      var p = $.pos(curr, remainders)
      if (p !== -1){
        var numRep = remainders.length-p;
        return [
          $.sli(quot, 0, quot.length-numRep),
          $.sli(quot, quot.length-numRep)
        ];
      }
      remainders.push(curr);
    }
    if (R.geInt(curr, b)){
      for (k = 2; R.geInt(curr, arr[k]); k++){
        if (k+1 == arr.length)arr[k+1] = R.addInt(arr[k], b);
      }
      quot += k-1;
      curr = R.subInt(curr, arr[k-1]);
    } else {
      if (quot !== "")quot += "0";
    }
  }
}
