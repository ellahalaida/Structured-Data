<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Article Markup Video",
  "description": "Article Schema.org Markup is a powerful way to tell search engines more about your content. I’ll walk you through the available Article.",
  "thumbnailUrl": [
    "https://www.marketing.com/hubfs/Article%20Markup.png"
  ],
  "uploadDate": "2022-11-24",
  "contentUrl": "https://youtu.be/azOtBoOOMjQ",
  "embedUrl": "https://www.youtube.com/embed/azOtBoOOMjQ",
  "publisher": {
    "@type": "Organization",
    "name": "Search",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/wp-content/uploads/2020/08/article.png",
      "width": "210",
      "height": "76"
    }
  },
  "duration": "PT21M11S"

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
