
  document.addEventListener("DOMContentLoaded", function () {
    // NAV ACTIVE STATE ON CLICK
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // COUNTER ANIMATION (Runs Only Once)
    const counters = document.querySelectorAll('.counter');
    const speed = 50;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || "";
      let count = 0;
      let hasCounted = false;

      const updateCount = () => {
        const increment = Math.ceil(target / speed);

        if (count < target) {
          count += increment;
          counter.innerText = count.toLocaleString();
          setTimeout(updateCount, 20);
        } else {
          // Final formatting
          if (suffix.includes("K")) {
            counter.innerText = (target / 1000).toFixed(0) + suffix;
          } else {
            counter.innerText = target.toLocaleString() + suffix;
          }
        }
      };

      // Run counter only once
      if (!hasCounted) {
        updateCount();
        hasCounted = true;
      }
    });

    // SCROLL TO TOP BUTTON
    window.addEventListener("scroll", function () {
      const btn = document.getElementById("backToTop");
      if (window.scrollY > 200) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });
  });

// mail code

(function() {
    emailjs.init("TEhzQy7ebFkH753SB"); 
  })();

  // Handle form submission
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload

      // Send the form data
      emailjs.sendForm("service_192bddj", "template_8d5qezx", this)
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("✅ Message sent successfully!");
          form.reset(); // Clear the form
        }, function (error) {
          console.log("FAILED...", error);
          alert("❌ Message failed to send. Please try again.");
        });
    });
  });