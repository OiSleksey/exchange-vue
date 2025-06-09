<script setup lang="ts"></script>

<template>
  <a class="button-money" href="#">
    <span class="money">
      <img src="/img/badge/coins-icon.png" alt="coin" />
    </span>
    <span class="button-money__text"> Получить бесплатный доступ </span>
    <span class="button-money__arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="26"
        viewBox="0 0 40 26"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.47249 21.762C12.8397 22.6222 24.0471 17.5082 30.8513 8.39211L28.2256 5.64848C28.1469 5.56602 28.0923 5.46359 28.0677 5.35229C28.0432 5.24099 28.0496 5.1251 28.0862 5.01718C28.1229 4.90927 28.1884 4.81346 28.2757 4.74017C28.363 4.66688 28.4687 4.6189 28.5813 4.60145L38.5134 3.0778C38.6125 3.06266 38.7137 3.07158 38.8085 3.10381C38.9033 3.13604 38.989 3.19064 39.0583 3.26297C39.1276 3.33531 39.1784 3.42326 39.2066 3.5194C39.2347 3.61554 39.2392 3.71703 39.2199 3.8153L37.2598 13.6697C37.2376 13.7816 37.1851 13.8853 37.1079 13.9694C37.0308 14.0535 36.9321 14.1149 36.8225 14.1467C36.713 14.1786 36.5967 14.1798 36.4865 14.1502C36.3763 14.1205 36.2764 14.0612 36.1976 13.9787L34.3821 12.0815C30.6723 16.2537 26.0115 19.47 20.7944 21.4579C15.5774 23.4457 9.95803 24.1465 4.41257 23.5009C3.37187 23.3797 2.33359 23.2105 1.29772 22.9934C1.14278 22.961 1.00597 22.8709 0.915054 22.7413C0.82414 22.6117 0.785933 22.4524 0.808184 22.2957C0.830436 22.1389 0.911481 21.9965 1.03487 21.8974C1.15826 21.7982 1.31476 21.7497 1.4726 21.7617L1.47249 21.762Z"
          fill="black"
        />
      </svg>
    </span>
  </a>
</template>

<style scoped lang="scss">
  .button-money {
    text-decoration: none;
    padding: 12px 16px;
    position: relative;
    border-radius: 60px;
    background: #03ed66;
    box-shadow: 2px 1px 13.4px 0px rgba(21, 240, 114, 0.09);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      .money {
        transform: scale(1.06);
      }

      .button-money__arrow {
        transform: scaleY(1.2);
        transform-origin: bottom;
      }
    }

    @include respond(md) {
      padding: 12px 20px;
      gap: 12px;
    }

    @include respond(lg) {
      padding: 16px 40px;
      gap: 16px;
    }

    .money {
      position: absolute;
      width: 59px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -33px;
      left: 12px;
      transition: all 0.4s ease;

      @include respond(lg) {
        top: -49px;
        left: 21px;
        width: 81px;
      }

      img {
        width: 100%;
      }
    }

    &__text {
      color: #050607;
      text-align: center;
      font-family: 'Montserrat Alternates';
      font-size: 12px;
      font-weight: 600;
      line-height: 1.3;

      @include respond(md) {
        font-size: 14px;
      }

      @include respond(lg) {
        font-size: 24px;
      }
    }

    &__arrow {
      width: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.4s ease;

      @include respond(lg) {
        width: 36px;
      }

      svg {
        width: 100%;
      }
    }
  }
</style>
