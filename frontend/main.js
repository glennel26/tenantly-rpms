/* tenantly - front-end application script */
/* handles property listings, search filters, modal previews, and word flipping animation */

// sample listings data focused around bulacan towns and colleges
const listingsData = [
  {
    id: 1,
    title: "San Miguel Executive Boarding Hall",
    type: "Boarding House",
    category: "bedspace",
    school: "San Miguel District",
    schoolKey: "san-miguel",
    location: "Poblacion, San Miguel, Bulacan (Near Town Plaza & Transit)",
    rent: 2300,
    vacancies: "3 bedspaces available",
    gender: "Male & Female wings",
    image: "assets/properties/room-5.jpg",
    rating: "4.8",
    reviews: 29,
    verified: true,
    curfew: "10:00 PM curfew",
    pets: "Strictly no pets",
    visitors: "Lobby visitors until 8:00 PM",
    cooking: "Shared kitchen with gas stove",
    deposit: "1 month advance only",
    amenities: ["Fiber Internet", "Study Desks", "Steel Lockers", "Drinking Water Station", "CCTV Monitoring"],
    landlord: {
      name: "Tita Elena Cruz",
      role: "San Miguel Dorm Host",
      phone: "+63 919 443 1122",
      responseRate: "Under 15 mins"
    },
    description: "Quiet and accessible boarding house right in the heart of San Miguel, Bulacan. Close to public transport, markets, and municipal services."
  },
  {
    id: 2,
    title: "Greenview Agritech Boarding House",
    type: "Boarding House",
    category: "solo",
    school: "BASC - San Ildefonso",
    schoolKey: "basc",
    location: "Pinaod, San Ildefonso, Bulacan (5-min walk to BASC Gate)",
    rent: 2800,
    vacancies: "2 solo rooms available",
    gender: "Co-ed floors",
    image: "assets/properties/room-3.jpg",
    rating: "4.7",
    reviews: 19,
    verified: true,
    curfew: "9:30 PM curfew",
    pets: "No pets allowed inside rooms",
    visitors: "Visiting pavilion until 6:00 PM",
    cooking: "Spacious communal kitchen with gas stove",
    deposit: "1 month advance only",
    amenities: ["Spacious Study Area", "Personal Wardrobe Closet", "Clean Shared Bathrooms", "Filtered Drinking Water", "Solar Backup Lights"],
    landlord: {
      name: "Aling Corazon Dela Cruz",
      role: "BASC Accredited Landlady",
      phone: "+63 939 123 4567",
      responseRate: "Same day"
    },
    description: "Affordable and student-friendly boarding house right across Bulacan Agricultural State College. Calm atmosphere perfect for agriculture, engineering, and education majors."
  },
  {
    id: 3,
    title: "The Orchard Studio Residences",
    type: "Studio Apartment",
    category: "apartment",
    school: "Baliwag (NU & BU)",
    schoolKey: "nu-baliwag",
    location: "Pagala, Baliwag, Bulacan (Near SM City Baliwag & NU)",
    rent: 6500,
    vacancies: "1 studio unit left",
    gender: "Co-ed (Any)",
    image: "assets/properties/room-2.jpg",
    rating: "4.8",
    reviews: 24,
    verified: true,
    curfew: "No curfew (24/7 RFID gate pass)",
    pets: "Small pets allowed",
    visitors: "Allowed until 10:00 PM",
    cooking: "Private kitchenette with exhaust",
    deposit: "2 months deposit, 1 month advance",
    amenities: ["Private Bathroom", "Kitchenette Counter", "Air Conditioning Ready", "Fiber Internet", "Motorcycle Parking"],
    landlord: {
      name: "Engr. Danilo Santos",
      role: "Apartment Property Administrator",
      phone: "+63 928 412 8831",
      responseRate: "Within 30 mins"
    },
    description: "Modern private studio apartment suited for college students and working professionals. Minutes away from NU Baliwag, supermarkets, and bus terminals."
  },
  {
    id: 4,
    title: "Villa Teresa Ladies Dormitory",
    type: "Boarding House",
    category: "bedspace",
    school: "BulSU Main, Malolos",
    schoolKey: "bulsu-main",
    location: "Guinhawa, Malolos City, Bulacan (300m from BulSU Gate 2)",
    rent: 2500,
    vacancies: "2 bedspaces available",
    gender: "Female Only",
    image: "assets/properties/room-1.jpg",
    rating: "4.9",
    reviews: 38,
    verified: true,
    curfew: "10:00 PM (gate locked)",
    pets: "Strictly no pets allowed",
    visitors: "Allowed in study lounge until 7:30 PM",
    cooking: "Light cooking in shared pantry",
    deposit: "1 month advance, 1 month deposit",
    amenities: ["Free High-Speed WiFi", "Study Desks & Chairs", "Bunk Beds with Foam", "Submetered Water & Light", "CCTV Protected"],
    landlord: {
      name: "Mrs. Teresa Mendoza",
      role: "Boarding House Owner",
      phone: "+63 917 554 1289",
      responseRate: "Under 1 hour"
    },
    description: "Peaceful and clean boarding house tailored specifically for female students of Bulacan State University. Walking distance to university gates, food stalls, and laundry shops."
  },
  {
    id: 5,
    title: "St. Jude Executive 1-BR Apartment",
    type: "1-Bedroom Apartment",
    category: "apartment",
    school: "Malolos (LCUP & BulSU)",
    schoolKey: "bulsu-main",
    location: "Catmon, Malolos City, Bulacan (Near Capitol & LCUP)",
    rent: 8500,
    vacancies: "Entire 1-BR unit available",
    gender: "Co-ed (Solo/Roommates)",
    image: "assets/properties/room-4.jpg",
    rating: "4.9",
    reviews: 41,
    verified: true,
    curfew: "No curfew (own gate key)",
    pets: "Pet-friendly (max 2 pets)",
    visitors: "No curfew restrictions",
    cooking: "Full kitchen with gas range",
    deposit: "1 month advance, 2 months deposit",
    amenities: ["Air Conditioned Bedroom", "Private Balcony", "Separate Living Area", "Car & Bike Parking", "Individual Meralco Meter"],
    landlord: {
      name: "Atty. Rafael Ramirez",
      role: "Property Owner",
      phone: "+63 918 902 3341",
      responseRate: "Under 2 hours"
    },
    description: "Premium one-bedroom apartment unit located in a quiet residential subdivision in Malolos. Ideal for medical students, law students, or faculty members."
  },
  {
    id: 6,
    title: "Bustos Premier Student Hall",
    type: "Boarding House",
    category: "bedspace",
    school: "BulSU Bustos Campus",
    schoolKey: "bulsu-bustos",
    location: "Poblacion, Bustos, Bulacan (Walking distance to BulSU Bustos)",
    rent: 2400,
    vacancies: "4 bedspaces available",
    gender: "Male Only",
    image: "assets/properties/room-6.jpg",
    rating: "4.6",
    reviews: 15,
    verified: true,
    curfew: "10:00 PM curfew",
    pets: "No pets allowed",
    visitors: "Lobby visitors until 8:00 PM",
    cooking: "Rice cookers & kettles permitted",
    deposit: "1 month advance, ₱1,000 deposit",
    amenities: ["Commercial WiFi Mesh", "Individual Steel Lockers", "Bicycle Racks", "Purified Water Station", "CCTV on All Floors"],
    landlord: {
      name: "Kuya Mark Bautista",
      role: "Resident Hall Manager",
      phone: "+63 945 889 0012",
      responseRate: "Under 15 mins"
    },
    description: "Secure, friendly student boarding home near BulSU Bustos campus. Clean bunk arrangements with private power outlets and reading lights on each bed."
  }
];

// document ready initialization
document.addEventListener('DOMContentLoaded', function() {
  initWordFlipper();
  renderListings(listingsData);
  initFilters();
  initSearchCapsule();
  initModals();
  initRoleTabs();
  initMobileNav();
});

// dynamic word flipping animation (inspired by cozycozy.com)
function initWordFlipper() {
  const flipWords = document.querySelectorAll('.flip-word');
  if (flipWords.length === 0) return;

  let currentIndex = 0;

  setInterval(() => {
    const currentWord = flipWords[currentIndex];
    currentWord.classList.remove('active');
    currentWord.classList.add('exit');

    // move to next index
    currentIndex = (currentIndex + 1) % flipWords.length;
    const nextWord = flipWords[currentIndex];
    nextWord.classList.remove('exit');
    nextWord.classList.add('active');

    // cleanup previous exit class after transition
    setTimeout(() => {
      currentWord.classList.remove('exit');
    }, 500);
  }, 2200);
}

// render listings into the grid container
function renderListings(items) {
  const grid = document.getElementById('listings-grid');
  const countElement = document.getElementById('results-count');
  
  if (!grid) return;
  
  if (countElement) {
    countElement.textContent = items.length + " stays available";
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; border: 1px dashed var(--gray-300); border-radius: 12px;">
        <h3 style="color: var(--navy); margin-bottom: 8px;">No accommodations found</h3>
        <p style="color: var(--text-muted); margin-bottom: 16px;">Try expanding your search to all Bulacan areas or reset filters.</p>
        <button class="btn btn-navy btn-sm" onclick="resetAllFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  let html = '';
  items.forEach(item => {
    const pinIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    const starIcon = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    const amenitiesSnippet = item.amenities.slice(0, 2).map(a => `
      <span class="amenity-tag">${a}</span>
    `).join('');

    html += `
      <article class="listing-card" data-id="${item.id}">
        <div class="card-media-wrap">
          <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
          <div class="badge-rating">
            ${starIcon}
            <span>${item.rating}</span>
            <span style="opacity:0.8; font-size:0.72rem;">(${item.reviews})</span>
          </div>
          <div class="badge-type">${item.type}</div>
          <div class="badge-price">PHP ${item.rent.toLocaleString()} <span>/mo</span></div>
        </div>

        <div class="card-content">
          <h3 class="card-title" title="${item.title}">${item.title}</h3>
          
          <div class="card-location">
            ${pinIcon}
            <span>${item.school}</span>
          </div>

          <!-- clean inline house rules and specifications line (avoiding clunky boxes) -->
          <div class="card-specs">
            <span class="spec-item">${item.curfew}</span>
            <span class="spec-dot">&bull;</span>
            <span class="spec-item">${item.pets}</span>
            <span class="spec-dot">&bull;</span>
            <span class="spec-item" style="color: var(--crimson); font-weight: 600;">${item.gender}</span>
          </div>

          <div class="card-amenities">
            ${amenitiesSnippet}
          </div>

          <div class="card-actions">
            <button class="btn btn-outline btn-sm" onclick="openDetailsModal(${item.id})">View Details</button>
            <button class="btn btn-primary btn-sm" onclick="openInquireModal(${item.id})">Inquire Now</button>
          </div>
        </div>
      </article>
    `;
  });

  grid.innerHTML = html;
}

// category filter pills
function initFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', function() {
      pills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');

      const filterVal = this.getAttribute('data-filter');
      applyFilter(filterVal);
    });
  });
}

function applyFilter(filter) {
  if (filter === 'all') {
    renderListings(listingsData);
    return;
  }

  let filtered = [];

  if (filter === 'san-miguel') {
    filtered = listingsData.filter(i => i.schoolKey === 'san-miguel');
  } else if (filter === 'basc') {
    filtered = listingsData.filter(i => i.schoolKey === 'basc');
  } else if (filter === 'bulsu-main') {
    filtered = listingsData.filter(i => i.schoolKey === 'bulsu-main');
  } else if (filter === 'nu-baliwag') {
    filtered = listingsData.filter(i => i.schoolKey === 'nu-baliwag');
  } else if (filter === 'bedspace') {
    filtered = listingsData.filter(i => i.category === 'bedspace');
  } else if (filter === 'apartment') {
    filtered = listingsData.filter(i => i.category === 'apartment');
  } else if (filter === 'female-only') {
    filtered = listingsData.filter(i => i.gender.toLowerCase().includes('female'));
  } else if (filter === 'male-only') {
    filtered = listingsData.filter(i => i.gender.toLowerCase().includes('male'));
  } else if (filter === 'no-curfew') {
    filtered = listingsData.filter(i => i.curfew.toLowerCase().includes('no curfew'));
  } else if (filter === 'pets-allowed') {
    filtered = listingsData.filter(i => !i.pets.toLowerCase().includes('no pets') && !i.pets.toLowerCase().includes('strictly no'));
  } else {
    filtered = listingsData;
  }

  renderListings(filtered);
}

// search capsule interaction
function initSearchCapsule() {
  const searchForm = document.getElementById('search-form');
  if (!searchForm) return;

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const schoolSelect = document.getElementById('search-school').value;
    const typeSelect = document.getElementById('search-type').value;
    const budgetSelect = document.getElementById('search-budget').value;
    const prefSelect = document.getElementById('search-preference').value;

    let results = listingsData.filter(item => {
      let matchSchool = true;
      if (schoolSelect !== 'all') {
        matchSchool = item.schoolKey === schoolSelect;
      }

      let matchType = true;
      if (typeSelect !== 'all') {
        matchType = item.category === typeSelect || item.type.toLowerCase().includes(typeSelect);
      }

      let matchBudget = true;
      if (budgetSelect === 'under-3000') {
        matchBudget = item.rent <= 3000;
      } else if (budgetSelect === '3000-6000') {
        matchBudget = item.rent > 3000 && item.rent <= 6000;
      } else if (budgetSelect === 'above-6000') {
        matchBudget = item.rent > 6000;
      }

      let matchPref = true;
      if (prefSelect === 'female-only') {
        matchPref = item.gender.toLowerCase().includes('female');
      } else if (prefSelect === 'male-only') {
        matchPref = item.gender.toLowerCase().includes('male');
      } else if (prefSelect === 'no-curfew') {
        matchPref = item.curfew.toLowerCase().includes('no curfew');
      } else if (prefSelect === 'pets') {
        matchPref = !item.pets.toLowerCase().includes('no pets') && !item.pets.toLowerCase().includes('strictly no');
      }

      return matchSchool && matchType && matchBudget && matchPref;
    });

    renderListings(results);

    const target = document.getElementById('listings-container');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function resetAllFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (pills[0]) pills[0].classList.add('active');

  const school = document.getElementById('search-school');
  const type = document.getElementById('search-type');
  const budget = document.getElementById('search-budget');
  const pref = document.getElementById('search-preference');

  if (school) school.value = 'all';
  if (type) type.value = 'all';
  if (budget) budget.value = 'all';
  if (pref) pref.value = 'all';

  renderListings(listingsData);
}

// modal dialog controllers
function initModals() {
  const closeBtns = document.querySelectorAll('.modal-close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      closeAllModals();
    });
  });

  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  const authTabs = document.querySelectorAll('.auth-tab');
  authTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      authTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const role = this.getAttribute('data-role');
      const roleInput = document.getElementById('auth-role-input');
      const roleTitle = document.getElementById('auth-role-title');
      const submitBtn = document.getElementById('auth-submit-btn');

      if (roleInput) roleInput.value = role;

      if (role === 'landlord') {
        if (roleTitle) roleTitle.textContent = "Property Owner & Landlord Portal";
        if (submitBtn) submitBtn.textContent = "Sign In as Landlord";
      } else {
        if (roleTitle) roleTitle.textContent = "Tenant & Student Portal";
        if (submitBtn) submitBtn.textContent = "Sign In as Tenant";
      }
    });
  });
}

function openAuthModal(defaultRole = 'tenant') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;

  const tabs = modal.querySelectorAll('.auth-tab');
  tabs.forEach(t => {
    if (t.getAttribute('data-role') === defaultRole) {
      t.click();
    }
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openDetailsModal(id) {
  const item = listingsData.find(l => l.id === id);
  if (!item) return;

  const modal = document.getElementById('details-modal');
  if (!modal) return;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('modal-listing-title', item.title);
  setText('modal-listing-type', item.type);
  setText('modal-listing-school', item.school);
  setText('modal-listing-price', "PHP " + item.rent.toLocaleString() + " / month");
  setText('modal-listing-location', item.location);
  setText('modal-listing-vacancies', item.vacancies);
  setText('modal-listing-desc', item.description);

  const imgEl = document.getElementById('modal-listing-img');
  if (imgEl) imgEl.src = item.image;

  setText('modal-rule-curfew', item.curfew);
  setText('modal-rule-pets', item.pets);
  setText('modal-rule-visitors', item.visitors);
  setText('modal-rule-cooking', item.cooking);
  setText('modal-rule-deposit', item.deposit);
  setText('modal-rule-gender', item.gender);

  setText('modal-landlord-name', item.landlord.name);
  setText('modal-landlord-role', item.landlord.role);
  setText('modal-landlord-phone', item.landlord.phone);
  setText('modal-landlord-response', "Avg reply: " + item.landlord.responseRate);

  const amenList = document.getElementById('modal-amenities-list');
  if (amenList) {
    amenList.innerHTML = item.amenities.map(a => `
      <span class="amenity-tag" style="padding: 6px 12px; font-size:0.82rem;">${a}</span>
    `).join('');
  }

  const propIdInput = document.getElementById('inquire-property-id');
  if (propIdInput) propIdInput.value = item.id;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openInquireModal(id) {
  openDetailsModal(id);
  const form = document.getElementById('inquiry-form');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth' });
    const nameInput = document.getElementById('inquire-name');
    if (nameInput) nameInput.focus();
  }
}

function closeAllModals() {
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => overlay.classList.remove('active'));
  document.body.style.overflow = 'auto';
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inquire-name').value;
  const school = document.getElementById('inquire-school').value;
  
  showToast("Inquiry sent successfully for " + name + " (" + school + "). Landlord will contact you soon.");
  closeAllModals();
  e.target.reset();
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const role = document.getElementById('auth-role-input').value;
  const identifier = document.getElementById('login-email').value;

  showToast("Simulated sign in as " + role + ": " + identifier);
  closeAllModals();
  e.target.reset();
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function initRoleTabs() {
  const tabButtons = document.querySelectorAll('.role-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const targetId = this.getAttribute('data-target');
      const panels = document.querySelectorAll('.role-content-panel');
      panels.forEach(p => p.classList.remove('active'));

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.position = 'absolute';
      menu.style.top = '72px';
      menu.style.left = '0';
      menu.style.right = '0';
      menu.style.background = '#ffffff';
      menu.style.padding = '20px';
      menu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      menu.style.zIndex = '99';
    }
  });
}
