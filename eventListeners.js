
if (document.getElementById('brand') != null) {
    document.getElementById('brand').addEventListener('change', function() {
        var brand = this.value;
        var model = document.getElementById('model');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'functions.php?brand=' + brand, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                model.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    });

    document.getElementById('sendMessageButton').addEventListener('click', function() {
        document.getElementById('playground').innerHTML = '';
    });
}

var isFirst = true;

if(document.getElementById('calendar-btn-left') != null) {

    var date;
    
    if (document.getElementById('month-year') == null) 
    {
        console.log('month-year is null');
        date = new Date();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'calendar.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var doc = document.getElementById('calendar-container');
                doc.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    }
    else
    {
        date = document.getElementById('month-year');
        date = date.innerHTML.split(' ');
        var month = date[0];
    }

    document.getElementById('calendar-btn-left').addEventListener('click', function() {
        month = date.getMonth() - 1;
        if (month < 0) 
        {
            month = 11;
            date.setFullYear(date.getFullYear() - 1);
        }
        date.setMonth(month);
        console.log(month);
        var year = date.getFullYear();
        var day = date.getDate();
        var formattedDate = year + '-' + month + '-' + day;
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'calendar.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var doc = document.getElementById('calendar-container');
                doc.innerHTML = xhr.responseText;
            }
        }
        xhr.send('formattedDate=' + formattedDate);
    });

    document.getElementById('calendar-btn-right').addEventListener('click', function() {
        month = date.getMonth() + 1;
        if (month > 11) 
        {
            month = 0;
            date.setFullYear(date.getFullYear() + 1);
        }
        date.setMonth(month);
        var year = date.getFullYear();
        var day = date.getDate();
        var formattedDate = year + '-' + month + '-' + day;
        // Send the formattedDate to index.html or perform any other desired action
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'calendar.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var doc = document.getElementById('calendar-container');
                doc.innerHTML = xhr.responseText;
            }
        }
        xhr.send('formattedDate=' + formattedDate);
    });
}

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function convertMonthToInt(month) {
    var monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(month);
    return monthIndex + 1;
}

var index = 0;
var startDate = new Date();
var endDate = new Date();

function getDateFromButton(event){
    var date = event.innerHTML;
    date = date.substring(6, date.indexOf('</span>'));
    var calendarDate = document.getElementById('month-year').innerHTML;
    var month = calendarDate.split(' ')[0];
    month = convertMonthToInt(month);
    var year  = calendarDate.split(' ')[1];

    if (month < 10) {
        month = '0' + month;
    }

    if (date < 10) {
        date = '0' + date;
    }

    console.log(date);
    console.log(month);
    console.log(year);

    var formattedDate = year + '-' + month + '-' + date;

    var dateJS = new Date(year, month - 1, date);

    if (index == 0)
    {
        startDate = dateJS;
        event.style.backgroundColor = '#2c7aca';
        event.style.color = 'white';
        document.getElementById('reservation-date-start').value = formattedDate;
        index++;
    }
    else
    {
        endDate = dateJS;
        if (startDate < endDate) {
            event.style.backgroundColor = '#2c7aca';
            event.style.color = 'white';
            document.getElementById('reservation-date-stop').value = formattedDate;
            index = 0;
        }
        else
        {
            alert('End date must be after start date');
        }
    }

}

function setReservationOverlay(event) {
    document.getElementById('reservation').style.display = 'block';
    document.getElementById('whole-body').style.opacity = 0.5;
    document.getElementById('whole-body').style.backgroundColor = "gray";
    document.getElementById('reservation').style.opacity = 0.9;
    document.getElementById('whole-body').style.filter = "blur(10px)";
    console.log('clicked');
};