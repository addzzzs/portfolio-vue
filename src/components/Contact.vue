<script setup>
import { ref } from "vue";
import { Notyf } from "notyf";

const notyf = new Notyf();
const name = ref("");
const email = ref("");
const message = ref("");

const isLoading = ref(false);

const accessKey = "fd78f368-be00-435d-a7ad-4d872915c0ca";
const subject = "A User Sent a message from your Web Portfolio";

const submitForm = async () => {
  try {
    isLoading.value = true;

    // const formData = new FormData();
    // formData.append("access_key", accessKey);
    // formData.append("subject", subject);
    // formData.append("name", name.value);
    // formData.append("email", email.value);
    // formData.append("message", message.value);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: subject,
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      notyf.success("Message Sent!");
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      notyf.error(result.message || "Failed to send message");
    }
  } catch (error) {
    console.log(error);
    notyf.error("Failed to send message");
  } finally {
    isLoading.value = false;
    resetRecaptcha();
  }
};

const SITE_KEY = "6LeFB3MtAAAAAJcx26wgYKo3csbCLCseJHOfKxw4"; // Replace with your site key

const recaptchaContainer = ref(null);
const recaptchaWidgetId = ref(null);
const recaptchaToken = ref("");

// Callback called by reCAPTCHA when successful
function onRecaptchaSuccess(token) {
  recaptchaToken.value = token;
}

// Callback when expired
function onRecaptchaExpired() {
  recaptchaToken.value = "";
}

// Function to render the reCAPTCHA widget
function renderRecaptcha() {
  if (!window.grecaptcha) {
    console.error("reCAPTCHA not loaded");
    return;
  }

  recaptchaWidgetId.value = window.grecaptcha.render(recaptchaContainer.value, {
    sitekey: SITE_KEY,
    size: "normal", // or 'compact'
    callback: onRecaptchaSuccess,
    "expired-callback": onRecaptchaExpired,
  });
}

// Function to reset reCAPTCHA
function resetRecaptcha() {
  if (recaptchaWidgetId.value !== null) {
    window.grecaptcha.reset(recaptchaWidgetId.value);
    recaptchaToken.value = "";
  }
}
onMounted(() => {
  const interval = setInterval(() => {
    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      clearInterval(interval);
    }
  }, 100);

  omBeforeUnmount(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <!-- contact -->
  <section class="bg-lowest section-padded border-top-custom" id="contact">
    <div class="container container-max contact-section">
      <div class="row g-5">
        <div class="col-12 col-lg-5">
          <h2 class="headline-lg mb-3">Get in Touch</h2>
          <p
            class="mb-5"
            style="font-size: 18px; color: var(--color-on-surface-variant)"
          >
            Interested in working together or just want to say hi? Feel free to
            reach out using the form or my social links.
          </p>
          <div class="d-flex flex-column gap-4 mb-5">
            <div class="d-flex align-items-center gap-3">
              <div class="contact-icon-circle">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div>
                <p class="form-label-custom text-lime mb-1">Email Me</p>
                <p class="mb-0" style="font-size: 18px">
                  johnrheydahil2003@gmail.com
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <div class="contact-icon-circle">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <p class="form-label-custom text-lime mb-1">Based In</p>
                <p class="mb-0" style="font-size: 18px">
                  Nueva Ecija, Philippines
                </p>
              </div>
            </div>
          </div>

          <div class="map-container">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Nueva%20Ecija%20Philippines&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              width="100%"
              height="240"
              style="
                border: 1px solid var(--color-outline-variant);
                border-radius: 8px;
              "
            ></iframe>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <form
            @submit.prevent="submitForm"
            class="bento-card d-flex flex-column gap-md-3 pt-lg-5"
          >
            <div class="row g-3 mb-3">
              <div class="col-12 mb-md-3">
                <label class="form-label-custom d-block mb-2">Name</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control form-control-custom"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="col-12">
                <label class="form-label-custom d-block mb-2">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control form-control-custom"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div class="mb-4">
              <label class="form-label-custom d-block mb-2">Message</label>
              <textarea
                v-model="message"
                class="form-control form-control-custom"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <div
              class="form-footer d-flex align-items-center justify-content-between flex-wrap gap-3"
            >
              <div class="social-icons d-flex gap-3">
                <a
                  href="https://www.linkedin.com/in/jr292003/"
                  id="linkedin"
                  class="social-icon"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/john.rhey.dahil.2024/"
                  id="facebook"
                  class="social-icon"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://github.com/YOUR-GITHUB"
                  id="github"
                  class="social-icon"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="bi bi-github"></i>
                </a>
              </div>
              <button
                type="submit"
                class="btn-submit"
                style="width: auto; padding: 12px 40px"
                :disabled="isLoading"
              >
                {{ isLoading ? "Sending..." : "Send Message" }}
                <i class="bi bi-send-fill"></i>
              </button>

              <div class="d-flex justify-content-center mt-2">
                <div ref="recaptchaContainer"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
