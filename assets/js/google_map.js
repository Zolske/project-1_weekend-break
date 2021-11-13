        // Initialize and add the map
        function initMap() {
            // The location of London / Thorton Heath
            const London = {
                lat: 51.39983653982315,
                lng: -0.09887492394255792
            };
            // The map, centered at London / Thorton Heath
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: London,
            });
            // The marker, positioned at London / Thorton Heath
            const marker = new google.maps.Marker({
                position: London,
                map: map,
            });
        }