// ============================================
// TEMPERO CREATIVE - SITE DATA CONFIGURATION
// ============================================
// This file contains all editable content for the website.
// Update values here to change text, images, and links across the site.

export const siteConfig = {
  // ============================================
  // GENERAL SITE INFO
  // ============================================
  name: "Tempero Creative",
  tagline: "Your one-stop shop for all things Creative.",
  description: "Tempero Creative is Auckland's premier creative studio offering professional videography, photography, graphic design, animation, music production, and creative education services.",
  url: "https://tempero.nz",
  email: "hello@tempero.nz",
  phone: "+64 21 XXX XXXX",
  location: "Auckland, New Zealand",
  
  // ============================================
  // SEO DEFAULTS
  // ============================================
  seo: {
    titleTemplate: "%s | Tempero Creative",
    defaultTitle: "Tempero Creative | Video Production, Photography & Design Auckland NZ",
    defaultDescription: "Auckland's creative studio for videography, photography, graphic design, animation, and music production. Family-run, passionate creatives bringing your vision to life.",
    keywords: [
      "video production auckland",
      "photographer auckland",
      "graphic design nz",
      "wedding videography",
      "animation services",
      "music production",
      "creative agency new zealand",
      "tempero creative"
    ],
    ogImage: "/images/og-card.jpg",
  },

  // ============================================
  // SOCIAL LINKS
  // ============================================
  social: {
    instagram: "https://www.instagram.com/tempero.creative/",
    facebook: "https://www.facebook.com/temperocreative",
    youtube: "https://www.youtube.com/@temperocreative",
    tiktok: "https://www.tiktok.com/@tempero.creative",
    linkedin: "https://www.linkedin.com/company/tempero-creative",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Team", href: "/team" },
      { name: "News", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Videography", href: "/services/videography" },
      { name: "Photography", href: "/services/photography" },
      { name: "Animation & VFX", href: "/services/animation-vfx" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Music Production", href: "/services/music-production" },
      { name: "Education", href: "/services/education" },
    ],
    cta: { name: "Client Portal", href: "/portal" },
  },
};

// ============================================
// HOME PAGE DATA
// ============================================
export const homePageData = {
  // Hero Section
  hero: {
    headline: "Your one-stop shop\nfor all things",
    headlineAccent: "Creative.",
    subheadline: "Auckland's family-run creative studio bringing stories to life through video, photography, design, and more.",
    backgroundVideo: "/videos/hero-reel.mp4",
    backgroundImage: "/images/hero-bg.jpg",
    ctaPrimary: { text: "Explore Our Services", href: "/services" },
    ctaSecondary: { text: "Get in Touch", href: "/contact" },
  },

  // Services Preview - "The Classics"
  classicsSection: {
    title: "The",
    titleAccent: "Classics",
    subtitle: "Our core creative services that have been perfected over years of passionate work.",
    services: [
      {
        id: "videography",
        name: "Videography & Editing",
        shortDescription: "Cinematic storytelling for weddings, events, commercials, and more.",
        image: "/images/services/videography-thumb.jpg",
        href: "/services/videography",
      },
      {
        id: "photography",
        name: "Photography",
        shortDescription: "Capturing moments that last a lifetime with artistic precision.",
        image: "/images/services/photography-thumb.jpg",
        href: "/services/photography",
      },
      {
        id: "graphic-design",
        name: "Graphic Design",
        shortDescription: "Visual identity, branding, and creative design solutions.",
        image: "/images/services/design-thumb.jpg",
        href: "/services/graphic-design",
      },
    ],
  },

  // Services Preview - "The Connected"
  connectedSection: {
    title: "The",
    titleAccent: "Connected",
    subtitle: "Extended services that complement and enhance our core offerings.",
    services: [
      {
        id: "animation",
        name: "Animation & VFX",
        shortDescription: "Bringing imagination to life with 2D, 3D, and visual effects.",
        image: "/images/services/animation-thumb.jpg",
        href: "/services/animation-vfx",
      },
      {
        id: "music",
        name: "Music Production",
        shortDescription: "Original scores, sound design, and audio production.",
        image: "/images/services/music-thumb.jpg",
        href: "/services/music-production",
      },
      {
        id: "education",
        name: "Education & Tutoring",
        shortDescription: "Sharing our passion through film clubs and creative workshops.",
        image: "/images/services/education-thumb.jpg",
        href: "/services/education",
      },
    ],
  },

  // About Preview
  aboutPreview: {
    title: "The",
    titleAccent: "Temperos",
    description: "We're a family of creatives united by our love for storytelling. What started as a passion project has grown into Auckland's go-to creative studio, serving businesses, artists, schools, and families across New Zealand.",
    image: "/images/team/family-photo.jpg",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "500+", label: "Projects Completed" },
      { value: "5", label: "Creative Specialists" },
    ],
    cta: { text: "Meet the Team", href: "/team" },
  },

  // Clients/Industries Section
  clientsSection: {
    title: "Who We",
    titleAccent: "Work With",
    subtitle: "From intimate weddings to corporate campaigns, we serve a diverse range of clients.",
    categories: [
      {
        id: "businesses",
        name: "Businesses",
        description: "Corporate videos, brand content, and marketing materials.",
        icon: "Building2",
        href: "/services?for=businesses",
      },
      {
        id: "schools",
        name: "Schools",
        description: "Educational content, event coverage, and promotional videos.",
        icon: "GraduationCap",
        href: "/services?for=schools",
      },
      {
        id: "artists",
        name: "Artists",
        description: "Music videos, portfolio shoots, and creative collaborations.",
        icon: "Palette",
        href: "/services?for=artists",
      },
      {
        id: "events",
        name: "Events",
        description: "Weddings, conferences, concerts, and special occasions.",
        icon: "Calendar",
        href: "/services?for=events",
      },
    ],
  },

  // CTA Section
  ctaSection: {
    title: "Ready to bring your",
    titleAccent: "vision to life?",
    description: "Let's chat about your next project. We'd love to hear your ideas and show you what's possible.",
    ctaPrimary: { text: "Start a Project", href: "/contact" },
    ctaSecondary: { text: "View Our Work", href: "/news" },
  },
};

// ============================================
// ABOUT PAGE DATA
// ============================================
export const aboutPageData = {
  seo: {
    title: "About Us",
    description: "Learn about Tempero Creative, Auckland's family-run creative studio. Discover our story, values, and the passionate team behind your next project.",
  },

  hero: {
    title: "Our",
    titleAccent: "Story",
    subtitle: "A family united by creativity, driven by passion, and committed to excellence.",
    image: "/images/about/hero.jpg",
  },

  story: {
    title: "From Passion to",
    titleAccent: "Profession",
    paragraphs: [
      "Tempero Creative began as a family passion project. With diverse skills spanning videography, photography, design, music, and education, we discovered that our combined talents could help others bring their creative visions to life.",
      "What started with filming family events and helping friends with their businesses has grown into a full-service creative studio serving clients across New Zealand. But no matter how much we grow, we've never lost sight of what makes us special: we're a family first.",
      "Every project we take on receives the same care and attention we'd give to our own family's memories. We believe in building genuine relationships with our clients, understanding their unique needs, and delivering work that exceeds expectations.",
    ],
    image: "/images/about/story.jpg",
  },

  values: {
    title: "What We",
    titleAccent: "Stand For",
    items: [
      {
        title: "Creativity Without Limits",
        description: "We approach every project with fresh eyes and an open mind, always looking for innovative ways to tell your story.",
        icon: "Sparkles",
      },
      {
        title: "Family Values",
        description: "We treat every client like family, with honesty, respect, and genuine care for their success.",
        icon: "Heart",
      },
      {
        title: "Quality Craftsmanship",
        description: "We take pride in our work and never compromise on quality. Every detail matters.",
        icon: "Award",
      },
      {
        title: "Continuous Learning",
        description: "We're always growing, learning new techniques, and staying ahead of industry trends.",
        icon: "BookOpen",
      },
    ],
  },

  mission: {
    title: "Our",
    titleAccent: "Mission",
    statement: "To empower individuals and organisations to share their stories through exceptional creative content, while fostering the next generation of creative talent in our community.",
  },
};

// ============================================
// TEAM PAGE DATA
// ============================================
export const teamPageData = {
  seo: {
    title: "Our Team",
    description: "Meet the Tempero family - five creative specialists bringing diverse skills in videography, photography, design, music, and education to every project.",
  },

  hero: {
    title: "Meet the",
    titleAccent: "Temperos",
    subtitle: "A family of creatives, each bringing unique talents and perspectives to our studio.",
  },

  members: [
    {
      id: "joel-tempero",
      name: "Joel Tempero",
      role: "Lead Videographer & Director",
      bio: "Joel is the visionary behind our video production. With over a decade of experience in cinematography, he brings stories to life through stunning visuals and compelling narratives. His work spans weddings, commercials, music videos, and short films.",
      specialties: ["Cinematography", "Directing", "Commercial Video", "Wedding Films"],
      image: "/images/team/joel.jpg",
      instagram: "https://instagram.com/joeltempero",
      featured: true,
    },
    {
      id: "rachel-tempero",
      name: "Rachel Tempero",
      role: "Lead Photographer & Creative Director",
      bio: "Rachel captures moments with an artistic eye that transforms ordinary scenes into extraordinary images. Her photography spans portraits, events, families, and commercial work, always finding the beauty in every frame.",
      specialties: ["Portrait Photography", "Event Coverage", "Family Sessions", "Creative Direction"],
      image: "/images/team/rachel.jpg",
      instagram: "https://instagram.com/racheltempero",
      featured: true,
    },
    {
      id: "james-tempero",
      name: "James Tempero",
      role: "Graphic Designer & Animator",
      bio: "James brings ideas to life through design and animation. From brand identities to motion graphics, his creative solutions help businesses stand out and communicate effectively.",
      specialties: ["Brand Design", "Motion Graphics", "2D Animation", "Visual Effects"],
      image: "/images/team/james.jpg",
      instagram: "https://instagram.com/jamestempero",
      featured: true,
    },
    {
      id: "fraser-tempero",
      name: "Fraser Tempero",
      role: "Music Producer & Sound Designer",
      bio: "Fraser is the sound behind our productions. He composes original music, designs immersive soundscapes, and ensures every project sounds as good as it looks.",
      specialties: ["Music Composition", "Sound Design", "Audio Mixing", "Live Sound"],
      image: "/images/team/fraser.jpg",
      instagram: "https://instagram.com/frasertempero",
      featured: true,
    },
    {
      id: "sidon-tempero",
      name: "Sidon Tempero",
      role: "Educator & Content Creator",
      bio: "Sidon is passionate about nurturing the next generation of creatives. He leads our educational programmes, film clubs, and workshops, sharing knowledge and inspiring young minds.",
      specialties: ["Film Education", "Workshop Facilitation", "Content Creation", "Youth Programmes"],
      image: "/images/team/sidon.jpg",
      instagram: "https://www.instagram.com/mr_sidon/",
      featured: true,
    },
  ],
};

// ============================================
// SERVICES DATA
// ============================================
export const servicesData = {
  // Main Services Page
  mainPage: {
    seo: {
      title: "Our Services",
      description: "Explore Tempero Creative's full range of services including videography, photography, graphic design, animation, music production, and creative education in Auckland, NZ.",
    },
    hero: {
      title: "What We",
      titleAccent: "Create",
      subtitle: "From concept to completion, we offer a comprehensive range of creative services tailored to your needs.",
    },
  },

  // Service Categories
  categories: [
    {
      id: "videography",
      slug: "videography",
      name: "Videography & Editing",
      shortDescription: "Professional video production for every occasion and purpose.",
      fullDescription: "Our videography team brings stories to life through cinematic visuals. Whether it's your wedding day, a corporate campaign, or a creative short film, we approach every project with the same passion and attention to detail.",
      image: "/images/services/videography-hero.jpg",
      icon: "Video",
      seo: {
        title: "Videography & Video Production Auckland",
        description: "Professional video production services in Auckland. Wedding videography, commercial videos, music videos, event coverage, and more. Contact Tempero Creative today.",
      },
      services: [
        {
          id: "weddings",
          name: "Wedding Videography",
          slug: "weddings",
          description: "Cinematic wedding films that capture the emotion, beauty, and joy of your special day. We blend candid moments with artistic storytelling to create a timeless keepsake.",
          features: [
            "Full day coverage options",
            "Multiple camera angles",
            "Drone aerial footage",
            "Professional audio capture",
            "Cinematic color grading",
            "Highlight reels & full films",
          ],
          image: "/images/services/videography/weddings.jpg",
          seo: {
            title: "Wedding Videography Auckland | Cinematic Wedding Films",
            description: "Capture your wedding day with cinematic videography in Auckland. Tempero Creative creates beautiful, emotional wedding films you'll treasure forever.",
          },
        },
        {
          id: "commercial",
          name: "Commercial & Business",
          slug: "commercial",
          description: "Compelling video content that elevates your brand and drives results. From promotional videos to training content, we help businesses communicate effectively.",
          features: [
            "Brand & promotional videos",
            "Product showcases",
            "Testimonial videos",
            "Training & educational content",
            "Social media content",
            "Corporate event coverage",
          ],
          image: "/images/services/videography/commercial.jpg",
          seo: {
            title: "Commercial Video Production Auckland | Business Videos",
            description: "Professional commercial video production in Auckland. Brand videos, promotional content, testimonials, and corporate video services by Tempero Creative.",
          },
        },
        {
          id: "events",
          name: "Event Coverage",
          slug: "events",
          description: "Professional documentation of your events, from intimate gatherings to large-scale conferences. We capture the energy, highlights, and key moments.",
          features: [
            "Conferences & seminars",
            "Live performances",
            "Sports events",
            "Community gatherings",
            "Award ceremonies",
            "Multi-camera setups",
          ],
          image: "/images/services/videography/events.jpg",
          seo: {
            title: "Event Videography Auckland | Professional Event Coverage",
            description: "Expert event videography in Auckland. Conferences, performances, sports events, and special occasions captured professionally by Tempero Creative.",
          },
        },
        {
          id: "music-videos",
          name: "Music Videos",
          slug: "music-videos",
          description: "Creative music videos that bring your sound to visual life. We collaborate with artists to develop concepts that match their artistic vision.",
          features: [
            "Concept development",
            "Location scouting",
            "Performance capture",
            "Narrative storytelling",
            "Visual effects integration",
            "Professional color grading",
          ],
          image: "/images/services/videography/music-videos.jpg",
          seo: {
            title: "Music Video Production Auckland | Music Videos NZ",
            description: "Creative music video production in Auckland. Work with Tempero Creative to bring your music to visual life with stunning, professional music videos.",
          },
        },
        {
          id: "short-films",
          name: "Short Films",
          slug: "short-films",
          description: "Narrative filmmaking for competition, portfolio, or pure creative expression. We've proudly participated in 48Hours and other film competitions.",
          features: [
            "Script development",
            "Full production services",
            "48Hours competition experience",
            "Festival submissions",
            "Documentary shorts",
            "Experimental projects",
          ],
          image: "/images/services/videography/short-films.jpg",
          seo: {
            title: "Short Film Production Auckland | Indie Films NZ",
            description: "Short film and indie filmmaking services in Auckland. From 48Hours competition films to passion projects. Create with Tempero Creative.",
          },
        },
        {
          id: "community-stories",
          name: "Community Stories",
          slug: "community-stories",
          description: "Documenting the stories that matter in our communities. We help organisations share their impact and connect with their audiences.",
          features: [
            "Non-profit documentaries",
            "Impact storytelling",
            "Community profiles",
            "Cultural documentation",
            "Heritage projects",
            "Social initiatives",
          ],
          image: "/images/services/videography/community.jpg",
          seo: {
            title: "Community Video Stories Auckland | Documentary Services",
            description: "Community storytelling and documentary video services in Auckland. Help your organisation share its impact with Tempero Creative.",
          },
        },
        {
          id: "vhs-digitizing",
          name: "VHS Digitizing",
          slug: "vhs-digitizing",
          description: "Preserve your precious memories by converting old VHS tapes to modern digital formats. Don't let your family history fade away.",
          features: [
            "VHS to digital conversion",
            "Quality enhancement",
            "Multiple format options",
            "USB & cloud delivery",
            "Chapter marking",
            "Basic editing available",
          ],
          image: "/images/services/videography/vhs.jpg",
          seo: {
            title: "VHS to Digital Conversion Auckland | Video Digitizing",
            description: "VHS tape digitization services in Auckland. Convert and preserve your old video tapes with Tempero Creative. Quality digital conversions.",
          },
        },
      ],
    },
    {
      id: "photography",
      slug: "photography",
      name: "Photography",
      shortDescription: "Capturing moments that tell your story beautifully.",
      fullDescription: "Our photography services combine technical expertise with artistic vision. We capture authentic moments and create stunning imagery that you'll treasure for years to come.",
      image: "/images/services/photography-hero.jpg",
      icon: "Camera",
      seo: {
        title: "Photography Services Auckland | Professional Photographer NZ",
        description: "Professional photography services in Auckland. Weddings, portraits, events, headshots, and family photography by Tempero Creative.",
      },
      services: [
        {
          id: "wedding-photography",
          name: "Wedding Photography",
          slug: "weddings",
          description: "Beautiful wedding photography that captures the love, joy, and unique details of your celebration. Natural, authentic, and timelessly elegant.",
          features: [
            "Engagement sessions",
            "Full & half day packages",
            "Second photographer options",
            "High-resolution digital files",
            "Print-ready images",
            "Album design services",
          ],
          image: "/images/services/photography/weddings.jpg",
          seo: {
            title: "Wedding Photography Auckland | Wedding Photographer NZ",
            description: "Capture your wedding beautifully with Auckland's Tempero Creative. Natural, elegant wedding photography that tells your love story.",
          },
        },
        {
          id: "headshots",
          name: "Professional Headshots",
          slug: "headshots",
          description: "Make a strong first impression with professional headshots. Perfect for LinkedIn, corporate profiles, actors, and personal branding.",
          features: [
            "Individual sessions",
            "Corporate team packages",
            "Multiple background options",
            "Professional retouching",
            "Quick turnaround",
            "Web & print optimised",
          ],
          image: "/images/services/photography/headshots.jpg",
          seo: {
            title: "Professional Headshots Auckland | Corporate Photography",
            description: "Professional headshot photography in Auckland. Corporate portraits, LinkedIn photos, actor headshots, and personal branding by Tempero Creative.",
          },
        },
        {
          id: "family-photography",
          name: "Family Sessions",
          slug: "families",
          description: "Relaxed, natural family photography that captures your connections and creates lasting memories. We work with families of all sizes and stages.",
          features: [
            "Location or studio sessions",
            "Extended family groups",
            "Milestone celebrations",
            "Generational portraits",
            "Relaxed, fun atmosphere",
            "Print packages available",
          ],
          image: "/images/services/photography/families.jpg",
          seo: {
            title: "Family Photography Auckland | Family Portrait Sessions",
            description: "Natural family photography in Auckland. Capture your family's connections with relaxed, beautiful portrait sessions by Tempero Creative.",
          },
        },
        {
          id: "event-photography",
          name: "Event Photography",
          slug: "events",
          description: "Professional event photography that documents your occasions comprehensively. From corporate functions to community celebrations.",
          features: [
            "Corporate events",
            "Conferences & galas",
            "Community events",
            "Product launches",
            "Fast delivery options",
            "Online galleries",
          ],
          image: "/images/services/photography/events.jpg",
          seo: {
            title: "Event Photography Auckland | Professional Event Photos",
            description: "Expert event photography in Auckland. Corporate, community, and special events captured professionally by Tempero Creative.",
          },
        },
        {
          id: "photo-restoration",
          name: "Photo Editing & Restoration",
          slug: "restoration",
          description: "Breathe new life into damaged or faded photographs. Our restoration services can repair tears, remove stains, and restore precious memories.",
          features: [
            "Damage repair",
            "Color correction",
            "Colorization of B&W",
            "Stain & scratch removal",
            "High-quality scans",
            "Archival printing",
          ],
          image: "/images/services/photography/restoration.jpg",
          seo: {
            title: "Photo Restoration Auckland | Old Photo Repair Services",
            description: "Professional photo restoration in Auckland. Repair damaged photos, colorize old images, and preserve family memories with Tempero Creative.",
          },
        },
      ],
    },
    {
      id: "animation-vfx",
      slug: "animation-vfx",
      name: "Animation & VFX",
      shortDescription: "Bringing imagination to life through motion and effects.",
      fullDescription: "Our animation and visual effects team transforms concepts into captivating visual experiences. From 2D explainers to 3D product visualizations, we make the impossible possible.",
      image: "/images/services/animation-hero.jpg",
      icon: "Wand2",
      seo: {
        title: "Animation & VFX Services Auckland | Motion Graphics NZ",
        description: "Professional animation and visual effects in Auckland. 2D animation, 3D design, motion graphics, and VFX services by Tempero Creative.",
      },
      services: [
        {
          id: "2d-animation",
          name: "2D Animation",
          slug: "2d-animation",
          description: "Engaging 2D animations for explainer videos, social content, and creative projects. Clear communication through compelling motion.",
          features: [
            "Explainer videos",
            "Character animation",
            "Infographic animations",
            "Social media content",
            "Logo animations",
            "Educational content",
          ],
          image: "/images/services/animation/2d.jpg",
          seo: {
            title: "2D Animation Auckland | Explainer Videos & Motion Graphics",
            description: "Professional 2D animation services in Auckland. Explainer videos, character animation, and motion graphics by Tempero Creative.",
          },
        },
        {
          id: "3d-design",
          name: "3D Design & Visualization",
          slug: "3d-design",
          description: "Stunning 3D visualizations that bring products, spaces, and concepts to life. Perfect for presentations, marketing, and pre-visualization.",
          features: [
            "Product visualization",
            "Architectural renders",
            "3D modelling",
            "Product animations",
            "Virtual prototypes",
            "Marketing renders",
          ],
          image: "/images/services/animation/3d.jpg",
          seo: {
            title: "3D Design & Visualization Auckland | 3D Rendering Services",
            description: "Professional 3D design and visualization in Auckland. Product renders, architectural visualization, and 3D modelling by Tempero Creative.",
          },
        },
        {
          id: "visual-effects",
          name: "Visual Effects",
          slug: "visual-effects",
          description: "Seamless visual effects that enhance your video productions. From subtle corrections to dramatic transformations.",
          features: [
            "Compositing",
            "Green screen keying",
            "Object removal",
            "Sky replacements",
            "Particle effects",
            "Color grading",
          ],
          image: "/images/services/animation/vfx.jpg",
          seo: {
            title: "Visual Effects Services Auckland | VFX Post-Production",
            description: "Professional visual effects in Auckland. Compositing, green screen, VFX, and post-production services by Tempero Creative.",
          },
        },
        {
          id: "home-design",
          name: "Home Design Visualization",
          slug: "home-design",
          description: "See your dream home before it's built. We create realistic visualizations for renovations, new builds, and interior design projects.",
          features: [
            "Interior visualizations",
            "Exterior renders",
            "Renovation previews",
            "Virtual walkthroughs",
            "Material options",
            "Lighting studies",
          ],
          image: "/images/services/animation/home-design.jpg",
          seo: {
            title: "Home Design Visualization Auckland | 3D Home Renders",
            description: "Home design visualization in Auckland. See your renovation or new build in 3D before construction. Tempero Creative.",
          },
        },
      ],
    },
    {
      id: "graphic-design",
      slug: "graphic-design",
      name: "Graphic Design",
      shortDescription: "Visual solutions that communicate and captivate.",
      fullDescription: "Our design team creates visual identities and materials that make lasting impressions. From brand development to marketing collateral, we help you look your best.",
      image: "/images/services/design-hero.jpg",
      icon: "PenTool",
      seo: {
        title: "Graphic Design Services Auckland | Branding & Design NZ",
        description: "Professional graphic design in Auckland. Branding, logo design, marketing materials, and visual identity services by Tempero Creative.",
      },
      services: [
        {
          id: "branding",
          name: "Branding & Style Guides",
          slug: "branding",
          description: "Complete brand identity development that captures your essence and resonates with your audience. Consistent, memorable, and uniquely yours.",
          features: [
            "Logo design",
            "Color palettes",
            "Typography systems",
            "Brand guidelines",
            "Brand strategy",
            "Visual identity systems",
          ],
          image: "/images/services/design/branding.jpg",
          seo: {
            title: "Branding & Logo Design Auckland | Brand Identity NZ",
            description: "Professional branding and logo design in Auckland. Complete brand identity development and style guides by Tempero Creative.",
          },
        },
        {
          id: "advertising",
          name: "Advertising & Campaigns",
          slug: "advertising",
          description: "Eye-catching advertising materials that drive engagement and results. Digital and print campaigns that stand out.",
          features: [
            "Digital ad design",
            "Print advertising",
            "Billboard & signage",
            "Social media graphics",
            "Campaign concepts",
            "Marketing collateral",
          ],
          image: "/images/services/design/advertising.jpg",
          seo: {
            title: "Advertising Design Auckland | Marketing Graphics NZ",
            description: "Creative advertising design in Auckland. Digital ads, print campaigns, and marketing materials by Tempero Creative.",
          },
        },
        {
          id: "photo-albums",
          name: "Photo Albums & Scrapbooking",
          slug: "photo-albums",
          description: "Beautiful custom photo albums and scrapbooks that showcase your memories. Professional layouts with personal touches.",
          features: [
            "Wedding albums",
            "Family photo books",
            "Travel albums",
            "Memory books",
            "Custom layouts",
            "Premium printing",
          ],
          image: "/images/services/design/albums.jpg",
          seo: {
            title: "Photo Album Design Auckland | Custom Photo Books NZ",
            description: "Custom photo album design in Auckland. Wedding albums, family photo books, and memory books by Tempero Creative.",
          },
        },
        {
          id: "photo-collages",
          name: "Photo Editing & Collages",
          slug: "collages",
          description: "Creative photo editing, composites, and artistic collages. Transform your images into unique visual pieces.",
          features: [
            "Photo composites",
            "Artistic collages",
            "Digital manipulation",
            "Creative edits",
            "Social media graphics",
            "Wall art designs",
          ],
          image: "/images/services/design/collages.jpg",
          seo: {
            title: "Photo Editing & Collages Auckland | Creative Photo Design",
            description: "Professional photo editing and collage design in Auckland. Creative composites and artistic imagery by Tempero Creative.",
          },
        },
        {
          id: "restoration-colorizing",
          name: "Restoration & Colorizing",
          slug: "restoration",
          description: "Digital restoration of old photographs and professional colorization of black and white images. Preserve and enhance family treasures.",
          features: [
            "Damage repair",
            "Colorization",
            "Enhancement",
            "Artifact removal",
            "High-resolution scanning",
            "Archival quality",
          ],
          image: "/images/services/design/restoration.jpg",
          seo: {
            title: "Photo Restoration & Colorizing Auckland | Old Photo Repair",
            description: "Photo restoration and colorization in Auckland. Repair damaged photos and add color to black & white images. Tempero Creative.",
          },
        },
      ],
    },
    {
      id: "music-production",
      slug: "music-production",
      name: "Music Production",
      shortDescription: "Original music and professional audio solutions.",
      fullDescription: "Our music and audio team creates original compositions, handles sound for film, and provides professional recording and mixing services.",
      image: "/images/services/music-hero.jpg",
      icon: "Music",
      seo: {
        title: "Music Production Auckland | Sound Design & Recording NZ",
        description: "Professional music production in Auckland. Original composition, sound design, recording, mixing, and audio services by Tempero Creative.",
      },
      services: [
        {
          id: "sound-for-film",
          name: "Sound for Film",
          slug: "sound-for-film",
          description: "Complete audio post-production for video and film. From dialogue editing to sound effects and scoring, we make your visuals sound amazing.",
          features: [
            "Dialogue editing",
            "Sound effects",
            "Foley",
            "Ambient sound",
            "Audio mixing",
            "Format delivery",
          ],
          image: "/images/services/music/film-sound.jpg",
          seo: {
            title: "Sound for Film Auckland | Audio Post-Production NZ",
            description: "Professional sound for film in Auckland. Audio post-production, sound design, and mixing services by Tempero Creative.",
          },
        },
        {
          id: "recording",
          name: "Recording & Producing",
          slug: "recording",
          description: "Professional recording and production services for musicians, podcasters, and voice-over artists. Quality sound in a creative environment.",
          features: [
            "Music recording",
            "Podcast production",
            "Voice-over recording",
            "Production assistance",
            "Session musicians",
            "Remote recording",
          ],
          image: "/images/services/music/recording.jpg",
          seo: {
            title: "Recording Studio Auckland | Music & Podcast Production",
            description: "Professional recording services in Auckland. Music production, podcast recording, and voice-over services by Tempero Creative.",
          },
        },
        {
          id: "live-mixing",
          name: "Live Mixing",
          slug: "live-mixing",
          description: "Professional live sound mixing for events, performances, and presentations. Clear, balanced audio that reaches every seat.",
          features: [
            "Concert sound",
            "Corporate events",
            "Theatre productions",
            "Church services",
            "Equipment rental",
            "Technical support",
          ],
          image: "/images/services/music/live-mixing.jpg",
          seo: {
            title: "Live Sound Mixing Auckland | Event Audio Services NZ",
            description: "Professional live sound mixing in Auckland. Concert, event, and performance audio services by Tempero Creative.",
          },
        },
      ],
    },
    {
      id: "education",
      slug: "education",
      name: "Education & Tutoring",
      shortDescription: "Nurturing the next generation of creative talent.",
      fullDescription: "We're passionate about sharing our knowledge and inspiring young creatives. Our educational programmes provide hands-on learning in filmmaking, animation, and creative arts.",
      image: "/images/services/education-hero.jpg",
      icon: "GraduationCap",
      seo: {
        title: "Creative Education Auckland | Film & Animation Classes NZ",
        description: "Creative education programmes in Auckland. Film clubs, animation workshops, after-school programmes, and one-on-one tutoring by Tempero Creative.",
      },
      services: [
        {
          id: "film-club",
          name: "Film Club NZ",
          slug: "film-club",
          description: "Regular film club sessions where young people learn filmmaking through hands-on projects. A supportive community for aspiring filmmakers.",
          features: [
            "Weekly sessions",
            "Practical projects",
            "Industry insights",
            "Equipment access",
            "Collaborative learning",
            "Showcase events",
          ],
          image: "/images/services/education/film-club.jpg",
          seo: {
            title: "Film Club NZ Auckland | Youth Filmmaking Programme",
            description: "Join Film Club NZ in Auckland. Weekly filmmaking sessions for young people who want to learn video production. Tempero Creative.",
          },
        },
        {
          id: "animation-club",
          name: "Animation Club",
          slug: "animation-club",
          description: "Learn animation techniques from the basics to advanced skills. Create your own animated projects in a fun, supportive environment.",
          features: [
            "2D animation basics",
            "Character design",
            "Stop motion",
            "Digital tools",
            "Personal projects",
            "Group collaborations",
          ],
          image: "/images/services/education/animation-club.jpg",
          seo: {
            title: "Animation Club Auckland | Learn Animation for Kids & Teens",
            description: "Animation club in Auckland for young aspiring animators. Learn 2D, stop motion, and digital animation with Tempero Creative.",
          },
        },
        {
          id: "tutoring",
          name: "One-on-One Tutoring",
          slug: "tutoring",
          description: "Personalised creative tutoring tailored to individual goals and skill levels. Learn at your own pace with dedicated attention.",
          features: [
            "Custom curriculum",
            "Flexible scheduling",
            "All skill levels",
            "Portfolio development",
            "Software training",
            "Career guidance",
          ],
          image: "/images/services/education/tutoring.jpg",
          seo: {
            title: "Creative Tutoring Auckland | Film & Design Lessons NZ",
            description: "One-on-one creative tutoring in Auckland. Personalised lessons in filmmaking, photography, design, and animation. Tempero Creative.",
          },
        },
        {
          id: "after-school",
          name: "After School Programmes",
          slug: "after-school",
          description: "Structured after-school programmes that combine fun with learning. Creative activities that develop valuable skills.",
          features: [
            "Term-based programmes",
            "Multiple disciplines",
            "Age-appropriate content",
            "Safe environment",
            "Progress tracking",
            "End-of-term showcases",
          ],
          image: "/images/services/education/after-school.jpg",
          seo: {
            title: "After School Creative Programme Auckland | Kids Activities",
            description: "Creative after-school programmes in Auckland. Film, animation, and design activities for children and teens. Tempero Creative.",
          },
        },
      ],
    },
  ],

  // Additional Services (smaller standalone offerings)
  additionalServices: [
    {
      id: "creative-consultation",
      name: "Creative Consultation",
      description: "From concept to creation, we help you develop and refine your creative ideas into actionable plans.",
      icon: "Lightbulb",
      href: "/contact",
    },
    {
      id: "social-media",
      name: "Social Media Content",
      description: "Engaging content optimised for social platforms. Videos, graphics, and strategies that grow your presence.",
      icon: "Share2",
      href: "/contact",
    },
    {
      id: "web-development",
      name: "Web Development",
      description: "Modern, responsive websites that showcase your brand and serve your business goals.",
      icon: "Globe",
      href: "/contact",
    },
    {
      id: "event-planning",
      name: "Event Planning",
      description: "End-to-end event planning and coordination services for memorable occasions.",
      icon: "CalendarDays",
      href: "/contact",
    },
    {
      id: "custom-cakes",
      name: "Custom Cakes",
      description: "Yes, we even do cakes! Creative custom cake design and baking for special occasions.",
      icon: "Cake",
      href: "/contact",
    },
  ],
};

// ============================================
// CONTACT PAGE DATA
// ============================================
export const contactPageData = {
  seo: {
    title: "Contact Us",
    description: "Get in touch with Tempero Creative. Request a quote, discuss your project, or just say hello. We'd love to hear from you.",
  },

  hero: {
    title: "Let's",
    titleAccent: "Connect",
    subtitle: "Have a project in mind? Want to learn more about our services? We'd love to hear from you.",
  },

  contactInfo: {
    email: "hello@tempero.nz",
    phone: "+64 21 XXX XXXX",
    location: "Auckland, New Zealand",
    hours: "Monday - Friday, 9am - 5pm",
  },

  form: {
    title: "Send us a message",
    fields: {
      name: { label: "Your Name", placeholder: "Enter your name" },
      email: { label: "Email Address", placeholder: "your@email.com" },
      phone: { label: "Phone (optional)", placeholder: "+64 21 XXX XXXX" },
      service: {
        label: "Service Interested In",
        placeholder: "Select a service",
        options: [
          "Videography",
          "Photography",
          "Animation & VFX",
          "Graphic Design",
          "Music Production",
          "Education & Tutoring",
          "Multiple Services",
          "Other / Not Sure",
        ],
      },
      message: { label: "Your Message", placeholder: "Tell us about your project or inquiry..." },
    },
    submitButton: "Send Message",
    successMessage: "Thanks for reaching out! We'll get back to you within 24 hours.",
  },

  faq: {
    title: "Frequently Asked",
    titleAccent: "Questions",
    items: [
      {
        question: "What areas do you serve?",
        answer: "We're based in Auckland but serve clients throughout New Zealand. For some services, we can work remotely with clients anywhere in the world.",
      },
      {
        question: "How much do your services cost?",
        answer: "Every project is unique, so we provide custom quotes based on your specific needs. Contact us with details about your project for a free consultation and quote.",
      },
      {
        question: "How far in advance should I book?",
        answer: "For events like weddings, we recommend booking 3-6 months in advance. For other projects, a few weeks notice is usually sufficient, but earlier is always better.",
      },
      {
        question: "Do you offer package deals?",
        answer: "Yes! We offer bundled packages for clients who need multiple services. For example, wedding video + photo packages, or brand design + web development bundles.",
      },
      {
        question: "What's your turnaround time?",
        answer: "Turnaround varies by project type and complexity. Simple projects might be 1-2 weeks, while larger productions could be 4-8 weeks. We'll give you a timeline when we quote.",
      },
      {
        question: "Can I see examples of your work?",
        answer: "Absolutely! Check out our News page for recent projects, or contact us and we can share relevant examples specific to your type of project.",
      },
    ],
  },
};

// ============================================
// NEWS PAGE DATA
// ============================================
export const newsPageData = {
  seo: {
    title: "News & Projects",
    description: "See the latest projects and news from Tempero Creative. Browse our portfolio of videography, photography, design, and creative work.",
  },

  hero: {
    title: "News &",
    titleAccent: "Projects",
    subtitle: "The latest from our studio. Browse our recent work and stay updated on what we're creating.",
  },

  filters: [
    { id: "all", label: "All" },
    { id: "videography", label: "Videography" },
    { id: "photography", label: "Photography" },
    { id: "design", label: "Design" },
    { id: "animation", label: "Animation" },
    { id: "music", label: "Music" },
    { id: "education", label: "Education" },
    { id: "news", label: "News" },
  ],

  // Sample news items (these would be managed via admin later)
  items: [
    {
      id: "1",
      title: "48Hours 2024 - Behind the Scenes",
      excerpt: "Our team took on the challenge again this year. Here's a look at the creative chaos of making a film in just 48 hours.",
      category: "videography",
      image: "/images/news/48hours-2024.jpg",
      date: "2024-08-15",
      featured: true,
    },
    {
      id: "2",
      title: "Middleton Grange School - Shrek the Musical",
      excerpt: "We were thrilled to design the promotional materials for this amazing school production.",
      category: "design",
      image: "/images/news/shrek-musical.jpg",
      date: "2024-06-20",
      featured: true,
    },
    {
      id: "3",
      title: "Summer Wedding Collection",
      excerpt: "A look back at some of our favourite wedding moments from the 2023-24 summer season.",
      category: "photography",
      image: "/images/news/summer-weddings.jpg",
      date: "2024-03-10",
      featured: false,
    },
    {
      id: "4",
      title: "New Animation Workshop Series",
      excerpt: "Announcing our new term of animation workshops for young creatives. Spots are filling fast!",
      category: "education",
      image: "/images/news/animation-workshop.jpg",
      date: "2024-02-01",
      featured: false,
    },
  ],
};

// ============================================
// PORTAL PAGE DATA (Placeholder)
// ============================================
export const portalPageData = {
  seo: {
    title: "Client Portal",
    description: "Access your Tempero Creative client portal to track projects, view deliverables, and communicate with our team.",
  },

  placeholder: {
    title: "Client Portal",
    titleAccent: "Coming Soon",
    description: "We're building something special for our clients. Soon you'll be able to track your projects, download deliverables, and communicate with our team all in one place.",
    features: [
      "Track your project progress in real-time",
      "Download final deliverables securely",
      "Communicate directly with your creative team",
      "Review and approve quotes and concepts",
    ],
    cta: {
      text: "Get notified when it launches",
      href: "/contact",
    },
  },
};

// ============================================
// FOOTER DATA
// ============================================
export const footerData = {
  tagline: "Your one-stop shop for all things Creative.",
  copyright: "© 2024 Tempero Creative. All rights reserved.",
  
  columns: [
    {
      title: "Services",
      links: [
        { name: "Videography", href: "/services/videography" },
        { name: "Photography", href: "/services/photography" },
        { name: "Animation & VFX", href: "/services/animation-vfx" },
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "Music Production", href: "/services/music-production" },
        { name: "Education", href: "/services/education" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/tempero.creative/", external: true },
        { name: "Facebook", href: "https://www.facebook.com/temperocreative", external: true },
        { name: "YouTube", href: "https://www.youtube.com/@temperocreative", external: true },
        { name: "Client Portal", href: "/portal" },
      ],
    },
  ],
};
