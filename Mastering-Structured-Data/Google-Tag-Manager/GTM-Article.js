<script>
(function(){
	var jsondata = {

"@context": "https://schema.org/",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://article.com/schema-examples/article-markup/"
  },
  "headline": "Lorem Ipsum",
  "description": "SNeque porro quisquam est qui dolorem ipsum quia dolor sit amett…",
  "image": "https://example.com/uploads/2020/02/meeting.jpg",
  "author": {
    "@type": "Person",
    "name": "Nina Shell"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Simpliy Learn",
    "logo": {
      "@type": "ImageObject",
      "url": "https://content.com/uploads/cropped-SSearch-white.png"
    }
  },
  "datePublished": "2020-10-24",
  "dateModified": "2020-11-30"


};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
