<script setup lang="ts">
  const list = [
    {
      name: 'Pavel, Startup Founder',
      review: '"Tested 5 different exchangers — this one turned out to be the fastest."',
      avatar: '/img/reviews/avatar-1.jpg',
      platform: '/img/reviews/platform-1.png',
    },
    {
      name: 'Arina, Student',
      review: '"I move coins between wallets — it’s always quick and stress-free."',
      avatar: '/img/reviews/avatar-2.jpg',
      platform: '/img/reviews/platform-2.png',
    },
    {
      name: 'Stepan, DevOps Engineer',
      review: '"No KYC needed — that’s a win. Plus, love the unique pairs like SOL ↔ TRX."',
      avatar: '/img/reviews/avatar-3.jpg',
      platform: '/img/reviews/platform-2.png',
    },
    {
      name: 'SatoshiPlay, Blogger',
      review: '"Trusted exchange. Was skeptical at first — now I recommend it to my followers."',
      avatar: '/img/reviews/avatar-4.jpg',
      platform: '/img/reviews/platform-1.png',
    },
    {
      name: 'Alexander, Game Developer',
      review: '"Swapped BTC to USDT in 10 minutes. Impressed there’s no verification needed."',
      avatar: '/img/reviews/avatar-5.jpg',
      platform: '/img/reviews/platform-3.png',
    },
    {
      name: 'Danil, Analyst',
      review:
        '"Third exchange this week — smooth every time. They don’t even store wallet addresses."',
      avatar: '/img/reviews/avatar-6.jpg',
      platform: '/img/reviews/platform-1.png',
    },
    {
      name: 'Elena V., HR Manager',
      review: 'Friends recommended it. Now I’m sending links to my colleagues too."',
      avatar: '/img/reviews/avatar-7.jpg',
      platform: '/img/reviews/platform-3.png',
    },
    {
      name: 'Max DeFi, Crypto Enthusiast',
      review:
        '"I like that you instantly see how much you’ll receive. No surprises from volatility."',
      avatar: '/img/reviews/avatar-8.jpg',
      platform: '/img/reviews/platform-2.png',
    },
    {
      name: 'Igor, Freelancer',
      review:
        '"Exchanged USDT to BNB in 7 minutes. Surprised how simple it was. Highly recommend!"',
      avatar: '/img/reviews/avatar-9.jpg',
      platform: '/img/reviews/platform-1.png',
    },
    {
      name: 'Maria, Marketing Specialist',
      review: '"Use it regularly. One of the most honest exchanges I’ve tried. Never let me down."',
      avatar: '/img/reviews/avatar-10.jpg',
      platform: '/img/reviews/platform-3.png',
    },
    {
      name: 'Artem, Crypto Trader',
      review: '"Great rates and a clean interface. Support responds quickly."',
      avatar: '/img/reviews/avatar-11.jpg',
      platform: '/img/reviews/platform-1.png',
    },
    {
      name: 'Natali, UI Designer',
      review: '"Perfect for quick small exchanges. No login required — love it."',
      avatar: '/img/reviews/avatar-12.jpg',
      platform: '/img/reviews/platform-1.png',
    },
  ]

  function shuffleArray<T>(array: T[]): T[] {
    const result = JSON.parse(JSON.stringify(array))
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
  }

  const randomList = shuffleArray(list)

  const countByRow = Math.floor(list.length / 3)

  const firstRow = randomList.slice(0, countByRow)
  const secondRow = randomList.slice(countByRow, countByRow * 2)
  const thirdRow = randomList.slice(countByRow * 2, countByRow * 3)
</script>

<template>
  <div class="user-reviews">
    <h2 class="user-reviews__header">User Reviews</h2>
    <div class="user-reviews__body">
      <div class="user-reviews__list">
        <div class="user-reviews__card" v-for="(item, index) in firstRow" :key="index">
          <div class="user-reviews__data desktop">
            <div class="user-reviews__avatar">
              <img :src="item.avatar" alt="avatar" />
            </div>
            <div class="user-reviews__info">
              <h6 class="user-reviews__name">
                {{ item.name }}
              </h6>
              <p class="user-reviews__review">
                {{ item.review }}
              </p>
            </div>
          </div>
          <div class="user-reviews__data mobile">
            <div class="user-reviews__row">
              <div class="user-reviews__avatar">
                <img :src="item.avatar" alt="avatar" />
              </div>
              <h6 class="user-reviews__name">
                {{ item.name }}
              </h6>
            </div>

            <p class="user-reviews__review">
              {{ item.review }}
            </p>
          </div>
          <div class="user-reviews__platform">
            <img :src="item.platform" alt="platform" />
          </div>
        </div>
      </div>
      <div class="user-reviews__list">
        <div class="user-reviews__card" v-for="(item, index) in secondRow" :key="index">
          <div class="user-reviews__data desktop">
            <div class="user-reviews__avatar">
              <img :src="item.avatar" alt="avatar" />
            </div>
            <div class="user-reviews__info">
              <h6 class="user-reviews__name">
                {{ item.name }}
              </h6>
              <p class="user-reviews__review">
                {{ item.review }}
              </p>
            </div>
          </div>
          <div class="user-reviews__data mobile">
            <div class="user-reviews__row">
              <div class="user-reviews__avatar">
                <img :src="item.avatar" alt="avatar" />
              </div>
              <h6 class="user-reviews__name">
                {{ item.name }}
              </h6>
            </div>

            <p class="user-reviews__review">
              {{ item.review }}
            </p>
          </div>
          <div class="user-reviews__platform">
            <img :src="item.platform" alt="platform" />
          </div>
        </div>
      </div>
      <div class="user-reviews__list">
        <div class="user-reviews__card" v-for="(item, index) in thirdRow" :key="index">
          <div class="user-reviews__data desktop">
            <div class="user-reviews__avatar">
              <img :src="item.avatar" alt="avatar" />
            </div>
            <div class="user-reviews__info">
              <h6 class="user-reviews__name">
                {{ item.name }}
              </h6>
              <p class="user-reviews__review">
                {{ item.review }}
              </p>
            </div>
          </div>
          <div class="user-reviews__data mobile">
            <div class="user-reviews__row">
              <div class="user-reviews__avatar">
                <img :src="item.avatar" alt="avatar" />
              </div>
              <h6 class="user-reviews__name">
                {{ item.name }}
              </h6>
            </div>

            <p class="user-reviews__review">
              {{ item.review }}
            </p>
          </div>
          <div class="user-reviews__platform">
            <img :src="item.platform" alt="platform" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .user-reviews {
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 20px;

    @include respond(md) {
      padding: 0;
    }

    &__header {
      margin-bottom: 28px;

      color: #f8f8f8;
      text-align: center;
      font-family: 'JetBrains Mono';

      font-size: 40px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -1.92px;

      @include respond(md) {
        font-size: 64px;
        margin-bottom: 64px;
      }
    }

    &__body {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to top,
          rgba(7, 11, 17, 0.9) 0%,
          rgba(7, 11, 17, 0.6) 10%,
          rgba(7, 11, 17, 0.2) 30%,
          rgba(7, 11, 17, 0) 10%
        );
        pointer-events: none;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(7, 11, 17, 0.9) 0%,
          rgba(7, 11, 17, 0.6) 10%,
          rgba(7, 11, 17, 0.2) 30%,
          rgba(7, 11, 17, 0) 10%
        );
        pointer-events: none;
      }
    }
    &__list {
      padding: 16px 0 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-direction: column;

      @include respond(md) {
        flex-direction: row;
        margin-left: 346px;
        gap: 46px;
      }

      &:first-child {
        margin-left: 0;
        display: none;

        @include respond(md) {
          display: flex;
        }
      }

      &:last-child {
        margin-right: 346px;
        display: none;

        @include respond(md) {
          display: flex;
        }
      }
    }

    &__card {
      border-radius: 20px;
      border: 1px solid rgba(18, 48, 87, 0.2);
      background: rgba(205, 222, 242, 0.02);
      box-shadow: 0px 4px 8.3px 0px rgba(0, 0, 0, 0.09);
      padding: 20px;
      gap: 20px;
      flex: 1 0 200px;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include respond(md) {
        padding: 28px;
        flex: 1 0 488px;
        max-width: 488px;
      }
    }

    &__data {
      margin-bottom: 20px;

      gap: 16px;

      &.desktop {
        display: none;
        @include respond(md) {
          display: flex;
        }
      }

      &.mobile {
        display: flex;
        flex-direction: column;

        @include respond(md) {
          display: none;
        }
      }

      @include respond(md) {
        gap: 20px;
        margin-bottom: 40px;
      }
    }

    &__avatar {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;

      @include respond(md) {
        width: 64px;
        height: 64px;
      }

      img {
        width: 100%;
        max-height: 100%;
        max-width: 100%;
      }
    }

    &__info {
    }

    &__name {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: #08b570;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 1.21;

      @include respond(md) {
        margin-bottom: 20px;
        line-height: 1.3;
        font-size: 24px;
      }
    }

    &__row {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__review {
      color: #fff;
      font-weight: 400;
      line-height: 1.4; /* 140% */
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }

    &__platform {
      display: flex;
      justify-content: flex-end;
      height: 58px;
      align-items: flex-end;

      img {
        height: 100%;
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
</style>
