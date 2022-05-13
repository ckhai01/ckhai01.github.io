// JavaScript source code

function openLeague() {

    window.open('https://lol.garena.com/newspage/esports', 'mywindow');
    
}

function openCS() {
    window.open('https://www.esports.com/en/csgo', 'mywindow');
}

function openOW() {
    window.open('https://overwatchleague.com/en-us/', 'mywindow');
}

function openVal() {
    window.open('https://www.esports.com/en/valorant', 'mywindow');
}

function openDota() {
    window.open('https://dotesports.com/dota-2', 'mywindow');
}

function openFortnite() {
    window.open('https://www.epicgames.com/fortnite/competitive/en-US/home', 'mywindow');
}

function generateTable() {
    $(document).ready(function () {
        $.get('xml/eSportsStats.xml', function (d) {
            var data = "";
            //Defining table header row
            var startTag = "<table><tr><th></th><th>League of Legends</th><th>CSGO</th><th>Overwatch</th><th>Valorant</th><th>DOTA 2</th><th>Fortnite</th>";
            var endTag = "</table>";
            //Extracting from XML file into the table
            $(d).find('List').each(function () {
                var $url = $(this);
                var One = $url.find('One').text();
                var Two = $url.find('Two').text();
                var Three = $url.find('Three').text();
                var Four = $url.find('Four').text();
                var Five = $url.find('Five').text();
                var Six = $url.find('Six').text();
                var Seven = $url.find('Seven').text();
                data += '<tr><th>' + One + '</th>';
                data += '<td>' + Two + '</td>';
                data += '<td>' + Three + '</td>';
                data += '<td>' + Four + '</td>';
                data += '<td>' + Five + '</td>';
                data += '<td>' + Six + '</td>';
                data += '<td>' + Seven + '</td>';
                
            })
            //Writing to the HTML page
            $("#content").html(startTag + data + endTag);
            ;
        });
    });
}

function getName() {
    var name = document.getElementById("name").value;
    if (name == '') {
        return;
    }

    document.getElementById("output").innerHTML = "Thank you for your response, " + name;
    document.getElementById("name").value='';
    document.getElementById("email").value = '';
    document.getElementById("esport").value;
}