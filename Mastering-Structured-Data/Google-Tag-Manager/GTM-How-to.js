<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "HowTo",
  "name": "How To Add Breadcrumb Markup",
  "description": "Breadcrumbs help users and search engines know the hierarchy of your content.",
  "image": "https://example.com/uploads/2020/11/breadcrumbs-bestbuy-location-based-768x218.jpg",
  "totalTime": "PT5M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Computer"
    },
    {
      "@type": "HowToSupply",
      "name": "Schema.org"
    },
    {
      "@type": "HowToSupply",
      "name": "Search Schema"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Computer"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "text": "Log on to example.com and access the structured data.",
      "image": "https://example.com/breadcrumb-1536x1065.png",
      "name": "Access the Structured Data",
      "url": "https://example.com/schema-examples/how-to-markup/"
    },
    {
      "@type": "HowToStep",
      "text": "Click the dropdown and select the breadcrumb option.",
      "image": "https://example.com/breadcrumb-selected-1536x1068.png",
      "name": "Select the Breadcrumb Option",
      "url": "https://example.com/schema-examples/how-to-markup/"
    },
    {
      "@type": "HowToStep",
      "text": "Add your content to the form.",
      "image": "https://example.com/wp-content/uploads/2020/11/breadcrumb-filled-out-1536x675.png",
      "name": "Fill Out The Form",
      "url": "https://example.com/schema-examples/how-to-markup/"
    },
    {
      "@type": "HowToStep",
      "text": "Copy the code that was generated by the tool and add to the HTML of your page.",
      "image": "https://example.com/breadcrumb-filled-out-copied-1536x675.png",
      "name": "Copy and Paste",
      "url": "https://example.com/schema-examples/how-to-markup/"
    }
  ]
};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
