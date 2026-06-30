const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");
const connectDB = require("./config/db");

// 1. Paste your massive array here
// You can literally copy all 700 lines from your projectsData.js and replace this array
const projectsData = [
  // ongoing projects
  {
    id: 1,
    slug: "vaarahi-residence",
    name: "Vaarahi Residence",
    location: "Kankipadu, Fuzen, Krishna District",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/vaarahi-residence.jpg",
    units: "20",
    area: "1250 Sq Ft",
    configuration: "2BHK",
    bathrooms: "2",
    vastu: true,
    overview:
      "Vaarahi Residence offers premium 2BHK apartments and flats, thoughtfully designed for modern living Located in Kankipadu, Fuzen, Krishna District, this ongoing project combines comfort with convenience Amenities include lift facility, power backup, car parking, and reliable water supply",
    amenities: ["Lift Facility", "Power Backup", "Car Parking", "Water Supply"],
    gallery: [
      "/projects/project1.jpg",
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Kankipadu%2C%20Fuzen%2C%20Krishna%20District&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  {
    id: 2,
    slug: "vaarahi-enclave",
    name: "Vaarahi Enclave",
    location: "Atmakuru-Mangalgiri",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/vaarahi-enclave.jpg",
    units: "15",
    area: "1200-1350 Sq Ft",
    configuration: "2 BHK",
    bathrooms: "2",
    vastu: true,
    overview:
      "Vaarahi Enclave presents premium 2BHK apartments and flats in the developing area of Atmakuru-Mangalgiri This ongoing project is designed to offer a blend of quality construction and essential amenities such as 24x7 security, children's play area, continuous water supply, and Vastu compliance",
    amenities: [
      "24x7 Security",
      "Childrens Play Area",
      "Water Supply",
      "Vastu Compliant",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Atmakuru-Mangalgiri&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 3,
    slug: "sree-villa",
    name: "Sree Villa",
    location: "Poranki, Vijayawada",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/sree-villa.jpg",
    units: "1",
    area: "2000 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Sree Villa is an ongoing project offering a premium duplex villa in the desirable location of Poranki, Vijayawada Experience spacious living with modern design and amenities tailored for a luxurious lifestyle, including a private garden, car parking, Vastu compliance, and power backup",
    amenities: [
      "Private Garden",
      "Car Parking",
      "Power Backup",
      "Vastu Compliant",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 4,
    slug: "satya-grand",
    name: "Satya Grand",
    location: "Nidamanuru, Vijayawada",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/satya-grand.jpg",
    units: "5",
    area: "2200 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Satya Grand brings luxury 3BHK apartments and flats to Nidamanuru, Vijayawada This ongoing, exclusive project features only 5 units, ensuring privacy and high-end living with modern amenities like premium fittings, lift, covered parking, and 24x7 security",
    amenities: [
      "Premium Fittings",
      "Lift Facility",
      "Covered Parking",
      "24x7 Security",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Nidamanuru%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 5,
    slug: "sri-sai-aravind",
    name: "Sri Sai Aravind",
    location: "Poranki, Vijayawada",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/sri-sai-aravind.jpg",
    units: "5",
    area: "2250 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Sri Sai Aravind is an ongoing exclusive development of luxury 3BHK apartments/flats in Poranki, Vijayawada With only 5 units, this project promises spacious and well-appointed homes with modern kitchens, power backup, security, and premium finishes",
    amenities: [
      "Modern Kitchen",
      "Power Backup",
      "24x7 Security",
      "Premium Finishes",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 6,
    slug: "signature-city-villas",
    name: "Signature City Villas",
    location: "Kankipadu, Krishna District",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/signature-city-villas.jpg",
    units: "Multiple Units",
    area: "2800 Sq Ft",
    configuration: "4 BHK",
    bathrooms: "4",
    vastu: true,
    overview:
      "Signature City Villas offers premium duplex villas located in Kankipadu, Krishna District This ongoing project provides spacious homes with multiple bedrooms and bathrooms, ideal for families Amenities include landscaped gardens, a clubhouse, children's play area, and a gymnasium",
    amenities: [
      "Landscaped Gardens",
      "Clubhouse",
      "Childrens Play Area",
      "Gymnasium",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Kankipadu%2C%20Krishna%20District&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 7,
    slug: "sunrise-apartments",
    name: "Sunrise Apartments",
    location: "Nidamanuru, Vijayawada",
    status: "ongoing",
    price: "On Request",
    image: "/ongoing/sunrise-apartments.jpg",
    units: "15",
    area: "Approx. 1150 -1300 Sq Ft",
    configuration: "2 BHK",
    bathrooms: "2",
    vastu: true,
    overview:
      "Sunrise Apartments offers premium 2BHK living This ongoing project consists of 15 units and is expected to be completed by January 2026, combining modern amenities with thoughtful design",
    amenities: ["Modern Kitchen", "Power Backup", "Lift Facility", "Security"],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14783.255789965311!2d80.72407205!3d16.5100934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fca8482a7155%3A0xad34f2cb7c4e9123!2sNidamanuru%2C%20Vijayawada%2C%20Andhra%20Pradesh%20521104!5e1!3m2!1sen!2sin!4v1782816081216!5m2!1sen!2sin",
  },
  // upcoming projects
  {
    id: 8,
    slug: "elite-grand-villas",
    name: "Elite Grand Villas",
    location: "Nidamanuru, Vijayawada",
    status: "upcoming",
    price: "On Request",
    image: "/upcoming/elite-grand-villas.jpg",
    units: "52",
    area: "3682 Sq Ft",
    configuration: "4 BHK",
    bathrooms: "4",
    vastu: true,
    overview:
      "Elite Grand Villas in Nidamanuru, Vijayawada, offers a premium gated community experience with 52 luxurious 4BHK villas, each featuring 4 baths This upcoming project is priced at ₹7.5k per sqft, with individual villas around 3682 sq ft",
    amenities: [
      "Community Organic Farm",
      "Wellness Center",
      "Pet-Friendly Park",
      "Clubhouse",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Nidamanuru%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  // completed projects
  {
    id: 8,
    slug: "elite-homes",
    name: "Elite Homes",
    location: "Nidamanuru, Vijayawada",
    status: "completed",
    price: "On Request",
    image: "/completed/elite-homes-main.jpg",
    units: "10",
    area: "1956 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Elite Homes offers a premium gated community experience with luxury villas located in the serene locale of Nidamanuru, Vijayawada These homes are meticulously designed for spacious living, featuring high-end finishes, modern architecture, and a suite of top-tier amenities to cater to a discerning lifestyle Enjoy the tranquility of a well-planned community with the convenience of city access",
    amenities: ["Lift Facility", "24x7 Security"],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Nidamanuru%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 9,
    slug: "hycon-elite",
    name: "Hycon Elite",
    location: "ASRao Nagar, Kapra Municipality, Secunderabad",
    status: "completed",
    price: "On Request",
    image: "/completed/hycon-elite.jpg",
    units: "Multiple Units",
    area: "2250 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Hycon Elite in ASRao Nagar, Kapra Municipality, Secunderabad, is a completed project offering luxury 3BHK apartments/flats It features modern design, quality construction, a gymnasium, lift, intercom, and car parking",
    amenities: ["Lift Facility", "Intercom", "Car Parking"],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=ASRao%20Nagar%2C%20Kapra%20Municipality%2C%20Secunderabad&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 10,
    slug: "sri-nilayam",
    name: "Sri Nilayam",
    location: "Poranki, Vijayawada",
    status: "completed",
    price: "On Request",
    image: "/completed/sri-nilayam.jpg",
    units: "Exclusive Floor-wise",
    area: "1800 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Sri Nilayam is a completed luxury group house project in Poranki, Vijayawada, offering exclusive living with only one spacious 3BHK apartment per floor, ensuring privacy and expansive spaces Features include private lift access per floor, high-end security, reserved parking, and power backup",
    amenities: [
      "Private Lift Access per Floor",
      "High-end Security",
      "Reserved Parking",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 11,
    slug: "icon-city-villas",
    name: "ICON city villas",
    location: "Kankipadu, krishna District",
    status: "completed",
    price: "On Request",
    image: "/completed/icon-city-villas.jpg",
    units: "Multiple Units",
    area: "3000 Sq Ft",
    configuration: "4 BHK",
    bathrooms: "5",
    vastu: true,
    overview:
      "ICON city villas in Kankipadu, krishna District, offers luxurious 4BHK duplex living This completed project features spacious layouts, modern amenities, and high-quality construction",
    amenities: ["1 Multipurpose Room"],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Kankipadu%2C%20krishna%20District&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 12,
    slug: "usha-villa",
    name: "Usha Villa",
    location: "Nidamanuru, Vijayawada",
    status: "completed",
    price: "On Request",
    image: "/completed/usha-villa.jpg",
    units: "1",
    area: "2800 Sq Ft",
    configuration: "4 BHK",
    bathrooms: "4",
    vastu: true,
    overview:
      "Usha Villa is a premium duplex villa offering spacious and luxurious living This completed project features 4 bedrooms, 4 bathrooms, and 2 balconies, designed for comfort and elegance",
    amenities: [
      "Private Garden",
      "Modular Kitchen",
      "Power Backup",
      "Security",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 13,
    slug: "sai-nilayam",
    name: "Sai Nilayam",
    location: "Poranki, Vijayawada",
    status: "completed",
    price: "On Request",
    image: "/completed/sai-nilayam.jpg",
    units: "Few Units",
    area: "1200 Sq Ft",
    configuration: "2 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Sai Nilayam offers elegant 2BHK flats in Poranki, Vijayawada This completed project features modern amenities and a prime location",
    amenities: ["Garden"],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  // soldout projects
  {
    id: 14,
    slug: "sri-sai-apartments",
    name: "Sri Sai Apartments",
    location: "Vani Nagar, Kankipadu, AP",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/sri-sai-apartments.jpg",
    units: "20",
    area: "1200 Sq Ft",
    configuration: "2 BHK",
    bathrooms: "2",
    vastu: true,
    overview:
      "Sri Sai Apartments – Classic 2BHK Living Located in Vani Nagar, Bank Colony, Kankipadu, Krishna District, Andhra Pradesh Developed by Satya Contructions Where Simplicity Meets Timeless Comfort This project offers 4 units, each approximately 1200 Sqft, featuring 2BHK configurations with 2 Bathrooms Parking includes 1 Car + 1 Scooter per flat, and a 6-passenger lift (Altis or equivalent) serves the building Exterior finishes include weather-proof emulsion paint, while interiors feature 2 coats of emulsion over putty with primer This project is completed and sold out",
    amenities: [
      "Fully Vastu Compliant Layout",
      "Lift Access with Generator Backup",
      "Covered Parking for Every Flat",
      "Solid Teak Wood Doors",
      "High-End CP Fittings",
      "100% Bore Water Supply",
      "POP Ceiling for Top Floor Units",
      "Prime Location in Kankipadu",
      "Safe & Secure Electrical Systems",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Vani%20Nagar%2C%20Kankipadu%2C%20AP&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 15,
    slug: "hycon-elite-2",
    name: "Hycon Elite",
    location: "Poranki, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/hycon-elite.jpg",
    units: "40",
    area: "Varies by unit type",
    configuration: "2 & 3 BHK",
    bathrooms: "2-3",
    vastu: true,
    overview:
      "Hycon Elite, situated in the vibrant locale of Poranki, Vijayawada, is a sold-out residential project known for its premium quality construction and thoughtful design Offering a mix of 2 BHK and 3 BHK apartments, this development catered to diverse family needs with a focus on modern amenities and a comfortable urban lifestyle Its strategic location provided excellent connectivity to key city areas, making it a sought-after address",
    amenities: [
      "Luxury Apartments",
      "Premium Quality Construction",
      "25 min from Railway Station & Bus Stop",
      "20 min from Airport",
      "Near Hospitals & International Colleges",
      "5 min to Poranki & Nidamanuru centers",
      "APCRDA Approved",
      "100% Vaastu Compliant",
      "Power Backup",
      "CCTV Surveillance",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Vani%20Nagar%2C%20Kankipadu%2C%20AP&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 16,
    slug: "satya-residence",
    name: "Satya Residence",
    location: "Nidamanuru, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/satya-residence.jpg",
    units: "10 Units",
    area: "1200 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Satya Residence offers elegant 2BHK flats in Poranki, Vijayawada This completed project features modern amenities and a prime location",
    amenities: ["Garden"],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Nidamanuru%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 17,
    slug: "vkr-hycon-heights",
    name: "VKR Hycon Heights",
    location: "Near Pinnamaneni Medical College, Singh Nagar, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/vkr-hycon-heights.jpg",
    units: "40",
    area: "1100 - 1800 Sq Ft",
    configuration: "2 & 3 BHK",
    bathrooms: "2 & 3",
    vastu: true,
    overview:
      "VKR Hycon Heights in Singh Nagar, Vijayawada, was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Near%20Pinnamaneni%20Medical%20College%2C%20Singh%20Nagar%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 18,
    slug: "comfort Residence",
    name: "Comfort Residence",
    location: "Poranki, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/comfort-residence.jpg",
    units: "40",
    area: "1400 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Comfor Residence, was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 19,
    slug: "kanakadurga-nilayam",
    name: "Kanakadurga Nilayam",
    location: "Poranki, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/kanakadurga-nilayam.jpg",
    units: "40",
    area: "1800 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Kanakadurga Nilayam was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Near%20Pinnamaneni%20Medical%20College%2C%20Singh%20Nagar%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 20,
    slug: "rao-villa",
    name: "Rao Villa",
    location: "Vani Nagar, Kankipadu, AP",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/rao-villa.jpg",
    units: "40",
    area: "2800 Sq Ft",
    configuration: "4 BHK",
    bathrooms: "4",
    vastu: true,
    overview:
      "Rao Villa was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Near%20Pinnamaneni%20Medical%20College%2C%20Singh%20Nagar%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 21,
    slug: "aishwarya-lakshmi-nilayam",
    name: "Aishwarya Lakshmi Nilayam",
    location: "Poranki, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/aishwarya-lakshmi-nilayam.jpg",
    units: "40",
    area: "1500 Sq Ft",
    configuration: "2BHK",
    bathrooms: "2",
    vastu: true,
    overview:
      "Aishwarya Lakshmi Nilayam was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 22,
    slug: "raja-residence",
    name: "Raja Residence",
    location: "Poranki, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/rajas-residence.jpg",
    units: "40",
    area: "1600 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Raja Residence was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  {
    id: 23,
    slug: "sai-nilayam-2",
    name: "Sai Nilayam",
    location: "Maduravada, Vizag",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/sai-nilayam-vizag.jpg",
    units: "40",
    area: "3000 Sq Ft",
    configuration: "4 BHK",
    bathrooms: "4",
    vastu: true,
    overview:
      "Sai Nilayam was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29595.121775612395!2d83.34131131001907!3d17.82435977088745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b9542beb86b%3A0xe7bd44f80652cb72!2sMadhurawada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1782465518629!5m2!1sen!2sin",
  },
  {
    id: 24,
    slug: "vigneshwara-nilayam",
    name: "Vigneshwara Nilayam",
    location: "Poranki, Vijayawada",
    status: "sold_out",
    price: "On Request",
    image: "/soldout/vigneshwara-nilayam.jpg",
    units: "40",
    area: "1100 - 1800 Sq Ft",
    configuration: "3 BHK",
    bathrooms: "3",
    vastu: true,
    overview:
      "Vigneshwara Nilayam was a development of premium 2BHK and 3BHK apartments/flats This project, known for good build quality and community living, is now sold out It is conveniently located near Pinnamaneni Medical College",
    amenities: [
      "100% Vaastu Compliant",
      "CCTV Surveillance",
      "Power Backup",
      "Children's Play Area",
      "Landscaped Garden",
      "Covered Parking for All Flats",
    ],
    gallery: [
      "/projects/project2.jpg",
      "/projects/project3.jpg",
      "/projects/project4.jpg",
    ],
    // ADD YOUR GOOGLE MAPS EMBED LINK HERE:
    mapUrl:
      "https://maps.google.com/maps?q=Poranki%2C%20Vijayawada&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
];

// Load env variables to get your MongoDB URI
dotenv.config();

const importData = async () => {
  try {
    // Connect to your database
    await connectDB();

    console.log("Database connected. Clearing old projects...");
    // Optional: Clear out any dummy projects you made while testing the admin panel
    await Project.deleteMany();

    console.log("Formatting data...");
    // Map the old frontend keys to the new database schema keys
    const formattedProjects = projectsData.map((p) => ({
      name: p.name,
      slug: p.slug,
      location: p.location,
      status: p.status,
      starting_price: p.price,
      cover_image: p.image,

      // SAFETY CHECKS ADDED HERE:
      units: !isNaN(parseFloat(p.units)) ? parseFloat(p.units) : null,
      bathrooms: !isNaN(parseFloat(p.bathrooms))
        ? parseFloat(p.bathrooms)
        : null,

      area_sqft: p.area,
      bhk_type: p.configuration,
      vastu_compliant: p.vastu,
      overview: p.overview,
      amenities: p.amenities,
      gallery: p.gallery,
      google_maps_link: p.mapUrl,
    }));

    console.log("Injecting into MongoDB...");
    await Project.insertMany(formattedProjects);

    console.log("✅ Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error(`❌ Error importing data: ${error.message}`);
    process.exit(1);
  }
};

importData();
