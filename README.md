# Clash of Clans Player Profile

A web-based **Clash of Clans player profile viewer** that displays detailed player information, hero levels, and in-game assets.  
This project uses **HTML, CSS (Bootstrap), JavaScript**, and a **YAML data file** to dynamically populate the profiles.

---

## Features

- Responsive **player profile page** with:
  - Avatar, name, tag, Town Hall (TH) & Builder Hall (BH) levels
  - Clan name, trophies, war stars, builder battles
  - Hero levels with progress bars
  - Images for pets, equipment, troops, spells, machines, and builder hall troops
- **Carousel** for hero levels
- **Dark mode themed** design with gold accents
- Navbar with **dropdown account selection** for multiple players
- Easy **YAML-based data structure** for adding new players

---

## File Structure


---

## How It Works

1. **Player Data** is stored in `players.yml` in a structured format.
2. When `account.html` loads, **JavaScript fetches the YAML file**, reads the data for the selected account ID, and updates the DOM.
3. Hero levels and progress bars are displayed in a **Bootstrap carousel**.
4. Additional assets (pets, equipment, troops, etc.) are loaded dynamically based on the YAML paths.

---

## Adding a New Player

1. Open `players.yml`.
2. Add a new block under `players:` with:
   - `id`, `name`, `tag`, `th_level`, `bh_level`, `clan`, `trophies`, `war_stars`, `builder_battles`
   - `heroes` (King, Queen, Warden, Champion, Prince)
   - Paths to assets (`pets`, `equipment`, `troops`, `spells`, `machines`, `builder_troops`)
3. Add a link in the **navbar dropdown** in `account.html` pointing to `?account=NEW_ID`.
4. Reload the page and select the new account.

---

## Dependencies

- [Bootstrap 5.3](https://getbootstrap.com/) – CSS framework
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- JavaScript for dynamic profile population
- Optional: YAML parser library for browser (or convert YAML to JSON)

---

## Notes

- This project is **not affiliated with Supercell**.
- All player data is **for demonstration purposes**.
- Assets should be stored in the `assets/` folder, with consistent naming matching the YAML file.

---

## License

This project is **open-source**. Feel free to use, modify, or expand it for personal use.

