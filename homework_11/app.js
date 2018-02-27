var rootNode = document.getElementById("root");

//Initialization function
function init(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].folder) {
            result += `<li class="folder"><span><i class="material-icons">folder</i>  ${arr[i].title}</span></li>`;
            if (!arr[i].children) {
                result += '<p class="emptyFolder"><em>Folder is empty</em></p>';
            }
        } 
        else {
            result +=`<li class="file"><span><i class="material-icons">insert_drive_file</i>  ${arr[i].title}</span></li>`;
        }
        if (arr[i].children) {
            result +=`<ul class="close">  ${init(arr[i].children)}</ul>`;
        }
    }
    return result;
};

//click on the file
function clickOnFile(){
    //nothing to do
};

//click on the folder
function clickOnFolder() {
    let next = this.nextElementSibling.style;
    if(next.display == 'none' || next.display == ''){
        next.display = 'block';
        this.querySelector('i').innerHTML = '<i class="material-icons">folder_open</i>';
    }
    else{
        next.display = 'none';
        this.querySelector('i').innerHTML = '<i class="material-icons">folder</i>';
    }
};

//function init events
function events() {
    let item = document.getElementsByTagName('li');
    let i = 0;
    while (i < item.length) {
        if (item[i].className == 'file') {
            item[i].addEventListener('click', clickOnFile);
        } 
        else {
            item[i].addEventListener('click', clickOnFolder);
        }
        i++;
    }
};


var tree = document.createElement("ul");
tree.innerHTML = init(structure);
rootNode.appendChild(tree);
events();