
function getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if (callback) {
            callback(cookie.value);
        }
    });
}

function login(website, username, password) {
    $.ajaxDigest(website, {
        username: username,
        password: password
    }).done(function(data, textStatus, xhr) {
        alert('LOGIN SUCCESSS');
        window.close();
    }).fail(function(xhr, textStatus, errorThrown) {
        alert('LOGIN FAIL');
        window.close();
    });
}

function onInit () {
    var checkPageButton = document.getElementById('btn');
    checkPageButton.addEventListener('click', function() {
        var website = $('#website').val();
        var username = $('#username').val();
        var password = $('#password').val();
        if (website && website.length > 0 && username && username.length > 0 && password && password.length > 0) {
            localStorage.setItem('website', website);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            login(website, username, password);
        } else {
            alert('INVALID INFO');
        }
    }, false);

    var website = localStorage.getItem('website');
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    if (website && username && password) {
        $('#website').val(website);
        $('#username').val(username);
        $('#password').val(password);
    }
}

document.addEventListener('DOMContentLoaded', onInit, false);

