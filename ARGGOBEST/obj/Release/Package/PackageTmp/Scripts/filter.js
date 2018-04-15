function myFilter(tableName, filter, col) {
    var input, tr, td, i;
    table = document.getElementById(tableName);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[col];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                tr[i].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function setFilter(id) {
    var selector = document.getElementById(id);
    switch (selector.options[selector.selectedIndex].text) {
        case "High": myFilter("taskuriList", "HIGH", 6); break;
        case "Normal": myFilter("taskuriList", "Normal", 6); break;
        case "Low": myFilter("taskuriList", "Low", 6); break;
    }
}

function setFilterRapoarte(id) {
    var selector = document.getElementById(id);
    switch (selector.options[selector.selectedIndex].text) {
        case "High": myFilter("rap_table", "HIGH", 4); break;
        case "Normal": myFilter("rap_table", "Normal", 4); break;
        case "Low": myFilter("rap_table", "Low", 4); break;
    }
}