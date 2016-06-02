var button = document.getElementById("grow");
var string = " ";
var spaceCounter = 0;
var charCounter = 0;

function tree (object) {
  treeObject = buildObject ()
  var empty = " "
  var character = treeObject.character
  spaceCounter = (treeObject.height - 1)
  charCounter = 1;
  addCounter = 0;
  for (i = 0; i < treeObject.height; i++) {
    string = empty.repeat(spaceCounter)
    string += character.repeat(charCounter) + character.repeat(addCounter)
    spaceCounter --
    charCounter ++
    addCounter ++
    console.log("", string);
  }
}

function validateForm()
{
var a=document.getElementById("heightInput").value
var b=document.getElementById("charInput").value
if (a==null || a=="" || b==null || b=="")
  {
  alert("Please Fill All Required Fields");
  return false;
  } else {
    tree ()
  }
}

function buildObject () {
  var treeObject = 
  {
    height: document.getElementById("heightInput").value,
    character: document.getElementById("charInput").value
  }
  return treeObject
}


button.addEventListener("click", validateForm)
var inputs = document.getElementsByClassName("textInput")
for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function (e) {
    var key = e.keyCode;
    if (key === 13) {
      validateForm()
    }
  });
}








