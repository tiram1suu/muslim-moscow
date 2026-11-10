const translations = {
  ru: {
    obTitle: "Добро пожаловать!",
    obSubtitle:
      "Ответьте на пару вопросов, чтобы мы настроили приложение под вас.",
    btnTourist: "Я турист / впервые в Москве",
    btnLocal: "Я живу в Москве",
    btnMale: "Мужчина",
    btnFemale: "Женщина",
    btnNext: "Далее",
    bannerText: "🎯 Первые 22 дня: персональный гид по Москве",
    greetTitle: "Ассаляму алейкум",
    greetSubtitle: "Персональный гид по городу",
    searchPlaceholder: "Поиск по названию или адресу...",
    openMapLabel: "Открыть полную карту",
    catAll: "все",
    lblPrayer: "Намаз",
    lblWeather: "Погода",
    lblMosque: "Мечеть",
    recTitle: "Рекомендуем",
    recSub: "рядом",
    favTitle: "Ваши места",
    favSub: "сохранено",
    emptyFavTitle: "Пока пусто",
    emptyFavText: "Нажимайте на сердечко у мест, чтобы сохранить их здесь.",
    notFound: "Ничего не найдено",
    navHome: "Главная",
    navMap: "Карта",
    navFav: "Избранное",
    navProf: "Профиль",
    profileName: "Гость",
    statusTourist: "Турист / Впервые в Москве",
    statusLocal: "Житель Москвы",
    statusUnknown: "Путешественник",
    lblFavCount: "В избранном",
    lblDaysCount: "День в Москве",
    lblDaysCountLocal: "Местный",
    lblLang: "Язык приложения",
    valLang: "Русский",
    lblReset: "Пройти анкету заново",
    confirmReset:
      "Вы уверены, что хотите сбросить весь прогресс и пройти анкету заново?",
    lblModalCategory: "Категория",
    lblModalRating: "Рейтинг",
    lblModalRooms: "Закрытые комнаты",
    lblModalPrayer: "Место для намаза",
    lblModalFeatures: "Особенности",
    yes: "Да",
    no: "Нет",
    addFav: "♡ Добавить в избранное",
    inFav: "♥ В избранном",
    mapBtn: "Подробнее",
    catMosques: "Мечети",
    catFood: "Халяль еда",
    catShops: "Супермаркеты",
    catBeauty: "Beauty салоны",
    loading: "Загрузка...",
    error: "Ошибка",
    km: "км",
    weatherClear: "ясно",
    weatherCloudy: "облачно",
    weatherRain: "дождь",
    weatherSnow: "снег",
  },
  en: {
    obTitle: "Welcome!",
    obSubtitle: "Answer a few questions to personalize the app for you.",
    btnTourist: "I'm a tourist / new to Moscow",
    btnLocal: "I live in Moscow",
    btnMale: "Male",
    btnFemale: "Female",
    btnNext: "Next",
    bannerText: "🎯 First 22 days: personal Moscow guide",
    greetTitle: "Assalamu alaikum",
    greetSubtitle: "Personal city guide",
    searchPlaceholder: "Search by name or address...",
    openMapLabel: "Open full map",
    catAll: "all",
    lblPrayer: "Prayer",
    lblWeather: "Weather",
    lblMosque: "Mosque",
    recTitle: "Recommended",
    recSub: "nearby",
    favTitle: "Your places",
    favSub: "saved",
    emptyFavTitle: "Empty for now",
    emptyFavText: "Tap the heart on places to save them here.",
    notFound: "Nothing found",
    navHome: "Home",
    navMap: "Map",
    navFav: "Favorites",
    navProf: "Profile",
    profileName: "Guest",
    statusTourist: "Tourist / New to Moscow",
    statusLocal: "Moscow Resident",
    statusUnknown: "Traveler",
    lblFavCount: "In favorites",
    lblDaysCount: "Day in Moscow",
    lblDaysCountLocal: "Local",
    lblLang: "App language",
    valLang: "English",
    lblReset: "Retake survey",
    confirmReset:
      "Are you sure you want to reset all progress and retake the survey?",
    lblModalCategory: "Category",
    lblModalRating: "Rating",
    lblModalRooms: "Closed rooms",
    lblModalPrayer: "Prayer space",
    lblModalFeatures: "Features",
    yes: "Yes",
    no: "No",
    addFav: "♡ Add to favorites",
    inFav: "♥ In favorites",
    mapBtn: "Details",
    catMosques: "Mosques",
    catFood: "Halal food",
    catShops: "Supermarkets",
    catBeauty: "Beauty salons",
    loading: "Loading...",
    error: "Error",
    km: "km",
    weatherClear: "clear",
    weatherCloudy: "cloudy",
    weatherRain: "rain",
    weatherSnow: "snow",
  },
};

let currentLang = localStorage.getItem("muslim_lang");
if (!currentLang) {
  const browserLang = navigator.language || navigator.userLanguage;
  currentLang = browserLang.startsWith("ru") ? "ru" : "en";
  localStorage.setItem("muslim_lang", currentLang);
}

function t(key) {
  return translations[currentLang][key] || key;
}

function applyLanguage() {
  
  document.getElementById("obTitle").textContent = t("obTitle");
  document.getElementById("obSubtitle").textContent = t("obSubtitle");
  document.getElementById("btnTourist").textContent = t("btnTourist");
  document.getElementById("btnLocal").textContent = t("btnLocal");
  document.getElementById("btnMale").textContent = t("btnMale");
  document.getElementById("btnFemale").textContent = t("btnFemale");
  document.getElementById("nextBtn").textContent = t("btnNext");

  
  document.getElementById("bannerText").textContent = t("bannerText");

  
  document.getElementById("greetTitle").textContent = t("greetTitle");
  document.getElementById("greetSubtitle").textContent = t("greetSubtitle");

  document.getElementById("searchInput").placeholder = t("searchPlaceholder");
  document.getElementById("openMapLabel").textContent = t("openMapLabel");
  document.getElementById("catTitle").textContent = t("recTitle");
  document.getElementById("catAll").textContent = t("catAll");
  document.getElementById("lblPrayer").textContent = t("lblPrayer");
  document.getElementById("lblWeather").textContent = t("lblWeather");
  document.getElementById("lblMosque").textContent = t("lblMosque");
  document.getElementById("recTitle").textContent = t("recTitle");
  document.getElementById("recSub").textContent = t("recSub");
  
  document.getElementById("favTitle").textContent = t("favTitle");
  document.getElementById("favSub").textContent = t("favSub");

  document.getElementById("lblFavCount").textContent = t("lblFavCount");
  document.getElementById("lblLang").textContent = t("lblLang");
  document.getElementById("valLang").textContent = t("valLang");
  document.getElementById("lblReset").textContent = t("lblReset");
  updateProfileUI();


  document.getElementById("navHome").textContent = t("navHome");
  document.getElementById("navMap").textContent = t("navMap");
  document.getElementById("navFav").textContent = t("navFav");
  document.getElementById("navProf").textContent = t("navProf");

  document.getElementById("lblModalCategory").textContent =
    t("lblModalCategory");
  document.getElementById("lblModalRating").textContent = t("lblModalRating");
  document.getElementById("lblModalRooms").textContent = t("lblModalRooms");
  document.getElementById("lblModalPrayer").textContent = t("lblModalPrayer");
  document.getElementById("lblModalFeatures").textContent =
    t("lblModalFeatures");
  document.getElementById("mapCardBtn").textContent = t("mapBtn");

  document.querySelectorAll("#homeFilters .filter-btn").forEach((btn) => {
    const key = btn.dataset.key;
    if (key === "all") btn.textContent = t("catAll") === "все" ? "Все" : "All";
    if (key === "mosques") btn.textContent = t("catMosques");
    if (key === "food") btn.textContent = t("catFood");
    if (key === "shops") btn.textContent = t("catShops");
    if (key === "beauty") btn.textContent = t("catBeauty");
  });
  document.querySelectorAll("#mapOverlayFilters .filter-btn").forEach((btn) => {
    const key = btn.dataset.filter;
    if (key === "Все") btn.textContent = t("catAll") === "все" ? "Все" : "All";
    if (key === "Мечети") btn.textContent = t("catMosques");
    if (key === "Халяль еда") btn.textContent = t("catFood");
    if (key === "Супермаркеты") btn.textContent = t("catShops");
    if (key === "Beauty салоны") btn.textContent = t("catBeauty");
  });

  if (typeof placesData !== "undefined") {
    const uniqueCategories = [...new Set(placesData.map((p) => p.category))];
    categoriesContainer.innerHTML = uniqueCategories
      .map((cat) => {
        if (cat === "Beauty салоны" && userData.gender === "male") return "";

        const letters = catShortNames[cat] || cat.substring(0, 2).toUpperCase();
        let displayName = cat;
        if (cat === "Мечети") displayName = t("catMosques");
        if (cat === "Халяль еда") displayName = t("catFood");
        if (cat === "Супермаркеты") displayName = t("catShops");
        if (cat === "Beauty салоны") displayName = t("catBeauty");
        return `<div class="category-item" onclick="filterByCategory('${cat}')"><div class="cat-icon">${letters}</div><div class="cat-label">${displayName}</div></div>`;
      })
      .join("");
  }

  updateView();
  updateLiveDataText();
  updateGenderVisibility(); 
}

window.toggleLanguage = function () {
  currentLang = currentLang === "ru" ? "en" : "ru";
  localStorage.setItem("muslim_lang", currentLang);
  applyLanguage();
};


const onboardingScreen = document.getElementById("onboardingScreen");
const steps = document.querySelectorAll(".onboarding-step");
const nextBtn = document.getElementById("nextBtn");
const guideBanner = document.getElementById("guideBanner");
const closeGuide = document.getElementById("closeGuide");
const appContent = document.getElementById("appContent");

let currentStep = 0;
let userData = { type: null, gender: null, name: null };

function checkUserData() {
  const savedData = localStorage.getItem("muslim_app_user");
  if (savedData) {
    userData = JSON.parse(savedData);
    onboardingScreen.classList.add("hidden");
    updateProfileUI();
    updateGenderVisibility();

    if (
      userData.type === "tourist" &&
      localStorage.getItem("guide_closed") !== "true"
    ) {
      guideBanner.classList.remove("hidden");
    }
  } else {
    onboardingScreen.classList.remove("hidden");
    currentStep = 0;
    steps.forEach((s, i) => s.classList.toggle("active", i === 0));
    nextBtn.disabled = true;
  }
}

document.querySelectorAll(".option-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parentStep = e.target.closest(".onboarding-step");
    parentStep
      .querySelectorAll(".option-btn")
      .forEach((b) => b.classList.remove("selected"));
    e.target.classList.add("selected");
    const value = e.target.dataset.value;
    if (currentStep === 0) userData.type = value;
    if (currentStep === 1) userData.gender = value;
    nextBtn.disabled = false;
  });
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
    nextBtn.disabled = true;
  } else {
    localStorage.setItem("muslim_app_user", JSON.stringify(userData));
    if (userData.type === "tourist") guideBanner.classList.remove("hidden");
    onboardingScreen.classList.add("hidden");
    updateProfileUI();
    updateGenderVisibility();
  }
});

closeGuide.addEventListener("click", () => {
  guideBanner.classList.add("hidden");
  localStorage.setItem("guide_closed", "true");
});

let favorites = JSON.parse(localStorage.getItem("muslim_favorites")) || [];

function saveFavorites() {
  localStorage.setItem("muslim_favorites", JSON.stringify(favorites));
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((favId) => favId !== id);
  } else {
    favorites.push(id);
  }
  saveFavorites();
  updateView();
  updateModalFavBtn();
  updateProfileUI();
  if (typeof updateMapMarkers === "function") updateMapMarkers();
  if (typeof updateHomeMapMarkers === "function") updateHomeMapMarkers();
}

const placesList = document.getElementById("placesList");
const favoritesList = document.getElementById("favoritesList");
const categoriesContainer = document.getElementById("categoriesContainer");
const searchInput = document.getElementById("searchInput");

const catShortNames = {
  Мечети: "МЧ",
  "Халяль еда": "HL",
  Супермаркеты: "SM",
  "Beauty салоны": "BS",
};

function renderPlaces(placesArray, container) {
  container.innerHTML = "";

  let filteredByGender = placesArray;
  if (userData.gender === "male") {
    filteredByGender = placesArray.filter(
      (p) => p.category !== "Beauty салоны",
    );
  }

  if (filteredByGender.length === 0) {
    if (container === favoritesList) {
      container.innerHTML = `<div class="empty-state"><div class="icon">♡</div><h3>${t("emptyFavTitle")}</h3><p>${t("emptyFavText")}</p></div>`;
    } else {
      container.innerHTML = `<p style="text-align:center; color:#8a99ae; padding: 20px;">${t("notFound")}</p>`;
    }
    return;
  }

  filteredByGender.forEach((place) => {
    const isFav = favorites.includes(place.id);
    const card = document.createElement("div");
    card.className = "place-card";

    const displayName =
      currentLang === "en" && place.nameEn ? place.nameEn : place.name;
    const displayAddress =
      currentLang === "en" && place.addressEn ? place.addressEn : place.address;

    card.innerHTML = `
            <div class="place-info" onclick="openPlaceDetails(${place.id})">
                <h3>${displayName}</h3>
                <p>${displayAddress}</p>
            </div>
            <div class="place-actions">
                ${place.hasClosedRooms ? `<div class="place-badge">${currentLang === "ru" ? "Есть комнаты" : "Has rooms"}</div>` : ""}
                <button class="fav-btn ${isFav ? "active" : ""}" onclick="toggleFavorite(${place.id}); event.stopPropagation();">
                    ${isFav ? "♥" : "♡"}
                </button>
            </div>
        `;
    container.appendChild(card);
  });
}

function updateGenderVisibility() {
  const isMale = userData.gender === "male";

  document.querySelectorAll('[data-gender="female"]').forEach((el) => {
    el.style.display = isMale ? "none" : "flex"; 
  });

  if (typeof placesData !== "undefined") {
    const uniqueCategories = [...new Set(placesData.map((p) => p.category))];
    categoriesContainer.innerHTML = uniqueCategories
      .map((cat) => {
        if (cat === "Beauty салоны" && isMale) return ""; 

        const letters = catShortNames[cat] || cat.substring(0, 2).toUpperCase();
        let displayName = cat;
        if (cat === "Мечети") displayName = t("catMosques");
        if (cat === "Халяль еда") displayName = t("catFood");
        if (cat === "Супермаркеты") displayName = t("catShops");
        if (cat === "Beauty салоны") displayName = t("catBeauty");
        return `<div class="category-item" onclick="filterByCategory('${cat}')"><div class="cat-icon">${letters}</div><div class="cat-label">${displayName}</div></div>`;
      })
      .join("");
  }

  if (isMale && currentFilter === "Beauty салоны") {
    currentFilter = "Все";
    document.querySelectorAll("#homeFilters .filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === "Все");
    });
    document.querySelectorAll("#mapOverlayFilters .filter-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === "Все");
    });
  }

  updateView();
}

let currentFilter = "Все";
let currentSearch = "";

function updateView() {
  let filtered = placesData;


  if (userData.gender === "male") {
    filtered = filtered.filter((p) => p.category !== "Beauty салоны");
  }

  if (currentFilter !== "Все")
    filtered = filtered.filter((p) => p.category === currentFilter);
  if (currentSearch.trim() !== "") {
    const query = currentSearch.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.address.toLowerCase().includes(query),
    );
  }
  renderPlaces(filtered.slice(0, 10), placesList);

  const favPlaces = placesData.filter((p) => favorites.includes(p.id));
  renderPlaces(favPlaces, favoritesList);
}

document.querySelectorAll("#homeFilters .filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document
      .querySelectorAll("#homeFilters .filter-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.dataset.filter;
    updateView();
    if (typeof updateHomeMapMarkers === "function") updateHomeMapMarkers();
  });
});

const searchDropdown = document.getElementById("searchDropdown");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (query.length === 0) {
    searchDropdown.classList.remove("active");
    currentSearch = "";
    updateView();
    return;
  }

  let results = placesData.filter((p) => {
    const name = currentLang === "en" && p.nameEn ? p.nameEn : p.name;
    const address =
      currentLang === "en" && p.addressEn ? p.addressEn : p.address;
    return (
      name.toLowerCase().includes(query) ||
      address.toLowerCase().includes(query)
    );
  });

  if (userData.gender === "male") {
    results = results.filter((p) => p.category !== "Beauty салоны");
  }

  results = results.slice(0, 5);

  if (results.length > 0) {
    searchDropdown.innerHTML = results
      .map((place) => {
        const name =
          currentLang === "en" && place.nameEn ? place.nameEn : place.name;
        const address =
          currentLang === "en" && place.addressEn
            ? place.addressEn
            : place.address;
        return `
                <div class="search-result-item" onclick="selectSearchResult(${place.id})">
                    <h4>${name}</h4>
                    <p>${address}</p>
                </div>
            `;
      })
      .join("");
    searchDropdown.classList.add("active");
  } else {
    searchDropdown.innerHTML = `<div class="search-result-empty">${t("notFound")}</div>`;
    searchDropdown.classList.add("active");
  }
});

window.selectSearchResult = function (id) {
  searchDropdown.classList.remove("active");
  searchInput.value = "";
  openPlaceDetails(id);
};

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    searchDropdown.classList.remove("active");
  }
});

window.filterByCategory = function (category) {
  document
    .querySelectorAll("#homeFilters .filter-btn")
    .forEach((b) => b.classList.remove("active"));
  const btn = Array.from(
    document.querySelectorAll("#homeFilters .filter-btn"),
  ).find((b) => b.dataset.filter === category);
  if (btn) btn.classList.add("active");
  currentFilter = category;
  updateView();
  if (typeof updateHomeMapMarkers === "function") updateHomeMapMarkers();

  const target = document.getElementById("recommendationsTitle");
  if (target)
    appContent.scrollTo({ top: target.offsetTop - 20, behavior: "smooth" });
};

window.switchTab = function (tabName) {
  document
    .querySelectorAll(".tab-content")
    .forEach((tab) => tab.classList.remove("active"));
  document.getElementById("tab-" + tabName).classList.add("active");

  document
    .querySelectorAll(".nav-item")
    .forEach((item) => item.classList.remove("active"));
  const navItems = document.querySelectorAll(".nav-item");
  if (tabName === "home") navItems[0].classList.add("active");
  if (tabName === "map") navItems[1].classList.add("active");
  if (tabName === "favorites") navItems[2].classList.add("active");
  if (tabName === "profile") navItems[3].classList.add("active");

  if (tabName === "map" && typeof map !== "undefined") {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }
  if (tabName === "home" && typeof homeMap !== "undefined") {
    setTimeout(() => {
      homeMap.invalidateSize();
    }, 100);
  }
  appContent.scrollTo({ top: 0, behavior: "smooth" });
};

let map, homeMap;
let markersLayer, homeMarkersLayer;
let currentMapFilter = "Все";
let activeMapPlaceId = null;

function initMaps() {
  map = L.map("map", { zoomControl: false }).setView([55.7558, 37.6173], 11);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
    maxZoom: 19,
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);

  homeMap = L.map("homeMap", {
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
  }).setView([55.7558, 37.6173], 11);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
    maxZoom: 19,
  }).addTo(homeMap);
  homeMarkersLayer = L.layerGroup().addTo(homeMap);

  updateMapMarkers();
  updateHomeMapMarkers();

  document.querySelectorAll("#mapOverlayFilters .filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll("#mapOverlayFilters .filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");
      currentMapFilter = e.target.dataset.filter;
      updateMapMarkers();
      closeMapCard();
    });
  });
}

function createMarkerIcon(place) {
  const iconHtml = `<div class="custom-marker">${catShortNames[place.category] || "•"}</div>`;
  return L.divIcon({
    html: iconHtml,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

function updateMapMarkers() {
  markersLayer.clearLayers();
  if (typeof placesData === "undefined") return;

  let baseData = placesData;
  if (userData.gender === "male") {
    baseData = placesData.filter((p) => p.category !== "Beauty салоны");
  }

  const filtered =
    currentMapFilter === "Все"
      ? baseData
      : baseData.filter((p) => p.category === currentMapFilter);

  filtered.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], {
      icon: createMarkerIcon(place),
    }).addTo(markersLayer);
    marker.on("click", () => {
      activeMapPlaceId = place.id;
      const displayName =
        currentLang === "en" && place.nameEn ? place.nameEn : place.name;
      const displayAddress =
        currentLang === "en" && place.addressEn
          ? place.addressEn
          : place.address;
      document.getElementById("mapCardTitle").textContent = displayName;
      document.getElementById("mapCardAddress").textContent = displayAddress;
      document.getElementById("mapBottomCard").style.display = "block";
      map.flyTo([place.lat, place.lng], 14, { duration: 0.5 });
    });
  });
}

function updateHomeMapMarkers() {
  if (!homeMarkersLayer) return;
  homeMarkersLayer.clearLayers();
  if (typeof placesData === "undefined") return;

  let baseData = placesData;
  if (userData.gender === "male") {
    baseData = placesData.filter((p) => p.category !== "Beauty салоны");
  }

  let filtered = baseData;
  if (currentFilter !== "Все")
    filtered = filtered.filter((p) => p.category === currentFilter);

  filtered.slice(0, 15).forEach((place) => {
    L.marker([place.lat, place.lng], { icon: createMarkerIcon(place) }).addTo(
      homeMarkersLayer,
    );
  });
}

window.closeMapCard = function () {
  document.getElementById("mapBottomCard").style.display = "none";
  activeMapPlaceId = null;
};

window.openPlaceFromMap = function () {
  if (activeMapPlaceId) openPlaceDetails(activeMapPlaceId);
};

const placeModal = document.getElementById("placeModal");
let currentModalPlaceId = null;

window.openPlaceDetails = function (id) {
  const place = placesData.find((p) => p.id === id);
  if (!place) return;
  currentModalPlaceId = id;

  const displayName =
    currentLang === "en" && place.nameEn ? place.nameEn : place.name;
  const displayAddress =
    currentLang === "en" && place.addressEn ? place.addressEn : place.address;

  document.getElementById("modalTitle").textContent = displayName;
  document.getElementById("modalAddress").textContent = displayAddress;

  let catName = place.category;
  if (place.category === "Мечети") catName = t("catMosques");
  if (place.category === "Халяль еда") catName = t("catFood");
  if (place.category === "Супермаркеты") catName = t("catShops");
  if (place.category === "Beauty салоны") catName = t("catBeauty");

  document.getElementById("modalCategory").textContent = catName;
  document.getElementById("modalRating").textContent = `★ ${place.rating}`;
  document.getElementById("modalClosedRooms").textContent = place.hasClosedRooms
    ? t("yes")
    : t("no");
  document.getElementById("modalPrayerSpace").textContent = place.hasPrayerSpace
    ? t("yes")
    : t("no");
  document.getElementById("modalFeatures").textContent =
    place.features.join(", ");
  updateModalFavBtn();
  placeModal.classList.add("active");
};

function updateModalFavBtn() {
  const btn = document.getElementById("modalFavBtn");
  if (!currentModalPlaceId) return;
  const isFav = favorites.includes(currentModalPlaceId);
  if (isFav) {
    btn.classList.add("active");
    btn.innerHTML = t("inFav");
  } else {
    btn.classList.remove("active");
    btn.innerHTML = t("addFav");
  }
}

window.toggleFavoriteFromModal = function () {
  if (currentModalPlaceId) toggleFavorite(currentModalPlaceId);
};

window.closeModal = function (e) {
  if (
    !e ||
    e.target === placeModal ||
    e.target.classList.contains("modal-close")
  ) {
    placeModal.classList.remove("active");
    currentModalPlaceId = null;
  }
};

window.handleAvatarUpload = function (event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const base64Image = e.target.result;
    localStorage.setItem("muslim_avatar", base64Image);
    applyAvatar(base64Image);
  };
  reader.readAsDataURL(file);
};

function applyAvatar(base64Image) {
  const avatarImg = document.getElementById("avatarImage");
  const avatarPlaceholder = document.getElementById("avatarPlaceholder");
  avatarImg.src = base64Image;
  avatarImg.style.display = "block";
  avatarPlaceholder.style.display = "none";

  const headerImg = document.getElementById("headerAvatarImg");
  const headerText = document.getElementById("headerAvatarText");
  headerImg.src = base64Image;
  headerImg.style.display = "block";
  headerText.style.display = "none";
}

window.enableNameEdit = function () {
  const container = document.getElementById("nameContainer");
  const text = document.getElementById("profileNameText");
  const input = document.getElementById("profileNameInput");

  text.style.display = "none";
  container.querySelector(".edit-name-icon").style.display = "none";
  input.style.display = "block";
  input.value = userData.name || t("profileName");
  input.focus();
};

window.saveName = function () {
  const input = document.getElementById("profileNameInput");
  const text = document.getElementById("profileNameText");
  const container = document.getElementById("nameContainer");

  const newName = input.value.trim();
  if (newName) {
    userData.name = newName;
    localStorage.setItem("muslim_app_user", JSON.stringify(userData));
    text.textContent = newName;
    if (!localStorage.getItem("muslim_avatar")) {
      document.getElementById("headerAvatarText").textContent = newName
        .charAt(0)
        .toUpperCase();
    }
  }

  input.style.display = "none";
  text.style.display = "block";
  container.querySelector(".edit-name-icon").style.display = "block";
};

window.handleNameEnter = function (event) {
  if (event.key === "Enter") {
    event.target.blur();
  }
};

function updateProfileUI() {
  const nameText = document.getElementById("profileNameText");
  if (userData.name) {
    nameText.textContent = userData.name;
    if (!localStorage.getItem("muslim_avatar")) {
      document.getElementById("headerAvatarText").textContent = userData.name
        .charAt(0)
        .toUpperCase();
    }
  } else {
    nameText.textContent = t("profileName");
  }

  const statusText = document.getElementById("profileStatusText");
  if (userData.type === "tourist") statusText.textContent = t("statusTourist");
  else if (userData.type === "local") statusText.textContent = t("statusLocal");
  else statusText.textContent = t("statusUnknown");

  document.getElementById("statFavCount").textContent = favorites.length;

  const daysText = document.getElementById("statDaysCount");
  const daysLabel = document.getElementById("lblDaysCount");
  if (userData.type === "local") {
    daysText.textContent = "∞";
    daysLabel.textContent = t("lblDaysCountLocal");
  } else {
    daysText.textContent = "1";
    daysLabel.textContent = t("lblDaysCount");
  }

  const savedAvatar = localStorage.getItem("muslim_avatar");
  if (savedAvatar) applyAvatar(savedAvatar);
}

window.resetApp = function () {
  if (confirm(t("confirmReset"))) {
    localStorage.removeItem("muslim_app_user");
    localStorage.removeItem("muslim_favorites");
    localStorage.removeItem("muslim_avatar");
    localStorage.removeItem("guide_closed");
    location.reload();
  }
};

let userLocation = { lat: 55.7558, lng: 37.6173 };
let currentLiveData = {
  prayerName: "",
  prayerTime: "",
  temp: "",
  weatherDesc: "",
  mosqueDistance: "",
  mosqueName: "",
};

function getLocationAndUpdate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        updateLiveData();
      },
      (error) => {
        console.warn(
          "Геолокация недоступна, используем Москву.",
          error.message,
        );
        updateLiveData();
      },
      { timeout: 5000 },
    );
  } else {
    updateLiveData();
  }
}

async function updateLiveData() {

  let minDistance = Infinity;
  let nearestMosque = null;
  if (typeof placesData !== "undefined") {
    const mosques = placesData.filter((p) => p.category === "Мечети");
    mosques.forEach((mosque) => {
      const dist = getDistanceFromLatLonInKm(
        userLocation.lat,
        userLocation.lng,
        mosque.lat,
        mosque.lng,
      );
      if (dist < minDistance) {
        minDistance = dist;
        nearestMosque = mosque;
      }
    });
  }
  if (nearestMosque) {
    currentLiveData.mosqueDistance = minDistance.toFixed(1) + " " + t("km");
    currentLiveData.mosqueName =
      currentLang === "en" && nearestMosque.nameEn
        ? nearestMosque.nameEn
        : nearestMosque.name;
  } else {
    currentLiveData.mosqueDistance = "—";
    currentLiveData.mosqueName = "—";
  }

  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${userLocation.lat}&longitude=${userLocation.lng}&current_weather=true&timezone=auto`;
    const weatherRes = await fetch(weatherUrl);
    if (!weatherRes.ok) throw new Error("Ошибка запроса погоды");
    const weatherData = await weatherRes.json();

    if (weatherData.current_weather) {
      const temp = Math.round(weatherData.current_weather.temperature);
      currentLiveData.temp = temp + "°";

      const code = weatherData.current_weather.weathercode;
      if (code === 0) currentLiveData.weatherDesc = t("weatherClear");
      else if (code >= 1 && code <= 3)
        currentLiveData.weatherDesc = t("weatherCloudy");
      else if (code >= 51 && code <= 67)
        currentLiveData.weatherDesc = t("weatherRain");
      else if (code >= 71 && code <= 77)
        currentLiveData.weatherDesc = t("weatherSnow");
      else
        currentLiveData.weatherDesc =
          currentLang === "ru" ? "облачно" : "cloudy";
    } else {
      throw new Error("Нет данных о погоде");
    }
  } catch (e) {
    console.error("Ошибка загрузки погоды:", e);
    currentLiveData.temp = "—";
    currentLiveData.weatherDesc = t("error");
  }

  try {
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const prayerUrl = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${userLocation.lat}&longitude=${userLocation.lng}&method=3`;
    const prayerRes = await fetch(prayerUrl);

    if (!prayerRes.ok) throw new Error("Ошибка запроса намаза");
    const prayerData = await prayerRes.json();

    if (prayerData.data && prayerData.data.timings) {
      const timings = prayerData.data.timings;
      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      const prayerSchedule = [
        { name: currentLang === "ru" ? "Фаджр" : "Fajr", time: timings.Fajr },
        { name: currentLang === "ru" ? "Зухр" : "Dhuhr", time: timings.Dhuhr },
        { name: currentLang === "ru" ? "Аср" : "Asr", time: timings.Asr },
        {
          name: currentLang === "ru" ? "Магриб" : "Maghrib",
          time: timings.Maghrib,
        },
        { name: currentLang === "ru" ? "Иша" : "Isha", time: timings.Isha },
      ];

      let nextPrayer = prayerSchedule.find((p) => {
        const [h, m] = p.time.split(":").map(Number);
        return h * 60 + m > currentTime;
      });

      if (!nextPrayer) nextPrayer = prayerSchedule[0];

      currentLiveData.prayerName = nextPrayer.name;
      currentLiveData.prayerTime = nextPrayer.time;
    } else {
      throw new Error("Нет данных о намазе");
    }
  } catch (e) {
    console.error("Ошибка загрузки намаза:", e);
    currentLiveData.prayerName = "—";
    currentLiveData.prayerTime = t("error");
  }

  updateLiveDataText();
}

function updateLiveDataText() {
  document.getElementById("livePrayerName").textContent =
    currentLiveData.prayerName || t("loading");
  document.getElementById("livePrayerTime").textContent =
    currentLiveData.prayerTime || "...";
  document.getElementById("liveTemp").textContent =
    currentLiveData.temp || t("loading");
  document.getElementById("liveWeatherDesc").textContent =
    currentLiveData.weatherDesc || "...";
  document.getElementById("liveMosqueDistance").textContent =
    currentLiveData.mosqueDistance || t("loading");
  document.getElementById("liveMosqueName").textContent =
    currentLiveData.mosqueName || "...";
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  checkUserData();
  updateView();
  updateGenderVisibility();
  setTimeout(initMaps, 100);
  getLocationAndUpdate();
  setInterval(updateLiveData, 60000);
});