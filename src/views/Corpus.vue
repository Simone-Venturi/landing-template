<template>
  <div class="corpus">
    <LandingSection :sectionName="$t('menu.home')">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <h2>{{ $t("home.title") }}</h2>
            <h3>{{ $t("home.description") }}</h3>
          </div>
          <div class="col-12 col-md-6">
            <img src="../assets/logo.svg" alt="Logo" />
          </div>
        </div>
      </div>
    </LandingSection>
    <LandingSection :sectionName="$t('menu.about')">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>{{ $t("about.title") }}</h2>
            <p class="description">{{ $t("about.description") }}</p>
          </div>
        </div>
      </div>
    </LandingSection>
    <LandingSection :sectionName="$t('menu.explore')">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>{{ $t("explore.title") }}</h2>
            <p class="description">{{ $t("explore.description") }}</p>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <img src="../assets/logo.svg" alt="" />
              </div>
              <div class="col-9">
                <h2>{{ $t("explore.service1.title") }}</h2>
                <p class="description">
                  {{ $t("explore.service1.description") }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-9">
                <h2>{{ $t("explore.service2.title") }}</h2>
                <p class="description">
                  {{ $t("explore.service2.description") }}
                </p>
              </div>
              <div class="col-3">
                <img src="../assets/logo.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-3">
                <img src="../assets/logo.svg" alt="" />
              </div>
              <div class="col-9">
                <h2>{{ $t("explore.service3.title") }}</h2>
                <p class="description">
                  {{ $t("explore.service3.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingSection>
    <LandingSection :sectionName="$t('menu.contact')">
      <div class="container">
        <div class="row justify-content-center mt-3 mb-3">
          <div class="col-lg-4">
            <div class="border p-3 p-md-5 bg-white rounded shadow">
              <h2>{{ $t("contact.title") }}</h2>
              <p class="description">{{ $t("contact.description") }}</p>
              <form>
                <div class="form-group">
                  <label for="emailSignup">{{
                    $t("contact.form.label")
                  }}</label>
                  <input
                    id="emailSignup"
                    type="email"
                    class="form-control"
                    :placeholder="$t('contact.form.placeholder')"
                  />
                  <small id="emailHemp" class="form-text text-muted">{{
                    $t("contact.form.text")
                  }}</small>
                  <button type="submit" class="btn btn-success mt-3">
                    {{ $t("contact.form.button") }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </LandingSection>
    <FooterSection />
  </div>
</template>
<script>
import LandingSection from "../components/LandingSectionLayout.vue";
import FooterSection from "../components/Footer.vue";
export default {
  components: {
    LandingSection,
    FooterSection,
  },
};
</script>
<style scoped>
h2 {
  text-transform: uppercase;
}

#about {
  border-top: solid black 2pt;
}
.description {
  text-transform: initial;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #home {
    padding-top: 15%;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #home {
    padding-top: 10%;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  #home {
    padding-top: 10%;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #home {
    padding-top: 7%;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #home {
    padding-top: 5%;
  }
}
</style>
