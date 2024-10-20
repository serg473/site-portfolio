<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { useStore } from '@/stores/portfolio';
const store = useStore();
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto flex w-full max-w-7xl flex-col px-4 md:gap-12 md:px-8">
      <div class="flex justify-center">
        <img decoding="async" loading="lazy" class="mt-16 h-[254px] w-[229px]  md:h-[320px] md:w-[280px]"
          src="../assets/img/photo.png" alt="Web Developer" />
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
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 21V17C13.1392 15.7473 12.78 14.4901 12 13.5C15 13.5 18 11.5 18 8C18.08 6.75 17.73 5.52 17 4.5C17.28 3.35 17.28 2.15 17 1C17 1 16 1 14 2.5C11.36 2 8.64004 2 6.00004 2.5C4.00004 1 3.00004 1 3.00004 1C2.70004 2.15 2.70004 3.35 3.00004 4.5C2.27191 5.51588 1.91851 6.75279 2.00004 8C2.00004 11.5 5.00004 13.5 8.00004 13.5C7.61004 13.99 7.32004 14.55 7.15004 15.15C6.98004 15.75 6.93004 16.38 7.00004 17V21"
                  stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></a></li>
          <li>
            <a href="">
              <img width="24" height="24" src="../assets/img/telegram.jpg" alt="Telegram">
            </a>
          </li>
          <li>
            <a href="mailto:imax473@gmail.com">
              <img width="24" height="24" src="../assets/img/gmail.webp" alt="Gmail">
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
        <img class="mb-12" loading="lazy" decoding="async" align="center" src="../assets/img/photo.png" alt="About Me">
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
      <SectionTitle class=" mb-4">Skills</SectionTitle>
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
            <img loading="lazy" :src="experience?.name" :alt="experience?.name">
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
