import officeImage from "@assets/generated_images/Namibian_office_workspace_e6b8c5f4.png";
import teamImage from "@assets/generated_images/Business_team_collaboration_025a22d5.png";
import documentsImage from "@assets/generated_images/Financial_documents_and_paperwork_e62d2cbb.png";
import workingImage from "@assets/generated_images/Professional_working_on_finances_00f5febf.png";
import handshakeImage from "@assets/generated_images/Professional_business_handshake_143e01c1.png";
import buildingImage from "@assets/generated_images/Modern_office_building_a07c01bd.png";

export default function Gallery() {
  const images = [
    { src: officeImage, alt: "Modern office workspace" },
    { src: teamImage, alt: "Team collaboration" },
    { src: documentsImage, alt: "Financial documents" },
    { src: workingImage, alt: "Professional at work" },
    { src: handshakeImage, alt: "Business partnership" },
    { src: buildingImage, alt: "Office building" },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A glimpse into our professional services and work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md aspect-video hover-elevate transition-all duration-300"
                data-testid={`gallery-image-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
