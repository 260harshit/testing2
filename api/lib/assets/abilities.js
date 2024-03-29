import { Collection } from "@discordjs/collection";
const abilities = new Collection([
  [
    "adaptability",
    {
      desc: "This Pok\xE9mon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
      name: "Adaptability",
      shortDesc: "This Pok\xE9mon's same-type attack bonus (STAB) is 2 instead of 1.5."
    }
  ],
  [
    "aerilate",
    {
      desc: "This Pok\xE9mon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: "Aerilate",
      shortDesc: "This Pok\xE9mon's Normal-type moves become Flying type and have 1.2x power."
    }
  ],
  [
    "aftermath",
    {
      desc: "If this Pok\xE9mon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pok\xE9mon has the Damp Ability, this effect is prevented.",
      name: "Aftermath",
      shortDesc: "If this Pok\xE9mon is KOed with a contact move, that move's user loses 1/4 its max HP."
    }
  ],
  [
    "airlock",
    {
      name: "Air Lock",
      shortDesc: "While this Pok\xE9mon is active, the effects of weather conditions are disabled."
    }
  ],
  [
    "analytic",
    {
      desc: "The power of this Pok\xE9mon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
      name: "Analytic",
      shortDesc: "This Pok\xE9mon's attacks have 1.3x power if it is the last to move in a turn."
    }
  ],
  [
    "angerpoint",
    {
      desc: "If this Pok\xE9mon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
      name: "Anger Point",
      shortDesc: "If this Pok\xE9mon (not its substitute) takes a critical hit, its Attack is raised 12 stages."
    }
  ],
  [
    "angershell",
    {
      desc: "When this Pok\xE9mon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Attack, Special Attack, and Speed are raised by 1 stage, and its Defense and Speed are lowered by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
      name: "Anger Shell",
      shortDesc: "When this Pok\xE9mon reaches 1/2 or less of its max HP: +1 Atk, Sp. Atk, and Spe; -1 Def and Sp. Def."
    }
  ],
  [
    "anticipation",
    {
      desc: "On switch-in, this Pok\xE9mon is alerted if any opposing Pok\xE9mon has an attack that is super effective against this Pok\xE9mon, or an OHKO move. This effect considers any move that deals direct damage as an attacking move of its respective type, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
      name: "Anticipation",
      shortDesc: "On switch-in, this Pok\xE9mon shudders if any foe has a supereffective or OHKO move."
    }
  ],
  [
    "arenatrap",
    {
      desc: "Prevents opposing Pok\xE9mon from choosing to switch out unless they are airborne, are holding a Shed Shell, or are a Ghost type.",
      isFieldAbility: "Having a Pok\xE9mon with Arena Trap at the front of your party will double the encounter rate of all wild Pok\xE9mon, even if the Pok\xE9mon with Arena Trap has fainted.",
      name: "Arena Trap",
      shortDesc: "Prevents opposing Pok\xE9mon from choosing to switch out unless they are airborne."
    }
  ],
  [
    "armortail",
    {
      desc: "While this Pok\xE9mon is active, priority moves from opposing Pok\xE9mon that target this Pok\xE9mon or its allies are prevented from having an effect.",
      name: "Armor Tail",
      shortDesc: "This Pok\xE9mon and its allies are protected from opposing priority moves."
    }
  ],
  [
    "aromaveil",
    {
      desc: "This Pok\xE9mon and its allies cannot become affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.",
      name: "Aroma Veil",
      shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment."
    }
  ],
  [
    "asoneglastrier",
    {
      name: "As One (Glastrier)",
      shortDesc: "Combination of the Unnerve and Chilling Neigh Abilities."
    }
  ],
  [
    "asonespectrier",
    {
      name: "As One (Spectrier)",
      shortDesc: "Combination of the Unnerve and Grim Neigh Abilities."
    }
  ],
  [
    "aurabreak",
    {
      desc: "While this Pok\xE9mon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.",
      name: "Aura Break",
      shortDesc: "While this Pok\xE9mon is active, the Dark Aura and Fairy Aura power modifier is 0.75x."
    }
  ],
  [
    "baddreams",
    {
      desc: "Causes opposing Pok\xE9mon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
      name: "Bad Dreams",
      shortDesc: "Causes sleeping foes to lose 1/8 of their max HP at the end of each turn."
    }
  ],
  [
    "ballfetch",
    {
      desc: "At any time after the first Pok\xE9 Ball is thrown and fails to catch a Pok\xE9mon, at the end of a turn, if a Pok\xE9mon with Ball Fetch is on the field and not holding another item, it will pick up the same type of ball as the first one thrown. This can only occur once in a battle.",
      name: "Ball Fetch",
      shortDesc: "No competitive use."
    }
  ],
  [
    "battery",
    {
      name: "Battery",
      shortDesc: "This Pok\xE9mon's allies have the power of their special attacks multiplied by 1.3."
    }
  ],
  [
    "battlearmor",
    {
      name: "Battle Armor",
      shortDesc: "This Pok\xE9mon cannot be struck by a critical hit."
    }
  ],
  [
    "battlebond",
    {
      desc: "If this Pok\xE9mon is a Greninja, its Attack, Special Attack, and Speed are raised by 1 stage if it attacks and knocks out another Pok\xE9mon. This effect can only happen once per battle.",
      shortDesc: "After KOing a Pok\xE9mon: raises Attack, Sp. Atk, Speed by 1 stage. Once per battle.",
      name: "Battle Bond"
    }
  ],
  [
    "beadsofruin",
    {
      name: "Beads of Ruin",
      shortDesc: "Active Pok\xE9mon without this Ability have their Special Defense multiplied by 0.75."
    }
  ],
  [
    "beastboost",
    {
      desc: "This Pok\xE9mon's highest stat is raised by 1 stage if it attacks and knocks out another Pok\xE9mon. Stat stage changes are not considered. If multiple stats are tied, Attack, Defense, Special Attack, Special Defense, and Speed are prioritized in that order.",
      name: "Beast Boost",
      shortDesc: "This Pok\xE9mon's highest stat is raised by 1 if it attacks and KOes another Pok\xE9mon."
    }
  ],
  [
    "berserk",
    {
      desc: "When this Pok\xE9mon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
      name: "Berserk",
      shortDesc: "This Pok\xE9mon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP."
    }
  ],
  [
    "bigpecks",
    {
      name: "Big Pecks",
      shortDesc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's Defense stat stage."
    }
  ],
  [
    "blaze",
    {
      desc: "When this Pok\xE9mon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.",
      name: "Blaze",
      shortDesc: "At 1/3 or less of its max HP, this Pok\xE9mon's offensive stat is 1.5x with Fire attacks."
    }
  ],
  [
    "bulletproof",
    {
      desc: "This Pok\xE9mon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.",
      name: "Bulletproof",
      shortDesc: "This Pok\xE9mon is immune to bullet moves."
    }
  ],
  [
    "cheekpouch",
    {
      desc: "If this Pok\xE9mon eats a held Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect. This effect can also activate after the effects of Bug Bite, Fling, Pluck, Stuff Cheeks, and Teatime if the eaten Berry had an effect on this Pok\xE9mon.",
      name: "Cheek Pouch",
      shortDesc: "If this Pok\xE9mon eats a Berry, it restores 1/3 of its max HP after the Berry's effect."
    }
  ],
  [
    "chillingneigh",
    {
      desc: "This Pok\xE9mon's Attack is raised by 1 stage if it attacks and knocks out another Pok\xE9mon.",
      name: "Chilling Neigh",
      shortDesc: "This Pok\xE9mon's Attack is raised by 1 stage if it attacks and KOes another Pok\xE9mon."
    }
  ],
  [
    "chlorophyll",
    {
      desc: "If Sunny Day is active, this Pok\xE9mon's Speed is doubled. This effect is prevented if this Pok\xE9mon is holding a Utility Umbrella.",
      name: "Chlorophyll",
      shortDesc: "If Sunny Day is active, this Pok\xE9mon's Speed is doubled."
    }
  ],
  [
    "clearbody",
    {
      name: "Clear Body",
      shortDesc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's stat stages."
    }
  ],
  [
    "cloudnine",
    {
      name: "Cloud Nine",
      shortDesc: "While this Pok\xE9mon is active, the effects of weather conditions are disabled."
    }
  ],
  [
    "colorchange",
    {
      desc: "This Pok\xE9mon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
      name: "Color Change",
      shortDesc: "This Pok\xE9mon's type changes to the type of a move it's hit by, unless it has the type."
    }
  ],
  [
    "comatose",
    {
      desc: "This Pok\xE9mon is considered to be asleep and cannot become affected by a non-volatile status condition or Yawn.",
      name: "Comatose",
      shortDesc: "This Pok\xE9mon cannot be statused, and is considered to be asleep."
    }
  ],
  [
    "commander",
    {
      desc: "If this Pok\xE9mon is Tatsugiri and Dondozo is an active ally, Dondozo will swallow this Pok\xE9mon. This prevents this Pok\xE9mon from acting and boosts all of Dondozo's stats by 2 stages. Attacks targeted at this Pok\xE9mon will fail if it has been swallowed. Tatsugiri can still take indirect damage while swallowed.",
      name: "Commander",
      shortDesc: "If ally is Dondozo: this Pok\xE9mon cannot act or be hit, +2 to all Dondozo's stats."
    }
  ],
  [
    "competitive",
    {
      desc: "This Pok\xE9mon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pok\xE9mon.",
      name: "Competitive",
      shortDesc: "This Pok\xE9mon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe."
    }
  ],
  [
    "compoundeyes",
    {
      isFieldAbility: "Having a Pok\xE9mon with Compound Eyes at the front of your party increases the chances of finding a wild Pok\xE9mon holding an item increase from 50%/5% to 60%/20%. In dark grass in Generation 5, the chances increase from 50%/5%/1% to 60%/20%/5%.",
      name: "Compound Eyes",
      shortDesc: "This Pok\xE9mon's moves have their accuracy multiplied by 1.3."
    }
  ],
  [
    "contrary",
    {
      desc: "If this Pok\xE9mon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
      name: "Contrary",
      shortDesc: "If this Pok\xE9mon has a stat stage raised it is lowered instead, and vice versa."
    }
  ],
  [
    "corrosion",
    {
      name: "Corrosion",
      shortDesc: "This Pok\xE9mon can poison or badly poison a Pok\xE9mon regardless of its typing."
    }
  ],
  [
    "costar",
    {
      name: "Costar",
      shortDesc: "On switch-in, this Pok\xE9mon copies an ally's stat changes."
    }
  ],
  [
    "cottondown",
    {
      desc: "When this Pok\xE9mon is hit by an attack, the Speed of all other Pok\xE9mon on the field is lowered by 1 stage.",
      name: "Cotton Down",
      shortDesc: "If this Pok\xE9mon is hit, it lowers the Speed of all other Pok\xE9mon on the field 1 stage."
    }
  ],
  [
    "cudchew",
    {
      desc: "When this Pok\xE9mon consumes a berry, it will consume the berry again at the end of the following turn.",
      name: "Cud Chew",
      shortDesc: "If this Pok\xE9mon eats a berry, it will consume the berry again at the end of next turn."
    }
  ],
  [
    "curiousmedicine",
    {
      name: "Curious Medicine",
      shortDesc: "On switch-in, this Pok\xE9mon's allies have their stat stages reset to 0."
    }
  ],
  [
    "cursedbody",
    {
      desc: "If this Pok\xE9mon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
      name: "Cursed Body",
      shortDesc: "If this Pok\xE9mon is hit by an attack, there is a 30% chance that move gets disabled."
    }
  ],
  [
    "cutecharm",
    {
      desc: "There is a 30% chance a Pok\xE9mon making contact with this Pok\xE9mon will become infatuated if it is of the opposite gender.",
      isFieldAbility: "If a Pok\xE9mon with Cute Charm is at the front of the party (even if fainted), there is a 66.7% chance that a Pok\xE9mon of the opposite gender to the Pok\xE9mon with Cute Charm will be encountered. This does not affect swarming Pok\xE9mon species (except in Generation 4) or Pok\xE9mon found in Hidden Grottos.",
      name: "Cute Charm",
      shortDesc: "30% chance of infatuating Pok\xE9mon of the opposite gender if they make contact."
    }
  ],
  [
    "damp",
    {
      desc: "While this Pok\xE9mon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
      name: "Damp",
      shortDesc: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active."
    }
  ],
  [
    "dancer",
    {
      desc: "After another Pok\xE9mon uses a dance move, this Pok\xE9mon uses the same move. The copied move is subject to all effects that can prevent a move from being executed. A move used through this Ability cannot be copied again by other Pok\xE9mon with this Ability.",
      name: "Dancer",
      shortDesc: "After another Pok\xE9mon uses a dance move, this Pok\xE9mon uses the same move."
    }
  ],
  [
    "darkaura",
    {
      desc: "While this Pok\xE9mon is active, the power of Dark-type moves used by active Pok\xE9mon is multiplied by 1.33.",
      name: "Dark Aura",
      shortDesc: "While this Pok\xE9mon is active, a Dark move used by any Pok\xE9mon has 1.33x power."
    }
  ],
  [
    "dauntlessshield",
    {
      name: "Dauntless Shield",
      shortDesc: "On switch-in, this Pok\xE9mon's Defense is raised by 1 stage. Once per battle."
    }
  ],
  [
    "dazzling",
    {
      desc: "While this Pok\xE9mon is active, priority moves from opposing Pok\xE9mon that target this Pok\xE9mon or its allies are prevented from having an effect.",
      name: "Dazzling",
      shortDesc: "This Pok\xE9mon and its allies are protected from opposing priority moves."
    }
  ],
  [
    "defeatist",
    {
      desc: "While this Pok\xE9mon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.",
      name: "Defeatist",
      shortDesc: "While this Pok\xE9mon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved."
    }
  ],
  [
    "defiant",
    {
      desc: "This Pok\xE9mon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pok\xE9mon.",
      name: "Defiant",
      shortDesc: "This Pok\xE9mon's Attack is raised by 2 for each of its stats that is lowered by a foe."
    }
  ],
  [
    "deltastream",
    {
      desc: "On switch-in, the weather becomes Delta Stream, which removes the weaknesses of the Flying type from Flying-type Pok\xE9mon. This weather remains in effect until this Ability is no longer active for any Pok\xE9mon, or the weather is changed by the Desolate Land or Primordial Sea Abilities.",
      name: "Delta Stream",
      shortDesc: "On switch-in, strong winds begin until this Ability is not active in battle."
    }
  ],
  [
    "desolateland",
    {
      desc: "On switch-in, the weather becomes Desolate Land, which includes all the effects of Sunny Day and prevents damaging Water-type moves from executing. This weather remains in effect until this Ability is no longer active for any Pok\xE9mon, or the weather is changed by the Delta Stream or Primordial Sea Abilities.",
      name: "Desolate Land",
      shortDesc: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle."
    }
  ],
  [
    "disguise",
    {
      desc: "If this Pok\xE9mon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.",
      name: "Disguise",
      shortDesc: "(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead."
    }
  ],
  [
    "download",
    {
      desc: "On switch-in, this Pok\xE9mon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pok\xE9mon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
      name: "Download",
      shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense."
    }
  ],
  [
    "dragonsmaw",
    {
      name: "Dragon's Maw",
      shortDesc: "This Pok\xE9mon's offensive stat is multiplied by 1.5 while using a Dragon-type attack."
    }
  ],
  [
    "drizzle",
    {
      name: "Drizzle",
      shortDesc: "On switch-in, this Pok\xE9mon summons Rain Dance."
    }
  ],
  [
    "drought",
    {
      name: "Drought",
      shortDesc: "On switch-in, this Pok\xE9mon summons Sunny Day."
    }
  ],
  [
    "dryskin",
    {
      desc: "This Pok\xE9mon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pok\xE9mon. At the end of each turn, this Pok\xE9mon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. The weather effects are prevented if this Pok\xE9mon is holding a Utility Umbrella.",
      name: "Dry Skin",
      shortDesc: "This Pok\xE9mon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun."
    }
  ],
  [
    "earlybird",
    {
      name: "Early Bird",
      shortDesc: "This Pok\xE9mon's sleep counter drops by 2 instead of 1."
    }
  ],
  [
    "eartheater",
    {
      desc: "This Pok\xE9mon is immune to Ground-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Ground-type move.",
      name: "Earth Eater",
      shortDesc: "This Pok\xE9mon heals 1/4 of its max HP when hit by Ground moves; Ground immunity."
    }
  ],
  [
    "effectspore",
    {
      desc: "30% chance a Pok\xE9mon making contact with this Pok\xE9mon will be poisoned, paralyzed, or fall asleep.",
      name: "Effect Spore",
      shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pok\xE9mon."
    }
  ],
  [
    "electricsurge",
    {
      name: "Electric Surge",
      shortDesc: "On switch-in, this Pok\xE9mon summons Electric Terrain."
    }
  ],
  [
    "electromorphosis",
    {
      desc: "This Pok\xE9mon's next Electric-type attack will have its power doubled if it takes direct damage.",
      name: "Electromorphosis",
      shortDesc: "This Pok\xE9mon becomes charged if it takes direct damage."
    }
  ],
  [
    "emergencyexit",
    {
      desc: "When this Pok\xE9mon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
      name: "Emergency Exit",
      shortDesc: "This Pok\xE9mon switches out when it reaches 1/2 or less of its maximum HP."
    }
  ],
  [
    "fairyaura",
    {
      desc: "While this Pok\xE9mon is active, the power of Fairy-type moves used by active Pok\xE9mon is multiplied by 1.33.",
      name: "Fairy Aura",
      shortDesc: "While this Pok\xE9mon is active, a Fairy move used by any Pok\xE9mon has 1.33x power."
    }
  ],
  [
    "filter",
    {
      name: "Filter",
      shortDesc: "This Pok\xE9mon receives 3/4 damage from supereffective attacks."
    }
  ],
  [
    "flamebody",
    {
      isFieldAbility: "Having a Pok\xE9mon with Flame Body in your party will halve the number of cycles it takes for all eggs in the party to hatch.",
      name: "Flame Body",
      shortDesc: "30% chance a Pok\xE9mon making contact with this Pok\xE9mon will be burned."
    }
  ],
  [
    "flareboost",
    {
      desc: "While this Pok\xE9mon is burned, the power of its special attacks is multiplied by 1.5.",
      name: "Flare Boost",
      shortDesc: "While this Pok\xE9mon is burned, its special attacks have 1.5x power."
    }
  ],
  [
    "flashfire",
    {
      desc: "This Pok\xE9mon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its offensive stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pok\xE9mon is frozen, it cannot be defrosted by Fire-type attacks.",
      isFieldAbility: "In Pok\xE9mon Sword and Shield, If you have a Pok\xE9mon with Flash Fire at the front of your party (even if fainted), there is a 50% chance an encounter with a Fire-type Pok\xE9mon will be forced, if possible.",
      name: "Flash Fire",
      shortDesc: "This Pok\xE9mon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity."
    }
  ],
  [
    "flowergift",
    {
      desc: "If this Pok\xE9mon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. These effects are prevented if the Pok\xE9mon is holding a Utility Umbrella.",
      name: "Flower Gift",
      shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x."
    }
  ],
  [
    "flowerveil",
    {
      desc: "Grass-type Pok\xE9mon on this Pok\xE9mon's side cannot have their stat stages lowered by other Pok\xE9mon or have a non-volatile status condition inflicted on them by other Pok\xE9mon.",
      name: "Flower Veil",
      shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pok\xE9mon."
    }
  ],
  [
    "fluffy",
    {
      desc: "This Pok\xE9mon receives 1/2 damage from contact moves, but double damage from Fire moves.",
      name: "Fluffy",
      shortDesc: "This Pok\xE9mon takes 1/2 damage from contact moves, 2x damage from Fire moves."
    }
  ],
  [
    "forecast",
    {
      desc: "If this Pok\xE9mon is a Castform, its type changes to the current weather condition's type, except Sandstorm. This effect is prevented if this Pok\xE9mon is holding a Utility Umbrella and the weather is Rain Dance or Sunny Day.",
      name: "Forecast",
      shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm."
    }
  ],
  [
    "forewarn",
    {
      desc: "On switch-in, this Pok\xE9mon is alerted to the move with the highest power, at random, known by an opposing Pok\xE9mon. This effect considers OHKO moves to have 150 power, Counter, Mirror Coat, and Metal Burst to have 120 power, every other attacking move with an unspecified power to have 80 power, and non-damaging moves to have 1 power.",
      name: "Forewarn",
      shortDesc: "On switch-in, this Pok\xE9mon is alerted to the foes' move with the highest power."
    }
  ],
  [
    "friendguard",
    {
      name: "Friend Guard",
      shortDesc: "This Pok\xE9mon's allies receive 3/4 damage from other Pok\xE9mon's attacks."
    }
  ],
  [
    "frisk",
    {
      name: "Frisk",
      shortDesc: "On switch-in, this Pok\xE9mon identifies the held items of all opposing Pok\xE9mon."
    }
  ],
  [
    "fullmetalbody",
    {
      desc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's stat stages. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
      name: "Full Metal Body",
      shortDesc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's stat stages."
    }
  ],
  [
    "furcoat",
    {
      name: "Fur Coat",
      shortDesc: "This Pok\xE9mon's Defense is doubled."
    }
  ],
  [
    "galewings",
    {
      name: "Gale Wings",
      shortDesc: "If this Pok\xE9mon is at full HP, its Flying-type moves have their priority increased by 1."
    }
  ],
  [
    "galvanize",
    {
      desc: "This Pok\xE9mon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: "Galvanize",
      shortDesc: "This Pok\xE9mon's Normal-type moves become Electric type and have 1.2x power."
    }
  ],
  [
    "gluttony",
    {
      desc: "When this Pok\xE9mon is holding a Berry that usually activates with 1/4 or less of its maximum HP, it is eaten at 1/2 or less of its maximum HP instead.",
      name: "Gluttony",
      shortDesc: "This Pok\xE9mon eats Berries at 1/2 max HP or less instead of their usual 1/4 max HP."
    }
  ],
  [
    "goodasgold",
    {
      name: "Good as Gold",
      shortDesc: "This Pok\xE9mon is immune to Status moves."
    }
  ],
  [
    "gooey",
    {
      name: "Gooey",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon have their Speed lowered by 1 stage."
    }
  ],
  [
    "gorillatactics",
    {
      desc: "This Pok\xE9mon's Attack is multiplied by 1.5, but it can only select the first move it executes. These effects are prevented while this Pok\xE9mon is Dynamaxed.",
      name: "Gorilla Tactics",
      shortDesc: "This Pok\xE9mon's Attack is 1.5x, but it can only select the first move it executes."
    }
  ],
  [
    "grasspelt",
    {
      name: "Grass Pelt",
      shortDesc: "If Grassy Terrain is active, this Pok\xE9mon's Defense is multiplied by 1.5."
    }
  ],
  [
    "grassysurge",
    {
      name: "Grassy Surge",
      shortDesc: "On switch-in, this Pok\xE9mon summons Grassy Terrain."
    }
  ],
  [
    "grimneigh",
    {
      desc: "This Pok\xE9mon's Special Attack is raised by 1 stage if it attacks and knocks out another Pok\xE9mon.",
      name: "Grim Neigh",
      shortDesc: "This Pok\xE9mon's Sp. Atk is raised by 1 stage if it attacks and KOes another Pok\xE9mon."
    }
  ],
  [
    "guarddog",
    {
      name: "Guard Dog",
      shortDesc: "Immune to Intimidate. Intimidated: +1 Attack. Cannot be forced to switch out."
    }
  ],
  [
    "gulpmissile",
    {
      desc: "If this Pok\xE9mon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes.",
      name: "Gulp Missile",
      shortDesc: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis."
    }
  ],
  [
    "guts",
    {
      desc: "If this Pok\xE9mon has a non-volatile status condition, its Attack is multiplied by 1.5. This Pok\xE9mon's physical attacks ignore the burn effect of halving damage.",
      name: "Guts",
      shortDesc: "If this Pok\xE9mon is statused, its Attack is 1.5x; ignores burn halving physical damage."
    }
  ],
  [
    "hadronengine",
    {
      name: "Hadron Engine",
      shortDesc: "On switch-in, summons Electric Terrain. Sp. Atk is boosted by 30% in Electric Terrain."
    }
  ],
  [
    "harvest",
    {
      desc: "If the last item this Pok\xE9mon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.",
      isFieldAbility: "In Pok\xE9mon Sword and Shield, If you have a Pok\xE9mon with Harvest at the front of your party (even if fainted), there is a 50% chance an encounter with a Grass-type Pok\xE9mon will be forced, if possible.",
      name: "Harvest",
      shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun."
    }
  ],
  [
    "healer",
    {
      desc: "30% chance this Pok\xE9mon's ally has its non-volatile status condition cured at the end of each turn.",
      name: "Healer",
      shortDesc: "30% chance this Pok\xE9mon's ally has its status cured at the end of each turn."
    }
  ],
  [
    "heatproof",
    {
      desc: "The power of Fire-type attacks against this Pok\xE9mon is halved. This Pok\xE9mon takes half of the usual burn damage, rounded down.",
      name: "Heatproof",
      shortDesc: "The power of Fire-type attacks against this Pok\xE9mon is halved; burn damage halved."
    }
  ],
  [
    "heavymetal",
    {
      desc: "This Pok\xE9mon's weight is doubled. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone.",
      name: "Heavy Metal",
      shortDesc: "This Pok\xE9mon's weight is doubled."
    }
  ],
  [
    "honeygather",
    {
      isFieldAbility: "A Pok\xE9mon with Honey Gather may collect Honey after a battle if it is not already holding an item. The chance for a Pok\xE9mon with Honey Gather to pick up Honey depends on its level, starting at 5% if the Pok\xE9mon is between levels 1 and 10, and going up by 5% every ten levels, ending at a 50% chance from levels 91-100.",
      name: "Honey Gather",
      shortDesc: "No competitive use."
    }
  ],
  [
    "hugepower",
    {
      name: "Huge Power",
      shortDesc: "This Pok\xE9mon's Attack is doubled."
    }
  ],
  [
    "hungerswitch",
    {
      desc: "If this Pok\xE9mon is a Morpeko, it changes formes between its Full Belly Mode and Hangry Mode at the end of each turn.",
      name: "Hunger Switch",
      shortDesc: "If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn."
    }
  ],
  [
    "hustle",
    {
      desc: "This Pok\xE9mon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
      isFieldAbility: "If you have a Pok\xE9mon with Hustle at the front of your party (even if fainted), there is a 50% chance that a Pok\xE9mon will be forced to the upper bound of their encounter level range.",
      name: "Hustle",
      shortDesc: "This Pok\xE9mon's Attack is 1.5x and accuracy of its physical attacks is 0.8x."
    }
  ],
  [
    "hydration",
    {
      desc: "This Pok\xE9mon has its non-volatile status condition cured at the end of each turn if Rain Dance is active. This effect is prevented if this Pok\xE9mon is holding a Utility Umbrella.",
      name: "Hydration",
      shortDesc: "This Pok\xE9mon has its status cured at the end of each turn if Rain Dance is active."
    }
  ],
  [
    "hypercutter",
    {
      isFieldAbility: "In Pok\xE9mon Emerald only, if a Pok\xE9mon with Hyper Cutter uses cut in the overworld, it will remove all tall grass within a two-square radius of the player's position, as opposed to a one-square radius without this Ability.",
      name: "Hyper Cutter",
      shortDesc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's Attack stat stage."
    }
  ],
  [
    "icebody",
    {
      desc: "If Snow is active, this Pok\xE9mon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
      name: "Ice Body",
      shortDesc: "If Snow is active, this Pok\xE9mon heals 1/16 of its max HP each turn."
    }
  ],
  [
    "iceface",
    {
      desc: "If this Pok\xE9mon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Snow begins or when Eiscue switches in while Snow is active. Confusion damage also breaks the ice face.",
      name: "Ice Face",
      shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Snow."
    }
  ],
  [
    "icescales",
    {
      desc: "The Pok\xE9mon is protected by ice scales, which halve the damage taken from special moves.",
      name: "Ice Scales",
      shortDesc: "This Pok\xE9mon receives 1/2 damage from special attacks."
    }
  ],
  [
    "illuminate",
    {
      isFieldAbility: "If a Pok\xE9mon with Illuminate is at the front of the the party (even if fainted), the wild Pok\xE9mon encounter rate of all Pok\xE9mon is doubled.",
      name: "Illuminate",
      shortDesc: "No competitive use."
    }
  ],
  [
    "illusion",
    {
      desc: "When this Pok\xE9mon switches in, it appears as the last unfainted Pok\xE9mon in its party until it takes direct damage from another Pok\xE9mon's attack. This Pok\xE9mon's actual level and HP are displayed instead of those of the mimicked Pok\xE9mon.",
      name: "Illusion",
      shortDesc: "This Pok\xE9mon appears as the last Pok\xE9mon in the party until it takes direct damage."
    }
  ],
  [
    "immunity",
    {
      name: "Immunity",
      shortDesc: "This Pok\xE9mon cannot be poisoned. Gaining this Ability while poisoned cures it."
    }
  ],
  [
    "imposter",
    {
      desc: "On switch-in, this Pok\xE9mon Transforms into the opposing Pok\xE9mon that is facing it. If there is no Pok\xE9mon at that position, this Pok\xE9mon does not Transform.",
      name: "Imposter",
      shortDesc: "On switch-in, this Pok\xE9mon Transforms into the opposing Pok\xE9mon that is facing it."
    }
  ],
  [
    "infiltrator",
    {
      desc: "This Pok\xE9mon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist, and Aurora Veil.",
      isFieldAbility: "In Pok\xE9mon Sword and Shield, if a Pok\xE9mon with Infiltrator is placed at the front of the party, wild Pok\xE9mon are less likely to appear.",
      name: "Infiltrator",
      shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil."
    }
  ],
  [
    "innardsout",
    {
      desc: "If this Pok\xE9mon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pok\xE9mon.",
      name: "Innards Out",
      shortDesc: "If this Pok\xE9mon is KOed with a move, that move's user loses an equal amount of HP."
    }
  ],
  [
    "innerfocus",
    {
      desc: "This Pok\xE9mon cannot be made to flinch. This Pok\xE9mon is immune to the effect of the Intimidate Ability.",
      name: "Inner Focus",
      shortDesc: "This Pok\xE9mon cannot be made to flinch. Immune to Intimidate."
    }
  ],
  [
    "insomnia",
    {
      name: "Insomnia",
      shortDesc: "This Pok\xE9mon cannot fall asleep. Gaining this Ability while asleep cures it."
    }
  ],
  [
    "intimidate",
    {
      desc: "On switch-in, this Pok\xE9mon lowers the Attack of opposing Pok\xE9mon by 1 stage. Pok\xE9mon with the Inner Focus, Oblivious, Own Tempo, or Scrappy Abilities and Pok\xE9mon behind a substitute are immune.",
      isFieldAbility: "If a Pok\xE9mon with Intimidate is at the front of your party (even if fainted), there is a 50% chance it will prevent a random wild encounter that would have occurred if the wild Pok\xE9mon would be at least 5 levels lower than the Pok\xE9mon with Intimidate.",
      name: "Intimidate",
      shortDesc: "On switch-in, this Pok\xE9mon lowers the Attack of opponents by 1 stage."
    }
  ],
  [
    "intrepidsword",
    {
      name: "Intrepid Sword",
      shortDesc: "On switch-in, this Pok\xE9mon's Attack is raised by 1 stage. Once per battle."
    }
  ],
  [
    "ironbarbs",
    {
      desc: "Pok\xE9mon making contact with this Pok\xE9mon lose 1/8 of their maximum HP, rounded down.",
      name: "Iron Barbs",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon lose 1/8 of their max HP."
    }
  ],
  [
    "ironfist",
    {
      desc: "This Pok\xE9mon's punch-based attacks have their power multiplied by 1.2.",
      name: "Iron Fist",
      shortDesc: "This Pok\xE9mon's punch-based attacks have 1.2x power. Sucker Punch is not boosted."
    }
  ],
  [
    "justified",
    {
      name: "Justified",
      shortDesc: "This Pok\xE9mon's Attack is raised by 1 stage after it is damaged by a Dark-type move."
    }
  ],
  [
    "keeneye",
    {
      desc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's accuracy stat stage. This Pok\xE9mon ignores a target's evasiveness stat stage.",
      isFieldAbility: "If a Pok\xE9mon with Keen Eye is at the front of your party (even if fainted), there is a 50% chance it will prevent a random wild encounter that would have occurred if the wild Pok\xE9mon would be at least 5 levels lower than the Pok\xE9mon with Keen Eye.",
      name: "Keen Eye",
      shortDesc: "This Pok\xE9mon's accuracy can't be lowered by others; ignores their evasiveness stat."
    }
  ],
  [
    "klutz",
    {
      desc: "This Pok\xE9mon's held item has no effect. This Pok\xE9mon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
      name: "Klutz",
      shortDesc: "This Pok\xE9mon's held item has no effect, except Macho Brace. Fling cannot be used."
    }
  ],
  [
    "leafguard",
    {
      desc: "If Sunny Day is active, this Pok\xE9mon cannot become affected by a non-volatile status condition or Yawn, and Rest will fail for it. This effect is prevented if this Pok\xE9mon is holding a Utility Umbrella.",
      name: "Leaf Guard",
      shortDesc: "If Sunny Day is active, this Pok\xE9mon cannot be statused and Rest will fail for it."
    }
  ],
  [
    "levitate",
    {
      desc: "This Pok\xE9mon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity. Thousand Arrows can hit this Pok\xE9mon as if it did not have this Ability.",
      name: "Levitate",
      shortDesc: "This Pok\xE9mon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it."
    }
  ],
  [
    "libero",
    {
      desc: "This Pok\xE9mon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type. This effect can only happen once per switch-in, and only if this Pok\xE9mon is not Terastallized.",
      shortDesc: "This Pok\xE9mon's type changes to the type of the move it is using. Once per switch-in.",
      name: "Libero"
    }
  ],
  [
    "lightmetal",
    {
      desc: "This Pok\xE9mon's weight is halved, rounded down to a tenth of a kilogram. This effect is calculated after the effect of Autotomize, and before the effect of Float Stone. A Pok\xE9mon's weight will not drop below 0.1 kg.",
      name: "Light Metal",
      shortDesc: "This Pok\xE9mon's weight is halved."
    }
  ],
  [
    "lightningrod",
    {
      desc: "This Pok\xE9mon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pok\xE9mon is not the target of a single-target Electric-type move used by another Pok\xE9mon, this Pok\xE9mon redirects that move to itself if it is within the range of that move. If multiple Pok\xE9mon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
      isFieldAbility: "In Pok\xE9mon Emerald, Trainers registered with the Pok\xE9Nav's Match Call function will call twice as often if a Pok\xE9mon with Lightning Rod is in the first place in the party (even if fainted).\nIn Pok\xE9mon Sword and Shield, if a Pok\xE9mon with Lightning Rod is in the first place in the party, there is a 50% chance the game will force an encounter with an Electric-type Pok\xE9mon, if one is possible.",
      name: "Lightning Rod",
      shortDesc: "This Pok\xE9mon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity."
    }
  ],
  [
    "limber",
    {
      name: "Limber",
      shortDesc: "This Pok\xE9mon cannot be paralyzed. Gaining this Ability while paralyzed cures it."
    }
  ],
  [
    "lingeringaroma",
    {
      desc: "Pok\xE9mon making contact with this Pok\xE9mon have their Ability changed to Lingering Aroma. Does not affect Pok\xE9mon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
      name: "Lingering Aroma",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon have their Ability changed to Lingering Aroma."
    }
  ],
  [
    "liquidooze",
    {
      name: "Liquid Ooze",
      shortDesc: "This Pok\xE9mon damages those draining HP from it for as much as they would heal."
    }
  ],
  [
    "liquidvoice",
    {
      desc: "This Pok\xE9mon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: "Liquid Voice",
      shortDesc: "This Pok\xE9mon's sound-based moves become Water type."
    }
  ],
  [
    "longreach",
    {
      name: "Long Reach",
      shortDesc: "This Pok\xE9mon's attacks do not make contact with the target."
    }
  ],
  [
    "magicbounce",
    {
      desc: "This Pok\xE9mon is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or Magic Coat's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pok\xE9mon under this or Magic Coat's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this Ability takes effect.",
      name: "Magic Bounce",
      shortDesc: "This Pok\xE9mon blocks certain Status moves and bounces them back to the user."
    }
  ],
  [
    "magicguard",
    {
      desc: "This Pok\xE9mon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.",
      name: "Magic Guard",
      shortDesc: "This Pok\xE9mon can only be damaged by direct attacks."
    }
  ],
  [
    "magician",
    {
      desc: "If this Pok\xE9mon has no item, it steals the item off a Pok\xE9mon it hits with an attack. Does not affect Doom Desire and Future Sight.",
      name: "Magician",
      shortDesc: "If this Pok\xE9mon has no item, it steals the item off a Pok\xE9mon it hits with an attack."
    }
  ],
  [
    "magmaarmor",
    {
      isFieldAbility: "Having a Pok\xE9mon with Magma Armor in your party will halve the number of cycles it takes for all eggs in the party to hatch.",
      name: "Magma Armor",
      shortDesc: "This Pok\xE9mon cannot be frozen. Gaining this Ability while frozen cures it."
    }
  ],
  [
    "magnetpull",
    {
      desc: "Prevents opposing Steel-type Pok\xE9mon from choosing to switch out, unless they are holding a Shed Shell or are a Ghost type.",
      name: "Magnet Pull",
      shortDesc: "Prevents opposing Steel-type Pok\xE9mon from choosing to switch out."
    }
  ],
  [
    "marvelscale",
    {
      desc: "If this Pok\xE9mon has a non-volatile status condition, its Defense is multiplied by 1.5.",
      name: "Marvel Scale",
      shortDesc: "If this Pok\xE9mon has a non-volatile status condition, its Defense is multiplied by 1.5."
    }
  ],
  [
    "megalauncher",
    {
      desc: "This Pok\xE9mon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
      name: "Mega Launcher",
      shortDesc: "This Pok\xE9mon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP."
    }
  ],
  [
    "merciless",
    {
      name: "Merciless",
      shortDesc: "This Pok\xE9mon's attacks are critical hits if the target is poisoned."
    }
  ],
  [
    "mimicry",
    {
      desc: "This Pok\xE9mon's types change to match the active Terrain when this Pok\xE9mon acquires this Ability, or whenever a Terrain begins. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain. If this Ability is acquired without an active Terrain, or a Terrain ends, this Pok\xE9mon's types become the original types for its species.",
      name: "Mimicry",
      shortDesc: "This Pok\xE9mon's types change to match the Terrain. Type reverts when Terrain ends."
    }
  ],
  [
    "minus",
    {
      desc: "If an active ally has this Ability or the Plus Ability, this Pok\xE9mon's Special Attack is multiplied by 1.5.",
      name: "Minus",
      shortDesc: "If an active ally has this Ability or the Plus Ability, this Pok\xE9mon's Sp. Atk is 1.5x."
    }
  ],
  [
    "mirrorarmor",
    {
      desc: "When one of this Pok\xE9mon's stat stages would be lowered by another Pok\xE9mon, that Pok\xE9mon's stat stage is lowered instead. This effect does not happen if this Pok\xE9mon's stat stage was already -6. If the other Pok\xE9mon has a substitute, neither Pok\xE9mon has its stat stage lowered.",
      name: "Mirror Armor",
      shortDesc: "If this Pok\xE9mon's stat stages would be lowered, the attacker's are lowered instead."
    }
  ],
  [
    "mistysurge",
    {
      name: "Misty Surge",
      shortDesc: "On switch-in, this Pok\xE9mon summons Misty Terrain."
    }
  ],
  [
    "moldbreaker",
    {
      desc: "This Pok\xE9mon's moves and their effects ignore certain Abilities of other Pok\xE9mon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pok\xE9mon on the field, whether or not it is a target of this Pok\xE9mon's move, and whether or not their Ability is beneficial to this Pok\xE9mon.",
      name: "Mold Breaker",
      shortDesc: "This Pok\xE9mon's moves and their effects ignore the Abilities of other Pok\xE9mon."
    }
  ],
  [
    "moody",
    {
      desc: "This Pok\xE9mon has a random stat, other than accuracy or evasiveness, raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
      name: "Moody",
      shortDesc: "Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn."
    }
  ],
  [
    "motordrive",
    {
      desc: "This Pok\xE9mon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.",
      name: "Motor Drive",
      shortDesc: "This Pok\xE9mon's Speed is raised 1 stage if hit by an Electric move; Electric immunity."
    }
  ],
  [
    "mountaineer",
    {
      name: "Mountaineer",
      shortDesc: "On switch-in, this Pok\xE9mon avoids all Rock-type attacks and Stealth Rock."
    }
  ],
  [
    "moxie",
    {
      desc: "This Pok\xE9mon's Attack is raised by 1 stage if it attacks and knocks out another Pok\xE9mon.",
      name: "Moxie",
      shortDesc: "This Pok\xE9mon's Attack is raised by 1 stage if it attacks and KOes another Pok\xE9mon."
    }
  ],
  [
    "multiscale",
    {
      name: "Multiscale",
      shortDesc: "If this Pok\xE9mon is at full HP, damage taken from attacks is halved."
    }
  ],
  [
    "multitype",
    {
      name: "Multitype",
      shortDesc: "If this Pok\xE9mon is an Arceus, its type changes to match its held Plate."
    }
  ],
  [
    "mummy",
    {
      desc: "Pok\xE9mon making contact with this Pok\xE9mon have their Ability changed to Mummy. Does not affect Pok\xE9mon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
      name: "Mummy",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon have their Ability changed to Mummy."
    }
  ],
  [
    "myceliummight",
    {
      name: "Mycelium Might",
      shortDesc: "This Pok\xE9mon's Status moves go last in their priority bracket and ignore Abilities."
    }
  ],
  [
    "naturalcure",
    {
      name: "Natural Cure",
      shortDesc: "This Pok\xE9mon has its non-volatile status condition cured when it switches out."
    }
  ],
  [
    "neuroforce",
    {
      desc: "This Pok\xE9mon's attacks that are super effective against the target have their damage multiplied by 1.25.",
      name: "Neuroforce",
      shortDesc: "This Pok\xE9mon's attacks that are super effective against the target do 1.25x damage."
    }
  ],
  [
    "neutralizinggas",
    {
      desc: "While this Pok\xE9mon is active, Abilities have no effect. This Ability activates before hazards and other Abilities take effect. Does not affect the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
      name: "Neutralizing Gas",
      shortDesc: "While this Pok\xE9mon is active, Abilities have no effect."
    }
  ],
  ["noability", { name: "No Ability", shortDesc: "Does nothing." }],
  [
    "noguard",
    {
      isFieldAbility: "If a Pok\xE9mon with No Guard is at the front of the the party (even if fainted), the wild Pok\xE9mon encounter rate of all Pok\xE9mon is doubled.",
      name: "No Guard",
      shortDesc: "Every move used by or against this Pok\xE9mon will always hit."
    }
  ],
  [
    "normalize",
    {
      desc: "This Pok\xE9mon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
      name: "Normalize",
      shortDesc: "This Pok\xE9mon's moves are changed to be Normal type and have 1.2x power."
    }
  ],
  [
    "oblivious",
    {
      desc: "This Pok\xE9mon cannot be infatuated or taunted. Gaining this Ability while infatuated or taunted cures it. This Pok\xE9mon is immune to the effect of the Intimidate Ability.",
      name: "Oblivious",
      shortDesc: "This Pok\xE9mon cannot be infatuated or taunted. Immune to Intimidate."
    }
  ],
  [
    "opportunist",
    {
      name: "Opportunist",
      shortDesc: "When an opposing Pok\xE9mon recieves stat boosts, this Pok\xE9mon gets the same boosts."
    }
  ],
  [
    "orichalcumpulse",
    {
      name: "Orichalcum Pulse",
      shortDesc: "On switch-in, summons Sunny Day. Attack is boosted by 30% in Sunny Day."
    }
  ],
  [
    "overcoat",
    {
      desc: "This Pok\xE9mon is immune to powder moves, damage from Sandstorm, and the effects of Rage Powder and the Effect Spore Ability.",
      name: "Overcoat",
      shortDesc: "This Pok\xE9mon is immune to powder moves, Sandstorm damage, and Effect Spore."
    }
  ],
  [
    "overgrow",
    {
      desc: "When this Pok\xE9mon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.",
      name: "Overgrow",
      shortDesc: "At 1/3 or less of its max HP, this Pok\xE9mon's offensive stat is 1.5x with Grass attacks."
    }
  ],
  [
    "owntempo",
    {
      desc: "This Pok\xE9mon cannot be confused. Gaining this Ability while confused cures it. This Pok\xE9mon is immune to the effect of the Intimidate Ability.",
      name: "Own Tempo",
      shortDesc: "This Pok\xE9mon cannot be confused. Immune to Intimidate."
    }
  ],
  [
    "parentalbond",
    {
      desc: "This Pok\xE9mon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect Doom Desire, Dragon Darts, Dynamax Cannon, Endeavor, Explosion, Final Gambit, Fling, Future Sight, Ice Ball, Rollout, Self-Destruct, any multi-hit move, any move that has multiple targets, or any two-turn move.",
      name: "Parental Bond",
      shortDesc: "This Pok\xE9mon's damaging moves hit twice. The second hit has its damage quartered."
    }
  ],
  [
    "pastelveil",
    {
      desc: "This Pok\xE9mon and its allies cannot be poisoned. Gaining this Ability while this Pok\xE9mon or its ally is poisoned cures them. If this Ability is being ignored during an effect that causes poison, this Pok\xE9mon is cured immediately but its ally is not.",
      name: "Pastel Veil",
      shortDesc: "This Pok\xE9mon and its allies cannot be poisoned. On switch-in, cures poisoned allies."
    }
  ],
  [
    "perishbody",
    {
      desc: "Making contact with this Pok\xE9mon starts the Perish Song effect for it and the attacker. This effect does not happen for this Pok\xE9mon if the attacker already has a perish count.",
      name: "Perish Body",
      shortDesc: "Making contact with this Pok\xE9mon starts the Perish Song effect for it and the attacker."
    }
  ],
  [
    "persistent",
    {
      desc: "The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pok\xE9mon.",
      name: "Persistent",
      shortDesc: "When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns."
    }
  ],
  [
    "pickpocket",
    {
      desc: "If this Pok\xE9mon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
      name: "Pickpocket",
      shortDesc: "If this Pok\xE9mon has no item and is hit by a contact move, it steals the attacker's item."
    }
  ],
  [
    "pickup",
    {
      isFieldAbility: "After winning a battle, there is a 10% chance that a Pok\xE9mon with Pickup will create a held item for itself, even if fainted.",
      name: "Pickup",
      shortDesc: "If this Pok\xE9mon has no item, it finds one used by an adjacent Pok\xE9mon this turn."
    }
  ],
  [
    "pixilate",
    {
      desc: "This Pok\xE9mon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: "Pixilate",
      shortDesc: "This Pok\xE9mon's Normal-type moves become Fairy type and have 1.2x power."
    }
  ],
  [
    "plus",
    {
      desc: "If an active ally has this Ability or the Minus Ability, this Pok\xE9mon's Special Attack is multiplied by 1.5.",
      name: "Plus",
      shortDesc: "If an active ally has this Ability or the Minus Ability, this Pok\xE9mon's Sp. Atk is 1.5x."
    }
  ],
  [
    "poisonheal",
    {
      aliases: ["ph"],
      desc: "If this Pok\xE9mon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.",
      name: "Poison Heal",
      shortDesc: "This Pok\xE9mon is healed by 1/8 of its max HP each turn when poisoned; no HP loss."
    }
  ],
  [
    "poisonpoint",
    {
      name: "Poison Point",
      shortDesc: "30% chance a Pok\xE9mon making contact with this Pok\xE9mon will be poisoned."
    }
  ],
  [
    "poisontouch",
    {
      desc: "This Pok\xE9mon's contact moves have a 30% chance of poisoning. This effect comes after a move's inherent secondary effect chance.",
      name: "Poison Touch",
      shortDesc: "This Pok\xE9mon's contact moves have a 30% chance of poisoning."
    }
  ],
  [
    "powerconstruct",
    {
      desc: "If this Pok\xE9mon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.",
      name: "Power Construct",
      shortDesc: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn."
    }
  ],
  [
    "powerofalchemy",
    {
      desc: "This Pok\xE9mon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
      name: "Power of Alchemy",
      shortDesc: "This Pok\xE9mon copies the Ability of an ally that faints."
    }
  ],
  [
    "powerspot",
    {
      desc: "This Pok\xE9mon's allies have the power of their moves multiplied by 1.3. This affects Doom Desire and Future Sight, even if the user is not on the field.",
      name: "Power Spot",
      shortDesc: "This Pok\xE9mon's allies have the power of their moves multiplied by 1.3."
    }
  ],
  [
    "prankster",
    {
      desc: "This Pok\xE9mon's non-damaging moves have their priority increased by 1. Opposing Dark-type Pok\xE9mon are immune to these moves, and any move called by these moves, if the resulting user of the move has this Ability.",
      name: "Prankster",
      shortDesc: "This Pok\xE9mon's Status moves have priority raised by 1, but Dark types are immune."
    }
  ],
  [
    "pressure",
    {
      desc: "If this Pok\xE9mon is the target of an opposing Pok\xE9mon's move, that move loses one additional PP. Imprison, Snatch, and Tera Blast also lose one additional PP when used by an opposing Pok\xE9mon, but Sticky Web does not.",
      isFieldAbility: "If you have a Pok\xE9mon with Pressure at the front of your party (even if fainted), there is a 50% chance that a Pok\xE9mon will be forced to the upper bound of their encounter level range.",
      name: "Pressure",
      shortDesc: "If this Pok\xE9mon is the target of a foe's move, that move loses one additional PP."
    }
  ],
  [
    "primordialsea",
    {
      desc: "On switch-in, the weather becomes Primordial Sea, which includes all the effects of Rain Dance and prevents damaging Fire-type moves from executing. This weather remains in effect until this Ability is no longer active for any Pok\xE9mon, or the weather is changed by the Delta Stream or Desolate Land Abilities.",
      name: "Primordial Sea",
      shortDesc: "On switch-in, heavy rain begins until this Ability is not active in battle."
    }
  ],
  [
    "prismarmor",
    {
      desc: "This Pok\xE9mon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
      name: "Prism Armor",
      shortDesc: "This Pok\xE9mon receives 3/4 damage from supereffective attacks."
    }
  ],
  [
    "propellertail",
    {
      name: "Propeller Tail",
      shortDesc: "This Pok\xE9mon's moves cannot be redirected to a different target by any effect."
    }
  ],
  [
    "protean",
    {
      desc: "This Pok\xE9mon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type. This effect can only happen once per switch-in, and only if this Pok\xE9mon is not Terastallized.",
      name: "Protean",
      shortDesc: "This Pok\xE9mon's type changes to the type of the move it is using. Once per switch-in."
    }
  ],
  [
    "protosynthesis",
    {
      desc: "If Sunny Day is active or this Pok\xE9mon has used a held Booster Energy, this Pok\xE9mon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed.",
      name: "Protosynthesis",
      shortDesc: "While Sunny Day or Booster Energy are active, highest stat is 1.3x, or 1.5x if Speed."
    }
  ],
  [
    "psychicsurge",
    {
      name: "Psychic Surge",
      shortDesc: "On switch-in, this Pok\xE9mon summons Psychic Terrain."
    }
  ],
  [
    "punkrock",
    {
      desc: "This Pok\xE9mon's sound-based moves have their power multiplied by 1.3. This Pok\xE9mon takes halved damage from sound-based moves.",
      name: "Punk Rock",
      shortDesc: "This Pok\xE9mon receives 1/2 damage from sound moves. Its own have 1.3x power."
    }
  ],
  [
    "purepower",
    {
      name: "Pure Power",
      shortDesc: "This Pok\xE9mon's Attack is doubled."
    }
  ],
  [
    "purifyingsalt",
    {
      desc: "This Pok\xE9mon cannot become affected by a non-volatile status condition or Yawn. If a Pok\xE9mon uses a Ghost-type attack against this Pok\xE9mon, that Pok\xE9mon's offensive stat is halved when calculating the damage to this Pok\xE9mon.",
      name: "Purifying Salt",
      shortDesc: "Ghost damage to this Pok\xE9mon dealt with a halved offensive stat; can't be statused."
    }
  ],
  [
    "quarkdrive",
    {
      desc: "If Electric Terrain is active or this Pok\xE9mon has used a held Booster Energy, this Pok\xE9mon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed.",
      name: "Quark Drive",
      shortDesc: "While Electric Terrain or Booster Energy are active, highest stat is 1.3x, or 1.5x if Speed."
    }
  ],
  [
    "queenlymajesty",
    {
      desc: "Priority moves used by opposing Pok\xE9mon targeting this Pok\xE9mon or its allies are prevented from having an effect.",
      name: "Queenly Majesty",
      shortDesc: "This Pok\xE9mon and its allies are protected from opposing priority moves."
    }
  ],
  [
    "quickdraw",
    {
      name: "Quick Draw",
      shortDesc: "This Pok\xE9mon has a 30% chance to move first in its priority bracket with attacking moves."
    }
  ],
  [
    "quickfeet",
    {
      desc: "If this Pok\xE9mon has a non-volatile status condition, its Speed is multiplied by 1.5. This Pok\xE9mon ignores the paralysis effect of halving Speed.",
      isFieldAbility: "If a Pok\xE9mon with Quick Feet is in the first place in the party (even if fainted), the chance of encountering a wild Pok\xE9mon is decreased by 50%.",
      name: "Quick Feet",
      shortDesc: "If this Pok\xE9mon is statused, its Speed is 1.5x; ignores Speed drop from paralysis."
    }
  ],
  [
    "raindish",
    {
      desc: "If Rain Dance is active, this Pok\xE9mon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This effect is prevented if this Pok\xE9mon is holding a Utility Umbrella.",
      name: "Rain Dish",
      shortDesc: "If Rain Dance is active, this Pok\xE9mon heals 1/16 of its max HP each turn."
    }
  ],
  [
    "rattled",
    {
      desc: "This Pok\xE9mon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or if an opposing Pok\xE9mon affected this Pok\xE9mon with the Intimidate Ability.",
      name: "Rattled",
      shortDesc: "Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated."
    }
  ],
  [
    "rebound",
    {
      desc: "On switch-in, this Pok\xE9mon blocks certain status moves and instead uses the move against the original user.",
      name: "Rebound",
      shortDesc: "On switch-in, blocks certain status moves and bounces them back to the user."
    }
  ],
  [
    "receiver",
    {
      desc: "This Pok\xE9mon copies the Ability of an ally that faints. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
      name: "Receiver",
      shortDesc: "This Pok\xE9mon copies the Ability of an ally that faints."
    }
  ],
  [
    "reckless",
    {
      desc: "This Pok\xE9mon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
      name: "Reckless",
      shortDesc: "This Pok\xE9mon's attacks with recoil or crash damage have 1.2x power; not Struggle."
    }
  ],
  [
    "refrigerate",
    {
      desc: "This Pok\xE9mon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
      name: "Refrigerate",
      shortDesc: "This Pok\xE9mon's Normal-type moves become Ice type and have 1.2x power."
    }
  ],
  [
    "regenerator",
    {
      name: "Regenerator",
      shortDesc: "This Pok\xE9mon restores 1/3 of its maximum HP, rounded down, when it switches out."
    }
  ],
  [
    "ripen",
    {
      desc: "When this Pok\xE9mon eats certain Berries, the effects are doubled. Berries that restore HP or PP have the amount doubled, Berries that raise stat stages have the amount doubled, Berries that halve damage taken quarter it instead, and a Jaboca Berry or Rowap Berry has the attacker lose 1/4 of its maximum HP, rounded down.",
      name: "Ripen",
      shortDesc: "When this Pok\xE9mon eats certain Berries, the effects are doubled."
    }
  ],
  [
    "rivalry",
    {
      desc: "This Pok\xE9mon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pok\xE9mon or the target is genderless.",
      name: "Rivalry",
      shortDesc: "This Pok\xE9mon's attacks do 1.25x on same gender targets; 0.75x on opposite gender."
    }
  ],
  [
    "rkssystem",
    {
      name: "RKS System",
      shortDesc: "If this Pok\xE9mon is a Silvally, its type changes to match its held Memory."
    }
  ],
  [
    "rockhead",
    {
      desc: "This Pok\xE9mon does not take recoil damage, except Struggle. Does not affect Life Orb damage or crash damage.",
      name: "Rock Head",
      shortDesc: "This Pok\xE9mon does not take recoil damage besides Struggle/Life Orb/crash damage."
    }
  ],
  [
    "rockypayload",
    {
      name: "Rocky Payload",
      shortDesc: "This Pok\xE9mon's offensive stat is multiplied by 1.5 while using a Rock-type attack."
    }
  ],
  [
    "roughskin",
    {
      desc: "Pok\xE9mon making contact with this Pok\xE9mon lose 1/8 of their maximum HP, rounded down.",
      name: "Rough Skin",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon lose 1/8 of their max HP."
    }
  ],
  ["runaway", { name: "Run Away", shortDesc: "No competitive use." }],
  [
    "sandforce",
    {
      desc: "If Sandstorm is active, this Pok\xE9mon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pok\xE9mon takes no damage from Sandstorm.",
      name: "Sand Force",
      shortDesc: "This Pok\xE9mon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it."
    }
  ],
  [
    "sandrush",
    {
      desc: "If Sandstorm is active, this Pok\xE9mon's Speed is doubled. This Pok\xE9mon takes no damage from Sandstorm.",
      name: "Sand Rush",
      shortDesc: "If Sandstorm is active, this Pok\xE9mon's Speed is doubled; immunity to Sandstorm."
    }
  ],
  [
    "sandspit",
    {
      desc: "When this Pok\xE9mon is hit by an attack, the effect of Sandstorm begins. This effect comes after the effects of Max and G-Max Moves.",
      name: "Sand Spit",
      shortDesc: "When this Pok\xE9mon is hit by an attack, the effect of Sandstorm begins."
    }
  ],
  [
    "sandstream",
    {
      name: "Sand Stream",
      shortDesc: "On switch-in, this Pok\xE9mon summons Sandstorm."
    }
  ],
  [
    "sandveil",
    {
      desc: "If Sandstorm is active, the accuracy of moves used against this Pok\xE9mon is multiplied by 0.8. This Pok\xE9mon takes no damage from Sandstorm.",
      isFieldAbility: "If a Pok\xE9mon with Sand Veil is in the first place in the party (even if fainted) in an area with a sandstorm, the chance of encountering a wild Pok\xE9mon is decreased by 50%.",
      name: "Sand Veil",
      shortDesc: "If Sandstorm is active, this Pok\xE9mon's evasiveness is 1.25x; immunity to Sandstorm."
    }
  ],
  [
    "sapsipper",
    {
      desc: "This Pok\xE9mon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.",
      name: "Sap Sipper",
      shortDesc: "This Pok\xE9mon's Attack is raised 1 stage if hit by a Grass move; Grass immunity."
    }
  ],
  [
    "schooling",
    {
      desc: "On switch-in, if this Pok\xE9mon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.",
      name: "Schooling",
      shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form."
    }
  ],
  [
    "scrappy",
    {
      desc: "This Pok\xE9mon can hit Ghost types with Normal- and Fighting-type moves. This Pok\xE9mon is immune to the effect of the Intimidate Ability.",
      name: "Scrappy",
      shortDesc: "Fighting, Normal moves hit Ghost. Immune to Intimidate."
    }
  ],
  [
    "screencleaner",
    {
      name: "Screen Cleaner",
      shortDesc: "On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides."
    }
  ],
  [
    "seedsower",
    {
      desc: "When this Pok\xE9mon is hit by an attack, the effect of Grassy Terrain begins.",
      name: "Seed Sower",
      shortDesc: "When this Pok\xE9mon is hit by an attack, the effect of Grassy Terrain begins."
    }
  ],
  [
    "serenegrace",
    {
      desc: "This Pok\xE9mon's moves have their secondary effect chance doubled. This effect stacks with the Rainbow effect, except for secondary effects that cause the target to flinch.",
      name: "Serene Grace",
      shortDesc: "This Pok\xE9mon's moves have their secondary effect chance doubled."
    }
  ],
  [
    "shadowshield",
    {
      desc: "If this Pok\xE9mon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Abilities Mold Breaker, Teravolt, and Turboblaze cannot ignore this Ability.",
      name: "Shadow Shield",
      shortDesc: "If this Pok\xE9mon is at full HP, damage taken from attacks is halved."
    }
  ],
  [
    "shadowtag",
    {
      aliases: ["stag"],
      desc: "Prevents opposing Pok\xE9mon from choosing to switch out, unless they are holding a Shed Shell, are a Ghost type, or also have this Ability.",
      name: "Shadow Tag",
      shortDesc: "Prevents foes from choosing to switch unless they also have this Ability."
    }
  ],
  [
    "sharpness",
    {
      desc: "This Pok\xE9mon's slicing attacks have their power multiplied by 1.5.",
      name: "Sharpness",
      shortDesc: "This Pok\xE9mon's slicing attacks have 1.5x power."
    }
  ],
  [
    "shedskin",
    {
      desc: "This Pok\xE9mon has a 33% chance to have its non-volatile status condition cured at the end of each turn.",
      name: "Shed Skin",
      shortDesc: "This Pok\xE9mon has a 33% chance to have its status cured at the end of each turn."
    }
  ],
  [
    "sheerforce",
    {
      desc: "This Pok\xE9mon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Anger Shell, Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
      name: "Sheer Force",
      shortDesc: "This Pok\xE9mon's attacks with secondary effects have 1.3x power; nullifies the effects."
    }
  ],
  [
    "shellarmor",
    {
      name: "Shell Armor",
      shortDesc: "This Pok\xE9mon cannot be struck by a critical hit."
    }
  ],
  [
    "shielddust",
    {
      name: "Shield Dust",
      shortDesc: "This Pok\xE9mon is not affected by the secondary effect of another Pok\xE9mon's attack."
    }
  ],
  [
    "shieldsdown",
    {
      desc: "If this Pok\xE9mon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by a non-volatile status condition or Yawn.",
      name: "Shields Down",
      shortDesc: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor."
    }
  ],
  [
    "simple",
    {
      desc: "When this Pok\xE9mon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
      name: "Simple",
      shortDesc: "When one of this Pok\xE9mon's stat stages is raised or lowered, the amount is doubled."
    }
  ],
  [
    "skilllink",
    {
      desc: "This Pok\xE9mon's multi-hit attacks always hit the maximum number of times. Triple Kick and Triple Axel do not check accuracy for the second and third hits.",
      name: "Skill Link",
      shortDesc: "This Pok\xE9mon's multi-hit attacks always hit the maximum number of times."
    }
  ],
  [
    "slowstart",
    {
      name: "Slow Start",
      shortDesc: "On switch-in, this Pok\xE9mon's Attack and Speed are halved for 5 turns."
    }
  ],
  [
    "slushrush",
    {
      name: "Slush Rush",
      shortDesc: "If Snow is active, this Pok\xE9mon's Speed is doubled."
    }
  ],
  [
    "sniper",
    {
      name: "Sniper",
      shortDesc: "If this Pok\xE9mon strikes with a critical hit, the damage is multiplied by 1.5."
    }
  ],
  [
    "snowcloak",
    {
      desc: "If Snow is active, the accuracy of moves used against this Pok\xE9mon is multiplied by 0.8.",
      isFieldAbility: "If a Pok\xE9mon with Snow Cloak is in the first place in the party (even if fainted) in an area with hail, the chance of encountering a wild Pok\xE9mon is decreased by 50%.",
      name: "Snow Cloak",
      shortDesc: "If Snow is active, this Pok\xE9mon's evasiveness is 1.25x."
    }
  ],
  [
    "snowwarning",
    {
      name: "Snow Warning",
      shortDesc: "On switch-in, this Pok\xE9mon summons Snow."
    }
  ],
  [
    "solarpower",
    {
      desc: "If Sunny Day is active, this Pok\xE9mon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. These effects are prevented if the Pok\xE9mon is holding a Utility Umbrella.",
      name: "Solar Power",
      shortDesc: "If Sunny Day is active, this Pok\xE9mon's Sp. Atk is 1.5x; loses 1/8 max HP per turn."
    }
  ],
  [
    "solidrock",
    {
      name: "Solid Rock",
      shortDesc: "This Pok\xE9mon receives 3/4 damage from supereffective attacks."
    }
  ],
  [
    "soulheart",
    {
      desc: "This Pok\xE9mon's Special Attack is raised by 1 stage when another Pok\xE9mon faints.",
      name: "Soul-Heart",
      shortDesc: "This Pok\xE9mon's Special Attack is raised by 1 stage when another Pok\xE9mon faints."
    }
  ],
  [
    "soundproof",
    {
      name: "Soundproof",
      shortDesc: "This Pok\xE9mon is immune to sound-based moves, unless it used the move."
    }
  ],
  [
    "speedboost",
    {
      desc: "This Pok\xE9mon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
      name: "Speed Boost",
      shortDesc: "This Pok\xE9mon's Speed is raised 1 stage at the end of each full turn on the field."
    }
  ],
  [
    "stakeout",
    {
      name: "Stakeout",
      shortDesc: "This Pok\xE9mon's offensive stat is doubled against a target that switched in this turn."
    }
  ],
  [
    "stall",
    {
      name: "Stall",
      shortDesc: "This Pok\xE9mon moves last among Pok\xE9mon using the same or greater priority moves."
    }
  ],
  [
    "stalwart",
    {
      name: "Stalwart",
      shortDesc: "This Pok\xE9mon's moves cannot be redirected to a different target by any effect."
    }
  ],
  [
    "stamina",
    {
      name: "Stamina",
      shortDesc: "This Pok\xE9mon's Defense is raised by 1 stage after it is damaged by a move."
    }
  ],
  [
    "stancechange",
    {
      desc: "If this Pok\xE9mon is an Aegislash, it changes to Blade Forme before using an attacking move, and changes to Shield Forme before using King's Shield.",
      name: "Stance Change",
      shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield."
    }
  ],
  [
    "static",
    {
      isFieldAbility: "In Pok\xE9mon Sword and Shield, if a Pok\xE9mon with Static is in the first place in the party, there is a 50% chance the game will force an encounter with an Electric-type Pok\xE9mon, if one is possible.",
      name: "Static",
      shortDesc: "30% chance a Pok\xE9mon making contact with this Pok\xE9mon will be paralyzed."
    }
  ],
  [
    "steadfast",
    {
      name: "Steadfast",
      shortDesc: "If this Pok\xE9mon flinches, its Speed is raised by 1 stage."
    }
  ],
  [
    "steamengine",
    {
      desc: "This Pok\xE9mon's Speed is raised by 6 stages after it is damaged by a Fire- or Water-type move.",
      isFieldAbility: "Having a Pok\xE9mon with Steam Engine in your party will halve the number of cycles it takes for all eggs in the party to hatch.",
      name: "Steam Engine",
      shortDesc: "This Pok\xE9mon's Speed is raised by 6 stages after it is damaged by Fire/Water moves."
    }
  ],
  [
    "steelworker",
    {
      name: "Steelworker",
      shortDesc: "This Pok\xE9mon's offensive stat is multiplied by 1.5 while using a Steel-type attack."
    }
  ],
  [
    "steelyspirit",
    {
      desc: "This Pok\xE9mon and its allies' Steel-type moves have their power multiplied by 1.5. This affects Doom Desire even if the user is not on the field.",
      name: "Steely Spirit",
      shortDesc: "This Pok\xE9mon and its allies' Steel-type moves have their power multiplied by 1.5."
    }
  ],
  [
    "stench",
    {
      desc: "This Pok\xE9mon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
      isFieldAbility: "If a Pok\xE9mon with Stench is in the first place in the party (even if fainted), the chance of encountering a wild Pok\xE9mon is decreased by 50%.",
      name: "Stench",
      shortDesc: "This Pok\xE9mon's attacks without a chance to flinch gain a 10% chance to flinch."
    }
  ],
  [
    "stickyhold",
    {
      desc: "This Pok\xE9mon cannot lose its held item due to another Pok\xE9mon's Ability or attack, unless the attack knocks out this Pok\xE9mon. A Sticky Barb will be transferred to other Pok\xE9mon regardless of this Ability.",
      isFieldAbility: "If a Pok\xE9mon with Sticky Hold is in the first place in the party (even if fainted), bites will occur more often while fishing.",
      name: "Sticky Hold",
      shortDesc: "This Pok\xE9mon cannot lose its held item due to another Pok\xE9mon's Ability or attack."
    }
  ],
  [
    "stormdrain",
    {
      desc: "This Pok\xE9mon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pok\xE9mon is not the target of a single-target Water-type move used by another Pok\xE9mon, this Pok\xE9mon redirects that move to itself if it is within the range of that move. If multiple Pok\xE9mon could redirect with this Ability, it goes to the one with the highest Speed, or in the case of a tie to the one that has had this Ability active longer.",
      isFieldAbility: "In Pok\xE9mon Sword and Shield, if a Pok\xE9mon with Storm Drain is in the first place in the party (even if fainted), then there is a 50% chance the game will force an encounter with a Water-type Pok\xE9mon, if one is possible.",
      name: "Storm Drain",
      shortDesc: "This Pok\xE9mon draws Water moves to itself to raise Sp. Atk by 1; Water immunity."
    }
  ],
  [
    "strongjaw",
    {
      desc: "This Pok\xE9mon's bite-based attacks have their power multiplied by 1.5.",
      name: "Strong Jaw",
      shortDesc: "This Pok\xE9mon's bite-based attacks have 1.5x power. Bug Bite is not boosted."
    }
  ],
  [
    "sturdy",
    {
      desc: "If this Pok\xE9mon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pok\xE9mon.",
      name: "Sturdy",
      shortDesc: "If this Pok\xE9mon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO."
    }
  ],
  [
    "suctioncups",
    {
      isFieldAbility: "If a Pok\xE9mon with Suction Cups is in the first place in the party (even if fainted), bites will occur more often while fishing.",
      name: "Suction Cups",
      shortDesc: "This Pok\xE9mon cannot be forced to switch out by another Pok\xE9mon's attack or item."
    }
  ],
  [
    "superluck",
    {
      isFieldAbility: "In Pok\xE9mon Sword and Shield, if a Pok\xE9mon with this Ability leads the party, the chances of finding a wild Pok\xE9mon holding an item increase.",
      name: "Super Luck",
      shortDesc: "This Pok\xE9mon's critical hit ratio is raised by 1 stage."
    }
  ],
  [
    "supremeoverlord",
    {
      desc: "This Pok\xE9mon's moves have their power multiplied by 1+(X*0.1), where X is the total number of times any Pok\xE9mon has fainted on the user's side when this Ability became active, and X cannot be greater than 5.",
      name: "Supreme Overlord",
      shortDesc: "This Pok\xE9mon's moves have 10% more power for each fainted ally, up to 5 allies."
    }
  ],
  [
    "surgesurfer",
    {
      name: "Surge Surfer",
      shortDesc: "If Electric Terrain is active, this Pok\xE9mon's Speed is doubled."
    }
  ],
  [
    "swarm",
    {
      desc: "When this Pok\xE9mon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Bug-type attack.",
      isFieldAbility: "In Pok\xE9mon Emerald, this Ability also increases the frequency cries of wild Pok\xE9mon that are heard in the overworld.",
      name: "Swarm",
      shortDesc: "At 1/3 or less of its max HP, this Pok\xE9mon's offensive stat is 1.5x with Bug attacks."
    }
  ],
  [
    "sweetveil",
    {
      desc: "This Pok\xE9mon and its allies cannot fall asleep, but those already asleep do not wake up immediately. This Pok\xE9mon and its allies cannot use Rest successfully or become affected by Yawn, and those previously affected will not fall asleep.",
      name: "Sweet Veil",
      shortDesc: "This Pok\xE9mon and its allies cannot fall asleep; those already asleep do not wake up."
    }
  ],
  [
    "swiftswim",
    {
      desc: "If Rain Dance is active, this Pok\xE9mon's Speed is doubled. This effect is prevented if this Pok\xE9mon is holding a Utility Umbrella.",
      name: "Swift Swim",
      shortDesc: "If Rain Dance is active, this Pok\xE9mon's Speed is doubled."
    }
  ],
  [
    "swordofruin",
    {
      name: "Sword of Ruin",
      shortDesc: "Active Pok\xE9mon without this Ability have their Defense multiplied by 0.75."
    }
  ],
  [
    "symbiosis",
    {
      desc: "If an ally uses its item, this Pok\xE9mon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off, or if the ally used an Eject Button or Eject Pack.",
      name: "Symbiosis",
      shortDesc: "If an ally uses its item, this Pok\xE9mon gives its item to that ally immediately."
    }
  ],
  [
    "synchronize",
    {
      desc: "If another Pok\xE9mon burns, paralyzes, poisons, or badly poisons this Pok\xE9mon, that Pok\xE9mon receives the same non-volatile status condition.",
      isFieldAbility: "If a Pok\xE9mon with Synchronize in the first slot in the party (even if fainted), chance of encountering a wild Pok\xE9mon with the same nature will be 50%. In Pok\xE9mon Sword and Shield however, all wild Pok\xE9mon are guaranteed to have the same nature as the Pok\xE9mon with Synchronize, exluding gift Pok\xE9mon and Pok\xE9mon obtained from max raid battles. Roaming Pok\xE9mon, Gift Pok\xE9mon (excluding Pok\xE9mon obtained via mystery gift or eggs in Omega Ruby and Alpha Sapphire to Ultra Sun/Moon), Stationary Pok\xE9mon in Pok\xE9mon Emerald, Pok\xE9mon in the Pokewalker and Pok\xE9mon found in Entree Forest are also not affected by this ability.",
      name: "Synchronize",
      shortDesc: "If another Pok\xE9mon burns/poisons/paralyzes this Pok\xE9mon, it also gets that status."
    }
  ],
  [
    "tabletsofruin",
    {
      name: "Tablets of Ruin",
      shortDesc: "Active Pok\xE9mon without this Ability have their Attack multiplied by 0.75."
    }
  ],
  [
    "tangledfeet",
    {
      name: "Tangled Feet",
      shortDesc: "This Pok\xE9mon's evasiveness is doubled as long as it is confused."
    }
  ],
  [
    "tanglinghair",
    {
      name: "Tangling Hair",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon have their Speed lowered by 1 stage."
    }
  ],
  [
    "technician",
    {
      desc: "This Pok\xE9mon's moves of 60 power or less have their power multiplied by 1.5, including Struggle. This effect comes after a move's effect changes its own power.",
      name: "Technician",
      shortDesc: "This Pok\xE9mon's moves of 60 power or less have 1.5x power, including Struggle."
    }
  ],
  [
    "telepathy",
    {
      name: "Telepathy",
      shortDesc: "This Pok\xE9mon does not take damage from attacks made by its allies."
    }
  ],
  [
    "teravolt",
    {
      desc: "This Pok\xE9mon's moves and their effects ignore certain Abilities of other Pok\xE9mon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pok\xE9mon on the field, whether or not it is a target of this Pok\xE9mon's move, and whether or not their Ability is beneficial to this Pok\xE9mon.",
      name: "Teravolt",
      shortDesc: "This Pok\xE9mon's moves and their effects ignore the Abilities of other Pok\xE9mon."
    }
  ],
  [
    "thermalexchange",
    {
      desc: "This Pok\xE9mon's Attack is raised 1 stage after it is damaged by a Fire-type move. This Pok\xE9mon cannot be burned.",
      name: "Thermal Exchange",
      shortDesc: "This Pok\xE9mon's Attack is raised by 1 stage when hit by Fire moves; it can't be burned."
    }
  ],
  [
    "thickfat",
    {
      desc: "If a Pok\xE9mon uses a Fire- or Ice-type attack against this Pok\xE9mon, that Pok\xE9mon's offensive stat is halved when calculating the damage to this Pok\xE9mon.",
      name: "Thick Fat",
      shortDesc: "Fire-/Ice-type moves against this Pok\xE9mon deal damage with a halved offensive stat."
    }
  ],
  [
    "tintedlens",
    {
      name: "Tinted Lens",
      shortDesc: "This Pok\xE9mon's attacks that are not very effective on a target deal double damage."
    }
  ],
  [
    "torrent",
    {
      desc: "When this Pok\xE9mon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.",
      name: "Torrent",
      shortDesc: "At 1/3 or less of its max HP, this Pok\xE9mon's offensive stat is 1.5x with Water attacks."
    }
  ],
  [
    "toughclaws",
    {
      name: "Tough Claws",
      shortDesc: "This Pok\xE9mon's contact moves have their power multiplied by 1.3."
    }
  ],
  [
    "toxicboost",
    {
      desc: "While this Pok\xE9mon is poisoned, the power of its physical attacks is multiplied by 1.5.",
      name: "Toxic Boost",
      shortDesc: "While this Pok\xE9mon is poisoned, its physical attacks have 1.5x power."
    }
  ],
  [
    "toxicdebris",
    {
      desc: "When this Pok\xE9mon is hit by a physical attack, Toxic Spikes are set on the opposing side of the field.",
      name: "Toxic Debris",
      shortDesc: "When this Pok\xE9mon is hit by a physical attack, Toxic Spikes are set around the attacker."
    }
  ],
  [
    "trace",
    {
      desc: "On switch-in, this Pok\xE9mon copies a random opposing Pok\xE9mon's Ability. Abilities that cannot be copied are As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode. If no opposing Pok\xE9mon has an Ability that can be copied, this Ability will activate as soon as one does.",
      name: "Trace",
      shortDesc: "On switch-in, or when it can, this Pok\xE9mon copies a random adjacent foe's Ability."
    }
  ],
  [
    "transistor",
    {
      name: "Transistor",
      shortDesc: "This Pok\xE9mon's offensive stat is multiplied by 1.5 while using an Electric-type attack."
    }
  ],
  [
    "triage",
    {
      name: "Triage",
      shortDesc: "This Pok\xE9mon's healing moves have their priority increased by 3."
    }
  ],
  [
    "truant",
    {
      name: "Truant",
      shortDesc: "This Pok\xE9mon skips every other turn instead of using a move."
    }
  ],
  [
    "turboblaze",
    {
      desc: "This Pok\xE9mon's moves and their effects ignore certain Abilities of other Pok\xE9mon. The Abilities that can be negated are Aroma Veil, Aura Break, Battle Armor, Big Pecks, Bulletproof, Clear Body, Contrary, Damp, Dazzling, Disguise, Dry Skin, Filter, Flash Fire, Flower Gift, Flower Veil, Fluffy, Friend Guard, Fur Coat, Grass Pelt, Heatproof, Heavy Metal, Hyper Cutter, Ice Face, Ice Scales, Immunity, Inner Focus, Insomnia, Keen Eye, Leaf Guard, Levitate, Light Metal, Lightning Rod, Limber, Magic Bounce, Magma Armor, Marvel Scale, Mirror Armor, Motor Drive, Multiscale, Oblivious, Overcoat, Own Tempo, Pastel Veil, Punk Rock, Queenly Majesty, Sand Veil, Sap Sipper, Shell Armor, Shield Dust, Simple, Snow Cloak, Solid Rock, Soundproof, Sticky Hold, Storm Drain, Sturdy, Suction Cups, Sweet Veil, Tangled Feet, Telepathy, Thick Fat, Unaware, Vital Spirit, Volt Absorb, Water Absorb, Water Bubble, Water Veil, White Smoke, Wonder Guard, and Wonder Skin. This affects every other Pok\xE9mon on the field, whether or not it is a target of this Pok\xE9mon's move, and whether or not their Ability is beneficial to this Pok\xE9mon.",
      name: "Turboblaze",
      shortDesc: "This Pok\xE9mon's moves and their effects ignore the Abilities of other Pok\xE9mon."
    }
  ],
  [
    "unaware",
    {
      desc: "This Pok\xE9mon ignores other Pok\xE9mon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pok\xE9mon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
      name: "Unaware",
      shortDesc: "This Pok\xE9mon ignores other Pok\xE9mon's stat stages when taking or doing damage."
    }
  ],
  [
    "unburden",
    {
      desc: "If this Pok\xE9mon loses its held item for any reason, its Speed is doubled as long as it remains active, has this Ability, and is not holding an item.",
      name: "Unburden",
      shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability."
    }
  ],
  [
    "unnerve",
    {
      desc: "While this Pok\xE9mon is active, it prevents opposing Pok\xE9mon from using their Berries. This Ability activates before hazards and other Abilities take effect.",
      name: "Unnerve",
      shortDesc: "While this Pok\xE9mon is active, it prevents opposing Pok\xE9mon from using their Berries."
    }
  ],
  [
    "unseenfist",
    {
      desc: "All of this Pok\xE9mon's moves that make contact bypass protection.",
      name: "Unseen Fist",
      shortDesc: "This Pok\xE9mon's contact moves ignore the target's protection, except Max Guard."
    }
  ],
  [
    "vesselofruin",
    {
      name: "Vessel of Ruin",
      shortDesc: "Active Pok\xE9mon without this Ability have their Special Attack multiplied by 0.75."
    }
  ],
  [
    "victorystar",
    {
      name: "Victory Star",
      shortDesc: "This Pok\xE9mon and its allies' moves have their accuracy multiplied by 1.1."
    }
  ],
  [
    "vitalspirit",
    {
      isFieldAbility: "If you have a Pok\xE9mon with Vital Spirit at the front of your party (even if fainted), there is a 50% chance that a Pok\xE9mon will be forced to the upper bound of their encounter level range. In Generation 5, Vital Spirit also prevented a Pok\xE9mon from visiting the Dream World before it was shut down.",
      name: "Vital Spirit",
      shortDesc: "This Pok\xE9mon cannot fall asleep. Gaining this Ability while asleep cures it."
    }
  ],
  [
    "voltabsorb",
    {
      desc: "This Pok\xE9mon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
      name: "Volt Absorb",
      shortDesc: "This Pok\xE9mon heals 1/4 of its max HP when hit by Electric moves; Electric immunity."
    }
  ],
  [
    "wanderingspirit",
    {
      desc: "Pok\xE9mon making contact with this Pok\xE9mon have their Ability swapped with this one. Does not affect Pok\xE9mon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode Abilities.",
      name: "Wandering Spirit",
      shortDesc: "Pok\xE9mon making contact with this Pok\xE9mon have their Ability swapped with this one."
    }
  ],
  [
    "waterabsorb",
    {
      desc: "This Pok\xE9mon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.",
      name: "Water Absorb",
      shortDesc: "This Pok\xE9mon heals 1/4 of its max HP when hit by Water moves; Water immunity."
    }
  ],
  [
    "waterbubble",
    {
      desc: "This Pok\xE9mon's offensive stat is doubled while using a Water-type attack. If a Pok\xE9mon uses a Fire-type attack against this Pok\xE9mon, that Pok\xE9mon's offensive stat is halved when calculating the damage to this Pok\xE9mon. This Pok\xE9mon cannot be burned. Gaining this Ability while burned cures it.",
      name: "Water Bubble",
      shortDesc: "This Pok\xE9mon's Water power is 2x; it can't be burned; Fire power against it is halved."
    }
  ],
  [
    "watercompaction",
    {
      name: "Water Compaction",
      shortDesc: "This Pok\xE9mon's Defense is raised 2 stages after it is damaged by a Water-type move."
    }
  ],
  [
    "waterveil",
    {
      name: "Water Veil",
      shortDesc: "This Pok\xE9mon cannot be burned. Gaining this Ability while burned cures it."
    }
  ],
  [
    "weakarmor",
    {
      desc: "If a physical attack hits this Pok\xE9mon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.",
      name: "Weak Armor",
      shortDesc: "If a physical attack hits this Pok\xE9mon, Defense is lowered by 1, Speed is raised by 2."
    }
  ],
  [
    "wellbakedbody",
    {
      desc: "This Pok\xE9mon is immune to Fire-type moves and raises its Defense by 2 stages when hit by a Fire-type move.",
      name: "Well-Baked Body",
      shortDesc: "This Pok\xE9mon's Defense is raised 2 stages if hit by a Fire move; Fire immunity."
    }
  ],
  [
    "whitesmoke",
    {
      isFieldAbility: "If a Pok\xE9mon with White Smoke is in the first place in the party (even if fainted), the chance of encountering a wild Pok\xE9mon is decreased by 50%.",
      name: "White Smoke",
      shortDesc: "Prevents other Pok\xE9mon from lowering this Pok\xE9mon's stat stages."
    }
  ],
  [
    "wimpout",
    {
      desc: "When this Pok\xE9mon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
      name: "Wimp Out",
      shortDesc: "This Pok\xE9mon switches out when it reaches 1/2 or less of its maximum HP."
    }
  ],
  [
    "windpower",
    {
      desc: "This Pok\xE9mon's next Electric-type attack will have its power doubled if it is hit by a wind move or Tailwind begins.",
      name: "Wind Power",
      shortDesc: "This Pok\xE9mon becomes charged if it is hit by a wind move or Tailwind begins."
    }
  ],
  [
    "windrider",
    {
      desc: "This Pok\xE9mon is immune to wind moves and raises its Attack by 1 stage when hit by a wind move. Attack is also raised when Tailwind begins on this Pok\xE9mon's side.",
      name: "Wind Rider",
      shortDesc: "If hit by a wind move or Tailwind begins: +1 Attack. Wind move immunity."
    }
  ],
  [
    "wonderguard",
    {
      name: "Wonder Guard",
      shortDesc: "This Pok\xE9mon can only be damaged by supereffective moves and indirect damage."
    }
  ],
  [
    "wonderskin",
    {
      desc: "Non-damaging moves that check accuracy have their accuracy changed to 50% when used against this Pok\xE9mon. This effect comes before other effects that modify accuracy.",
      name: "Wonder Skin",
      shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pok\xE9mon."
    }
  ],
  [
    "zenmode",
    {
      desc: "If this Pok\xE9mon is a Darmanitan or Galarian Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode.",
      name: "Zen Mode",
      shortDesc: "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen."
    }
  ],
  [
    "zerotohero",
    {
      name: "Zero to Hero",
      shortDesc: "If this Pok\xE9mon is Palafin, it changes to Hero Mode when it switches out."
    }
  ]
]);
for (const [key, value] of abilities.entries()) {
  value.key = key;
}
export {
  abilities
};
//# sourceMappingURL=abilities.js.map