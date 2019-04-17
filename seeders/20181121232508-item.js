"use strict";

module.exports = {
  up: (
    queryInterface,
    Sequelize
  ) => {
    return queryInterface.bulkInsert(
      "items",
      [
        //APPLE BOX 1
        {
          name:
            "iMac Retina (27'')",
          price: 2230,
          image:
            "imacretina27.jpg"
        },
        {
          name:
            "MacBook Pro i7 (15'')",
          price: 2199,
          image:
            "macbookproi7.jpg"
        },
        {
          name:
            "iPhone Xs",
          price: 1690,
          image:
            "iphonexs.jpg"
        },
        {
          name:
            "MacBook Air Gold (13'')",
          price: 1249,
          image:
            "macbookairgold.jpg"
        },
        {
          name:
            "iPad Pro 256GB",
          price: 949,
          image:
            "ipadpro.jpg"
        },
        {
          name:
            "Mac mini i5",
          price: 649,
          image:
            "macminii5.jpg"
        },
        {
          name:
            "iPad mini 4 128GB",
          price: 379,
          image:
            "ipadmini4.jpg"
        },
        {
          name:
            "Apple Smartwatch 4",
          price: 375,
          image:
            "apple-smartwatch.jpg"
        },
        {
          name:
            "iPhone 6s 128 GB",
          price: 275,
          image:
            "apple-iphone-6s-plus-64gb-unlocked-rose-gold.png"
        },
        {
          name:
            "AirPods",
          price: 249,
          image:
            "airpods.jpg"
        },
        {
          name:
            "Apple tv 4k",
          price: 190,
          image:
            "apple-tv.jpg"
        },
        {
          name:
            "Magic Wireless Keyboard",
          price: 86,
          image:
            "magic-keyboard.jpg"
        },
        {
          name:
            "Magic Wireless Mouse",
          price: 78,
          image:
            "magic-mouse.jpg"
        },
        {
          name:
            "App Store & iTunes Gift Card",
          price: 75,
          image:
            "gift-card-75.jpg"
        },
        {
          name:
            "EarPods with Lightning Connector",
          price: 31,
          image:
            "earpods.jpg"
        },
        {
          name:
            "MacBook Case (From 11'' to 15'')",
          price: 28,
          image:
            "wood.jpg"
        },
        {
          name:
            "App Store & iTunes Gift Card",
          price: 25,
          image:
            "gift-card-25.jpg"
        },
        {
          name:
            "Lightning to Digital AV Adapter",
          price: 10,
          image:
            "light.jpg"
        },
        {
          name:
            "AirPods Case",
          price: 6,
          image:
            "case.jpg"
        },
        {
          name:
            "Splitter Charger / Audio",
          price: 3,
          image:
            "konektor.jpg"
        },

        //SMARTPHONE BOX 21
        {
          name:
            "iPhone Xs ",
          price: 1690,
          image:
            "iphonexs.jpg"
        },
        {
          name:
            "iPhone X-256 GB",
          price: 980,
          image:
            "iphonex256gb.jpg"
        },
        {
          name:
            "Samsung Galaxy S9+",
          price: 1141,
          image:
            "samsunggalaxys9plus62dualsim.png"
        },
        {
          name:
            "Samsung Galaxy Note9",
          price: 1250,
          image:
            "gaki.jpg"
        },
        {
          name:
            "Huawei Mate 20 Pro",
          price: 1099,
          image:
            "huaweimate20progsmunlocked6g.jpg"
        },
        {
          name:
            "BlackBerry KEYone",
          price: 299,
          image:
            "blak.jpg"
        },
        {
          name:
            "Xiaomi Redmi Note 5",
          price: 199,
          image:
            "xiaomiredminote564gbblackdua.jpg"
        },
        {
          name:
            "Xiaomi Redmi",
          price: 155,
          image:
            "xaomiredmi.jpg"
        },
        {
          name:
            "Worker Cat Phone",
          price: 119,
          image:
            "catworkerphone.jpg"
        },
        {
          name:
            "Nokia 3310",
          price: 59,
          image:
            "nokia3310.jpg"
        },
        {
          name:
            "MicroSD Card 128GB",
          price: 23,
          image:
            "samsungsdcard.jpg"
        },
        {
          name:
            "Bluetooth Headphones",
          price: 19,
          image:
            "bluetoothheadphones.jpg"
        },
        {
          name:
            "iPhone chargers",
          price: 14,
          image:
            "iphonechargers.jpg"
        },
        {
          name:
            "Wall Charger Android",
          price: 9,
          image:
            "wallchargercanyso21adualport.jpg"
        },
        {
          name:
            "Headphone Adapter Connector",
          price: 15,
          image:
            "aukeacompatiblephoneheadphon.jpg"
        },
        {
          name:
            "EarBuds",
          price: 11,
          image:
            "panasonicearbuds.jpg"
        },
        {
          name:
            "Power Bank 10000mAh",
          price: 37,
          image:
            "10000mahqslimpowerbankportab.jpg"
        },
        {
          name:
            "Portable Charger 5000mAh",
          price: 15,
          image:
            "portablecharger5000.jpg"
        },
        {
          name:
            "iPhone Xs case",
          price: 13,
          image:
            "iphonexscase.jpg"
        },
        {
          name:
            "Galaxy S9 Case",
          price: 10,
          image:
            "galaxys9case.jpg"
        },
        {
          name:
            "Cell Phone Car Holder",
          price: 17,
          image:
            "avantreecellphoneclipholder.jpg"
        },
        {
          name:
            "Wireless charger",
          price: 20,
          image:
            "wirelesscharger.jpg"
        },
        {
          name:
            "Batman Phone Grip & Stand",
          price: 1,
          image:
            "batmanphonegrip.jpg"
        },
        {
          name:
            "Phone Grip Multi Color",
          price: 1,
          image:
            "phonegripmulticolor.jpg"
        },
        
        // WOMAN BOX 45
        {
          name:
            "Louis Vuitton Handbag",
          price: 2288,
          image:
            "torba-LV.jpg"
        },
        {
          name:
            "Louis Vuitton Shoes",
          price: 1550,
          image:
            "LV-shoes.jpg"
        },
        {
          name:
            "Oval Sapphire Bracelet",
          price: 746,
          image:
            "ovalbracelet.jpg"
        },
        {
          name:
            "Glamourous Prom Dress",
          price: 190,
          image:
            "womenpromdress.jpg"
        },
        {
          name:
            "Dior' Eau de Parfum",
          price: 180,
          image:
            "diormissdioreaudeparfum50ml.jpg"
        },
        {
          name:
            "Michael Kors Leather Handbag",
          price: 152,
          image:
            "michaelkorsemmyladiessmallle.jpg"
        },
        {
          name:
            "Dressing & Make Up Table",
          price: 130,
          image:
            "makeuptable.jpg"
        },
        {
          name:
            "Huda Beauty - Nude Palette",
          price: 105,
          image:
            "hudabeautythenewnudepalette.jpg"
        },
        {
          name:
            "Tatcha Protective Primer",
          price: 90,
          image:
            "tatchathesilkcanvasprotectiv.jpg"
        },
        {
          name:
            "Fujifilm Instant Camera",
          price: 60,
          image:
            "fujifilminstaxmini9icebluein.jpg"
        },
        {
          name:
            "UV Nail Dryer",
          price: 42,
          image:
            "nails.jpg"
        },
        {
          name:
            "Dream Pairs High Heels",
          price: 37,
          image:
            "dreampairheels.jpg"
        },
        {
          name:
            "Grand Cosmetics MASCARA",
          price: 25,
          image:
            "mascara.jpg"
        },
        {
          name:
            "Sojos Sunglasses",
          price: 20,
          image:
            "sojoscateyemirroredflatlense.jpg"
        },
        {
          name:
            "Kimono",
          price: 15,
          image:
            "kimono.jpg"
        },
        {
          name:
            "Bra & Panty Set",
          price: 11,
          image:
            "bra-underwear.jpg"
        },
        {
          name:
            "Hair Bobble Set",
          price: 7,
          image:
            "onddervelvetscrunchieshairbo.jpg"
        },
        {
          name:
            "Pandora Bracelet",
          price: 2,
          image:
            "pandorabracelet.jpg"
        },
        {
          name:
            "Crystal Bracelet",
          price: 2,
          image:
            "crystalbracelet.png"
        },
        {
          name:
            "Stainless Steel Ring",
          price: 1,
          image:
            "rwrw.jpg"
        },


        // GAMING BOX 65
        {
          name:
            "Asus Scar II Gaming Laptop",
          price: 1800,
          image:
            "asusscarlaptop.jpg"
        },
        {
          name:
            "Intel Gaming PC I5/GTX 1060",
          price: 899,
          image:
            "intelgamingpc.jpg"
        },
        {
          name:
            "AMD Gaming PC FX6300/R7 240",
          price: 549,
          image:
            "amdgamingpc.jpg"
        },
        {
          name:
            "Xbox One 1TB Console",
          price: 521,
          image:
            "xboxone1tbconsole.jpg"
        },
        {
          name:
            "LG Gaming Monitor 144Hz (34'')",
          price: 493,
          image:
            "lggamingmonitor.jpg"
        },
        {
          name:
            "PlayStation 4 Slim ",
          price: 340,
          image:
            "gamercaseplaystation4slim1tb.jpg"
        },
        {
          name:
            "Nintendo Switch",
          price: 299,
          image:
            "nintendoswitch.jpg"
        },
        {
          name:
            "Merax Gaming Chair",
          price: 180,
          image:
            "meraxgamingchair.jpg"
        },
        {
          name:
            "PC Racing Wheel",
          price: 84,
          image:
            "pcracingwheel.jpg"
        },
        {
          name:
            "1 Year PSN Membership Card",
          price: 59,
          image:
            "1yearplaystationpluspsnmembe.jpg"
        },
        {
          name:
            "HyperX Cloud Gaming Headset",
          price: 49,
          image:
            "hyperxcloudheadset.jpg"
        },
        {
          name:
            "XBox 6 Months Free Membership",
          price: 39,
          image:
            "xbox6months.jpg"
        },
        {
          name:
            "PlayStation 4 Controller",
          price: 34,
          image:
            "dualshock4wirelesscontroller.jpg"
        },
        {
          name:
            "Xbox Wireless Controller",
          price: 32,
          image:
            "xboxwirelesscontroller.jpg"
        },
        {
          name:
            "Gaming Keyboard",
          price: 20,
          image:
            "gamingkeyboard.jpg"
        },
        {
          name:
            "Redragon Gaming Mouse",
          price: 22,
          image:
            "redragonmouse.jpg"
        },
        {
          name:
            "GTA V PC GAME",
          price: 19,
          image:
            "gta.jpg"
        },
        {
          name:
            "PUBG PC GAME",
          price: 19,
          image:
            "pubg.jpg"
        },
        {
          name:
            "Fidget Spinner Rainbow",
          price: 2,
          image:
            "rainbowspinner.jpg"
        },
        {
          name:
            "Stereo Gaming Headphones",
          price: 20,
          image:
            "stereogamingheadphones.jpg"
        },
        {
          name:
            "Rakoon Gaming Mousepad",
          price: 10,
          image:
            "rakoonmousepad.jpg"
        },
        {
          name:
            "Random Steam Key",
          price: 1,
          image:
            "randomsteamkey.jpg"
        },

        //SPORTS BOX 87
        {
          name:
            "Home Gym System",
          price: 1020,
          image:
            "home-gym.jpg"
        },
        {
          name:
            "Crusher Mountain Bike",
          price: 890,
          image:
            "crusherbike.jpg"
        },
        {
          name:
            "Goplus Treadmill",
          price: 499,
          image:
            "treadmill.jpg"
        },
        {
          name:
            "Weight Lifting Shoes",
          price: 240,
          image:
            "weightliftingshoes.jpg"
        },
        {
          name:
            "Patriots NFL Helmet",
          price: 225,
          image:
            "helmet-patriots.jpg"
        },
        {
          name:
            "Mercurial Superfly 360",
          price: 149,
          image:
            "mercurialsuperfly.jpg"
        },
        {
          name:
            "Lebron James Jersey",
          price: 121,
          image:
            "James.jpg"
        },
        {
          name:
            "Messi Jersey",
          price: 123,
          image:
            "messijersey.jpg"
        },
        {
          name:
            "Wilson NFL Ball",
          price: 98,
          image:
            "nfl.jpg"
        },
        {
          name:
            "Adidas Match Ball 5",
          price: 92,
          image:
            "adidasfinale17ombmatchball.jpg"
        },
        {
          name:
            "RockBirds Skateboard (31'')",
          price: 79,
          image:
            "skateboard.jpg"
        },
        {
          name:
            "Kimono",
          price: 64,
          image:
            "kimono (1).jpg"
        },
        {
          name:
            "Venum Challenger 2.0 Boxing Gloves",
          price: 55,
          image:
            "venumchallenger20boxingglove.jpg"
        },
        {
          name:
            "Under Armour Hustle 3.0 Backpack",
          price: 54,
          image:
            "underarmourbackpackhustle.jpg"
        },
        {
          name:
            "Basketball",
          price: 39,
          image:
            "basketball.jpg"
        },
        {
          name:
            "Women's Training Shoes",
          price: 37,
          image:
            "womenstrainingshoes.jpg"
        },
        {
          name:
            "Cristiano Ronaldo Hoodie",
          price: 34,
          image:
            "ronaldo-juventus.jpg"
        },
        {
          name:
            "Wilson Tennies Racquet",
          price: 26,
          image:
            "requet.jpg"
        },
        {
          name:
            "Chicago Bulls Shorts",
          price: 24,
          image:
            "buls-shorts.jpg"
        },
        {
          name:
            "Roller",
          price: 21,
          image:
            "roler-2.jpg"
        },
        {
          name:
            "Swimming Goggles Anti Fog",
          price: 14,
          image:
            "swimminggoggleswithantifog.jpg"
        },
        {
          name:
            "Martial Arts Hand Wraps",
          price: 7,
          image:
            "handwraps.jpg"
        },
        {
          name:
            "Star Player Action Figures",
          price: 3,
          image:
            "actionfigure.jpg"
        },
        {
          name:
            "Small Fitness Bag",
          price: 1,
          image:
            "fitnessbag.png"
        },

        // ALL FOR MAN BOX 111
        {
          name:
            "Louis Vuitton Purse",
          price: 1290,
          image:
            "louisvuittonpurse.jpg"
        },
        {
          name:
            "Dita sunglasses",
          price: 890,
          image:
            "ditasunglasses.jpg"
        },
        {
          name:
            "Versace Jacket",
          price: 625,
          image:
            "versace.jpg"
        },
        {
          name:
            "Moncler Vest Hooded",
          price: 600,
          image:
            "monclerwesthooded.jpg"
        },
        {
          name:
            "Adjustable Dial Dumbbell",
          price: 349,
          image:
            "adjustabledumbbell.jpg"
        },
        {
          name:
            "Paul Smith Boots",
          price: 316,
          image:
            "paulsmithboots.jpg"
        },
        {
          name:
            "Versace shirt",
          price: 300,
          image:
            "versaceshirt.jpg"
        },
        {
          name:
            "Prada Belt",
          price: 250,
          image:
            "pradablet.png"
        },
        {
          name:
            "Emporio Armani Jeans",
          price: 199,
          image:
            "emporioarmanijeans.jpg"
        },
        {
          name:
            "Hugo Boss Perfume",
          price: 87,
          image:
            "hugobossperfume.jpg"
        },
        {
          name:
            "BINSSAW Men's Watch",
          price: 59,
          image:
            "binssawwatch.jpg"
        },
        {
          name:
            "Dolce Gabbana Underwear",
          price: 39,
          image:
            "dolcegabbanaunderwear.jpg"
        },
        {
          name:
            "Gold Necktie",
          price: 30,
          image:
            "darknavyandgoldnecktiepocket.jpg"
        },
        {
          name:
            "Travando wallet",
          price: 26,
          image:
            "travandowallet.jpg"
        },
        {
          name:
            "Gillette Styler Set",
          price: 19,
          image:
            "gillettestyler.jpg"
        },
        {
          name:
            "Socks",
          price: 3,
          image:
            "socks.jpg"
        },
        {
          name:
            "Stainless Steel Bracelet",
          price: 2,
          image:
            "stainlesssteelbracelet.jpg"
        },



        // TOY BOX 128
        {
          name:
            "Lego Star Wars Spaceship",
          price: 327,
          image:
            "legostarwarsspaceship.jpg"
        },
        {
          name:
            "Big Mercedes Remote Control Car",
          price: 276,
          image:
            "mercedestoy.jpg"
        },
        {
          name:
            "Pirates Of The Caribbean Ship",
          price: 150,
          image:
            "piratesship.jpg"
        },
        {
          name:
            "Star Wars Electronic Helmet",
          price: 90,
          image:
            "star-wars-mask.jpg"
        },
        {
          name:
            "Smartwatch",
          price: 70,
          image:
            "smartwatch.jpg"
        },
        {
          name:
            "Robot Remote Control",
          price: 50,
          image:
            "robot.jpg"
        },
        {
          name:
            "Mini Drone",
          price: 45,
          image:
            "drone-for-kids.jpg"
        },
        {
          name:
            "Chess Board",
          price: 40,
          image:
            "chess.jpg"
        },
        {
          name:
            "Barbie & Ken",
          price: 35,
          image:
            "barbieken.jpg"
        },
        {
          name:
            "Transport Car Truck",
          price: 30,
          image:
            "truck.jpg"
        },
        {
          name:
            "Helicopter Remote Control",
          price: 25,
          image:
            "helicopterrc.jpg"
        },
        {
          name:
            "Lego Police Station Set",
          price: 20,
          image:
            "legopolicestation.jpg"
        },
        {
          name:
            "Pubg Action Figure",
          price: 19,
          image:
            "pubgactionfigure.jpg"
        },
        {
          name:
            "Monopoly Fortnite",
          price: 17,
          image:
            "monopolyfortnite.jpg"
        },
        {
          name:
            "Minion",
          price: 15,
          image:
            "minion.jpg"
        },
        {
          name:
            "Gun Blaster",
          price: 13,
          image:
            "gun.jpg"
        },
        {
          name:
            "Karambit CS GO Knife Toy",
          price: 12,
          image:
            "karambit.jpg"
        },
        {
          name:
            "Robot Transformer",
          price: 11,
          image:
            "legorobot.jpg"
        },
        {
          name:
            "Ludo",
          price: 9,
          image:
            "ludo.jpg"
        },
        {
          name:
            "Learn English Set For Kids",
          price: 8,
          image:
            "learnenglish.jpg"
        },
        {
          name:
            "Thug Life Sunglasses",
          price: 2,
          image:
            "thuglife.jpg"
        },
        {
          name:
            "Bouncing Balls",
          price: 1,
          image:
            "highbouncingballs (1).jpg"
        },
        {
          name:
            "Electric Shock Gum",
          price: 1,
          image:
            "shockgum.jpg"
        },

        {
          name:
            "Walkie Talkie",
          price: 20,
          image:
            "walkietalkie.jpg"
        },
        {
          name:
            "Rubics Cube",
          price: 7,
          image:
            "rubicscube.jpg"
        },

        // CHEAP BOX 153
        {
          name:
            "Nintendo Switch Gray",
          price: 299,
          image:
            "nintendoswitch.jpg"
        },
        {
          name:
            "Apple Smartwatch 3",
          price: 268,
          image:
            "apple-smartwatch-3.jpg"
        },
        {
          name:
            "Samsung Tablet Pro 10''",
          price: 164,
          image:
            "samsung-tab-pro.jpg"
        },
        {
          name:
            "Sleeping bag",
          price: 20,
          image:
            "sleepingbag.jpg"
        },
        {
          name:
            "Zippo lighter",
          price: 19,
          image:
            "zippolighter.png"
        },
        {
          name:
            "Star Wars T-shirt",
          price: 10,
          image:
            "starwartshirt.png"
        },
        {
          name:
            "Swiss knife",
          price: 10,
          image:
            "swissknife.jpg"
        },
        {
          name:
            "Spiderman Poster",
          price: 9,
          image:
            "spiderman-poster.jpg"
        },
        {
          name:
            "Black Sunglasses",
          price: 9,
          image:
            "sunglasses.jpg"
        },
        {
          name:
            "SanDisk Flash Drive 16GB",
          price: 8,
          image:
            "SDCZ4832-GB-sandisk-32gb-ultra-usb-3-0-flash-drive1.jpg"
        },
        {
          name:
            "Beard oil",
          price: 7,
          image:
            "beardoil.jpg"
        },
        {
          name:
            "Fidget spinner",
          price: 7,
          image:
            "fidgetspinner.jpg"
        },
        {
          name:
            "Adaptive Samsung Charger",
          price: 6,
          image:
            "adaptivesmasungcharger.jpg"
        },
        {
          name:
            "Flashlight",
          price: 5,
          image:
            "flashlight.jpg"
        },
        {
          name:
            "Brown Wallet",
          price: 5,
          image:
            "leathermoneyanidholder.jpg"
        },
        {
          name:
            "Winter gloves",
          price: 1,
          image:
            "wintergloves.png"
        },
        {
          name:
            "BMW Car amblem",
          price: 2,
          image:
            "bmwcaramblem.jpg"
        },
        {
          name:
            "Tennis ball",
          price: 2,
          image:
            "tennisball.jpg"
        },
        {
          name:
            "Car sticker",
          price: 1,
          image:
            "carsticker.jpg"
        },
        {
          name:
            "Black onix bracelet",
          price: 1,
          image:
            "blackonixbracelet.jpg"
        },
        {
          name:
            "Cool Android Digital Sticker",
          price: 0.3,
          image:
            "Android-Free-Digital-Sticker.png"
        },
        {
          name:
            "Las Vegas Digital Sticker",
          price: 0.2,
          image:
            "Las-Vegas-Free-Digital-Sticker.png"
        },
        {
          name:
            "Angry Digital Sticker",
          price: 0.1,
          image:
            "Angry-Digital-Sticker.png"
        },




        // Photo Box 176
        {
          name:
            "Canon 5D Mark IV (Body)",
          price: 2290,
          image:
            "81TboyVLuoL._SL1500_.jpg"
        },
        {
          name:
            "Panasonic G9 Mirrorless + Leica 12-60mm",
          price: 1987,
          image:
            "91H3cC0pusL._SL1500_.jpg"
        },
        {
          name:
            "DJI Pro Gimbal V3",
          price: 845,
          image:
            "gimbal.jpg"
        },
        {
          name:
            "VOOCO Drone with 4K Camera",
          price: 670,
          image:
            "71KbetVv5IL._SL1500_.jpg"
        },
        {
          name:
            "Nikon D5600 + Nikon 18-55mm VR Lens",
          price: 646,
          image:
            "51lM2EpelSL (1).jpg"
        },
        {
          name:
            "Sennheiser EW 112P Microphone System",
          price: 599,
          image:
            "senhaizer-lavalier-wireles.jpg"
        },
        {
          name:
            "Panasonic LX10 Vlog Camera",
          price: 549,
          image:
            "71BxTDQH0pL._SL1500_.jpg"
        },
        {
          name:
            "GoPro HERO6",
          price: 345,
          image:
            "Go-pro-6.jpg"
        },
        {
          name:
            "Canon Low Light Lens f/1.4",
          price: 340,
          image:
            "7159lbHqf1L._SL1500_.jpg"
        },
        {
          name:
            "YI 4k Mirrorless Camera",
          price: 289,
          image:
            "leika-mirrorless.jpg"
        },
        {
          name:
            "Capsaver LED Panel Lighting Set",
          price: 264,
          image:
            "LED-Panel-Photographic-Lighting.jpg"
        },
        {
          name:
            "Logitech BRIO Ultra HD Webcam",
          price: 178,
          image:
            "61-Iy-EEw-Rc-ZL-SL1500.jpg"
        },
        {
          name:
            "ND32 Filter Hoya 49mm-82mm",
          price: 71,
          image:
            "s-l500.jpg"
        },
        {
          name:
            "JOBY 2.2lbs Camera Holder",
          price: 52,
          image:
            "51-Ep-C1akpp-L-SL1280.jpg"
        },
        {
          name:
            "ZOMEI Q111 Tripod",
          price: 46,
          image:
            "tripod.jpg"
        },
        {
          name:
            "BOYA Compact Microphone",
          price: 39,
          image:
            "boya-mic.jpg"
        },
        {
          name:
            "Go Pro Mount Set",
          price: 14,
          image:
            "go-pro-straps-set.jpg"
        },
        {
          name:
            "Universal Phone Holder",
          price: 4,
          image:
            "phonetripod.jpg"
        },
        {
          name:
            "Camera Screw",
          price: 2,
          image:
            "camera-screw.jpg"
        },


        // HOUSING BOX 195
        {
          name:
            "Lawn Mower",
          price: 459,
          image:
            "lawnmower.jpg"
        },
        {
          name:
            "Cangshan Knife Set",
          price: 230,
          image:
            "knife-set.jpg"
        },
        {
          name:
            "Cookware Set",
          price: 182,
          image:
            "set.jpg"
        },
        {
          name:
            "Nutri Bullet Rx N17",
          price: 149,
          image:
            "nutribulletpro13.png"
        },
        {
          name:
            "VonHaus Premium Tool Kit",
          price: 136,
          image:
            "tool-set.jpg"
        },
        {
          name:
            "Professional Walnut Cutting Board",
          price: 129,
          image:
            "walnutcuttingboard.jpg"
        },
        {
          name:
            "Samsung Microwave 23 Litre",
          price: 110,
          image:
            "micro.jpg"
        },
        {
          name:
            "9 in 1 Instant Pot Cooker",
          price: 99,
          image:
            "COOKER.jpg"
        },
        {
          name:
            "Ninja Blender",
          price: 85,
          image:
            "ninja.jpg"
        },
        {
          name:
            "Levoit House Lamp",
          price: 60,
          image:
            "Levoit-House-Lamp.jpg"
        },
        {
          name:
            "Toaster",
          price: 45,
          image:
            "toster.jpg"
        },
        {
          name:
            "Wall Painting",
          price: 35,
          image:
            "paint.jpg"
        },
        {
          name:
            "Hair Straightener",
          price: 28,
          image:
            "hair-straighener.jpg"
        },
        {
          name:
            "Coockbook",
          price: 25,
          image:
            "coockbook.png"
        },
        {
          name:
            "Remington Hair Dryer",
          price: 20,
          image:
            "remington.jpg"
        },
        {
          name:
            "Bathrobe",
          price: 19,
          image:
            "Grey-Bath-Robes.png"
        },
        {
          name:
            "Ceramic Vase",
          price: 16,
          image:
            "vase.jpg"
        },
        {
          name:
            "Mini Trimmer for Men",
          price: 10,
          image:
            "trimer.jpg"
        },
        {
          name:
            "Welcome mat",
          price: 6,
          image:
            "welcomemat.png"
        },
        {
          name:
            "Electric Toothbrush",
          price: 2,
          image:
            "electric-toothbrush.jpg"
        },
        {
          name:
            "Cookie Cutter",
          price: 1,
          image:
            "17stylescookiecuttermoldsand.png"
        },

        // SHOES BOX 216
        {
          name:
            "Gucci Elegant",
          price: 1280,
          image:
            "gucci-elegant.jpg"
        },
        {
          name:
            "Louis Vuitton Silhouette",
          price: 1230,
          image:
            "louis-vuitton-rose-boots.jpg"
        },
        {
          name:
            "Adidas Yeezy Boost 350",
          price: 1125,
          image:
            "yeezy-boost.jpg"
        },
        {
          name:
            "Prada Leather Pumps",
          price: 753,
          image:
            "prada-pumps.jpg"
        },
        {
          name:
            "Louis Vuitton Haussmann Derby",
          price: 680,
          image:
            "tewtewewew.jpg"
        },
        {
          name:
            "Prada Fabric Sneakers",
          price: 646,
          image:
            "prada-red.jpg"
        },
        {
          name:
            "Louis Vuitton Trocadero",
          price: 620,
          image:
            "trocadero-shoes.jpg"
        },
        {
          name:
            "Gucci Women's Sneakers",
          price: 585,
          image:
            "gucci-shoes.jpg"
        },
        {
          name:
            "Nike Air Jordan 1 Home",
          price: 374,
          image:
            "Homage-Jordan-1s.jpg"
        },
        {
          name:
            "D&G King Slippers",
          price: 310,
          image:
            "dolce-gabana-king-slipers.jpg"
        },
        {
          name:
            "Nike Elite Basketball",
          price: 299,
          image:
            "NIKE.jpg"
        },
        {
          name:
            "Caterpillar Boots",
          price: 105,
          image:
            "caterpillar-boots.jpg"
        },
        {
          name:
            "Victoria Suede Boots",
          price: 92,
          image:
            "boots-suede.jpg"
        },
        {
          name:
            "NIKE Benassi Solarsoft",
          price: 86,
          image:
            "benassi-solarsoft-slide-USA-2.jpg"
        },
        {
          name:
            "Converse All Star Rose",
          price: 53,
          image:
            "all-star-rose.jpg"
        },
        {
          name:
            "Adidas Superstar",
          price: 35,
          image:
            "superstar.jpg"
        },
        {
          name:
            "Converse All Star Classic",
          price: 33,
          image:
            "converse-all-star-ox-u0ld.jpg"
        },
        {
          name:
            "Crocs Unisex",
          price: 18,
          image:
            "Crox-unisex.jpg"
        },
        {
          name:
            "Pro Pvc Insoles",
          price: 15,
          image:
            "Pro-Ortopedic-Insoles.jpg"
        },

        // WATTCH 235
        {
          name:
            "Rolex Oyster 1951 Renewed",
          price: 2135,
          image:
            "rolex-old.jpg"
        },
        {
          name:
            "Glycine Airman",
          price: 1175,
          image:
            "1111.jpg"
        },
        {
          name:
            "Mido",
          price: 878,
          image:
            "mido-watch.jpg"
        },
        {
          name:
            "Seiko Mechanical",
          price: 505,
          image:
            "seiko-500.jpg"
        },
        {
          name:
            "Samsung Gear S3",
          price: 252,
          image:
            "samsung-gear-3-frontier-kf-1-800px.jpg"
        },
        {
          name:
            "Wood Watch",
          price: 219,
          image:
            "wood-watch.jpg"
        },
        {
          name:
            "Mechanical Bauhaus",
          price: 209,
          image:
            "mech-bau.jpg"
        },
        {
          name:
            "MVMT Classis",
          price: 110,
          image:
            "mvmtwatch.jpg"
        },
        {
          name:
            "Seiko Calendar",
          price: 95,
          image:
            "seiko-watch.jpg"
        },
        {
          name:
            "G-Shock Water Resistant",
          price: 80,
          image:
            "G-SHOCK.jpg"
        },
        {
          name:
            "Rose Modern Wall Clock",
          price: 70,
          image:
            "rose-wall-clock.jpg"
        },
        {
          name:
            "The Wristwatch Book",
          price: 57,
          image:
            "wristwatch-book.jpg"
        },
        {
          name:
            "Modern Wall Clock",
          price: 20,
          image:
            "wall-clock.jpg"
        },
        {
          name:
            "Crrju Quartz Watch",
          price: 20,
          image:
            "crrju-watch.jpg"
        },
        {
          name:
            "BANGWEI SmartWatch",
          price: 20,
          image:
            "bangwei-smart.jpg"
        },

        //SUPREME
        {
          name:
            "MSI GTX 1080 SLI Gaming Laptop",
          price: 4430,
          image:
            "61p0-Mjvbd-GL-SL1000.jpg"
        },
        {
          name:
            "Rolex Air-King",
          price: 3450,
          image:
            "rolexa.jpg"
        },
        {
          name:
            "MacBook Pro i9 (15'')",
          price: 2702,
          image:
            "apple-mbp-15-header.jpg"
        },
        {
          name:
            "Samsung Curved Smart TV 4K (65 '')",
          price: 1890,
          image:
            "Samsung-curved-tv-Magic-case.jpg"
        },
        {
          name:
            "Asus Scar Gaming Laptop",
          price: 1800,
          image:
            "34-235-071-V20.jpg"
        },
        {
          name:
            "iPhone Xs",
          price: 1690,
          image:
            "iphonexs.jpg"
        },
        {
          name:
            "LG Smart TV 4K (55 '')",
          price: 1300,
          image:
            "tv.jpg"
        },
        {
          name:
            "Samsung Galaxy Note9",
          price: 1250,
          image:
            "gaki.jpg"
        },
        {
          name:
            "DJI Mavic Pro Drone",
          price: 890,
          image:
            "Drone-Magic-Case.jpg"
        },
        {
          name:
            "Nikon DSLR D3500 (Body)",
          price: 695,
          image:
            "Nikon-3500-Magic-Case.jpg"
        },
        {
          name:
            "Jordan Nike Men's Air 18 Retro",
          price: 505,
          image:
            "Nike-Air-Jordan-Magic-Case2.jpg"
        },
        {
          name:
            "LAMBORGHINI Hoverboard",
          price: 460,
          image:
            "lambi.jpg"
        },
        {
          name:
            "GoPro HERO7",
          price: 383,
          image:
            "hero-7.jpg"
        },
        {
          name:
            "Beats Solo3 Wireless",
          price: 300,
          image:
            "Beats-Solo3-Wireless-Magic-Case.jpg"
        },
        {
          name:
            "Apple Wireless Keyboard / Mouse",
          price: 275,
          image:
            "Apple-Wireless-Keyboard-Mouse-Magic-Case.jpg"
        },
        {
          name:
            "Supreme Sweatshirt",
          price: 259,
          image:
            "dux-supreme.jpg"
        },
        {
          name:
            "Virtual Reality Headset",
          price: 189,
          image:
            "virtual.jpg"
        },
        {
          name:
            "Poker Chip Set",
          price: 174,
          image:
            "poker.jpg"
        },
        {
          name:
            "Garmin Drive Navigation 50",
          price: 99,
          image:
            "garmin.jpg"
        },
        {
          name:
            "JBL Bluetooth Stereo Speaker",
          price: 74,
          image:
            "jbl-zvucnik.jpg"
        },
        {
          name:
            "Portable Video Game Console 8GB",
          price: 34,
          image:
            "portable-video-game.jpg"
        },
        {
          name:
            "Elephant Figure",
          price: 15,
          image:
            "slon-za-sajt.jpg"
        },

        // PC PARTS BOX 272

        {
          name:
            "Intel Core i9-7960X CPU",
          price: 1899,
          image:
            "71u0fslD3sL._SL1500_.jpg"
        },
        {
          name:
            "Asus RTX 2080ti 11GG",
          price: 1680,
          image:
            "81ovGqwv5QL._SL1500_.jpg"
        },
        {
          name:
            "Gigabyte 1080ti 11gb Turbo",
          price: 1399,
          image:
            "giga.jpg"
        },
        {
          name:
            "ASUS 4K 34'' Curved Monitor",
          price: 1219,
          image:
            "81D5ZKMPBcL._SL1500_.jpg"
        },
        {
          name:
            "Intel Core i9-7900X & GIGABYTE X299 Combo",
          price: 1180,
          image:
            "tet.jpg"
        },
        {
          name:
            "ASUS RTX 1080 Graphics Card",
          price: 999,
          image:
            "asus-rtx-1080.jpg"
        },
        {
          name:
            "i9-9900K CPU & Msi Z390 Combo",
          price: 814,
          image:
            "cpu-motherboard-combo.jpg"
        },
        {
          name:
            "AMD Ryzen 1950X CPU",
          price: 640,
          image:
            "51uxxTE6+NL.jpg"
        },
        {
          name:
            "Acer Predator 27'' Full HD 240Hz Monitor",
          price: 544,
          image:
            "81DZmU3Nd+L._SL1500_.jpg"
        },
        {
          name:
            "AMD Ryzen 7 2700X + MSI X470 Combo",
          price: 486,
          image:
            "tewtwet.jpg"
        },
        {
          name:
            "Intel Core i7-7700 + Cooler Master Hyper 212",
          price: 329,
          image:
            "51-QKzl-RQ9n-L.jpg"
        },
        {
          name:
            "Razer Gaming Keyboard Mouse Combo",
          price: 240,
          image:
            "51elnml-XJ6-L-SL1000.jpg"
        },
        {
          name:
            "Cooler Master Liquid ML240R",
          price: 209,
          image:
            "81-C5-Mo-Q-Ju-L-SL1500.jpg"
        },
        {
          name:
            "Corsair Vengeance 16GB 2400mhz DDR4",
          price: 167,
          image:
            "4895508_sa.jpg"
        },
        {
          name:
            "Thermaltake 1000w Power Supply",
          price: 151,
          image:
            "612fOqrm8uL._SL1000_.jpg"
        },
        {
          name:
            "WD Blue SSD 500 GB + HDD 2TB Combo",
          price: 134,
          image:
            "51AKGDhI2oL._SL1001_.jpg"
        },
        {
          name:
            "CoolerMaster V8 CPU Radiator",
          price: 129,
          image:
            "912eOfRUI-L._SL1500_.jpg"
        },
        {
          name:
            "Zotac GTX960 4GB Graphic Card",
          price: 98,
          image:
            "zotak-grafa.jpg"
        },
        {
          name:
            "Samsung 250GB SSD",
          price: 68,
          image:
            "71K15cYF8uL._SL1500_.jpg"
        },
        {
          name:
            "Condenser PC Microphone",
          price: 42,
          image:
            "bm-800.jpg"
        },
        {
          name:
            "Keybord Mouse Wireless Combo",
          price: 15,
          image:
            "key-mouse-wire-combo.jpg"
        },
        {
          name:
            "Kingston 32GB Flash Drive",
          price: 9,
          image:
            "20-239-625-12.jpg"
        },
        {
          name:
            "Dual 16db Silent Cooler",
          price: 8,
          image:
            "Untitled-2.jpg"
        },


        // MYSTERY BOX
        {
          name:
            "Razer Blade Stealth 13''",
          price: 1599,
          image:
            "71MGjLfKikL._SL1500_.jpg"
        },
        {
          name:
            "Dolce & Gabbana King Of Love Sneakers",
          price: 1140,
          image:
            "dolce-gabana-king-sneakers.jpg"
        },
        {
          name:
            "Gaming PC FX-8350/GTX 1060",
          price: 840,
          image:
            "41pZgsCIFGL.jpg"
        },
        {
          name:
            "OnePlus 6T",
          price: 699,
          image:
            "one-cell-phone.jpg"
        },
        {
          name:
            "ASUS ROG Swift 24''",
          price: 599,
          image:
            "Asus rog swift.png"
        },
        {
          name:
            "Canon G7X Mark 2",
          price: 600,
          image:
            "cannon powershot.jpg"
        },
        {
          name:
            "EVGA GeForce RTX 2070 XC",
          price: 570,
          image:
            "08-G-P4-2173-KR-LG-1.jpg"
        },
        {
          name:
            "PlayStation 4 Pro ",
          price: 400,
          image:
            "playstation-4-pro-vertical-product-shot-01-us-21sep18.jpg"
        },
        {
          name:
            "Nixon Sentry SS Stainless Steel",
          price: 250,
          image:
            "nixon sentry.jpg"
        },
        {
          name:
            "Razer Thresher Ultimate",
          price: 220,
          image:
            "razer-sluske.jpg"
        },
        {
          name:
            "Nike Vandal High Supreme Carhartt WIP Black",
          price: 190,
          image:
            "nike supreme.png"
        },
        {
          name:
            "Supreme Jesus and Mary Hooded Sweatshirt Gold",
          price: 185,
          image:
            "supreme jesus.jpg"
        },
        {
          name:
            "Garmin Approach S20",
          price: 150,
          image:
            "garmin approach.png"
        },
        {
          name:
            "HyperX Cloud II Headset",
          price: 99,
          image:
            "Untitled-1.jpg"
        },
        {
          name:
            "SteelSeries Rival 600 ",
          price: 80,
          image:
            "610o-Ax-NTx-SL-SL1500.jpg"
        },
        {
          name:
            "Invicta Men's 19173 Aviator Analog",
          price: 75,
          image:
            "invcita-mens-19173.jpg"
        },
        {
          name:
            "SteelSeries QcK Prism RGB Mousepad",
          price: 55,
          image:
            "steelseries quck prism.png"
        },
        {
          name:
            "SteelSeries Apex 150 RGB Keyboard",
          price: 50,
          image:
            "apex-gaming-board.jpg"
        },
        {
          name:
            "Riwbox XBT-80 Folding Stereo Headphones",
          price: 30,
          image:
            "riwbox-headphones.jpg"
        },
        {
          name:
            "Men's 6-Pack Crewneck Undershirts",
          price: 16,
          image:
            "6-pack-crewneck.jpg"
        },
        {
          name:
            "Double Nylon Braided USB A Cable",
          price: 13,
          image:
            "anker-usb.jpg"
        },
        {
          name:
            "ZANheadgear Drab Nylon Balaclava",
          price: 7,
          image:
            "nylon headgera balaclava.jpg"
        },


        // ALL FOR MAN ADITIONAL
        {
          name:
            "Louis Vuitton Chelsea Boot",
          price: 820,
          image:
            "LV.jpg"
        },
        {
          name:
            "Winter Trench Coat",
          price: 95,
          image:
            "mencoatwinter.jpg"
        },
        {
          name:
            "",
          price: 1,
          image:
            ""
        },
      ],
      {}
    );
  },

  down: (
    queryInterface,
    Sequelize
  ) => {
    return queryInterface.bulkDelete(
      "items",
      null,
      {}
    );
  }
};
