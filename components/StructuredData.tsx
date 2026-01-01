const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "MPUMI STUDIO",
    "description": "A futuristic approach to nail health and artistry. Custom designs reflecting your mood, style, and everyday energy.",
    "url": "https://mpumi.nmas.co.za",
    "telephone": "+27647432177",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [],
    "service": [
      {
        "@type": "Service",
        "name": "Gel Manicure",
        "description": "Precision cuticle care and strengthening gel overlay for lasting beauty."
      },
      {
        "@type": "Service",
        "name": "Acrylic Sculpt",
        "description": "Durable architectural sculpting with custom shapes and lengths."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
