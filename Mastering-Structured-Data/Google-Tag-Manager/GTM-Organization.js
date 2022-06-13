<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org",
  "@type": "Organization",
  "name": "Main",
  "url": "https://Main.com",
  "logo": "https://Main.com/uploads/2020/06/small-web.png",
  "sameAs": [
    "https:///facebook.com",
    "https:///youtube.com",
    "https:///twitter.com",
    "https:///linkedin.com"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "(855) 555-5555",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "email": "info@main.net",
      "contactType": "customer service",
      "areaServed": "US"
    }
  ]

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
