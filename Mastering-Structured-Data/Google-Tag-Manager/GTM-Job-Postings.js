<script>
(function(){
	var jsondata = {
		
"@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Generator",
  "description": "Are you great at filling our forms? If so, we may have the perfect position for you!",
  "identifier": {
    "@type": "PropertyValue",
    "name": "Search",
    "value": "1"
  },
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Simple",
    "sameAs": "https://simple.com/"
  },
  "industry": "Marketing",
  "workHours": "8am - 5pm",
  "employmentType": "FULL_TIME",
  "datePosted": "2020-11-24",
  "validThrough": "2021-11-24",
  "applicantLocationRequirements": {
    "@type": "Country",
    "name": ""
  },
  "jobLocationType": "TELECOMMUTE",
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": {
      "@type": "QuantitativeValue",
      "unitText": "YEAR",
      "value": "$100,000"
    }
  },
  "responsibilities": "You will be required to create Schema.org JSON-LD that will be added to websites using copy and paste.",
  "skills": "Internet Navigation, Website Form Fillings, Copy and Paste.",
  "qualifications": "Completed the Course.",
  "educationRequirements": "High School Diploma",
  "experienceRequirements": "No experience needed"

};

var el = document.createElement ('script');
el.type = 'application/ld+json';
el.innerHTML = JSON.stringify(jsondata);
document.head.appendChild(el);
}) ();

</script>
