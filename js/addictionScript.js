// JavaScript source code
function generateTable() {
    $(document).ready(function () {
        $.get('xml/country.xml', function(d) {
            var data = "";
            //Defining table header row
            var startTag = "<table><tr><th>Country</th><th>Less than 1 hour a week</th><th>1-2 hours a week</th><th>2-4 hours a week</th><th>4-7 hours a week</th><th>7-12 hours a week</th><th>12-20 hours a week</th><th>More than 20 hours a week</th><th>Average Hours Each Week</th></tr>"; 
            var endTag = "</table>";
            //Extracting from XML file into the table
            $(d).find('List').each(function() { 
                var $url = $(this);
                var country = $url.find('country').text();
                var hr1 = $url.find('hr1').text();
                var hr12 = $url.find('hr1-2').text();
                var hr24 = $url.find('hr2-4').text();
                var hr47 = $url.find('hr4-7').text();
                var hr712 = $url.find('hr7-12').text();
                var hr1220 = $url.find('hr12-20').text();
                var hr20 = $url.find('hr20').text();
                var average = $url.find('average').text();
                data += '<tr><td>' + country + '</td>';
                data += '<td>' + hr1 + '</td>';
                data += '<td>' + hr12 + '</td>';
                data += '<td>' + hr24 + '</td>';
                data += '<td>' + hr47 + '</td>';
                data += '<td>' + hr712 + '</td>';
                data += '<td>' + hr1220 + '</td>';
                data += '<td>' + hr20 + '</td>';
                data += '<td>' + average + '</td></tr>';
            })
            // Writing to the HTML page
            $("#content").html(startTag + data + endTag); 
            ;
        });
    });
    $(document).ready(function () {
        $.get('xml/ages.xml', function(d) {
            var data1 = "";
            //Defining table header row
            var startTag1 = "<table><tr><th>Ages</th><th>Less than 1 hour a week</th><th>1-2 hours a week</th><th>2-4 hours a week</th><th>4-7 hours a week</th><th>7-12 hours a week</th><th>12-20 hours a week</th><th>More than 20 hours a week</th><th>Average Hours Each Week</th></tr>"; 
            var endTag1 = "</table>";
            //Extracting from XML file into the table
            $(d).find('List').each(function() { 
                var $url = $(this);
                var age1 = $url.find('ages').text();
                var hr11 = $url.find('hr11').text();
                var hr121 = $url.find('hr1-21').text();
                var hr241 = $url.find('hr2-41').text();
                var hr471 = $url.find('hr4-71').text();
                var hr7121 = $url.find('hr7-121').text();
                var hr12201 = $url.find('hr12-201').text();
                var hr201 = $url.find('hr201').text();
                var average1 = $url.find('average1').text();
                data1 += '<tr><td>' + age1 + '</td>';
                data1 += '<td>' + hr11 + '</td>';
                data1 += '<td>' + hr121 + '</td>';
                data1 += '<td>' + hr241 + '</td>';
                data1 += '<td>' + hr471 + '</td>';
                data1 += '<td>' + hr7121 + '</td>';
                data1 += '<td>' + hr12201 + '</td>';
                data1 += '<td>' + hr201 + '</td>';
                data1 += '<td>' + average1 + '</td></tr>';
            })
            // Writing to the HTML page
            $("#age").html(startTag1 + data1 + endTag1); 
            ;
        });
    });

    $(document).ready(function () {
        $.get('xml/gender.xml', function(d) {
            var data11 = "";
            //Defining table header row
            var startTag11 = "<table><tr><th>Gender</th><th>Less than 1 hour a week</th><th>1-2 hours a week</th><th>2-4 hours a week</th><th>4-7 hours a week</th><th>7-12 hours a week</th><th>12-20 hours a week</th><th>More than 20 hours a week</th><th>Average Hours Each Week</th></tr>"; 
            var endTag11 = "</table>";
            //Extracting from XML file into the table
            $(d).find('List').each(function() { 
                var $url = $(this);
                var age11 = $url.find('gender').text();
                var hr111 = $url.find('hr111').text();
                var hr1211 = $url.find('hr1-211').text();
                var hr2411 = $url.find('hr2-411').text();
                var hr4711 = $url.find('hr4-711').text();
                var hr71211 = $url.find('hr7-1211').text();
                var hr122011 = $url.find('hr12-2011').text();
                var hr2011 = $url.find('hr2011').text();
                var average11 = $url.find('average11').text();
                data11 += '<tr><td>' + age11 + '</td>';
                data11 += '<td>' + hr111 + '</td>';
                data11 += '<td>' + hr1211 + '</td>';
                data11 += '<td>' + hr2411 + '</td>';
                data11 += '<td>' + hr4711 + '</td>';
                data11 += '<td>' + hr71211 + '</td>';
                data11 += '<td>' + hr122011 + '</td>';
                data11 += '<td>' + hr2011 + '</td>';
                data11 += '<td>' + average11 + '</td></tr>';
            })
            // Writing to the HTML page
            $("#gender").html(startTag11 + data11 + endTag11); 
            ;
        });
    });
}
function formActions(){
    var radios = document.getElementsByClassName("yes");
    var value = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            value += 1;       
        }
    }
    if(value < 3){
        document.getElementById("result").innerHTML = "Your results are negative, you are not addicted to gaming.";
    }
    else{
        document.getElementById("result").innerHTML = "Your results are positive, you are unfortunately addicted to gaming.";
    }
}
function Reset(){
    document.getElementById("result").innerHTML = "";
}




