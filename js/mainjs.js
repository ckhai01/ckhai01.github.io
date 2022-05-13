// JavaScript source code
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function generateTable() {
    $(document).ready(function () {
        $.get('xml/table1.xml', function (d) {
            var data = "";
            //Defining table header row
            var startTag = "<table><caption>Total Console Sales (1970-2020)</caption><tr><th>Manufacturer</th><th>Home Consoles Sold</th><th>Handheld Consoles Sold</th><th>Total Sales</th></tr>";
            var endTag = "</table>";
            //Extracting from XML file into the table
            $(d).find('List').each(function () {
                var $url = $(this);
                var Manufacturer = $url.find('Manufacturer').text();
                var HomeConsoleSales = $url.find('HomeConsoleSales').text(); var HandheldConsoleSales = $url.find('HandheldConsoleSales').text(); var TotalSales = $url.find('TotalSales').text();
                data += '<tr><td>' + Manufacturer + '</td>'; data += '<td>' + HomeConsoleSales + '</td>'; data += '<td>' + HandheldConsoleSales + '</td>';
                data += '<td style=\"text-align: right\">' + TotalSales + '</td></tr>';
            })
            // Writing to the HTML page
            $("#table1content").html(startTag + data + endTag);
            ;
        });
    });
}

function submitform() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    if (fname == "") {
        return;
    }
    document.getElementById("submitcontent").innerHTML = "Thank you for filling out this form, " + fname + " " + lname + "!"
}