<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Schema.org Sandwich",
  "image": [
    "https://simplifiedsearch.net/wp-content/uploads/2020/11/383px-Peanut-Butter-Jelly-Sandwich.png"
  ],
  "description": "Creating Schema org Markup! This is the perfect sandwich to keep you going.",
  "keywords": "Sandwich, PB&J",
  "author": {
    "@type": "Person",
    "name": "Search"
  },
  "prepTime": "PT2M",
  "cookTime": "PT2M",
  "totalTime": "PT4M",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "358.4 cal",
    "servingSize": "1",
    "fatContent": "17.8 g"
  },
  "datePublished": "2020-11-24",
  "recipeCuisine": "American",
  "recipeYield": "1",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "",
    "ratingCount": "1"
  },
  "recipeCategory": "entree",
  "video": {
    "@type": "VideoObject",
    "name": "Schema.org Sandwich",
    "description": "Creating Schema org Markup can make you hungry! This is the perfect sandwich to keep you going. With a combination of fruit and nut protein, you’ll have all the energy you need.",
    "thumbnailUrl": "https://example.com/wp-content/uploads/2020/11/383px-Peanut-Butter-Jelly-Sandwich.png",
    "uploadDate": "2020-11-24",
    "contentUrl": "https://example.com/schema-examples/recipe-markup/",
    "embedUrl": "https://www.youtube.com/watch?v=N9GxhnKO9aA"
  },
  "recipeIngredient": [
    "2 slices sandwich bread",
    "2 tablespoons peanut butter",
    "2 teaspoons grape jelly or 2 teaspoons strawberry jam"
  ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Spread the peanut butter on one piece of bread."
    },
    {
      "@type": "HowToStep",
      "text": "Spread the jelly on the other side."
    },
    {
      "@type": "HowToStep",
      "text": "Put the two pieces of bread together to form a sandwich."
    }
  ]
};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
