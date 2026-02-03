const navbarCollapse = document.getElementById("navbarMenu");
const navbarToggler = document.querySelector(".navbar-toggler");

const navLinks = document.querySelectorAll(
  "#navbarMenu .nav-link:not(.dropdown-toggle), #navbarMenu .dropdown-item"
);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
    collapse.hide();
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof Node) {
    const isClickInsideMenu = navbarCollapse.contains(target);
    const isClickToggler = navbarToggler.contains(target);

    if (!isClickInsideMenu && !isClickToggler) {
      const collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      collapse.hide();
    }
  }
});

/* Account Option*/
const params = new URLSearchParams(window.location.search);
const account = params.get("account");

const accounts = {
  "1": {
    myImage: "assets/healer.png",
    Player: "Shisui",
    Tag: "#LL28VQJRC",
    TH: "14",
    BH: "10",
    Clan: "for ash",
    Trop: "652",
    War: "840",
    BHLeague: "Silver League II",
    BB: "380",
    pets: "assets/Shisui/Pets.png",
    equipments: "assets/Shisui/Equipments.png",
    troops: "assets/Shisui/Troops.png",
    spells: "assets/Shisui/Spells.png",
    machines: "assets/Shisui/Machines.png",
    BTroops: "assets/Shisui/BTroops.png"
  },
  "2": {
    myImage: "assets/archer.png",
    Player: "senpai...",
    Tag: "#QJ9YVOYPG",
    TH: "11",
    BH: "7",
    Clan: "for ash",
    Trop: "35",
    War: "165",
    BHLeague: "Brass League II",
    BB: "37",
    pets: "assets/senpai/Pets2.png",
    equipments: "assets/senpai/Equipment2.png",
    troops: "assets/senpai/Troops2.png",
    spells: "assets/senpai/Spells2.png",
    machines: "assets/senpai/Machines2.png",
    BTroops: "assets/senpai/BTroops2.png"
  },
  "3": { 
    myImage: "assets/wizard.png",   
    Player: "Mice De",
    Tag: "#G28GJLGOY",
    TH: "9",
    BH: "5",
    Clan: "for ash",
    Trop: "272",
    War: "82",
    BHLeague: "Copper League I",
    BB: "34",
    pets: "assets/Mice De/Pets3.png",
    equipments: "assets/Mice De/Equipment3.png",
    troops: "assets/Mice De/Troops3.png",
    spells: "assets/Mice De/Spells3.png",
    machines: "assets/Mice De/Machines3.png",
    BTroops: "assets/Mice De/BTroops3.png"
  },
  "4": {
    myImage: "assets/witch.png",
    Player: "Shawty",
    Tag: "#GQPGVGJJ9",
    TH: "8",
    BH: "4",
    Clan: "for ash",
    Trop: "40",
    War: "21",
    BHLeague: "Stone League IV",
    BB: "0",
    pets: "assets/Shawty/Pets4.png",
    equipments: "assets/Shawty/Equipment4.png",
    troops: "assets/Shawty/Troops4.png",
    spells: "assets/Shawty/Spells4.png",
    machines: "assets/Shawty/Machines4.png",
    BTroops: "assets/Shawty/BTroops4.png"
  },
  "5": {
    myImage: "assets/barbarian.png",
    Player: "Shiro",
    Tag: "#G2CVVYJUO",
    TH: "8",
    BH: "4",
    Clan: "for ash",
    Trop: "262",
    War: "18",
    BHLeague: "Stone League I",
    BB: "0",
    pets: "assets/shiro/Pets5.png",
    equipments: "assets/shiro/Equipment5.png",
    troops: "assets/shiro/Troops5.png",
    spells: "assets/shiro/Spells5.png",
    machines: "assets/shiro/Machines5.png",
    BTroops: "assets/shiro/BTroops5.png"
  },
  "6": {
    myImage: "assets/valkyrie.png",
    Player: "Chief",
    Tag: "#GVRVJOGQ8",
    TH: "6",
    BH: "3",
    Clan: "for ash",
    Trop: "Unranked",
    War: "0",
    BHLeague: "Wood League IV",
    BB: "0",
    pets: "assets/Chief/Pets6.png",
    equipments: "assets/Chief/Equipment6.png",
    troops: "assets/Chief/Troops6.png",
    spells: "assets/Chief/Spells6.png",
    machines: "assets/Chief/Machines6.png",
    BTroops: "assets/Chief/BTroops6.png"
  }
};

/*Heroes Level*/
const Heroes = {
  "1":{
    kinglvl: { current: 75, max:80 },
    queenlvl: { current: 71, max:80 },
    wardenlvl: { current: 65, max:80 },
    championlvl: { current: 50, max:60 },
    princelvl: { current: 35, max:40 }
  },
  "2": {
    kinglvl: { current: 42, max:50 },
    queenlvl: { current: 40, max:50 },
    wardenlvl: { current: 8, max:10 },
    championlvl: { current: 0, max:0 },
    princelvl: { current: 28, max:50 }
  },
  "3": {
    kinglvl: { current: 25, max:30 },
    queenlvl: { current: 18, max:30 },
    wardenlvl: { current: 0, max:0 },
    championlvl: { current: 0, max:0 },
    princelvl: { current: 10, max:30 }
  },
  "4":{
    kinglvl: { current: 12, max:20 },
    queenlvl: { current: 4, max:10 },
    wardenlvl: { current: 0, max:0 },
    championlvl: { current: 0, max:0 },
    princelvl: { current: 0, max:0 }
  },
  "5":{
    kinglvl: { current: 10, max:10 },
    queenlvl: { current: 0, max:0 },
    wardenlvl: { current: 0, max:0 },
    championlvl: { current: 0, max:0 },
    princelvl: { current: 0, max:0 }
  },
  "6":{
    kinglvl: { current: 0, max:0 },
    queenlvl: { current: 0, max:0 },
    wardenlvl: { current: 0, max:0 },
    championlvl: { current: 0, max:0 },
    princelvl: { current: 0, max:0 }
  },
};

const heroes = Heroes[account];
const acc = accounts[account];
if (acc && heroes) {
  const KingData = heroes["kinglvl"]; 
  const QueenData = heroes["queenlvl"]; 
  const WardenData = heroes["wardenlvl"]; 
  const ChampionData = heroes["championlvl"];
  const PrinceData = heroes["princelvl"]; 

  document.getElementById("King_lvl").textContent = `Level ${KingData.current} / ${KingData.max}` || "-";
  document.getElementById("King_Progress").style.width = (KingData.current / KingData.max * 100) + "%" ;
  document.getElementById("Queen_lvl").textContent = `Level ${QueenData.current} / ${QueenData.max}` || "-";
  document.getElementById("Queen_Progress").style.width = (QueenData.current / QueenData.max * 100) + "%" ;
  document.getElementById("Warden_lvl").textContent = `Level ${WardenData.current} / ${WardenData.max}` || "-";
  document.getElementById("Warden_Progress").style.width = (WardenData.current / WardenData.max * 100) + "%" ;
  document.getElementById("Champion_lvl").textContent = `Level ${ChampionData.current} / ${ChampionData.max}` || "-";
  document.getElementById("Champion_Progress").style.width = (ChampionData.current / ChampionData.max * 100) + "%" ;
  document.getElementById("Prince_lvl").textContent = `Level ${PrinceData.current} / ${PrinceData.max}` || "-";
  document.getElementById("Prince_Progress").style.width = (PrinceData.current / PrinceData.max * 100) + "%" ;

  document.getElementById("MyImage").src = acc.myImage;
  document.getElementById("Player_Name").textContent = acc.Player;
  document.getElementById("Player_Tag").textContent = acc.Tag || "-";
  document.getElementById("TH_lvl").textContent = `TH ${acc.TH}` || "-";
  document.getElementById("BH_lvl").textContent = `BH ${acc.BH}` || "-";
  document.getElementById("Trophies").textContent = acc.Trop || "-";
  document.getElementById("War_Star").textContent = acc.War || "-";
  document.getElementById("League").textContent = acc.BHLeague || "-";
  document.getElementById("Builder_Battles").textContent = acc.BB || "-";
  document.getElementById("Pets").src = acc.pets;
  document.getElementById("Equipments").src = acc.equipments;
  document.getElementById("Troops").src = acc.troops;
  document.getElementById("Spells").src = acc.spells;
  document.getElementById("Machines").src = acc.machines;
  document.getElementById("Builder_Troops").src = acc.BTroops;
} else {
  document.getElementById("Player_Name").textContent = "Unknown Account";
}



