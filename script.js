const $ = (id) => document.getElementById(id);

const today = new Date();

$("today").textContent = today.toLocaleDateString("en-IN", {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric"
});

// SAMPLE FLIGHT DATA

let flights = [
  {
    number: "AI 604",
    airline: "Air India",
    origin: "Hyderabad",
    destination: "Delhi",
    type: "Departure",
    time: "09:25",
    gate: "A04",
    altitude: "—",
    status: "Boarding"
  },
  {
    number: "6E 218",
    airline: "IndiGo",
    origin: "Mumbai",
    destination: "Hyderabad",
    type: "Arrival",
    time: "09:40",
    gate: "B02",
    altitude: "3,200 ft",
    status: "On time"
  },
  {
    number: "UK 812",
    airline: "Vistara",
    origin: "Delhi",
    destination: "Bengaluru",
    type: "Departure",
    time: "10:15",
    gate: "A08",
    altitude: "—",
    status: "Delayed"
  },
  {
    number: "SG 455",
    airline: "SpiceJet",
    origin: "Chennai",
    destination: "Hyderabad",
    type: "Arrival",
    time: "10:35",
    gate: "B05",
    altitude: "1,100 ft",
    status: "On time"
  },
  {
    number: "AI 902",
    airline: "Air India",
    origin: "Hyderabad",
    destination: "Kolkata",
    type: "Departure",
    time: "11:05",
    gate: "A11",
    altitude: "—",
    status: "On time"
  },
  {
    number: "6E 701",
    airline: "IndiGo",
    origin: "Pune",
    destination: "Hyderabad",
    type: "Arrival",
    time: "11:20",
    gate: "B01",
    altitude: "Landed",
    status: "Landed"
  }
];

// PASSENGER DATA

let passengers = [
  {
    name: "Aarav Sharma",
    booking: "BK-1001",
    flight: "AI 604",
    seat: "12A",
    checked: true,
    status: "Checked in"
  },
  {
    name: "Diya Reddy",
    booking: "BK-1002",
    flight: "6E 218",
    seat: "08C",
    checked: false,
    status: "Not checked in"
  },
  {
    name: "Kabir Khan",
    booking: "BK-1003",
    flight: "UK 812",
    seat: "14B",
    checked: true,
    status: "Boarded"
  },
  {
    name: "Ananya Rao",
    booking: "BK-1004",
    flight: "SG 455",
    seat: "06A",
    checked: false,
    status: "Not checked in"
  }
];

// TICKET DATA

let tickets = [
  {
    id: "BK-1001",
    passenger: "Aarav Sharma",
    flight: "AI 604",
    date: "2026-11-02",
    fare: 5400,
    status: "Confirmed"
  },
  {
    id: "BK-1002",
    passenger: "Diya Reddy",
    flight: "6E 218",
    date: "2026-11-02",
    fare: 4200,
    status: "Confirmed"
  },
  {
    id: "BK-1003",
    passenger: "Kabir Khan",
    flight: "UK 812",
    date: "2026-11-03",
    fare: 6100,
    status: "Cancelled"
  },
  {
    id: "BK-1004",
    passenger: "Ananya Rao",
    flight: "SG 455",
    date: "2026-11-02",
    fare: 3900,
    status: "Confirmed"
  }
];

// BAGGAGE DATA

let bags = [
  {
    tag: "BG-1001",
    passenger: "Aarav Sharma",
    flight: "AI 604",
    weight: 18.5,
    status: "Loaded"
  },
  {
    tag: "BG-1002",
    passenger: "Diya Reddy",
    flight: "6E 218",
    weight: 14,
    status: "Checked in"
  },
  {
    tag: "BG-1003",
    passenger: "Kabir Khan",
    flight: "UK 812",
    weight: 21,
    status: "Security cleared"
  }
];

// STAFF DATA

let staff = [
  {
    name: "Meera Nair",
    id: "ST-201",
    department: "Passenger services",
    shift: "Morning"
  },
  {
    name: "Rahul Varma",
    id: "ST-202",
    department: "Ground operations",
    shift: "Evening"
  },
  {
    name: "Sana Khan",
    id: "ST-203",
    department: "Security",
    shift: "Night"
  },
  {
    name: "Arjun Das",
    id: "ST-204",
    department: "Baggage handling",
    shift: "Morning"
  }
];

// INCIDENT DATA

let incidents = [
  {
    id: "INC-501",
    description: "Baggage belt maintenance required",
    location: "Terminal 1 - Belt 3",
    priority: "Medium",
    reported: "09:10",
    status: "Open"
  },
  {
    id: "INC-502",
    description: "Gate display screen not responding",
    location: "Gate A08",
    priority: "Low",
    reported: "08:45",
    status: "Open"
  }
];

// RECENT ACTIVITY

let activities = [
  "Flight AI 604 moved to boarding",
  "Passenger BK-1001 checked in",
  "Baggage BG-1003 cleared screening",
  "Terminal lounge capacity updated"
];

// LOUNGE DATA

let lounges = [
  {
    name: "Sky Premium Lounge",
    type: "Premium lounge",
    capacity: 120,
    occupied: 70,
    icon: "fa-couch"
  },
  {
    name: "Business Class Lounge",
    type: "Business lounge",
    capacity: 80,
    occupied: 46,
    icon: "fa-briefcase"
  },
  {
    name: "Family Waiting Lounge",
    type: "Family area",
    capacity: 100,
    occupied: 38,
    icon: "fa-people-group"
  }
];

// HELPER FUNCTIONS

function esc(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function badge(s) {
  let cls = s.toLowerCase().replaceAll(" ", "-");

  return `<span class="status ${esc(cls)}">${esc(s)}</span>`;
}

function showToast(message) {
  const t = $("toast");

  t.textContent = message;
  t.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    t.classList.remove("show");
  }, 2600);
}

// NAVIGATION

function navigate(page) {

  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  $("page-" + page).classList.add("active");

  document.querySelectorAll(".nav-link").forEach(b => {
    b.classList.toggle("active", b.dataset.page === page);
  });

  const label = {
    dashboard: "Dashboard overview",
    flights: "Flight operations",
    passengers: "Passenger management",
    tickets: "Ticket management",
    baggage: "Baggage & security",
    facilities: "Lounges & facilities",
    staff: "Staff management",
    incidents: "Incident management"
  };

  $("pageTitle").textContent = label[page];

  $("sidebar").classList.remove("open");

  renderAll();
}

document.querySelectorAll(".nav-link").forEach(b => {
  b.addEventListener("click", () => {
    navigate(b.dataset.page);
  });
});

// MOBILE MENU

$("menuToggle").addEventListener("click", () => {
  $("sidebar").classList.toggle("open");
});

// MODALS

function openModal(id) {
  $(id).classList.add("show");
}

function closeModal(el) {
  el.classList.remove("show");
}

document.querySelectorAll("[data-close]").forEach(b => {
  b.addEventListener("click", () => {
    closeModal(b.closest(".modal"));
  });
});

document.querySelectorAll(".modal").forEach(m => {
  m.addEventListener("click", e => {
    if (e.target === m) {
      closeModal(m);
    }
  });
});

// ACTIVITY TRACKER

function addActivity(s) {
  activities.unshift(s);
  activities = activities.slice(0, 5);
}

// DASHBOARD

function renderDashboard() {

  $("statFlights").textContent = flights.length;

  $("statPassengers").textContent = passengers.length;

  $("statOnTime").textContent =
    (flights.length
      ? Math.round(
          flights.filter(f =>
            f.status === "On time" ||
            f.status === "Boarding" ||
            f.status === "Landed"
          ).length / flights.length * 100
        )
      : 0) + "%";

  $("statIncidents").textContent =
    incidents.filter(i => i.status === "Open").length;

  $("dashboardFlights").innerHTML =
    flights.slice(0, 5).map(f => `
      <tr>
        <td class="flight-code">
          ${esc(f.number)}
          <span class="subtle">${esc(f.airline)}</span>
        </td>

        <td class="route">
          ${esc(f.origin)} → ${esc(f.destination)}
        </td>

        <td>${esc(f.time)}</td>
        <td>${esc(f.gate)}</td>
        <td>${badge(f.status)}</td>
      </tr>
    `).join("");

  $("activityList").innerHTML =
    activities.map((a, i) => `
      <div class="activity-item">
        <div class="activity-icon">
          <i class="fa-solid ${
            ["fa-plane", "fa-user-check", "fa-suitcase",
             "fa-circle-info", "fa-bell"][i % 5]
          }"></i>
        </div>

        <div>
          <b>${esc(a)}</b>
          <small>Airport operations update • Recently</small>
        </div>
      </div>
    `).join("");

  $("bagCount").textContent = bags.length;

  let occ = Math.round(
    lounges.reduce((a, l) => a + l.occupied, 0) /
    lounges.reduce((a, l) => a + l.capacity, 0) * 100
  );

  $("loungePercent").textContent = occ + "%";
  $("loungeMeter").style.width = occ + "%";
}

// FLIGHT MANAGEMENT

function renderFlights() {

  const q = ($("flightSearch")?.value || "").toLowerCase();

  const filter = $("flightFilter")?.value || "all";

  let rows = flights.filter(f =>
    (filter === "all" || f.status === filter) &&
    [f.number, f.airline, f.origin, f.destination]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  $("flightTable").innerHTML = rows.length
    ? rows.map(f => `
      <tr>
        <td class="flight-code">${esc(f.number)}</td>
        <td>${esc(f.airline)}</td>
        <td>${esc(f.origin)} → ${esc(f.destination)}</td>
        <td>${esc(f.type)}</td>
        <td>${esc(f.time)}</td>
        <td>${esc(f.gate)}</td>
        <td>${esc(f.altitude)}</td>
        <td>${badge(f.status)}</td>
        <td>
          <button class="action-btn"
            onclick="cycleFlight(${flights.indexOf(f)})">
            Update
          </button>
        </td>
      </tr>
    `).join("")
    : `<tr><td colspan="9" class="empty-state">
        No flights match your search.
       </td></tr>`;
}

// UPDATE FLIGHT STATUS

function cycleFlight(i) {

  const states = [
    "On time",
    "Boarding",
    "Delayed",
    "Landed",
    "Cancelled"
  ];

  let f = flights[i];

  f.status = states[
    (states.indexOf(f.status) + 1) % states.length
  ];

  f.altitude = f.status === "Landed"
    ? "Landed"
    : f.type === "Arrival"
      ? "2,400 ft"
      : "—";

  addActivity(`${f.number} status updated to ${f.status}`);

  renderAll();

  showToast("Flight status updated.");
}

// PASSENGER MANAGEMENT

function renderPassengers() {

  const q = ($("passengerSearch")?.value || "").toLowerCase();

  const filter = $("passengerFilter")?.value || "all";

  let rows = passengers.filter(p => {

    const matchesFilter =
      filter === "all" ||
      (filter === "Checked in" && p.checked) ||
      (filter === "Not checked in" && !p.checked) ||
      (filter === "Boarded" && p.status === "Boarded");

    const matchesSearch =
      [p.name, p.booking, p.flight]
        .join(" ")
        .toLowerCase()
        .includes(q);

    return matchesFilter && matchesSearch;
  });

  $("passengerTable").innerHTML = rows.length
    ? rows.map(p => `
      <tr>
        <td class="flight-code">${esc(p.name)}</td>
        <td>${esc(p.booking)}</td>
        <td>${esc(p.flight)}</td>
        <td>${esc(p.seat || "—")}</td>
        <td>${p.checked ? badge("Checked in") : badge("Pending")}</td>
        <td>${badge(p.status)}</td>
        <td>
          <button class="action-btn"
            onclick="toggleCheckin('${esc(p.booking)}')">
            ${p.checked ? "Undo check-in" : "Check in"}
          </button>
        </td>
      </tr>
    `).join("")
    : `<tr><td colspan="7" class="empty-state">
        No passengers found.
       </td></tr>`;
}

// CHECK-IN FUNCTION

function toggleCheckin(id) {

  let p = passengers.find(x => x.booking === id);

  p.checked = !p.checked;

  p.status = p.checked
    ? "Checked in"
    : "Not checked in";

  addActivity(
    `${p.name} ${p.checked ? "checked in" : "check-in reversed"}`
  );

  renderAll();

  showToast("Passenger record updated.");
}

// TICKET MANAGEMENT

function renderTickets() {

  $("ticketCount").textContent = tickets.length;

  $("confirmedCount").textContent =
    tickets.filter(t => t.status === "Confirmed").length;

  $("cancelledCount").textContent =
    tickets.filter(t => t.status === "Cancelled").length;

  const q = ($("ticketSearch")?.value || "").toLowerCase();

  const rows = tickets.filter(t =>
    [t.id, t.passenger, t.flight]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  $("ticketTable").innerHTML = rows.length
    ? rows.map(t => `
      <tr>
        <td class="flight-code">${esc(t.id)}</td>
        <td>${esc(t.passenger)}</td>
        <td>${esc(t.flight)}</td>
        <td>${esc(t.date)}</td>
        <td>₹${Number(t.fare).toLocaleString("en-IN")}</td>
        <td>${badge(t.status)}</td>
        <td>
          ${t.status === "Confirmed"
            ? `<button class="action-btn"
                onclick="cancelTicket('${esc(t.id)}')">
                Cancel
               </button>`
            : "—"}
        </td>
      </tr>
    `).join("")
    : `<tr><td colspan="7" class="empty-state">
        No bookings found.
       </td></tr>`;
}

// CANCEL TICKET

function cancelTicket(id) {

  if (!confirm("Cancel this sample booking?")) return;

  let t = tickets.find(x => x.id === id);

  t.status = "Cancelled";

  addActivity(`Ticket ${id} cancelled`);

  renderAll();

  showToast("Ticket cancelled in this demo.");
}

// BAGGAGE TRACKING

function renderBags() {

  const q = ($("bagSearch")?.value || "").toLowerCase();

  const rows = bags.filter(b =>
    [b.tag, b.passenger, b.flight]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  $("bagTable").innerHTML = rows.length
    ? rows.map(b => `
      <tr>
        <td class="flight-code">${esc(b.tag)}</td>
        <td>${esc(b.passenger)}</td>
        <td>${esc(b.flight)}</td>
        <td>${esc(b.weight)} kg</td>
        <td>${badge(b.status)}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="5" class="empty-state">
        No baggage found.
       </td></tr>`;
}

// LOUNGE MANAGEMENT

function renderFacilities() {

  $("facilityGrid").innerHTML =
    lounges.map((l, i) => {

      let pct = Math.round(
        l.occupied / l.capacity * 100
      );

      return `
        <article class="facility-card">

          <i class="fa-solid ${l.icon}"></i>

          <h3>${esc(l.name)}</h3>

          <p>${esc(l.type)} • Terminal ${i + 1}</p>

          <div class="capacity">
            <span>Occupancy</span>
            <b>${l.occupied} / ${l.capacity}</b>
          </div>

          <div class="meter">
            <span style="width:${pct}%"></span>
          </div>

          <button onclick="updateLounge(${i})">
            Update occupancy
          </button>

        </article>
      `;
    }).join("");
}

// UPDATE LOUNGE CAPACITY

function updateLounge(i) {

  let value = prompt(
    `Enter current occupied seats (maximum ${lounges[i].capacity}):`,
    lounges[i].occupied
  );

  if (value === null) return;

  let n = Number(value);

  if (
    !Number.isInteger(n) ||
    n < 0 ||
    n > lounges[i].capacity
  ) {
    showToast("Enter a valid occupancy number.");
    return;
  }

  lounges[i].occupied = n;

  renderAll();

  showToast("Lounge occupancy updated.");
}

// STAFF MANAGEMENT

function renderStaff() {

  $("staffTable").innerHTML =
    staff.map(s => `
      <tr>
        <td class="flight-code">${esc(s.name)}</td>
        <td>${esc(s.id)}</td>
        <td>${esc(s.department)}</td>
        <td>${esc(s.shift)}</td>
        <td>${badge("Active")}</td>
      </tr>
    `).join("");
}

// INCIDENT MANAGEMENT

function renderIncidents() {

  $("incidentTable").innerHTML =
    incidents.map(i => `
      <tr>
        <td class="flight-code">${esc(i.id)}</td>
        <td class="incident-description">
          ${esc(i.description)}
        </td>
        <td>${esc(i.location)}</td>
        <td>${badge(i.priority)}</td>
        <td>${esc(i.reported)}</td>
        <td>${badge(i.status)}</td>
        <td>
          ${i.status === "Open"
            ? `<button class="action-btn"
                onclick="resolveIncident('${esc(i.id)}')">
                Resolve
               </button>`
            : "—"}
        </td>
      </tr>
    `).join("");
}

// RESOLVE INCIDENT

function resolveIncident(id) {

  let i = incidents.find(x => x.id === id);

  i.status = "Resolved";

  addActivity(`${id} marked as resolved`);

  renderAll();

  showToast("Incident resolved.");
}

// RENDER ALL SECTIONS

function renderAll() {

  renderDashboard();
  renderFlights();
  renderPassengers();
  renderTickets();
  renderBags();
  renderFacilities();
  renderStaff();
  renderIncidents();

}

// SEARCH FUNCTIONS

[
  "flightSearch",
  "passengerSearch",
  "ticketSearch",
  "bagSearch"
].forEach(id => {

  $(id).addEventListener("input", () => {

    const renderers = {
      flightSearch: renderFlights,
      passengerSearch: renderPassengers,
      ticketSearch: renderTickets,
      bagSearch: renderBags
    };

    renderers[id]();

  });

});

// FILTER FUNCTIONS

["flightFilter", "passengerFilter"].forEach(id => {

  $(id).addEventListener("change", () => {

    if (id === "flightFilter") {
      renderFlights();
    } else {
      renderPassengers();
    }

  });

});

// FORM HANDLING

function formData(form) {

  return Object.fromEntries(
    new FormData(form).entries()
  );

}

function handleForm(id, callback) {

  $(id).addEventListener("submit", e => {

    e.preventDefault();

    callback(formData(e.target));

    e.target.reset();

    closeModal($(id).closest(".modal"));

    renderAll();

  });

}

// ADD FLIGHT

handleForm("flightForm", d => {

  if (
    flights.some(
      f => f.number.toLowerCase() === d.number.toLowerCase()
    )
  ) {
    return showToast("That flight number already exists.");
  }

  flights.unshift({
    ...d,
    altitude: d.type === "Arrival" ? "2,800 ft" : "—"
  });

  addActivity(`New flight ${d.number} added`);

  showToast("Flight added successfully.");

});

// ADD PASSENGER

handleForm("passengerForm", d => {

  passengers.push({
    ...d,
    checked: false,
    status: "Not checked in"
  });

  addActivity(`${d.name} added to passenger records`);

  showToast("Passenger added successfully.");

});

// BOOK TICKET

handleForm("ticketForm", d => {

  let id = "BK-" + (1000 + tickets.length + 1);

  tickets.push({
    id,
    passenger: d.passenger,
    flight: d.flight,
    date: d.date,
    fare: Number(d.fare),
    status: "Confirmed"
  });

  addActivity(`New ticket ${id} booked`);

  showToast(`Booking confirmed. ID: ${id}`);

});

// REGISTER BAGGAGE

handleForm("bagForm", d => {

  if (
    bags.some(
      b => b.tag.toLowerCase() === d.tag.toLowerCase()
    )
  ) {
    return showToast("Baggage tag already exists.");
  }

  bags.push({
    ...d,
    weight: Number(d.weight),
    status: "Registered"
  });

  addActivity(`Baggage ${d.tag} registered`);

  showToast("Baggage registered.");

});

// ADD STAFF

handleForm("staffForm", d => {

  staff.push(d);

  addActivity(`${d.name} added to staff records`);

  showToast("Staff member added.");

});

// REPORT INCIDENT

handleForm("incidentForm", d => {

  incidents.unshift({
    id: "INC-" + (501 + incidents.length),
    ...d,
    reported: new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit"
    }),
    status: "Open"
  });

  addActivity("A new incident was reported");

  showToast("Incident report submitted.");

});

// SECURITY SCREENING

$("screenBtn").addEventListener("click", () => {

  let ref = $("screenRef").value.trim();

  if (!ref) {
    return showToast("Enter a passenger or baggage reference.");
  }

  let result = $("screenResult").value;

  let bag = bags.find(
    b => b.tag.toLowerCase() === ref.toLowerCase()
  );

  if (bag) {

    bag.status =
      result === "Cleared"
        ? "Security cleared"
        : result === "Flagged for review"
          ? "Flagged"
          : "Manual inspection";

  }

  addActivity(`Security screening ${ref}: ${result}`);

  renderAll();

  showToast(`Screening recorded: ${result}.`);

  $("screenRef").value = "";

});

// NOTIFICATIONS

$("notificationBtn").addEventListener("click", () => {

  showToast(
    `${incidents.filter(i => i.status === "Open").length} open incident(s). Check Incident Management.`
  );

});

// INITIALIZE DASHBOARD

renderAll();
