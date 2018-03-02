// Your code goes here
var root = document.getElementById("root");

function main_page() {
    var main_container = document.createElement("div");
    main_container.setAttribute("class", "main");

    var h2 = document.createElement("h2");
    main_container.appendChild(h2);
    h2.innerHTML = "Most popular tanks";

    var grid_container = document.createElement("div");
    grid_container.className = "grid_container";
    main_container.appendChild(grid_container);

    tanks.forEach(function (tanks) {
        var grid_box = document.createElement("a");
        grid_box.href = "#" + tanks.model;
        grid_box.className = "grid_box";
        grid_container.appendChild(grid_box);

        var tank_img = document.createElement("img");
        tank_img.src = tanks.preview;
        grid_box.appendChild(tank_img);

        var title_div = document.createElement("div");
        title_div.className = "title_div";
        grid_box.appendChild(title_div);

        var flag_img = document.createElement("img");
        flag_img.src = tanks.country_image;
        flag_img.title = tanks.country;
        title_div.appendChild(flag_img);

        var level = document.createElement("h4");
        level.innerHTML = tanks.level;
        title_div.appendChild(level);

        var model = document.createElement("p");
        model.innerHTML = tanks.model;
        model.title = tanks.model;
        title_div.appendChild(model);

        var details = document.createElement("div");
        details.className = "details";
        title_div.append(details);
    })
    return main_container;
};

function tank_details(tank) {
    var details = tank.details;
    var details_title = document.createElement("div");
    details_title.className = "details";

    var details_flag = document.createElement("img");
    details_flag.src = tank.country_image;
    details_flag.title = tank.country;
    details_title.appendChild(details_flag);

    var details_name = document.createElement("h2");
    details_name.innerHTML = "<span class='forSpan'>" + tank.model + "</span>" + " (level " + tank.level + ")";
    details_title.appendChild(details_name);

    var details_preview = document.createElement("h4");
    details_preview.innerHTML = "Preview";

    var details_tank_img = document.createElement("img");
    details_tank_img.src = tank.preview;

    var details_a = document.createElement("a");
    details_a.href = "#";
    details_a.innerText = "Back to list view";
    
    details_a.addEventListener('click',function(){
        location.hash = "";
        root.innerHTML = "";
        root.appendChild(main_page());
    });

    var details_h4 = document.createElement("h4");
    details_h4.innerHTML = "Characteristic";

    var details_table = document.createElement("table");

    for (let i in details) {
        var row = details_table.insertRow(i);
        var cell = row.insertCell(0);
        var text = document.createTextNode(i);
        cell.appendChild(text);
        let newCell = row.insertCell(1);
        let newText = document.createTextNode(details[i]);
        newCell.appendChild(newText);
    };

    var all_details = document.createElement("div");
    var details_left = document.createElement("div");
    var details_right = document.createElement("div");

    details_left.appendChild(details_title);
    details_left.appendChild(details_preview);
    details_left.appendChild(details_tank_img);
    details_left.appendChild(details_a);

    details_right.appendChild(details_h4);
    details_right.appendChild(details_table);

    all_details.appendChild(details_left);
    all_details.appendChild(details_right);

    details_left.className = "details_left";
    details_right.className = "details_right";
    all_details.className = "all_details";
    return (all_details);
}

function reload() {
    var link = location.hash;
    full_link = link.replace(/\s/ig, '-');
    for (let i in tanks) {
        var link_test = "#" + tanks[i].model;
        if (link === link_test) {
            root.innerHTML = "";
            root.appendChild(tank_details(tanks[i]));
            location.hash = full_link;
        }
    }
};

window.onhashchange = reload;
root.appendChild(main_page());