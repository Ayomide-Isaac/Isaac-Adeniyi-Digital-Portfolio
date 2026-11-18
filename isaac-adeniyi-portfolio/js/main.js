// ISAAC A. ADENIYI — PORTFOLIO INTERACTIONS
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");

  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }));

  // Filter portfolio cards without a page reload.
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => item.classList.toggle("active", item === button));
      projects.forEach(card => {
        card.hidden = !(filter === "all" || card.dataset.category === filter);
      });
    });
  });

  // Media preview: image lightbox or native video player.
  const dialog = document.getElementById("preview-dialog");
  const dialogContent = document.getElementById("dialog-content");
  const closeDialog = () => {
    if (dialog.open) dialog.close();
    dialogContent.replaceChildren();
  };
  document.querySelectorAll(".project-media").forEach(button => {
    button.addEventListener("click", () => {
      const path = button.dataset.preview;
      const kind = button.dataset.kind;
      dialogContent.replaceChildren();
      if (kind === "video") {
        const video = document.createElement("video");
        video.controls = true;
        video.autoplay = true;
        video.src = path;
        video.textContent = "Your browser does not support HTML video.";
        dialogContent.append(video);
      } else {
        const image = document.createElement("img");
        image.src = path;
        image.alt = "Portfolio project preview";
        image.onerror = () => {
          dialogContent.innerHTML = `<p>Project image not uploaded yet.</p><p>Add your file here: <strong>${path}</strong></p>`;
        };
        dialogContent.append(image);
      }
      dialog.showModal();
    });
  });
  document.querySelector(".dialog-close")?.addEventListener("click", closeDialog);
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) closeDialog();
  });
  dialog?.addEventListener("close", () => dialogContent.replaceChildren());

  // Certificate PDFs open in the same preview dialog.
  document.querySelectorAll(".cert-card").forEach(card => {
    card.addEventListener("click", () => {
      const path = card.dataset.cert;
      dialogContent.replaceChildren();
      const frame = document.createElement("iframe");
      frame.src = path;
      frame.title = "Certificate preview";
      frame.width = "800";
      frame.height = "620";
      frame.onerror = () => {
        dialogContent.textContent = `Upload the certificate PDF to: ${path}`;
      };
      dialogContent.append(frame);
      const note = document.createElement("p");
      note.textContent = `If the preview does not load, upload the original PDF to ${path}.`;
      dialogContent.append(note);
      dialog.showModal();
    });
  });

  // The form prepares an email; no backend submission is claimed.
  const form = document.getElementById("contact-form");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(
      `Hello Isaac,\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nReply email: ${data.get("email")}`
    );
    document.getElementById("form-status").textContent =
      "Your email application should open with the message prepared. Please review and send it there.";
    window.location.href = `mailto:iayomide30@gmail.com?subject=${subject}&body=${body}`;
  });

  // Subtle reveal-on-scroll effect, with a fallback for older browsers.
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  document.getElementById("year").textContent = new Date().getFullYear();
});
