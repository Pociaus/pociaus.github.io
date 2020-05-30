var ul = document.querySelector('ul');

document.getElementById('add-button').addEventListener('click',
function(e) {
  e.preventDefault();

  var addInput = document.getElementById('add-task__input');

  if(addInput.value !== '') {
  var li = document.createElement('li'),
      firstPar = document.createElement('p'),
      secondPar = document.createElement('p'),
      firstIcon = document.createElement('i'),
      secondIcon = document.createElement('i'),
      input = document.createElement('input');

      firstIcon.className = "fa fa-user-edit";
      secondIcon.className = "fa fa-trash-alt";
      input.className = "edit-list";
      input.setAttribute('type', 'text');

      firstPar.textContent = addInput.value;

      secondPar.appendChild(firstIcon);
      secondPar.appendChild(secondIcon);
      li.appendChild(firstPar);
      li.appendChild(secondPar);
      li.appendChild(input);
      ul.appendChild(li);
      addInput.value = '';
      console.log(li);
    }
});


ul.addEventListener('click', function(e) {

  if(e.target.classList[1] === "fa-user-edit") {

    var parentPar = e.target.parentNode;
    parentPar.style.display ='none';

    var example = parentPar.previousElementSibling;
    var input = parentPar.nextElementSibling;

    input.style.display = 'block';
    input.value = example.textContent;

    input.addEventListener('keypress', function(e) {
      if(e.keyCode === 13) {
        if(input.value !== '') {
          example.textContent = input.value;
          parentPar.style.display = 'block';
          input.style.display = 'none';
        } else {
          var li = input.parentNode;
          li.parentNode.removeChild(li);
        }
      }
    });
  } else if(e.target.classList[1] === "fa-trash-alt") {
    var listdata = e.target.parentNode.parentNode;
    listdata.parentNode.removeChild(listdata)
  }

});

///******************

var hideItem = document.getElementById('hide');

hideItem.addEventListener('click' , function() {

  var label = document.querySelector('label');

  if (hideItem.checked) {
    label.textContent = 'Unhide tasks';
    ul.style.display = 'none';
  } else {
    label.textContent = 'Hide tasks';
    ul.style.display = 'block';
  }

});

///*******************

var searchInput = document.querySelector('#task-form input');

searchInput.addEventListener('keyup', function(e) {

  var searchChar = e.target.value.toUpperCase();

  var notes = ul.getElementsByTagName('li');

  Array.from(notes).forEach(function(example) {
    var parText = example.firstElementChild.textContent;

    if(parText.toUpperCase().indexOf(searchChar) !== -1) {
      example.style.display = 'block';
    }
    else {
      example.style.display ='none';
    }
  });

});
