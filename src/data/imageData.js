const imageData = {
    Nature: [
      { url: process.env.PUBLIC_URL + '/images/nature/nature-1.jpg', category: 'Nature' },
      { url: process.env.PUBLIC_URL + '/images/nature/nature-2.jpg', category: 'Nature' },
      { url: process.env.PUBLIC_URL + '/images/nature/nature-3.jpg', category: 'Nature' },
      { url: process.env.PUBLIC_URL + '/images/nature/nature-4.jpg', category: 'Nature' },
      { url: process.env.PUBLIC_URL + '/images/nature/nature-5.jpg', category: 'Nature' },
    ].map((item, index) => ({ ...item, id: index + 1 })), // Sequential IDs
  
    Cars: [
      { url: process.env.PUBLIC_URL + '/images/cars/car-1.jpg', category: 'Cars' },
      { url: process.env.PUBLIC_URL + '/images/cars/car-2.jpg', category: 'Cars' },
      { url: process.env.PUBLIC_URL + '/images/cars/car-3.jpg', category: 'Cars' },
      { url: process.env.PUBLIC_URL + '/images/cars/car-4.jpg', category: 'Cars' },
      { url: process.env.PUBLIC_URL + '/images/cars/car-5.jpg', category: 'Cars' },
    ].map((item, index) => ({ ...item, id: index + 1 })), // Sequential IDs
  
    Paintings: [
      { url: process.env.PUBLIC_URL +'/images/paintings/painting-1.jpg', category: 'Paintings' },
      { url: process.env.PUBLIC_URL +'/images/paintings/painting-2.jpg', category: 'Paintings' },
      { url: process.env.PUBLIC_URL +'/images/paintings/painting-3.jpg', category: 'Paintings' },
      { url: process.env.PUBLIC_URL +'/images/paintings/painting-4.jpg', category: 'Paintings' },
      { url: process.env.PUBLIC_URL +'/images/paintings/painting-5.jpg', category: 'Paintings' },
    ].map((item, index) => ({ ...item, id: index + 1 })), // Sequential IDs
  };
  
  export default imageData;