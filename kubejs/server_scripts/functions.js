const RandomSource = Java.loadClass("net.minecraft.util.RandomSource");
const RealEnchantHelper = Java.loadClass(
  "shadows.apotheosis.ench.table.RealEnchantmentHelper",
);

/**
 * Creates a list of enchantments for a specific slot given various variables.
 * @param {Internal.ItemStack} item Itemstack to be enchanted.
 * @param {Number} level Enchanting Slot XP Level (INTEGER)
 * @param {Boolean} treasure If treasure enchantments can show up.
 * @param {Number} quanta Quanta Level (FLOAT)
 * @param {Number} arcana Arcana Level (FLOAT)
 * @param {Number} rectification Rectification level (FLOAT)
 * @return {Internal.ItemStack} The randomly enchanted Item
 */
function randomEnchant(item, level, treasure, quanta, arcana, rectification) {
  /**
   * "Default Parameters"
   */
  level = level ?? 0;
  treasure = treasure ?? false;
  quanta = quanta ?? 30.0;
  arcana = arcana ?? 0.0;
  rectification = rectification ?? 0.0;
  let enchantedItem = Item.of(item);

  if (level == 0) {
    return enchantedItem;
  }

  // shadows.apotheosis.ench.table.RealEnchantmentHelper
  /**
   * Creates a list of enchantments for a specific slot given various variables.
   * @param rand Pre-seeded random.
   * @param stack Itemstack to be enchanted.
   * @param level Enchanting Slot XP Level
   * @param quanta Quanta Level
   * @param arcana Arcana Level
   * @param rectification Rectification level
   * @param treasure If treasure enchantments can show up.
   * @return A list of enchantments based on the seed, item, and eterna/quanta/arcana levels.
   */
  let enchants = RealEnchantHelper.selectEnchantment(
    RandomSource.create(),
    enchantedItem,
    level,
    quanta,
    arcana,
    rectification,
    treasure,
  );

  enchants.forEach((enchant) => {
    enchantedItem = enchantedItem.enchant(enchant.enchantment, enchant.level);
  });

  return enchantedItem;
}
