<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "Product",
  "name": "Schema.org Robot",
  "image": "https://search.net/wp-content/uploads/600px.jpg",
  "description": "have your own personal robot do all your schema.org markup for you? This is the most advanced fictional robot to ever be produced. (If you only need a robot of Schema.org markup)  Don’t delay, get yours today!",
  "brand": "Search",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "900"
  },
  "sku": "001",
  "gtin8": "001",
  "offers": {
    "@type": "Offer",
    "url": "https://search.net/schema-examples/product-markup/",
    "priceCurrency": "USD",
    "price": "1000000000",
    "priceValidUntil": "2020-11-24",
    "availability": "https://schema.org/PreOrder",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "review": [
    {
      "@type": "Review",
      "reviewBody": "Best robot I never had!",
      "author": {
        "@type": "Person",
        "name": "Sarrah G."
      },
      "name": "Sarah G.",
      "datePublished": "2020-11-24",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Search"
      }
    }
  ]
};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
