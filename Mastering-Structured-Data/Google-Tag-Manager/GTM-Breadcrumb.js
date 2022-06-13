<script>
(function(){
	var jsondata = {
		
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://manager.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Data Generator",
      "item": "https://manager.com/schema-examples/breadcrumb-markup/"
    }
  ]
};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
