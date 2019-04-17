"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "boxes",
      [
        {
          //id: 1,
          name: "Apple Box",
          image: "techno.png",
          price: 13,
          discount: 0,
          order: 1
        },
        {
          //id: 2,
          name: "Smartphone Box",
          image: "smartphone.png",
          price: 5,
          discount: 0,
          order: 4
        },
        {
          name: "Woman Box",
          image: "woman.png",
          price: 5,
          discount: 0,
          order: 13
        },
        {
          name: "Gaming Box",
          image: "gaming.png",
          price: 5,
          discount: 0,
          order: 7,
        },
        {
          name: "Sport Box",
          image: "sport.png",
          price: 7,
          discount: 0,
          order: 6
        },
        {
          name: "All for Man",
          image: "allforman.png",
          price: 5,
          discount: 0,
          order: 14
        },
        {
          name: "Toy Box",
          image: "toy.png",
          price: 2,
          discount: 0,
          order: 3
        },
        {
          name: "Cheap Box",
          image: "accessories.png",
          price: 1,
          discount: 0,
          order: 15
        },
        {
          name: "Photo Box",
          image: "arts.png",
          price: 8,
          discount: 0,
          order: 9
        },
        {
          name: "Housing Items",
          image: "housing.png",
          price: 4,
          discount: 0,
          order: 11
        },
        {
          name: "Brand Shoes Box",
          image: "yezzy.png",
          price: 55,
          discount: 0,
          order: 12
        },
        {
          name: "Luxury watches",
          image: "luxury.png",
          price: 39,
          discount: 0,
          order: 2
        },
        {
          name: "Magic Box",
          image: "supreme.png",
          price: 55,
          discount: 0,
          order: 8
        },
        {
          name: "PC Parts Box",
          image: "pcparts.png",
          price: 19,
          discount: 0,
          order: 5
        },
        {
          name: "Mystery Box",
          image: "mystery.png",
          price: 17,
          discount: 0,
          order: 10
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("boxes", null, {});
  }
};
