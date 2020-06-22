<template>
  <div class="home">
    <hero-header />
    <features />
    <newsletter />
  </div>
</template>

<script>
import HeroHeader from "@/components/layouts/hero-header";
import Features from "@/components/layouts/features";
import Newsletter from "@/components/layouts/newsletter";
export default {
  name: "Home",
  components: {
    HeroHeader,
    Features,
    Newsletter
  }
};
</script>
