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
        <i18n class="text" path="hero.description" tag="p">
          <Link :url="`https://witnet.io/`" label="Witnet" />
        </i18n>
        <p class="subtitle">
          <Link :url="`mailto:info@otherplane.com`" label="Contact us!" />
        </p>
      </div>
      <p class="footer">{{ $t('footer') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSideBarOpen: false,
      displayLogo: true,
      displayMain: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  color: $white;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 45vw;
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
    display: grid;
    grid-template-rows: max-content max-content 1fr;
    .title {
      width: 100%;
      padding-bottom: 1.5vw;
    }
    .text {
      padding-bottom: 1.5vw;
      line-height: 1.5;
    }
    .footer {
      padding-top: 1vw;
      margin-bottom: 1vw;
      display: flex;
      align-items: flex-end;
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
      padding-bottom: 4vw;
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
      .footer {
        padding-top: 5vw;
        margin-bottom: 1vw;
        margin-bottom: 0;
      }
    }
  }
}
</style>
