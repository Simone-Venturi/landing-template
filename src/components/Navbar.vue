<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Brand image</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">                
                <ul class="navbar-nav me-auto"></ul>
                <div class="navbar-nav ml-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink  :to='"/#"+$t("menu.home")' class="nav-link">
                                {{$t("menu.home")}}
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to='"/#"+$t("menu.about")' class="nav-link">
                                {{$t("menu.about")}}
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to='"/#"+$t("menu.explore")' class="nav-link">
                                {{$t("menu.explore")}}
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink :to='"/#"+$t("menu.contact")' class="nav-link">
                                {{$t("menu.contact")}}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
    nav {
        width: 100%;
    }
    .nav-item {
        text-transform: capitalize;
    }
</style>