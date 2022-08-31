<template>
  <a
    :key="url"
    class="link"
    :class="{ selected: link.selected, dimmed: link.dimmed }"
    :href="url"
    target="_blank"
    @mouseover="toggleLink(true)"
    @mouseleave="toggleLink(false)"
  >
    <span
      v-for="(char, charIndex) in link.label"
      :key="`char-${url}-${charIndex}`"
      :ref="`char-${url}-${charIndex}`"
      class="link char"
      >{{ char }}</span
    >
  </a>
</template>

<script>
const LEFT = -1
const RIGHT = 1

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedLink: false,
    }
  },
  computed: {
    link() {
      const isSelected = this.selectedLink
      return {
        label: this.label,
        selected: isSelected,
        dimmed: !isSelected,
        chars: this.label.split(''),
      }
    },
  },
  methods: {
    toggleLink(selected) {
      console.log('toogle', selected)
      const direction = selected ? LEFT : RIGHT
      this.animateChars(direction)
    },
    animateChars(direction) {
      for (let i = 0; i < this.link.label.length; i++) {
        const refId = `char-${this.url}-${i}`
        const char = this.$refs[refId]
        console.log('this.char', char)

        this.$gsap.killTweensOf(char)
        this.$gsap.to(char, 0.5, { scaleX: direction })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
  font-size: inherit;
  color: $red;
  transition: margin-left 0.5s ease-out, opacity 0.5s ease-out;
  white-space: nowrap;
  .char {
    display: inline-block;
    min-width: 0.3em;
  }
}
</style>
