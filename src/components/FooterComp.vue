<template>
  <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <a href="https://t.me/crumb789" target=”_blank”>
            <div class="footer-icon image is-64x64">
              <img :src="Crumb" alt="logo">
            </div>
          </a>
          2024 <i class="bi bi-body-text"></i>
        </p>
      </div>
  </footer>
</template>

<script>
import Crumb from '@/assets/crumb-logo.png'

export default {
  data() {
    return{
      Crumb
    }


  },
}
</script>


<style lang="scss" scoped>
footer{
    display: flex;
    justify-content: center;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 14px;
    font-weight: 600;
    border-top: 1px solid #3e8ed03b;
    // position: absolute;
    bottom: 0;
    // width: 100%;
}
</style>