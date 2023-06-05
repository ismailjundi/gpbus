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