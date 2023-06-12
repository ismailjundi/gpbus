let map;
let marker;
let infowindow;
const myLatLng = { lat: -6.925961686291945, lng: 107.77467736786926 };

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
    apiKey: "AIzaSyB2R5xRSbMaq81zSPTKx2RKI93eXl13x4A",
    authDomain: "gpbus-rtdb-02.firebaseapp.com",
    databaseURL: "https://gpbus-rtdb-02-default-rtdb.firebaseio.com",
    projectId: "gpbus-rtdb-02",
    storageBucket: "gpbus-rtdb-02.appspot.com",
    messagingSenderId: "721860032075",
    appId: "1:721860032075:web:562b32f9a7189ebbf33fce",
    measurementId: "G-ZMFR472TWT",
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

    //infowindow bus
    infowindow.setContent('<div>' + '<h3>' + 'Jumlah Penumpang:' + '<br>' + location.ULTRASONIC.counter + '/10' + '</h3>' + '</div>')
    infowindow.setPosition(busPos)
    infowindow.open(map, marker)
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    //posisi user
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