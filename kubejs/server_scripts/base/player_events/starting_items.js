PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("starting_items")) {
    event.player.stages.add("starting_items");
    let baseEnchantLevel = 15;

    let starting_items = [
      randomEnchant(
        Item.of("minecraft:stone_sword", {
          Damage: 0,
          display: {
            Name: '{"text":"Sturdy Stone Dagger","color":"dark_green"}',
          },
        }),
        baseEnchantLevel,
      ).enchant("minecraft:unbreaking", 1),
      Item.of("waystones:waystone"),
      Item.of(
        "sophisticatedbackpacks:backpack",
        "{borderColor:6258977,clothColor:6846789,inventorySlots:27,upgradeSlots:1}",
      ),
      Item.of("eccentrictome:tome", {
        "eccentrictome:mods": {
          apotheosis: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "apotheosis:apoth_chronicle",
              },
            },
          },
          ars_nouveau: {
            0: {
              Count: 1,
              id: "ars_nouveau:worn_notebook",
            },
          },
          create: {
            0: {
              Count: 1,
              id: "create:manual",
            },
          },
          engineersdecor: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "engineersdecor:engineersdecor_manual",
              },
            },
          },
          immersiveengineering: {
            0: {
              Count: 1,
              id: "immersiveengineering:manual",
            },
          },
          industrialforegoing: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "industrialforegoing:industrial_foregoing",
              },
            },
          },
          littlelogistics: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "littlelogistics:guide",
              },
            },
          },
          naturesaura: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "naturesaura:book",
              },
            },
          },
          pfm: {
            0: {
              Count: 1,
              id: "pfm:furniture_book",
            },
          },
          pneumaticcraft: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "pneumaticcraft:book",
              },
            },
          },
          rftoolsbase: {
            0: {
              Count: 1,
              id: "rftoolsbase:manual",
            },
          },
          storagenetwork: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "storagenetwork:network_book",
              },
            },
          },
          sushigocrafting: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "sushigocrafting:sushigocrafting",
              },
            },
          },
          theoneprobe: {
            0: {
              Count: 1,
              id: "theoneprobe:probenote",
            },
          },
          thermal: {
            0: {
              Count: 1,
              id: "patchouli:guide_book",
              tag: {
                "patchouli:book": "thermal:guidebook",
              },
            },
          },
        },
        "eccentrictome:version": 1.0,
      }),
    ];

    starting_items.forEach((item) => {
      event.player.give(item);
    });

    event.player.setHeadArmorItem(
      randomEnchant(
        Item.of("minecraft:leather_helmet", {
          Damage: 0,
          display: {
            Name: '{"text":"Sturdy Leather Cap","color":"dark_green"}',
            color: 7441479,
          },
        }),
        baseEnchantLevel,
      ).enchant("minecraft:unbreaking", 1),
    );

    event.player.setChestArmorItem(
      randomEnchant(
        Item.of("minecraft:leather_chestplate", {
          Damage: 0,
          display: {
            Name: '{"text":"Sturdy Leather Tunic","color":"dark_green"}',
            color: 7441479,
          },
        }),
        baseEnchantLevel,
      ).enchant("minecraft:unbreaking", 1),
    );

    event.player.setLegsArmorItem(
      randomEnchant(
        Item.of("minecraft:leather_leggings", {
          Damage: 0,
          display: {
            Name: '{"text":"Sturdy Leather Pants","color":"dark_green"}',
            color: 7441479,
          },
        }),
        baseEnchantLevel,
      ).enchant("minecraft:unbreaking", 1),
    );

    event.player.setFeetArmorItem(
      randomEnchant(
        Item.of("minecraft:leather_boots", {
          Damage: 0,
          display: {
            Name: '{"text":"Sturdy Leather Boots","color":"dark_green"}',
            color: 7441479,
          },
        }),
        baseEnchantLevel,
      ).enchant("minecraft:unbreaking", 1),
    );
  }
});
