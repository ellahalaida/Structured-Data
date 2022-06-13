<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Example",
  "image": "https://example.com/wp-content/uploads/web.png",
  "@id": "https://example.com/local-markup/",
  "url": "https://example.com/",
  "telephone": "(855) 555-0000
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "777 Min Street
    "addressLocality": "Home Town",
    "postalCode": "32901",
    "addressCountry": "US",
    "addressRegion": "Florida"
  },
  "priceRange": "$$",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.094820078560524",
    "longitude": "-80.6055697090234"
  },
  "sameAs": [
    "https://facebook.com",
    "https://youtube.com",
    "https://linkedin.com",
    "https://twitter.com"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ]

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
