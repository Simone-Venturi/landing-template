<template>
    <div class="corpus">
        <LandingSection :sectionName='$t("home.title")' :id='$t("menu.home")'>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h2>{{$t("home.title")}}</h2>
                        <h3>{{$t("home.description")}}</h3>
                    </div>
                    <div class="col-12 col-md-6">
                        <img src="../assets/logo.svg" alt="Logo">
                    </div>
                </div>
            </div>
        </LandingSection>
        <LandingSection :sectionName='$t("about.title")' :id='$t("menu.about")'>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{{$t("about.title")}}</h2>
                        <p class="description">{{$t("about.description")}}</p>
                    </div>
                </div>
            </div>
        </LandingSection>
        <LandingSection :sectionName='$t("explore.title")' :id='$t("menu.explore")'>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{{$t("explore.title")}}</h2>
                        <p class="description">{{$t("explore.description")}}</p>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/logo.svg" alt="">
                            </div>
                            <div class="col-9">                                
                                <h2>{{$t("explore.service1.title")}}</h2>
                                <p class="description">{{$t("explore.service1.description")}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-9">
                                <h2>{{$t("explore.service2.title")}}</h2>
                                <p class="description">{{$t("explore.service2.description")}}</p>
                            </div>
                            <div class="col-3">
                                <img src="../assets/logo.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-3">
                                <img src="../assets/logo.svg" alt="">
                            </div>
                            <div class="col-9">
                                <h2>{{$t("explore.service3.title")}}</h2>
                                <p class="description">{{$t("explore.service3.description")}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LandingSection>
        <LandingSection :sectionName='$t("contact.title")' :id='$t("menu.contact")'>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h2>{{$t("contact.title")}}</h2>
                        <p class="description">{{$t("contact.description")}}</p>
                        <form>
                            <label for="">FORM di iscrizione</label>
                        </form>
                    </div>
                </div>
            </div>
        </LandingSection>
    </div>
</template>
<script>
import LandingSection from '../components/LandingSectionLayout.vue'
import CookiePolicy from '../components/CookiePolicy.vue';
export default{
    components: {
        LandingSection,
        CookiePolicy
    }
}

</script>
<style scoped>
.corpus {
    width: 94vw;
    margin: 0 3%;
}
h2{
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