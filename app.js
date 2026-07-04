const data = [
  {
    id: 1,
    category: "Frontend Development",
    tags: ["html", "overview", "web"],
    title: "HTML Overview",
    summary: "HTML is the standard markup language for building web pages and linking content together.",
    english:
      "HTML stands for Hypertext Markup Language. It uses tags to structure web page content and connect documents through hyperlinks.",
    burmese:
      "HTML ဆိုသည် Hypertext Markup Language ကို ဆိုလိုပြီး ဝဘ်စာမျက်နှာများကို tag များဖြင့် တည်ဆောက်ပြီး hyperlink များဖြင့် ဆက်သွယ်ပေးသည်။",
    exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple paragraph.</p>
  </body>
</html>`,
  },
  {
    id: 2,
    category: "Frontend Development",
    tags: ["html", "tags", "structure"],
    title: "HTML Basic Tags",
    summary: "Basic HTML tags create headings, paragraphs, line breaks, rules, and preformatted text.",
    english:
      "h1 to h6 define headings, p creates paragraphs, br adds line breaks, hr creates a horizontal rule, and pre preserves whitespace.",
    burmese:
      "h1 မှ h6 အထိ ခေါင်းစဉ်များပေးနိုင်ပြီး p သည် စာပိုဒ်များအတွက်၊ br သည် စာကြောင်းအသစ်၊ hr သည် မျဉ်းတား ခွဲခြားရန်၊ pre သည် စာသားနေရာချထားမှုကို မပျက်စေဘဲ ပြသရန် ဖြစ်သည်။",
    exampleCode: `<h1>Main Heading</h1>
<p>This is a paragraph.<br>This starts on a new line.</p>
<hr>
<pre>Preserved text</pre>`,
  },
  {
    id: 3,
    category: "Frontend Development",
    tags: ["html", "elements", "syntax"],
    title: "HTML Elements",
    summary: "An HTML element is a complete building block made of a start tag, content, and end tag.",
    english:
      "An HTML element is made of an opening tag, content, and a closing tag. Some elements such as br and hr are self-closing.",
    burmese:
      "HTML element တစ်ခုသည် opening tag၊ content နှင့် closing tag တို့ဖြင့် ဖွဲ့စည်းထားပြီး br နှင့် hr ကဲ့သို့သော element များသည် self-closing ဖြစ်နိုင်သည်။",
    exampleCode: `<h1>This is a heading element.</h1>
<p>This is a paragraph element.</p>
<br>`,
  },
  {
    id: 4,
    category: "Frontend Development",
    tags: ["html", "attributes", "styling"],
    title: "HTML Attributes",
    summary: "Attributes provide extra information and behavior for HTML elements.",
    english:
      "Attributes are written inside the opening tag as name=value pairs and add behavior or styling information to elements.",
    burmese:
      "Attributes များကို opening tag အတွင်း name=value ပုံစံဖြင့် ရေးပြီး element များအတွက် ပုံစံ၊ အသံစဉ်၊ သို့မဟုတ် အရည်အသွေးများကို ထည့်ပေးသည်။",
    exampleCode: `<p id="intro" title="Tooltip" style="color: blue;">Hello</p>`,
  },
  {
    id: 5,
    category: "Frontend Development",
    tags: ["html", "formatting", "text"],
    title: "HTML Formatting",
    summary: "Formatting elements improve the visual presentation of text in a webpage.",
    english:
      "Formatting tags such as b, i, u, strike, sub, and sup change the appearance of text to make it more readable or visually distinct.",
    burmese:
      "b, i, u, strike, sub, sup ကဲ့သို့သော formatting tag များဖြင့် စာသားများကို အထူ၊ စာလုံးစောင်း၊ အောက်မျဉ်းတား၊ လျှောကျ စသဖြင့် ပုံစံချနိုင်သည်။",
    exampleCode: `<p>This is <b>bold</b> and <i>italic</i> text.</p>
<p>Water is H<sub>2</sub>O.</p>`,
  },
  {
    id: 6,
    category: "Frontend Development",
    tags: ["html", "phrase", "semantics"],
    title: "HTML Phrase Tags",
    summary: "Phrase tags add semantic meaning to text beyond simple visual formatting.",
    english:
      "Phrase tags like em, strong, abbr, q, cite, code, and address define meaning and structure for text content.",
    burmese:
      "em, strong, abbr, q, cite, code, address ကဲ့သို့သော phrase tag များသည် စာသားများကို အဓိပ္ပာယ်နှင့် အကြောင်းအရာအရ ပိုမိုထင်ရှားစေသည်။",
    exampleCode: `<p>You <em>must</em> read this <strong>important</strong> message.</p>
<p>The code is <code>document.write()</code>.</p>`,
  },
  {
    id: 7,
    category: "Frontend Development",
    tags: ["html", "meta", "seo"],
    title: "HTML Meta Tags",
    summary: "Meta tags provide hidden page information for browsers and search engines.",
    english:
      "Meta tags are placed inside the head section and help with page description, keywords, refresh timing, and redirects.",
    burmese:
      "Meta tags များကို head အတွင်း ထည့်သွင်းပြီး page description၊ keywords၊ refresh timing နှင့် redirect များကို စီမံပေးသည်۔",
    exampleCode: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="HTML tutorial">
</head>`,
  },
  {
    id: 8,
    category: "Frontend Development",
    tags: ["css", "styling", "flexbox"],
    title: "CSS Flexbox",
    summary: "Flexbox is a layout system for arranging items in rows or columns.",
  },
  {
    id: 9,
    category: "Frontend Development",
    tags: ["javascript", "es6", "dom"],
    title: "JavaScript DOM",
    summary: "JS allows dynamic manipulation of HTML elements.",
  },
  {
    id: 10,
    category: "Backend Development",
    tags: ["node", "server", "api"],
    title: "Node.js Basics",
    summary: "Node.js runs JavaScript on the server side.",
  },
  {
    id: 11,
    category: "APIs",
    tags: ["rest", "http", "json"],
    title: "REST API",
    summary: "REST APIs use HTTP methods to communicate.",
  },
  {
    id: 12,
    category: "Databases",
    tags: ["sql", "mysql", "queries"],
    title: "SQL Basics",
    summary: "SQL is used to manage relational databases.",
  },
  {
    id: 13,
    category: "Cyber Security",
    tags: ["xss", "owasp", "security"],
    title: "XSS Attack",
    summary: "Cross-site scripting injects malicious scripts.",
  },
  {
    id: 14,
    category: "UI/UX Design",
    tags: ["design", "ux", "ui"],
    title: "Visual Hierarchy",
    summary: "Guides users’ attention using size and contrast.",
  },
  {
    id: 15,
    category: "Career Growth",
    tags: ["git", "github", "portfolio"],
    title: "Git Workflow",
    summary: "Git tracks code changes and collaboration.",
  },
];

let currentFilter = "all";
const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const resultsCount = document.getElementById("resultsCount");
const sidebar = document.getElementById("sidebar");

function getCategoryIcon(category) {
  const icons = {
    "Frontend Development": "fa-desktop",
    "Backend Development": "fa-server",
    "UI/UX Design": "fa-palette",
    "Cyber Security": "fa-shield-halved",
    APIs: "fa-plug",
    Databases: "fa-database",
    "Career Growth": "fa-chart-line",
  };

  return icons[category] || "fa-book-open";
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function openTopicModal(item) {
  const modal = document.getElementById("topicModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.innerHTML = `
    <div class="modal-content">
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      ${item.english ? `<div class="topic-block"><h4>English</h4><p>${item.english}</p></div>` : ""}
      ${item.burmese ? `<div class="topic-block"><h4>မြန်မာ</h4><p>${item.burmese}</p></div>` : ""}
      ${item.exampleCode ? `<div class="topic-block"><h4>Example Code</h4><pre><code>${escapeHtml(item.exampleCode)}</code></pre></div>` : ""}
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeTopicModal() {
  const modal = document.getElementById("topicModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function search(query = "") {
  const normalizedQuery = query.toLowerCase().trim();

  return data.filter((item) => {
    const matchCategory = currentFilter === "all" || item.category === currentFilter;
    const matchText =
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.summary.toLowerCase().includes(normalizedQuery) ||
      item.tags.join(" ").toLowerCase().includes(normalizedQuery);

    return matchCategory && matchText;
  });
}

function render(list, query = "") {
  results.innerHTML = "";
  resultsCount.textContent = `Showing ${list.length} of ${data.length} topics`;

  if (list.length === 0) {
    results.innerHTML = '<div class="empty-state">No results found. Try another keyword or filter.</div>';
    return;
  }

  list.forEach((item) => {
    const title = highlight(item.title, query);
    const summary = highlight(item.summary, query);
    const tags = item.tags
      .slice(0, 3)
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");
    const expandableContent = item.english || item.burmese || item.exampleCode
      ? `
        <div class="card-expand">
          <button class="card-toggle" type="button" data-id="${item.id}">Open topic</button>
        </div>
      `
      : "";

    results.innerHTML += `
      <article class="card">
        <div class="card-top">
          <span class="card-badge">${item.category}</span>
          <span class="card-icon"><i class="fa-solid ${getCategoryIcon(item.category)}"></i></span>
        </div>
        <h3>${title}</h3>
        <p>${summary}</p>
        ${expandableContent}
        <div class="card-tags">${tags}</div>
        <div class="card-bottom">
          <span>Quick read</span>
          <span class="learn-more">Tap to expand</span>
        </div>
      </article>
    `;
  });
}

function renderSuggestions(query) {
  suggestions.innerHTML = "";

  if (!query) return;

  const matches = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  matches.slice(0, 5).forEach((item) => {
    suggestions.innerHTML += `
      <div class="suggestion-item" data-title="${item.title}">
        ${item.title}
      </div>
    `;
  });
}

searchInput.addEventListener("input", (event) => {
  const value = event.target.value;
  render(search(value), value);
  renderSuggestions(value);
});

results.addEventListener("click", (event) => {
  const button = event.target.closest(".card-toggle");
  if (!button) return;

  const item = data.find((entry) => entry.id === Number(button.dataset.id));
  if (item) {
    openTopicModal(item);
  }
});

document.getElementById("closeModal").addEventListener("click", closeTopicModal);
document.querySelector(".topic-modal-backdrop").addEventListener("click", closeTopicModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeTopicModal();
  }
});

suggestions.addEventListener("click", (event) => {
  const item = event.target.closest(".suggestion-item");
  if (!item) return;

  searchInput.value = item.dataset.title;
  render(search(searchInput.value), searchInput.value);
  renderSuggestions(searchInput.value);
});

document.getElementById("clearBtn").onclick = () => {
  searchInput.value = "";
  render(search(""), "");
  renderSuggestions("");
};

document.querySelectorAll(".chip, .nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll(".chip, .nav-btn").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    render(search(searchInput.value), searchInput.value);
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const todayDate = document.getElementById("todayDate");
const year = document.getElementById("year");

if (todayDate) {
  const now = new Date();
  todayDate.textContent = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

document.addEventListener("click", (event) => {
  const toggleButton = document.getElementById("menuToggle");
  const clickedInsideSidebar = sidebar.contains(event.target);
  const clickedToggle = toggleButton.contains(event.target);

  if (window.innerWidth <= 900 && sidebar.classList.contains("active") && !clickedInsideSidebar && !clickedToggle) {
    sidebar.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    sidebar.classList.remove("active");
  } else if (window.innerWidth <= 900 && sidebar.classList.contains("active")) {
    sidebar.classList.add("active");
  }
});

render(search(""), "");
