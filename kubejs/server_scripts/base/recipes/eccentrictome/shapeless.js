ServerEvents.recipes((event) => {
  const id_prefix = "mamacas:base/eccentrictome/shapeless/";

  const recipes = [
    {
      output: Item.of("eccentrictome:tome", {
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
      inputs: ["minecraft:book", "#forge:bookshelves"],
      id: "eccentrictome:tome",
    },
  ];

  recipes.forEach((recipe) => {
    event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  });
});
