// ---------- DATA ----------

const BASES = [
  // Primary
  {
    code: "ATL",
    city: "Atlanta",
    airport: "Hartsfield–Jackson Atlanta International Airport",
    type: "primary",
    state: "Georgia",
    heroGradient: "linear-gradient(135deg,#1f2937,#ef4444)",
    subtitle: "Massive hub energy, Beltline vibes, and endless cheap eats.",
    eats: [
      {
        name: "Busy Bee Cafe",
        desc: "Soul food classic, big plates under $20, perfect post‑trip comfort meal.",
        area: "Downtown / Westside",
        links: {
          maps: "https://maps.google.com/?q=Busy+Bee+Cafe+Atlanta",
          yelp: "https://www.yelp.com/biz/busy-bee-cafe-atlanta"
        }
      },
      {
        name: "Ponce City Market Food Hall",
        desc: "Multiple stalls, shareable plates, easy to keep costs low.",
        area: "Old Fourth Ward / Beltline",
        links: {
          maps: "https://maps.google.com/?q=Ponce+City+Market",
          site: "https://poncecitymarket.com/"
        }
      }
    ],
    living: [
      {
        name: "Airport‑Area Crash Pads (ATL)",
        desc: "Shared rooms, bunks, shuttle access—good for early morning reports.",
        price: "$350–$550/month",
        links: {
          search: "https://www.google.com/search?q=atlanta+flight+attendant+crash+pad"
        }
      },
      {
        name: "College Park / East Point Rooms",
        desc: "Long‑term rooms near airport, good for in‑base living.",
        price: "$700–$1100/month",
        links: {
          zillow: "https://www.zillow.com/college-park-ga/rentals/",
          fb: "https://www.facebook.com/marketplace/?q=room%20for%20rent%20college%20park%20ga"
        }
      }
    ],
    transport: [
      {
        name: "Airport ⇄ Downtown",
        desc: "MARTA rail from airport station straight into downtown—cheap and fast.",
        links: {
          marta: "https://itsmarta.com/rail-system-map.aspx"
        }
      },
      {
        name: "Uber/Lyft Estimates",
        desc: "ATL → Midtown: usually $20–$40 depending on time and traffic.",
        links: {
          uber: "https://www.uber.com/global/en/price-estimate/",
          lyft: "https://www.lyft.com/rider/fare-estimate"
        }
      }
    ],
    activities: [
      {
        name: "Atlanta Beltline Walk",
        desc: "Free, scenic, perfect for daytime layovers with food and coffee along the trail.",
        links: {
          maps: "https://maps.google.com/?q=Atlanta+Beltline"
        }
      },
      {
        name: "Piedmont Park",
        desc: "Big city park, great for decompressing after long trips.",
        links: {
          maps: "https://maps.google.com/?q=Piedmont+Park+Atlanta"
        }
      }
    ]
  },
  {
    code: "BWI",
    city: "Baltimore/Washington",
    airport: "Baltimore/Washington International Thurgood Marshall Airport",
    type: "primary",
    state: "Maryland",
    heroGradient: "linear-gradient(135deg,#1f2937,#3b82f6)",
    subtitle: "East Coast base with quick access to Baltimore and DC.",
    eats: [
      {
        name: "Lexington Market Stalls",
        desc: "Cheap local food, fast service, great for quick layovers.",
        area: "Baltimore",
        links: {
          maps: "https://maps.google.com/?q=Lexington+Market+Baltimore"
        }
      }
    ],
    living: [
      {
        name: "BWI Crash Pads",
        desc: "Shared housing near airport, shuttle or short drive.",
        price: "$350–$550/month",
        links: {
          search: "https://www.google.com/search?q=bwi+flight+attendant+crash+pad"
        }
      }
    ],
    transport: [
      {
        name: "BWI ⇄ Baltimore",
        desc: "MARC/Amtrak + light rail options into the city.",
        links: {
          marc: "https://www.mta.maryland.gov/schedule/marc-train"
        }
      }
    ],
    activities: [
      {
        name: "Inner Harbor Walk",
        desc: "Free waterfront walk, shops and food nearby.",
        links: {
          maps: "https://maps.google.com/?q=Baltimore+Inner+Harbor"
        }
      }
    ]
  },
  {
    code: "DAL",
    city: "Dallas",
    airport: "Dallas Love Field",
    type: "primary",
    state: "Texas",
    heroGradient: "linear-gradient(135deg,#1f2937,#f97316)",
    subtitle: "Headquarters base—crew density, crash pads, and big Texas food.",
    eats: [
      {
        name: "Pecan Lodge",
        desc: "Top‑tier BBQ, share plates to keep cost low.",
        area: "Deep Ellum",
        links: {
          maps: "https://maps.google.com/?q=Pecan+Lodge+Dallas",
          yelp: "https://www.yelp.com/biz/pecan-lodge-dallas"
        }
      },
      {
        name: "Fuel City Tacos",
        desc: "Cheap tacos, open late—perfect post‑arrival food.",
        area: "Near Downtown",
        links: {
          maps: "https://maps.google.com/?q=Fuel+City+Tacos+Dallas",
          yelp: "https://www.yelp.com/biz/fuel-city-dallas"
        }
      }
    ],
    living: [
      {
        name: "Love Field Crash Pads",
        desc: "Crew‑dense crash pads with shuttle or short drive to DAL.",
        price: "$350–$550/month",
        links: {
          search: "https://www.google.com/search?q=dallas+love+field+crash+pad"
        }
      }
    ],
    transport: [
      {
        name: "DAL ⇄ Downtown",
        desc: "DART buses and short rideshare hops.",
        links: {
          dart: "https://dart.org/maps"
        }
      }
    ],
    activities: [
      {
        name: "Klyde Warren Park",
        desc: "Free park over the freeway, food trucks, good for short layovers.",
        links: {
          maps: "https://maps.google.com/?q=Klyde+Warren+Park"
        }
      }
    ]
  },
  // ... you can keep adding all primary bases and satellites in same structure:
  // DEN, HOU, LAS, LAX, OAK, MCO, PHX, SAN, MDW
  // Satellite: BNA, FLL, TPA, SJC, SMF, SLC, PDX, STL
];

// ---------- UTIL ----------

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// ---------- INIT ----------

document.addEventListener("DOMContentLoaded", () => {
  const pageType = document.body.dataset.page;

  if (pageType === "home") {
    initHome();
  } else if (pageType === "base") {
    initBasePage();
  }
});

// ---------- HOME ----------

function initHome() {
  const grid = document.getElementById("baseGrid");
  const searchInput = document.getElementById("baseSearch");
  const searchBtn = document.getElementById("searchBtn");
  const filterButtons = document.querySelectorAll(".sd-nav-pill[data-filter]");

  if (!grid) return;

  renderBaseCards(grid, BASES);

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const q = searchInput.value.trim().toLowerCase();
      const filtered = BASES.filter(b =>
        b.code.toLowerCase().includes(q) ||
        b.city.toLowerCase().includes(q) ||
        (b.state || "").toLowerCase().includes(q)
      );
      renderBaseCards(grid, filtered);
    });

    searchInput.addEventListener("keyup", e => {
      if (e.key === "Enter") searchBtn.click();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      let list = BASES;
      if (filter === "primary") list = BASES.filter(b => b.type === "primary");
      if (filter === "satellite") list = BASES.filter(b => b.type === "satellite");
      renderBaseCards(grid, list);
    });
  });
}

function renderBaseCards(container, bases) {
  if (!bases.length) {
    container.innerHTML = `<div class="sd-empty">No bases match that search.</div>`;
    return;
  }

  container.innerHTML = bases
    .map(
      b => `
    <article class="sd-base-card">
      <div class="sd-base-card-header">
        <div>
          <h2>${b.city}</h2>
          <p class="sd-muted">${b.state || ""}</p>
        </div>
        <span class="sd-base-code">${b.code}</span>
      </div>
      <p class="sd-muted sd-airport">${b.airport}</p>
      <div class="sd-base-tags">
        <span class="sd-tag sd-tag-${b.type}">${b.type === "primary" ? "Primary Base" : "Satellite Base"}</span>
      </div>
      <p class="sd-card-sub">${b.subtitle || ""}</p>
      <div class="sd-card-actions">
        <a href="../pages/base.html?code=${encodeURIComponent(b.code)}" class="sd-btn">Open Base Pack</a>
      </div>
    </article>
  `
    )
    .join("");
}

// ---------- BASE PAGE ----------

function initBasePage() {
  const code = (getQueryParam("code") || "").toUpperCase();
  const base = BASES.find(b => b.code === code);

  const titleEl = document.getElementById("baseTitle");
  const subtitleEl = document.getElementById("baseSubtitle");
  const typeTagEl = document.getElementById("baseTypeTag");
  const airportTagEl = document.getElementById("baseAirportTag");
  const heroEl = document.getElementById("baseHero");
  const navCodeEl = document.getElementById("baseCodeNav");
  const footerTextEl = document.getElementById("baseFooterText");

  const eatList = document.getElementById("eatList");
  const livingList = document.getElementById("livingList");
  const transportList = document.getElementById("transportList");
  const activityList = document.getElementById("activityList");

  if (!base) {
    if (titleEl) titleEl.textContent = "Base Not Found";
    if (subtitleEl) subtitleEl.textContent = "Check the base code in the URL.";
    return;
  }

  if (heroEl && base.heroGradient) {
    heroEl.style.backgroundImage = base.heroGradient;
  }

  if (titleEl) titleEl.textContent = `${base.city} (${base.code})`;
  if (subtitleEl) subtitleEl.textContent = base.subtitle || "";
  if (typeTagEl)
    typeTagEl.textContent = base.type === "primary" ? "Primary Base" : "Satellite Base";
  if (airportTagEl) airportTagEl.textContent = base.airport;
  if (navCodeEl) navCodeEl.textContent = base.code;
  if (footerTextEl)
    footerTextEl.textContent = `Sky Dana • ${base.city} (${base.code}) Base Pack`;

  renderSectionCards(eatList, base.eats, "Area");
  renderSectionCards(livingList, base.living, "Approx. Price");
  renderSectionCards(transportList, base.transport, null);
  renderSectionCards(activityList, base.activities, null);

  setupPerDiemCalculator();
  setupLayoverPlanner(base);
}

function renderSectionCards(container, items, extraLabel) {
  if (!container) return;
  if (!items || !items.length) {
    container.innerHTML = `<div class="sd-empty">No data yet—this base is coming soon.</div>`;
    return;
  }

  container.innerHTML = items
    .map(item => {
      const linksHtml = item.links
        ? Object.entries(item.links)
            .map(([key, url]) => {
              const label = key === "maps" ? "Google Maps"
                : key === "yelp" ? "Yelp"
                : key === "site" ? "Website"
                : key === "zillow" ? "Zillow"
                : key === "fb" ? "Facebook"
                : key === "uber" ? "Uber Estimate"
                : key === "lyft" ? "Lyft Estimate"
                : key === "marta" ? "Transit Map"
                : key === "dart" ? "Transit Map"
                : key === "search" ? "Search"
                : "Link";
              return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
            })
            .join("")
        : "";

      return `
      <article class="sd-card">
        <h3>${item.name}</h3>
        <p>${item.desc || ""}</p>
        ${
          extraLabel && item.area
            ? `<p><strong>${extraLabel}:</strong> ${item.area}</p>`
            : extraLabel && item.price
            ? `<p><strong>${extraLabel}:</strong> ${item.price}</p>`
            : ""
        }
        <div class="sd-links">${linksHtml}</div>
      </article>
    `;
    })
    .join("");
}

// ---------- PER DIEM ----------

function setupPerDiemCalculator() {
  const rateInput = document.getElementById("perdiemRate");
  const hoursInput = document.getElementById("perdiemHours");
  const btn = document.getElementById("perdiemCalcBtn");
  const result = document.getElementById("perdiemResult");

  if (!rateInput || !hoursInput || !btn || !result) return;

  btn.addEventListener("click", () => {
    const rate = parseFloat(rateInput.value || "0");
    const hours = parseFloat(hoursInput.value || "0");

    if (isNaN(rate) || isNaN(hours) || rate <= 0 || hours <= 0) {
      result.textContent = "Enter valid rate and hours.";
      result.style.color = "#ef4444";
      return;
    }

    const total = rate * hours;
    result.textContent = `Per diem: $${total.toFixed(2)}`;
    result.style.color = "#22c55e";
  });
}

// ---------- LAYOVER PLANNER ----------

function setupLayoverPlanner(base) {
  const lengthSelect = document.getElementById("layoverLength");
  const budgetSelect = document.getElementById("layoverBudget");
  const btn = document.getElementById("layoverPlanBtn");
  const result = document.getElementById("layoverPlanResult");

  if (!lengthSelect || !budgetSelect || !btn || !result) return;

  btn.addEventListener("click", () => {
    const length = lengthSelect.value;
    const budget = budgetSelect.value;

    const eats = base.eats || [];
    const activities = base.activities || [];
    const transport = base.transport || [];

    const pick = arr => (arr.length ? arr[Math.floor(Math.random() * arr.length)] : null);

    const eat = pick(eats);
    const act = pick(activities);
    const trans = pick(transport);

    let title =
      length === "short"
        ? "Short Layover Flow"
        : length === "medium"
        ? "Medium Layover Flow"
        : "Long Layover Flow";

    let budgetText =
      budget === "low"
        ? "Keep it cheap—focus on walking, transit, and street food."
        : budget === "medium"
        ? "Mix cheap eats with one paid activity."
        : "You’ve got room—add a premium experience.";

    result.innerHTML = `
      <h4>${title}</h4>
      <p class="sd-muted">${budgetText}</p>
      <ul class="sd-plan-list">
        ${
          trans
            ? `<li><strong>Arrive & Transit:</strong> ${trans.name} — ${trans.desc}</li>`
            : ""
        }
        ${
          eat
            ? `<li><strong>Main Meal:</strong> ${eat.name} — ${eat.desc}</li>`
            : ""
        }
        ${
          act
            ? `<li><strong>Explore:</strong> ${act.name} — ${act.desc}</li>`
            : ""
        }
      </ul>
    `;
  });
}
