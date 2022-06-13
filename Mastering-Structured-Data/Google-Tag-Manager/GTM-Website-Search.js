<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Simplified Search",
  "url": "https://example.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://example.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
