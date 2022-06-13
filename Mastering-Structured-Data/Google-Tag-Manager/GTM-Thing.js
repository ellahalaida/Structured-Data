<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "Thing",
  "name": "Schema.org",
  "alternateName": [
    "Schema Markup"
  ],
  "sameAs": [
    "http://dbpedia.org/page/Schema.org",
    "http://www.wikidata.org/entity/Q3475322"
  ],
  "url": "https://example.com/schema-examples/thing-markup/",
  "description": "Schema.org is a collaborative, community activity with a mission to create, maintaine and beyond.",
  "image": "https://example.com/wp-content/uploads/2020/11/schema-org-arial-1-300x169.png"

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
