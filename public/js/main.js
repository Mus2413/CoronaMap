
function updateMap() {
    fetch("../data.json").then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                infectedcount = element.infected;
                country = element.country;

                if (infectedcount > 255) {
                    color = "rgb(255,0,0)";
                }
                else {
                    color = `rgb(${infectedcount},0,0)`
                }
                var marker=new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .setPopup(new mapboxgl.Popup({
                        closeButton: false,
                    }).setHTML(infectedcount))
                    .addTo(map);

                
            });
        })
}

updateMap();