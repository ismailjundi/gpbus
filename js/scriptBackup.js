function initMap() {
    const myLatLng = { lat: -6.925961686291945, lng: 107.77467736786926 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: myLatLng,
        disableDefaultUI: true,
        disableAutoPan: true
    });
}
window.initMap = initMap;

// Inisialisasi Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAji4wD7XrOcYfVyUDNBtodsKZeatEBEyo",
    authDomain: "gpbus-rtdb.firebaseapp.com",
    databaseURL: "https://gpbus-rtdb-default-rtdb.firebaseio.com/",
    projectId: "gpbus-rtdb",
    storageBucket: "gpbus-rtdb.appspot.com",
    messagingSenderId: "653960389142",
    appId: "1:653960389142:web:d22be9611661ef9d59cb37",
    measurementId: "G-QGXYEVVRTF"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Ambil data lokasi dari Firebase Realtime Database
var locationRef = database.ref('id-1');
locationRef.on('value', function (snapshot) {
    var location = snapshot.val();
    console.log(location);
    var busPos = new google.maps.LatLng(location.GPS.f_latitude, location.GPS.f_longitude);

    // Tampilkan peta Google Maps dan marker di lokasi
    var mapGoogle = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: busPos,
        map: mapGoogle,
        title: 'Bus Location',
        icon: {
            url: "img/bus icon.png",
        }
    });

    //infowindow penumpang
    var infowindow = new google.maps.InfoWindow()
    infowindow.setContent('<div>' + '<h3>' + 'Jumlah Penumpang:' + '<br>' + location.ULTRASONIC.counter + '/10' + '</h3>' + '</div>')
    infowindow.setPosition(busPos)
    infowindow.open(mapGoogle, marker)
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(mapGoogle, marker);
    });

    //menampilkan posisi user dan marker user
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        var marker2 = new google.maps.Marker({
            position: userPos,
            map: mapGoogle,
            title: 'Your Position',
            icon: {
                url: "img/user icon.png",
            }
        });
        mapGoogle.setCenter(userPos);
    }
    getLocation();
});









let map;
const myLatLng = { lat: -6.925961686291945, lng: 107.77467736786926 };

function initMap() {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true,
    });
}

// initMap  
window.initMap = initMap;

// Inisialisasi Firebase
let firebaseConfig = {
    apiKey: "AIzaSyAji4wD7XrOcYfVyUDNBtodsKZeatEBEyo",
    authDomain: "gpbus-rtdb.firebaseapp.com",
    databaseURL: "https://gpbus-rtdb-default-rtdb.firebaseio.com/",
    projectId: "gpbus-rtdb",
    storageBucket: "gpbus-rtdb.appspot.com",
    messagingSenderId: "653960389142",
    appId: "1:653960389142:web:d22be9611661ef9d59cb37",
    measurementId: "G-QGXYEVVRTF"
};
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

// Ambil data lokasi dari Firebase Realtime Database
let locationRef = database.ref('id-1');
locationRef.on('value', function (snapshot) {
    let location = snapshot.val();
    console.log(location);

    // posisi bus
    let busPos = new google.maps.LatLng(location.GPS.f_latitude, location.GPS.f_longitude);

    // Tampilkan bus marker di lokasi
    let marker = new google.maps.Marker({
        position: busPos,
        map: map,
        title: 'Bus Location #1',
        icon: {
            url: "img/bus icon.png",
        }
    });

    //infowindow penumpang
    let infowindow = new google.maps.InfoWindow()
    infowindow.setContent('<div>' + '<h3>' + 'Jumlah Penumpang:' + '<br>' + location.ULTRASONIC.counter + '/10' + '</h3>' + '</div>')
    infowindow.setPosition(busPos)
    infowindow.open(map, marker)
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    //menampilkan posisi user dan marker user
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        let userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        let marker2 = new google.maps.Marker({
            position: userPos,
            map: map,
            title: 'Your Position',
            icon: {
                url: "img/user icon.png",
            }
        });
    }
    getLocation();
});













let map;
let marker;
let infowindow;
const myLatLng = { lat: -6.925961686291945, lng: 107.77467736786926 };

function initMap() {


}

// initMap  
//window.initMap = initMap;
map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 15,
    center: myLatLng,
    disableDefaultUI: true,
});
marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Bus Location #1',
    icon: {
        url: "img/bus icon.png",
    }
});
infowindow = new google.maps.InfoWindow()
// Inisialisasi Firebase
let firebaseConfig = {
    apiKey: "AIzaSyAji4wD7XrOcYfVyUDNBtodsKZeatEBEyo",
    authDomain: "gpbus-rtdb.firebaseapp.com",
    databaseURL: "https://gpbus-rtdb-default-rtdb.firebaseio.com/",
    projectId: "gpbus-rtdb",
    storageBucket: "gpbus-rtdb.appspot.com",
    messagingSenderId: "653960389142",
    appId: "1:653960389142:web:d22be9611661ef9d59cb37",
    measurementId: "G-QGXYEVVRTF"
};
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

// Ambil data lokasi dari Firebase Realtime Database
let locationRef = database.ref('id-1');
locationRef.on('value', function (snapshot) {
    let location = snapshot.val();
    console.log(location);

    // posisi bus
    let busPos = new google.maps.LatLng(location.GPS.f_latitude, location.GPS.f_longitude);
    marker.setPosition(busPos);
    map.setCenter(busPos);

    // Tampilkan bus marker di lokasi
    // marker = new google.maps.Marker({
    //     position: busPos,
    //     map: map,
    //     title: 'Bus Location #1',
    //     icon: {
    //         url: "img/bus icon.png",
    //     }
    // });

    //infowindow penumpang

    infowindow.setContent('<div>' + '<h3>' + 'Jumlah Penumpang:' + '<br>' + location.ULTRASONIC.counter + '/10' + '</h3>' + '</div>')
    infowindow.setPosition(busPos)
    infowindow.open(map, marker)
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    //menampilkan posisi user dan marker user
    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //         x.innerHTML = "Geolocation is not supported by this browser.";
    //     }
    // }

    // function showPosition(position) {
    //     let userPos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //     }
    //     let marker2 = new google.maps.Marker({
    //         position: userPos,
    //         map: map,
    //         title: 'Your Position',
    //         icon: {
    //             url: "img/user icon.png",
    //         }
    //     });
    // }
    //getLocation();
});