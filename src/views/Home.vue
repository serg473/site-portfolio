<script setup>
import ExperienceList from "@/components/ExperienceList.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import SkillsList from "@/components/SkillsList.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import WorkList from "../components/WorkList.vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>

<template>
  <section class="bg-white dark:bg-[#030712]">
    <div class="mx-auto flex w-full max-w-7xl flex-col px-4 md:gap-12 md:px-8">
      <div class="flex flex-col md:justify-between md:gap-12 md:flex-row">
        <div class="flex justify-center md:order-2 md:w-full">
          <img
            decoding="async"
            loading="lazy"
            class="mt-16 h-[254px] w-[229px] md:h-[320px] md:w-[280px]"
            src="../assets/img/photo.webp"
            alt="Web Developer"
          />
        </div>
        <div class="mt-12 md:order-1">
          <h1
            class="dark:text-gray-50 text-4xl mb-2 font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900"
          >
            Hi, I’m Sergei
            <span class="inline-block animate-waving-hand">👋</span>
          </h1>
          <p
            class="text-normal text-base dark:text-gray-300 text-gray-600 leading-[150%]"
          >
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <address
            class="dark:text-gray-300 my-12 md:my-8 not-italic text-base flex-col items-start leading-[150%] text-gray-600"
          >
            <div class="flex justify-start gap-x-2 mb-2">
              <svg
                class="self-start stroke-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Republic of Belarus, Minsk</span>
            </div>
            <div class="flex gap-x-5 items-center">
              <span class="relative left-[6px] flex h-3 w-3"
                ><span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
                ></span
                ><span
                  class="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"
                ></span
              ></span>
              <span>Open to suggestions</span>
            </div>
          </address>
          <nav class="mb-16">
            <ul
              class="flex items-center gap-[10px]"
              :class="{ ThemeLight: isDark }"
            >
              <li>
                <a href="https://github.com/serg473">
                  <SvgIcon name="Github" />
                </a>
              </li>
              <li>
                <a href="">
                  <SvgIcon name="Telegram" />
                </a>
              </li>
              <li>
                <a href="mailto:imax473@gmail.com">
                  <SvgIcon name="Gmail" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>

  <section class="dark:bg-[#111827] bg-gray-50 py-16">
    <div
      class="flex flex-col items-center mx-auto w-full max-w-7xl px-4 md:gap-12 md:px-8"
    >
      <SectionTitle>About me</SectionTitle>
      <article
        class="mt-6 md:mt-0 w-full flex flex-col md:flex-row md:gap-48 md:justify-between items-center md:items-start"
      >
        <img
          class="mb-12"
          loading="lazy"
          decoding="async"
          align="center"
          src="../assets/img/photo.webp"
          alt="About Me"
        />
        <div class="flex flex-col">
          <h3
            class="mb-6 font-semibold text-2xl leading-[133%] tracking-tight text-gray-900 dark:text-[#F9FAFB]"
          >
            Curious about me? Here you have it:
          </h3>
          <div
            class="flex flex-col gap-4 text-base leading-[150%] dark:text-[#D1D5DB] text-gray-600"
          >
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
  <section class="dark:bg-[#030712] py-16">
    <div
      class="flex flex-col items-center mx-auto w-full max-w-7xl px-4 md:gap-0 md:px-8"
    >
      <SectionTitle class="mb-4">Skills</SectionTitle>
      <span class="text-center text-[18px] leading-[156%] text-gray-600"
        >The skills, tools and technologies I am really good at:</span
      >
      <SkillsList />
    </div>
  </section>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center mx-auto w-full max-w-7xl px-4 md:gap-12 md:px-8"
    >
      <div class="flex flex-col items-center">
        <SectionTitle class="mb-4">Experience</SectionTitle>
        <span class="text-center text-[18px] leading-[156%] text-gray-600"
          >Here is a quick summary of my most recent experiences:</span
        >
        <ExperienceList />
      </div>
    </div>
  </section>
  <section class="py-16 dark:bg-gray-950">
    <div
      class="flex flex-col items-center mx-auto w-full max-w-7xl px-4 md:px-8"
    >
      <SectionTitle class="mb-4">Work</SectionTitle>
      <span class="text-center text-[18px] leading-[156%] text-gray-600"
        >Some of the noteworthy projects I have built:</span
      >
      <WorkList />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.ThemeLight > li > a > svg > path {
  @apply stroke-gray-50;
}
h1 > span {
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

ul > li > a {
  @apply relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6;
}

@keyframes waving {
  0% {
    transform: rotate(0deg);
  }

  10% {
    transform: rotate(14deg);
  }

  20% {
    transform: rotate(-8deg);
  }

  30% {
    transform: rotate(14deg);
  }

  40% {
    transform: rotate(-4deg);
  }

  50% {
    transform: rotate(10deg);
  }

  60% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(0deg);
  }
}

.animate-waving-hand {
  animation: waving 2s linear 3;
}
</style>
