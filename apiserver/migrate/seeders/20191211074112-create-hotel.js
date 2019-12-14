'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('hotel', [
      {
        "id": 1,
        "name": "COZICOMFORT",
        "host_name": "Francesca",
        "neighbourhood_group": "North Region",
        "neighbourhood": "Woodlands",
        "latitude": 1.44255,
        "longitude": 103.7958,
        "room_type": "Private room",
        "price": 83
      },
      {
        "id": 2,
        "name": "Bukit Timah",
        "host_name": "Sujatha",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Timah",
        "latitude": 1.33235,
        "longitude": 103.78521,
        "room_type": "Private room",
        "price": 81
      },
      {
        "id": 3,
        "name": "COMFORT Heights",
        "host_name": "Francesca",
        "neighbourhood_group": "North Region",
        "neighbourhood": "Woodlands",
        "latitude": 1.44246,
        "longitude": 103.79667,
        "room_type": "Private room",
        "price": 69
      },
      {
        "id": 4,
        "name": "Ensuite EXPO",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34541,
        "longitude": 103.95712,
        "room_type": "Private room",
        "price": 206
      },
      {
        "id": 5,
        "name": "B&B Airport",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34567,
        "longitude": 103.95963,
        "room_type": "Private room",
        "price": 94
      },
      {
        "id": 6,
        "name": "Airport EXPO",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34702,
        "longitude": 103.96103,
        "room_type": "Private room",
        "price": 104
      },
      {
        "id": 7,
        "name": "Jumbo EXPO",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34348,
        "longitude": 103.96337,
        "room_type": "Private room",
        "price": 208
      },
      {
        "id": 8,
        "name": "The Breezy East \"Leopard",
        "host_name": "Bianca",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Bedok",
        "latitude": 1.32304,
        "longitude": 103.91363,
        "room_type": "Private room",
        "price": 50
      },
      {
        "id": 9,
        "name": "The Breezy East \"Plumeria",
        "host_name": "Bianca",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Bedok",
        "latitude": 1.32458,
        "longitude": 103.91163,
        "room_type": "Private room",
        "price": 54
      },
      {
        "id": 10,
        "name": "The Breezy East \"Red Palm",
        "host_name": "Bianca",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Bedok",
        "latitude": 1.32545,
        "longitude": 103.91191,
        "room_type": "Private room",
        "price": 42
      },
      {
        "id": 11,
        "name": "City Airbnb",
        "host_name": "K2 Guesthouse",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Merah",
        "latitude": 1.28875,
        "longitude": 103.80814,
        "room_type": "Private room",
        "price": 44
      },
      {
        "id": 12,
        "name": "15Outram MRT",
        "host_name": "K2 Guesthouse",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Merah",
        "latitude": 1.28837,
        "longitude": 103.81099,
        "room_type": "Private room",
        "price": 40
      },
      {
        "id": 13,
        "name": "Booking MRT",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34561,
        "longitude": 103.95984,
        "room_type": "Private room",
        "price": 417
      },
      {
        "id": 14,
        "name": "Newton subway",
        "host_name": "Elizabeth",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Newton",
        "latitude": 1.31125,
        "longitude": 103.83816,
        "room_type": "Private room",
        "price": 65
      },
      {
        "id": 15,
        "name": "Sentosa Hilltop",
        "host_name": "K2 Guesthouse",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Merah",
        "latitude": 1.28976,
        "longitude": 103.80896,
        "room_type": "Private room",
        "price": 44
      },
      {
        "id": 16,
        "name": "REDHILL INSEAD",
        "host_name": "K2 Guesthouse",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Merah",
        "latitude": 1.28677,
        "longitude": 103.81244,
        "room_type": "Private room",
        "price": 40
      },
      {
        "id": 17,
        "name": "Redhill MRT Orange",
        "host_name": "K2 Guesthouse",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Merah",
        "latitude": 1.28537,
        "longitude": 103.81087,
        "room_type": "Private room",
        "price": 31
      },
      {
        "id": 18,
        "name": "BridgeWater EXPO",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34943,
        "longitude": 103.95951,
        "room_type": "Private room",
        "price": 49
      },
      {
        "id": 19,
        "name": "Authentic Peranakan Shophouse",
        "host_name": "Aresha",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Geylang",
        "latitude": 1.3142,
        "longitude": 103.90232,
        "room_type": "Private room",
        "price": 81
      },
      {
        "id": 20,
        "name": "Newton Train Station",
        "host_name": "Elizabeth",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Newton",
        "latitude": 1.3115,
        "longitude": 103.83759,
        "room_type": "Private room",
        "price": 60
      },
      {
        "id": 21,
        "name": "Newton MRT",
        "host_name": "Elizabeth",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Newton",
        "latitude": 1.31159,
        "longitude": 103.83805,
        "room_type": "Private room",
        "price": 60
      },
      {
        "id": 22,
        "name": "Heritage Apartment Orchard",
        "host_name": "Adi",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "River Valley",
        "latitude": 1.29345,
        "longitude": 103.83562,
        "room_type": "Private room",
        "price": 56
      },
      {
        "id": 23,
        "name": "Lincoln Street",
        "host_name": "Belinda",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34838,
        "longitude": 103.9592,
        "room_type": "Private room",
        "price": 104
      },
      {
        "id": 24,
        "name": "New Vauxhall",
        "host_name": "Susan",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Tampines",
        "latitude": 1.34816,
        "longitude": 103.93238,
        "room_type": "Private room",
        "price": 37
      },
      {
        "id": 25,
        "name": "Boon Lay MRT",
        "host_name": "Lena",
        "neighbourhood_group": "West Region",
        "neighbourhood": "Jurong West",
        "latitude": 1.34135,
        "longitude": 103.71139,
        "room_type": "Private room",
        "price": 53
      },
      {
        "id": 26,
        "name": "Boutiquet Arena",
        "host_name": "Frederic",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Timah",
        "latitude": 1.33171,
        "longitude": 103.79383,
        "room_type": "Entire home/apt",
        "price": 276
      },
      {
        "id": 27,
        "name": "Oxford Street View",
        "host_name": "Roger",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Rochor",
        "latitude": 1.30109,
        "longitude": 103.85234,
        "room_type": "Private room",
        "price": 167
      },
      {
        "id": 28,
        "name": "Holland Village",
        "host_name": "Grace",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Bukit Timah",
        "latitude": 1.31016,
        "longitude": 103.79853,
        "room_type": "Private room",
        "price": 100
      },
      {
        "id": 29,
        "name": "HDB prime town",
        "host_name": "Audrey",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Queenstown",
        "latitude": 1.30901,
        "longitude": 103.79639,
        "room_type": "Shared room",
        "price": 208
      },
      {
        "id": 30,
        "name": "Homestay Serangoon",
        "host_name": "Shirlnet",
        "neighbourhood_group": "North-East Region",
        "neighbourhood": "Serangoon",
        "latitude": 1.36743,
        "longitude": 103.87288,
        "room_type": "Private room",
        "price": 26
      },
      {
        "id": 31,
        "name": "Condo Beach",
        "host_name": "Jimm",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Bedok",
        "latitude": 1.30792,
        "longitude": 103.92287,
        "room_type": "Entire home/apt",
        "price": 176
      },
      {
        "id": 32,
        "name": "East Coast Boutique",
        "host_name": "Richard",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Marine Parade",
        "latitude": 1.30377,
        "longitude": 103.89956,
        "room_type": "Private room",
        "price": 165
      },
      {
        "id": 33,
        "name": "Cozy Estate",
        "host_name": "Christiana",
        "neighbourhood_group": "North-East Region",
        "neighbourhood": "Serangoon",
        "latitude": 1.35001,
        "longitude": 103.87161,
        "room_type": "Private room",
        "price": 44
      },
      {
        "id": 34,
        "name": "Good sea view Resort",
        "host_name": "Sharon",
        "neighbourhood_group": "East Region",
        "neighbourhood": "Pasir Ris",
        "latitude": 1.37527,
        "longitude": 103.94562,
        "room_type": "Private room",
        "price": 206
      },
      {
        "id": 35,
        "name": "MRT Orchard Road",
        "host_name": "Homestay In Central Singapore",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Toa Payoh",
        "latitude": 1.34143,
        "longitude": 103.84945,
        "room_type": "Private room",
        "price": 51
      },
      {
        "id": 36,
        "name": "Chinatown Queen",
        "host_name": "Kaurus",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Outram",
        "latitude": 1.28315,
        "longitude": 103.84213,
        "room_type": "Private room",
        "price": 44
      },
      {
        "id": 37,
        "name": "Common's Estate",
        "host_name": "Immellymel",
        "neighbourhood_group": "North-East Region",
        "neighbourhood": "Punggol",
        "latitude": 1.39963,
        "longitude": 103.9064,
        "room_type": "Private room",
        "price": 167
      },
      {
        "id": 38,
        "name": "Cosy Bright Empire",
        "host_name": "Jenny",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Queenstown",
        "latitude": 1.28342,
        "longitude": 103.78585,
        "room_type": "Private room",
        "price": 128
      },
      {
        "id": 39,
        "name": "Orchard Luxury",
        "host_name": "Dara",
        "neighbourhood_group": "Central Region",
        "neighbourhood": "Tanglin",
        "latitude": 1.30292,
        "longitude": 103.82253,
        "room_type": "Entire home/apt",
        "price": 2604
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hotel', null, {});
  }
};