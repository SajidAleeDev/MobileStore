const baseImageUrl = "./Images/";

export const SmartPhones = [
  {
    id: "12c3d4e5f6g7h8i9j0k",
    name: "Galaxy S22 Ultra",
    image: baseImageUrl + "SumsungS22.png",
    price: "1200.00",
    Discount: "130.00",
    rating: 7,
    description:
      "HE WAS A SHY LITTLE FELLOW AND THE ONLY WORD HE EVER SAID WAS 'GUMBO.'",
    iStock: 10,
    orders: 153,
    shiping: "Free Shipping",
    Colors: [
      {
        Color: "Red",
        image: baseImageUrl + "SumsungS22.png",
      },
      {
        Color: "Green",
        image: baseImageUrl + "SumsungS22.png",
      },
      {
        Color: "Blue",
        image: baseImageUrl + "SumsungS22.png",
      },
    ],
  },

  {
    id: "12c3d4e5f6g7h8i9j0kbsascxasc23 ",
    name: "Galaxy M13 (4GB | 64 GB )",
    image: baseImageUrl + "Glaxym13.png",
    price: "1200.00",
    Discount: "130.00",
    rating: 5,
    category: "Mobile",
    description:
      "HE WAS A SHY LITTLE FELLOW AND THE ONLY WORD HE EVER SAID WAS 'GUMBO.'",
    iStock: 10,
    Colors: [
      {
        Color: "Red",
        image: baseImageUrl + "Glaxym13.png",
      },
      {
        Color: "Green",
        image: baseImageUrl + "Glaxym13.png",
      },
      {
        Color: "Blue",
        image: baseImageUrl + "Glaxym13.png",
      },
    ],
  },
  {
    id: "12c3d4e5f6g7h8i9j0kbsascxasc2334",
    name: "Galaxy M33 (4GB | 64 GB )",
    image: baseImageUrl + "Galaxym33.png",
    price: "1200.00",
    Discount: "130.00",
    rating: 5,
    category: "Mobile",
    description:
      "HE WAS A SHY LITTLE FELLOW AND THE ONLY WORD HE EVER SAID WAS 'GUMBO.'",
    iStock: 10,
    Colors: [
      {
        Color: "Red",
        image: baseImageUrl + "Galaxym33.png",
      },
      {
        Color: "Green",
        image: baseImageUrl + "Galaxym33.png",
      },
      {
        Color: "Blue",
        image: baseImageUrl + "Galaxym33.png",
      },
    ],
  },
  {
    id: "12c3d4e5f6g7h8i9j0kbsascxasc23344",
    name: "Galaxy M53 (4GB | 64 GB )",
    image: baseImageUrl + "galaxyM53.png",
    price: "1200.00",
    Discount: "130.00",
    rating: 5,
    category: "Mobile",
    description:
      "HE WAS A SHY LITTLE FELLOW AND THE ONLY WORD HE EVER SAID WAS 'GUMBO.'",
    iStock: 10,
    Colors: [
      {
        Color: "Red",
        image: baseImageUrl + "galaxyM53.png",
      },
      {
        Color: "Green",
        image: baseImageUrl + "galaxyM53.png",
      },
      {
        Color: "Blue",
        image: baseImageUrl + "galaxyM53.png",
      },
    ],
  },
  {
    id: "12c3d4e5f6g7h8i9j0kbsascxasc2334455",
    name: "Galaxy S22 Ultra",
    image: baseImageUrl + "GalaxyS22U.png",
    price: "1200.00",
    Discount: "130.00",
    rating: 5,
    category: "Mobile",
    description:
      "HE WAS A SHY LITTLE FELLOW AND THE ONLY WORD HE EVER SAID WAS 'GUMBO.'",
    iStock: 10,
    Colors: [
      {
        Color: "Red",
        image: baseImageUrl + "GalaxyS22U.png",
      },
      {
        Color: "Green",
        image: baseImageUrl + "GalaxyS22U.png",
      },
      {
        Color: "Blue",
        image: baseImageUrl + "GalaxyS22U.png",
      },
    ],
  },
];
export const DataSmartPhonesFilter = [
  {
    id: Math.random().toString(),
    title: "Category",
    type: "Button", // Corrected type value
    items: [
      {
        id: Math.random().toString(),
        name: "Mobile accessory",
      },
      {
        id: Math.random().toString(),
        name: "Electronics",
      },
      {
        id: Math.random().toString(),
        name: "Smartphones",
      },
      {
        id: Math.random().toString(),
        name: "Modern tech",
      },
    ],
  },
  {
    id: Math.random().toString(),
    title: "Brands",
    type: "Checkbox", // Corrected type value
    items: [
      {
        id: Math.random().toString(),
        name: "Samsung",
      },
      {
        id: Math.random().toString(),
        name: "Apple",
      },
      {
        id: Math.random().toString(),
        name: "Huawei",
      },
      {
        id: Math.random().toString(),
        name: "Pocco",
      },
      {
        id: Math.random().toString(),
        name: "Lenovo",
      },
    ],
  },
  // Add the rest of your data here...
];
