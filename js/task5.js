
var selectedLi;

function selectionItems(event) {
    var target = event.target;
    
    if (target.tagName != 'LI') return;

    changeBackground(target);
}

function changeBackground(node) {
    
    if(selectedLi){
        selectedLi.classList.remove('highlight');
    }

    selectedLi = node;
    selectedLi.classList.add('highlight');
}