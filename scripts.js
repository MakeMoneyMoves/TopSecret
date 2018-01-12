/**
 * Created by w0409198 on 1/10/2018.
 */
window.onload = populateSelect();

var rooms;

function populateSelect() {

    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = 'classroom_data.json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            // PARSE JSON DATA.
            rooms = JSON.parse(xhr.responseText);
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

