<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "Person",
  "name": "Doe Shell",
  "url": "https://person.com/person-markup/",
  "image": "https://person.com/2020/11/Doe-Shell-Head-300x300.jpg",
  "jobTitle": "CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "Simpleh"
  },
  "sameAs": [
    "https://youtube.com",
    "https://twitter.com",
    "https://linkedin.com"
  ]

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
