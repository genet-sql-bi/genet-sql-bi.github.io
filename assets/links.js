/*
  ============================================================
  YOUR LINKS: this is the only file you need to edit.
  ============================================================
  1. portfolio: your Canva website address.
  2. dashboards: paste each Power BI "Publish to web" link
     (looks like https://app.powerbi.com/view?r=...)
     between the quotes.

  While a dashboard link is empty, its "View live dashboard"
  button stays hidden, so nobody sees a broken button.
*/
window.PORTFOLIO_LINKS = {
  portfolio: "",

  dashboards: {
    "cms-supplier-acceptance": "",
    "hospital-ehr-analytics": "",
    "olist-ecommerce": "",
    "sales-data-warehouse": ""
  }
};

/* ---- no need to edit below this line ---- */
document.addEventListener("DOMContentLoaded", function () {
  var L = window.PORTFOLIO_LINKS || {};
  var dash = L.dashboards || {};

  document.querySelectorAll("[data-dashboard]").forEach(function (a) {
    var url = (dash[a.getAttribute("data-dashboard")] || "").trim();
    if (url) { a.href = url; a.hidden = false; } else { a.hidden = true; }
  });

  document.querySelectorAll("[data-portfolio]").forEach(function (a) {
    var url = (L.portfolio || "").trim();
    if (url) { a.href = url; } else { a.hidden = true; }
  });
  if (!(L.portfolio || "").trim()) {
    document.querySelectorAll("[data-portfolio-crumb]").forEach(function (el) { el.hidden = true; });
  }

  document.querySelectorAll(".tabs").forEach(function (group) {
    var tabs = group.querySelectorAll(".tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.setAttribute("aria-selected", "false");
          document.getElementById(t.dataset.target).hidden = true;
        });
        tab.setAttribute("aria-selected", "true");
        document.getElementById(tab.dataset.target).hidden = false;
      });
    });
  });
});
