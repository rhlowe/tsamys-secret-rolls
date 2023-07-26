//CONFIG.debug.hooks = true
import { registerSettingsPf2e, registerSettingsDnd5e } from "./scripts/settings.js";
// Handle-socket

Hooks.on('ready', () => {
  console.log("Registering...")
  if(game.system.id ==="pf2e"){
    console.log(game.system.id)
    registerSettingsPf2e();
    startPf2e();
  }
  if(game.system.id === "dnd5e"){
    console.log(game.system.id)
    registerSettingsDnd5e();
    startDnd5e()
  }

  game.socket.on('module.tsamys-secret-rolls', async (data) => {
      if (game.user.isGM && data) showResults(data);
    });
  })

function startPf2e(){
  Hooks.on("preCreateChatMessage", async (rawMessage) => {
    if (rawMessage.flavor.includes("Skill Check")){
      if(game.settings.get("tsamys-secret-rolls", "hideAcrobatics") && rawMessage.flavor.includes("Acrobatics")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideArcana") && rawMessage.flavor.includes("Arcana")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideAthletics") && rawMessage.flavor.includes("Athletics")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideCrafting") && rawMessage.flavor.includes("Crafting")){ rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideDeception") && rawMessage.flavor.includes("Deception")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideDiplomacy") && rawMessage.flavor.includes("Diplomacy")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideIntimidation") && rawMessage.flavor.includes("Intimidation")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideLore") && rawMessage.flavor.includes("Lore")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideMedicine") && rawMessage.flavor.includes("Medicine")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideNature") && rawMessage.flavor.includes("Nature")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideOccultism") && rawMessage.flavor.includes("Occultism")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePerformance") && rawMessage.flavor.includes("Performance")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideReligion") && rawMessage.flavor.includes("Religion")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSociety") && rawMessage.flavor.includes("Society")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideStealth") && rawMessage.flavor.includes("Stealth")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSurvival") && rawMessage.flavor.includes("Survival")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideThievery") && rawMessage.flavor.includes("Thievery")){rawMessage.applyRollMode("blindroll");}
    }
  })
}

function startDnd5e(){
  Hooks.on("preCreateChatMessage", async (rawMessage) => {
    if (rawMessage.flavor.includes("Skill Check")){
      if(game.settings.get("tsamys-secret-rolls", "hideAcrobatics") && rawMessage.flavor.includes("Acrobatics")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideAnimalHandling") && rawMessage.flavor.includes("Animal Handling")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideArcana") && rawMessage.flavor.includes("Arcana")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideAthletics") && rawMessage.flavor.includes("Athletics")){ rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideDeception") && rawMessage.flavor.includes("Deception")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideHistory") && rawMessage.flavor.includes("History")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideInsight") && rawMessage.flavor.includes("Insight")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideIntimidation") && rawMessage.flavor.includes("Intimidation")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideInvestigation") && rawMessage.flavor.includes("Investigation")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideMedicine") && rawMessage.flavor.includes("Medicine")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideNature") && rawMessage.flavor.includes("Nature")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePerception") && rawMessage.flavor.includes("Perception")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePerformance") && rawMessage.flavor.includes("Performance")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePersuasion") && rawMessage.flavor.includes("Persuasion")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideReligion") && rawMessage.flavor.includes("Religion")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSleightofHand") && rawMessage.flavor.includes("Sleight of Hand")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideStealth") && rawMessage.flavor.includes("Stealth")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSurvival") && rawMessage.flavor.includes("Survival")){rawMessage.applyRollMode("blindroll");}
    }
  })
}



  
