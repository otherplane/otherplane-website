<template>
  <div class="section">
    <div class="big-logo">
      <Animation />
    </div>
    <div class="main">
      <h1 class="title-container">
        <Animation class="logo-responsive" />
        <img
          class="title"
          src="~/assets/svg/other-plane-title.svg"
          alt="OtherPlane"
        />
      </h1>

      <div class="content">
        <i18n class="text" path="hero.description" tag="p" />

        <p>
          <a
            class="link"
            :class="{ selected: link.selected, dimmed: link.dimmed }"
            :href="`mailto:${contactEmail}`"
            @mouseover="toggleLink(true)"
            @mouseleave="toggleLink(false)"
          >
            <span
              v-for="(char, charIndex) in link.label"
              :key="`char-${charIndex}`"
              :ref="`char-${charIndex}`"
              class="link char"
              >{{ char }}</span
            >
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const LEFT = -1
const RIGHT = 1

export default {
  data() {
    return {
      isSideBarOpen: false,
      selectedLink: false,
      displayLogo: true,
      displayMain: true,
      contactEmail: 'info@otherplane.com',
    }
  },
  computed: {
    link() {
      const label = 'Contact us'
      const isSelected = this.selectedLink
      return {
        label,
        selected: isSelected,
        dimmed: !isSelected,
        chars: label.split(''),
      }
    },
  },
  methods: {
    toggleLink(selected) {
      const direction = selected ? LEFT : RIGHT
      this.animateChars(direction)
    },
    animateChars(direction) {
      for (let i = 0; i < this.link.label.length; i++) {
        const refId = `char-${i}`
        const char = this.$refs[refId]

        this.$gsap.killTweensOf(char)
        this.$gsap.to(char, 0.5, { scaleX: direction })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  color: $white;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 44vw;
  overflow-x: initial;

  .big-logo {
    height: 100vh;
  }
  .logo-responsive {
    display: none;
  }

  .main {
    overflow: auto;
    position: relative;
    z-index: 50;
    padding: 2vw 2vw 0 2vw;
    .title {
      width: 100%;
    }
    .text {
      padding-bottom: 2vw;
      line-height: 1.5;
    }
  }
  .link {
    cursor: pointer;
    color: $red;
    transition: margin-left 0.5s ease-out, opacity 0.5s ease-out;
    white-space: nowrap;
    .char {
      display: inline-block;
      min-width: 0.3em;
    }
  }
}
@media (max-width: 1200px) {
  .section {
    padding: 0 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .title-container {
      display: grid;
      grid-template-columns: 20vw 1fr;
      align-items: center;
      padding-bottom: 16px;
    }
    .big-logo {
      display: none;
    }
    .logo-responsive {
      display: block;
      padding-right: 16px;
    }
    .main {
      padding: 16px;
      max-width: 100%;
    }
  }
}
</style>
