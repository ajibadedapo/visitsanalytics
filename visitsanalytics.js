
let locationxhr = new XMLHttpRequest();
locationxhr.open('GET', 'https://geolocation-db.com/json/');
locationxhr.responseType = 'json';
locationxhr.send();

locationxhr.onload = function() {
    console.log('calling second func')
    let responseObj = locationxhr.response;
    let url = 'https://prutilio-node.vercel.app/api/analyticreport/create'
    let analyticsxhr = new XMLHttpRequest();
    analyticsxhr.open("POST", url, true);
    analyticsxhr.setRequestHeader('Content-Type', 'application/json');
    analyticsxhr.send(
            JSON.stringify(
                    {
                        property_id: 123456,
                        pageTitle: document.title,
                        full_url: window.location.href,
                        ipaddress: responseObj.IPv4,
                        location: responseObj.city+ ', ' +responseObj.country_name
                    }
                    )
            );
};


