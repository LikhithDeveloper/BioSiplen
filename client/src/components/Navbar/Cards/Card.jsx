import React, { useState } from 'react'
import "./Card.css"
const Card = ({btndetails}) => {
  const { hoverbtn, anime } = btndetails;
  const organicFertilizerProducts = [
  {
    id: 1,
    name: "BioGrow Organic Compost",
    category: "Compost Fertilizer",
    description:
      "A 100% natural compost made from decomposed plant and animal waste. Improves soil fertility and microbial activity.",
    composition: ["Nitrogen 1.5%", "Phosphorus 1%", "Potassium 1.2%"],
    application: "Apply 2–3 tons per acre before sowing or during land preparation.",
    suitableCrops: ["Rice", "Wheat", "Vegetables", "Pulses"],
    packaging: "25 kg bag",
    price: 450,
    image: "/images/products/biogrow-compost.jpg",
  },
  {
    id: 2,
    name: "GreenMax Vermicompost",
    category: "Vermicompost",
    description:
      "A nutrient-rich organic fertilizer produced using earthworms. Enhances root development and increases yield.",
    composition: ["Organic Carbon 20%", "Nitrogen 2%", "Phosphorus 1%", "Potassium 1.5%"],
    application: "Apply 1–2 tons per acre during field preparation or as top dressing.",
    suitableCrops: ["Fruits", "Vegetables", "Flowers"],
    packaging: "40 kg bag",
    price: 600,
    image: "/images/products/greenmax-vermicompost.jpg",
  },
  {
    id: 3,
    name: "NutriBoost Bio Fertilizer",
    category: "Bio Fertilizer",
    description:
      "Contains beneficial microbes like Azotobacter and Phosphate Solubilizing Bacteria that fix nitrogen and improve nutrient uptake.",
    composition: ["Azotobacter 1x10⁸ CFU/g", "PSB 1x10⁸ CFU/g"],
    application: "Mix 2 kg with compost and apply to 1 acre of soil before sowing.",
    suitableCrops: ["Maize", "Sugarcane", "Vegetables"],
    packaging: "1 kg pouch",
    price: 250,
    image: "/images/products/nutriboost-biofertilizer.jpg",
  },
  {
    id: 4,
    name: "EcoNitro Liquid Bio-Fertilizer",
    category: "Liquid Fertilizer",
    description:
      "Liquid biofertilizer that enhances nitrogen fixation and improves leaf chlorophyll levels for better plant growth.",
    composition: ["Rhizobium 1x10⁹ CFU/ml", "Carrier Liquid Medium"],
    application: "Dilute 1 liter in 200 liters of water and spray evenly on 1 acre.",
    suitableCrops: ["Paddy", "Cotton", "Soybean"],
    packaging: "1 L bottle",
    price: 350,
    image: "/images/products/econitro-liquid.jpg",
  },
  {
    id: 5,
    name: "Keshav Organic Manure",
    category: "Organic Manure",
    description:
      "An all-purpose organic manure that restores soil structure, increases water retention, and boosts microbial health.",
    composition: ["Organic Carbon 25%", "Moisture 15%"],
    application: "Spread 3–4 tons per acre and mix with topsoil during tilling.",
    suitableCrops: ["All Crops"],
    packaging: "50 kg bag",
    price: 500,
    image: "/images/products/keshav-manure.jpg",
  },
];


const organicFertilizerServices = [
  {
    id: 1,
    name: "Soil Testing & Analysis",
    category: "Agricultural Consultancy",
    description:
      "Comprehensive soil testing service to determine nutrient composition, pH, and organic matter content. Helps farmers choose the right fertilizer and crop rotation strategy.",
    benefits: [
      "Improves soil fertility management",
      "Reduces excess fertilizer usage",
      "Enhances crop yield and sustainability",
    ],
    duration: "3–5 days",
    price: "₹500 per sample",
    image: "/images/services/soil-testing.jpg",
  },
  {
    id: 2,
    name: "Customized Organic Fertilizer Formulation",
    category: "Product Customization",
    description:
      "Tailor-made organic fertilizer blends designed to meet specific crop and soil requirements for individual farmers or agri-businesses.",
    benefits: [
      "Crop-specific nutrient optimization",
      "Improves soil structure and microbial balance",
      "Cost-effective for large farms",
    ],
    duration: "7–10 days for preparation",
    price: "Based on formulation",
    image: "/images/services/custom-fertilizer.jpg",
  },
  {
    id: 3,
    name: "Farm Advisory & Organic Transition Support",
    category: "Consultancy & Training",
    description:
      "Expert guidance to help farmers transition from chemical-based farming to fully organic methods while maintaining productivity.",
    benefits: [
      "Step-by-step organic certification guidance",
      "Training on natural pest and disease control",
      "Continuous farm monitoring support",
    ],
    duration: "Monthly or quarterly subscription",
    price: "₹2,000/month",
    image: "/images/services/farm-advisory.jpg",
  },
  {
    id: 4,
    name: "Bulk Supply & Distribution",
    category: "Supply Chain Service",
    description:
      "Efficient bulk supply of organic fertilizers, compost, and bio-inputs to distributors, nurseries, and agri-retail outlets.",
    benefits: [
      "Reliable large-scale supply",
      "Flexible delivery schedules",
      "Transportation assistance available",
    ],
    duration: "As per order quantity",
    price: "Contact for quotation",
    image: "/images/services/bulk-supply.jpg",
  },
  {
    id: 5,
    name: "Organic Certification Assistance",
    category: "Compliance Service",
    description:
      "Help farmers and producers obtain organic certification through documentation, audits, and training on regulatory compliance.",
    benefits: [
      "Assistance with NPOP/IFOAM certification",
      "Ensures long-term organic compliance",
      "Improves brand value and export readiness",
    ],
    duration: "1–3 months (depending on scope)",
    price: "Starts from ₹5,000",
    image: "/images/services/certification.jpg",
  },
  {
    id: 6,
    name: "On-field Demonstrations & Workshops",
    category: "Training & Awareness",
    description:
      "Hands-on training sessions and field demonstrations to educate farmers about the benefits of organic fertilizers and sustainable farming techniques.",
    benefits: [
      "Practical training with experts",
      "Live crop and soil improvement demos",
      "Community-level awareness programs",
    ],
    duration: "1-day or 2-day sessions",
    price: "₹1,000 per participant",
    image: "/images/services/workshop.jpg",
  },
];



  return (
    <div className={`${anime?"navcard":null} w-auto h-auto bg-white/30 backdrop-blur-[10px] relative left-[30px] top-[10px] rounded-[5px]`} >
      <div className='hidden lg:flex flex-col p-[20px] gap-3'>
        {hoverbtn == "Services"?(organicFertilizerServices.map((ele,index) => (
            <a key={index} className='w-auto h-auto flex justify-start items-center border-b border-gray-400 cursor-pointer pb-2 hover:text-[#028A48]'>{ele.name}</a>
        ))):(organicFertilizerProducts.map((ele,index) => (
            <a key={index} className='w-auto h-auto flex justify-start items-center border-b border-gray-400 cursor-pointer pb-2 hover:text-[#028A48]'>{ele.name}</a>
        )))
        }
      </div>
    </div>
  )
}

export default Card