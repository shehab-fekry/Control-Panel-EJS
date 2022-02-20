// MAPBOX API:
// https://api.mapbox.com/optimized-trips/v1/mapbox/driving/
// 31.100643,29.961999;31.017168,29.972186;30.987176,29.986906;30.954218,29.969212;30.904958,29.96475
// ?access_token=pk.eyJ1Ijoic2hlaGFiLWZla3J5IiwiYSI6ImNrejhva3M4czFmMW0ybnVzbDd3eXE5YmYifQ.bHRGTKh_1pdTl1RmsGmLSw
// &geometries=geojson&approaches=curb;curb;curb;curb;curb&steps=true&overview=full

let previewMap = {}
let trackingMap = {}


// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;
let pusher = new Pusher('d363addb971561dc7e96', {
    cluster: 'eu'
});
let channel = pusher.subscribe('new_notify');


const initPreview = (wayPoints) => {

    // getting the authorization for mapBox
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlaGFiLWZla3J5IiwiYSI6ImNrejhva3M4czFmMW0ybnVzbDd3eXE5YmYifQ.bHRGTKh_1pdTl1RmsGmLSw';

    // converting (wayPoints) to JSON format and specifying [start] & [end] points
    const waypts = JSON.parse(wayPoints)
    const start = waypts[0]
    const end = waypts[waypts.length-1]
    

    // converting (wayPoints) to string and repeating (curb;) as many as wayPoints for API porposes
    let wayPointString = ''
    let curbString = ''
    waypts.forEach(point => {
        wayPointString += point.join(',') + ';'
        curbString += 'curb;'
    })
    wayPointString = wayPointString.slice(0, -1);
    curbString = curbString.slice(0, -1)


    // Initializing the map 
    previewMap = new mapboxgl.Map({
    container: document.getElementById('map'),
    style: 'mapbox://styles/shehab-fekry/ckztwm1al00sw14l8jllsf27l',
    center: start,
    zoom: 10
    });


    // Popups and Markers
    let marker;
    for(i=0; i< waypts.length; i++){
        if(i == 0)
        {
            popup = new mapboxgl.Popup()
            .setHTML('<strong>School</strong>')
            .addTo(previewMap);

            marker = document.createElement('div');
            marker.classList = 'school';
            new mapboxgl.Marker(marker).setLngLat(waypts[i]).setPopup(popup).addTo(previewMap);
        } else {
            popup = new mapboxgl.Popup()
            .setHTML('<strong>Student Pick Point</strong>')
            .addTo(previewMap);

            marker = document.createElement('div');
            marker.classList = 'pickPoint';
            new mapboxgl.Marker(marker).setLngLat(waypts[i]).setPopup(popup).addTo(previewMap);
        }
    }


    // setting up routes and layers
    previewMap.on('load', () => {
        previewMap.addSource('route', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [],
            }
          });
          
          previewMap.addLayer(
            {
              id: 'routeline-active',
              type: 'line',
              source: 'route',
              layout: {
                'line-join': 'round',
                'line-cap': 'round'
              },
              paint: {
                'line-color': 'rgb(255, 196, 0)',
                'line-width': 8
              }
            },
            'waterway-label'
          );

          previewMap.addLayer({
                id: 'routeArrows',
                type: 'symbol',
                source: 'route',
                layout: {
                    'symbol-placement': 'line',
                    'text-field': '➔',
                    'text-rotate': 0,
                    'text-keep-upright': false,
                    'symbol-spacing': 60,
                    'text-size': 11,
                    'text-offset': [0, -0.1],
                },
    
                paint: {
                    'text-color': 'rgb(49, 49, 49)',
                    'text-halo-width': 1,
                }
            });

    
        getDirections(curbString, wayPointString)
    });
}

const getDirections = (curbString, wayPointString) => {
    let request = 'https://api.mapbox.com/optimized-trips/v1/'
    request += 'mapbox/driving/'
    request += '' + wayPointString
    request += '?access_token=' + mapboxgl.accessToken
    request += '&geometries=geojson'
    request += '&approaches=' + curbString
    request += '&steps=true'
    request += '&overview=full'

    fetch(request)
    .then(res => res.json())
    .then(res => {
        setRouteLine(res.trips)
    })
    .catch(err => console.log(err))
}

const setRouteLine = (trips) => {
    const routeLine = {
        type: 'FeatureCollection',
        features: [{
            properties: {},
            geometry: trips[0].geometry
        }]
    }

    previewMap.getSource('route').setData(routeLine)
}




// ----------------------------------------------- Live Track -----------------------------------------------------



const initTrack = (secBySecList) => {

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlaGFiLWZla3J5IiwiYSI6ImNrejhva3M4czFmMW0ybnVzbDd3eXE5YmYifQ.bHRGTKh_1pdTl1RmsGmLSw';

    const waypoints = JSON.parse(secBySecList)
    //console.log(waypoints)
    const start = waypoints[0]
    const end = waypoints[waypoints.length-1]

    // Initializing the map 
    trackingMap = new mapboxgl.Map({
        container: document.getElementById('map'),
        style: 'mapbox://styles/shehab-fekry/ckztwm1al00sw14l8jllsf27l',
        center: start,
        zoom: 15
        });

        trackingMap.on('load', () => {

            let prevDiv;
            let marker;
            let currentStep;
            let timeout = 2000
            waypoints.forEach((point, index) => {
                setTimeout(() =>{
        
                    // Styling the previous steps
                    if(index !== 0)
                    {
                        prevDiv = marker.getElement()
                        prevDiv.className = 'prevStep mapboxgl-marker mapboxgl-marker-anchor-center'
                    }
                    
                    // Drawing the current step
                    currentStep = document.createElement('div');
                    currentStep.classList = 'currentStep';
                    marker = new mapboxgl.Marker(currentStep).setLngLat(point).addTo(trackingMap);
        
                    // Drwing the new current step
                    trackingMap.flyTo({
                        // These options control the ending camera position: centered at
                        // the target, at zoom level 9, and north up.
                        center: point,
                        zoom: 15,
                        bearing: 0,
                         
                        // These options control the flight curve, making it move
                        // slowly and zoom out almost completely before starting
                        // to pan.
                        speed: 0.7, // make the flying slow
                        curve: 1, // change the speed at which it zooms out
                         
                        // This can be any easing function: it takes a number between
                        // 0 and 1 and returns another number between 0 and 1.
                        easing: (t) => t,
                         
                        // this animation is considered essential with respect to prefers-reduced-motion
                        essential: true
                    })
        
                }, timeout )
                timeout += 2000
            })
        })
}






// trackingMap.on('load', () => {

//     let prevDiv;
//     let marker;
//     let currentStep;
//     let timeout = 2000
//     waypoints.forEach((point, index) => {
//         setTimeout(() =>{

//             // Styling the previous steps
//             if(index !== 0)
//             {
//                 prevDiv = marker.getElement()
//                 prevDiv.className = 'prevStep mapboxgl-marker mapboxgl-marker-anchor-center'
//             }
            
//             // Drawing the current step
//             currentStep = document.createElement('div');
//             currentStep.classList = 'currentStep';
//             marker = new mapboxgl.Marker(currentStep).setLngLat(point).addTo(trackingMap);

//             // Drwing the new current step
//             trackingMap.flyTo({
//                 // These options control the ending camera position: centered at
//                 // the target, at zoom level 9, and north up.
//                 center: point,
//                 zoom: 15,
//                 bearing: 0,
                 
//                 // These options control the flight curve, making it move
//                 // slowly and zoom out almost completely before starting
//                 // to pan.
//                 speed: 0.7, // make the flying slow
//                 curve: 1, // change the speed at which it zooms out
                 
//                 // This can be any easing function: it takes a number between
//                 // 0 and 1 and returns another number between 0 and 1.
//                 easing: (t) => t,
                 
//                 // this animation is considered essential with respect to prefers-reduced-motion
//                 essential: true
//             })

//         }, timeout )
//         timeout += 2000
//     })
// })