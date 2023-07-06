const RandomSource = Java.loadClass('net.minecraft.util.RandomSource');
const RealEnchantHelper = Java.loadClass('shadows.apotheosis.ench.table.RealEnchantmentHelper');

function randomEnchant(item, level, treasure, quanta, arcana, rectification) {
    /**
     * "Default Parameters"
    */
   level = level ?? 0
   treasure = treasure ?? false
   quanta = quanta ?? 30.0
   arcana = arcana ?? 0.0
   rectification = rectification ?? 0.0
   
    
    if (level == 0) {
        return Item.of(item);
    }

    // shadows.apotheosis.ench.table.RealEnchantmentHelper
    /**
	 * Creates a list of enchantments for a specific slot given various variables.
	 * @param rand Pre-seeded random.
	 * @param stack Itemstack to be enchanted.
	 * @param level Enchanting Slot XP Level
	 * @param quanta Quanta Level
	 * @param arcana Arcana Level
	 * @param treasure If treasure enchantments can show up.
	 * @return A list of enchantments based on the seed, item, and eterna/quanta/arcana levels.
	 */
    let enchants = RealEnchantHelper.selectEnchantment(
        RandomSource.create(),
        Item.of(item),
        level,
        quanta,
        arcana,
        rectification,
        treasure
    );

    let enchantedItem = Item.of(item);
    enchants.forEach((enchant) => {
        enchantedItem = Item.of(enchantedItem).enchant(enchant.enchantment, enchant.level);
    });

    return enchantedItem;
}
