var root = document.getElementById('root');

function createPage(){
    let main = document.createElement('div');
    main.setAttribute('class', 'main');
let h2 = document.createElement('h2');
    h2.innerHTML = 'Most popular tanks';
    main.appendChild(h2);
    
let content = document.createElement('div');
    content.setAttribute('class', 'content');
    main.appendChild(content);
    
tanks.forEach(function(tanks){
    let box = document.createElement('a');
    box.setAttribute('href', '#'+tanks.model);
    box.setAttribute('class', 'box');    
    let image = document.createElement('img');
        image.setAttribute('src', tanks.preview);
        box.appendChild(image);
    let titleD = document.createElement('div');
    titleD.setAttribute('class', 'title');
    box.appendChild(titleD);    
    let country = document.createElement('img');
        country.setAttribute('src', tanks.country_image);
        country.setAttribute('title', tanks.country);
        titleD.appendChild(country);
    let moreDetails = document.createElement('div');
        moreDetails.setAttribute('class', 'details');
        titleD.appendChild(moreDetails);    
    let model = document.createElement('p');
        model.innerHTML = tanks.model;
        model.title = tanks.model;
        titleD.appendChild(model);
    let level = document.createElement('h3');
        level.innerHTML = tanks.level;
        titleD.appendChild(level);
    });
    
    return main;
};

function getDetails(tank){
    let details = tank.details;
    let detailsTitle = document.createElement('div');
    detailsTitle.setAttribute('class','details');    
let detailsCountry = document.createElement('img');
detailsCountry.setAttribute('src',tank.country_image);
detailsCountry.setAttribute('title',tank.country);
detailsTitle.appendChild(detailsCountry);
    
    let detailsName = document.createElement('h2');
    detailsName.innerHTML ='<span class="forSpan"' + tank.model + "</span>"+' level ' + tank.level;
detailsTitle.appendChild(detailsName);    
let preview = document.createElement('h4');
preview.innerHTML = 'Preview';
    let detailsImg = document.createElement('img');
    detailsImg.setAttribute('src',tank.preview);
    
let detailsLink = document.createElement('a');
detailsLink.setAttribute('href', '#');
detailsLink.innerHTML = 'Back to list view';
    detailsLink.addEventListener('click', function(){
        location.hash ='';
        root.innerHTML = '';
        root.appendChild(createPage());
    });
    let detailsChar = document.createElement('h4');
    detailsChar.innerHTML = 'Characteristic';
    let detailsTable = document.createElement('table');
    for(let i in details){
    let row = detailsTable.insertRow(i);
    let cell - row.insertCell(0);
    let text = document.createTextNode(i);
    cell.appendChild(text);
    let newCell = row.insertCell(1);
    let newText = document.createTextNode(details[i]);
    newCell.appendChild(newText);
    }
let fullDetails = document.createElement('div');
let detailsLeft = document.createElement('div');
let detailsRight = document.createElement('div');
detailsLeft.appendChild(detailsTitle);
detailsLeft.appendChild(preview);
detailsLeft.appendChild(detailsImg);
detailsLeft.appendChild(detailsLink);
detailsRight.appendChild(detailsChar);
detailsRight.appendChild(detailsTable);
detailsLeft.setAttribute('class','detailsLeft');
detailsRight.setAttribute('class','detailsRight');
fullDetails.setAttribute('class', 'fullDetails');
fullDetails.appendChild(detailsLeft);
fullDetails.appendChild(detailsRight);
    
    return fullDetails;
};