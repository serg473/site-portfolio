<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { useStore } from '@/stores/portfolio';
import { getImagePath } from '@/utils';
const store = useStore();
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto flex w-full max-w-7xl flex-col px-4 md:gap-12 md:px-8">
      <div class="flex justify-center">
        <img decoding="async" loading="lazy" class="mt-16 h-[254px] w-[229px]  md:h-[320px] md:w-[280px]"
          src="../assets/img/photo.webp" alt="Web Developer" />
      </div>
      <div class="mt-12">
        <h1
          class="text-4xl mb-2 font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900">
          Hi, I’m Sergei <span class="inline-block animate-waving-hand ">👋</span></h1>
        <p class="text-normal text-base text-gray-600 leading-[150%]">I'm a full stack developer (React.js & Node.js)
          with
          a focus on creating (and occasionally designing)
          exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I
          have been creating web applications for over 7 years, I still love it as if it was something new.</p>
      </div>
      <address class="my-12 not-italic text-base flex-col items-start leading-[150%] text-gray-600">
        <div class="flex justify-start gap-x-2 mb-2">
          <svg class="self-start stroke-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>Republic of Belarus, Minsk</span>
        </div>
        <div class="flex gap-x-5 items-center">
          <span class="relative left-[6px] flex h-3 w-3"><span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span><span
              class="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span></span>
          <span>Open to suggestions</span>
        </div>
      </address>
      <nav class="mb-16">
        <ul class="flex items-center gap-[10px]">
          <li><a href="https://github.com/serg473">
              <svg width="24" height="24" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 21V17C13.1392 15.7473 12.78 14.4901 12 13.5C15 13.5 18 11.5 18 8C18.08 6.75 17.73 5.52 17 4.5C17.28 3.35 17.28 2.15 17 1C17 1 16 1 14 2.5C11.36 2 8.64004 2 6.00004 2.5C4.00004 1 3.00004 1 3.00004 1C2.70004 2.15 2.70004 3.35 3.00004 4.5C2.27191 5.51588 1.91851 6.75279 2.00004 8C2.00004 11.5 5.00004 13.5 8.00004 13.5C7.61004 13.99 7.32004 14.55 7.15004 15.15C6.98004 15.75 6.93004 16.38 7.00004 17V21"
                  stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></a></li>
          <li>
            <a href="">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:imax473@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px">
                <path
                  d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="bg-gray-50 py-16">
    <div class="flex flex-col items-center mx-auto w-full max-w-7xl  px-4 md:gap-12 md:px-8">
      <SectionTitle>About me</SectionTitle>
      <article class="mt-6 flex flex-col items-center">
        <img class="mb-12" loading="lazy" decoding="async" align="center" src="../assets/img/photo.webp" alt="About Me">
        <h3 class="mb-6 font-semibold text-2xl leading-[133%] tracking-tight text-gray-900">Curious about me? Here you
          have
          it:</h3>
        <div class="flex flex-col gap-4 text-base leading-[150%] text-gray-600">
          <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js).
            I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User
            experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
          <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a
            developer, taking on new challenges and learning the latest technologies along the way. Now, in my early
            thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications
            using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
          <p>
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to
            development.
          </p>
          <p>
            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker,
            witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I
            share tech-related bites and build in public, or you can follow me on GitHub.
          </p>
        </div>
      </article>
    </div>
  </section>
  <section class="py-16">
    <div class="flex flex-col items-center mx-auto w-full max-w-7xl  px-4 md:gap-12 md:px-8">
      <SectionTitle class="mb-4">Skills</SectionTitle>
      <span class="text-center text-[18px] leading-[156%] text-gray-600">The skills, tools and technologies I am really
        good
        at:</span>
      <div
        class="mt-6 w-full justify-center grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        <div v-for="skill in store?.skills" :key="skill?.name" class="flex flex-col items-center gap-2">
          <a target="_blank" :href="skill?.link">
            <SvgIcon :name="skill?.name" />
          </a>
          <span class="text-base leading-[150%] text-gray-600">{{ skill?.name }}</span>
        </div>

      </div>
    </div>
  </section>
  <section class="py-16 bg-gray-50">
    <div class="flex flex-col items-center mx-auto w-full max-w-7xl  px-4 md:gap-12 md:px-8">
      <div class="flex flex-col items-center">
        <SectionTitle class="mb-4">Experience</SectionTitle>
        <span class="text-center text-[18px] leading-[156%] text-gray-600">Here is a quick summary of my most recent
          experiences:</span>
        <div class="flex flex-col gap-6">
          <div v-for="experience in store.experience" :key="`Experience_${experience.id}`"
            class="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
            <a target="_blank" :href="experience?.link">
              <img loading="lazy" decoding="async" :src="experience?.name" :alt="experience?.name">
            </a>
            <div class="font-normal text-base leading-[150%]">
              <span class="text-gray-700">{{ experience?.startDate }} - {{ experience?.endDate }}</span>
              <h4 class="my-4 font-semibold text-[18px] leading-[156%] text-gray-900">{{ experience?.position }}</h4>
              <ul class="list-disc pl-7 flex flex-col gap-2">
                <li class="text-base leading-[150%] text-gray-600" v-for="subExp in experience?.responsibilities"
                  :key="subExp">{{ subExp }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16">
    <div class="flex flex-col items-center mx-auto w-full max-w-7xl  px-4 md:gap-12 md:px-8">
      <SectionTitle class="mb-4">Work</SectionTitle>
      <span class="text-center text-[18px] leading-[156%] text-gray-600">Some of the noteworthy projects I have
        built:</span>
      <div v-for="skill in store.work" :key="skill.name"
        class="rounded-xl mt-6 bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
        <div
          class="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
          <a target="_blank" :href="skill?.link">
            <img :src="getImagePath(skill?.imageURL)" alt="Work" loading="lazy" decoding="async"
              class="h-[180px] rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105" </a>
        </div>
        <div class="mt-6 flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
          <p class="text-lg md:text-xl font-semibold text-gray-900">{{ skill?.name }}</p>
          <p class="text-normal text-base">{{ skill?.description }}</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="stack in skill?.skills" :key="stack"
              class="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p class="text-normal text-sm font-medium">{{ stack }}</p>
            </div>
          </div><a target="_blank" class="self-start rounded-lg p-1.5 hover:bg-gray-50 [&amp;_svg]:stroke-gray-500"
            :href="skill?.link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-external-link">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" x2="21" y1="14" y2="3"></line>
            </svg></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
h1>span {
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: 3;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: waving;
  animation-timeline: auto;
  animation-range-start: normal;
}

ul>li>a {
  @apply relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6
}

@keyframes waving {
  0% {
    transform: rotate(0deg)
  }

  10% {
    transform: rotate(14deg)
  }

  20% {
    transform: rotate(-8deg)
  }

  30% {
    transform: rotate(14deg)
  }

  40% {
    transform: rotate(-4deg)
  }

  50% {
    transform: rotate(10deg)
  }

  60% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(0deg)
  }
}

.animate-waving-hand {
  animation: waving 2s linear 3;
}
</style>
