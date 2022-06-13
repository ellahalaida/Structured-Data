<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org",
  "@type": "Event",
  "name": "SCHEMA EVENT",
  "description": "Join us! there is room for everyone.",
  "image": "https://example.com/uploads/2020/11/Sunset-Party-Photo-Facebook-Event-Cover-1536x864.png",
  "startDate": "2024-06-10T09:00-11:00",
  "endDate": "2024-06-11T10:00-11:00",
  "performer": {
    "@type": "Person",
    "name": "Doe Simpley"
  },
  "organizer" : {
  "@type": "Organization",
  "name": "SimplySearch",
  "logo": "https://search.net/wp-content/uploads/2020/08/cropped.png",
  "url": "https://example.com"
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "location": {
    "@type": "VirtualLocation",
    "url": "example.com/stream"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Schema Event Reservation",
      "price": "0",
      "priceCurrency": "USD",
      "validFrom": "2020-11-23",
      "url": "example.com/register",
      "availability": "https://schema.org/InStock"
    }
  ]

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
