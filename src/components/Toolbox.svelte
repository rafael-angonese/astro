<script lang="ts">
  import {
    siAdonisjs,
    siAmazonaws,
    siAstro,
    siExpress,
    siGit,
    siGraphql,
    siMongodb,
    siNextdotjs,
    siNodedotjs,
    siNuxtdotjs,
    siPostgresql,
    siPrisma,
    siReact,
    siRedux,
    siSvelte,
    siTailwindcss,
    siThreedotjs,
    siTrpc,
    siTypescript,
    siVuedotjs,
  } from "simple-icons";
  import ToolCard from "./ToolCard.svelte";

  const favoriteStack = [
    siNextdotjs,
    siTypescript,
    siTailwindcss,
    siRedux,
    siAdonisjs,
    siPostgresql,
  ];

  const frontEndTools = [
    siTypescript,
    siReact,
    siNextdotjs,
    siVuedotjs,
    siNuxtdotjs,
    siSvelte,
    siAstro,
    siThreedotjs,
    siRedux,
    // siReduxsaga,
    siTailwindcss,
    // siMui,
    // siReactquery,
  ];

  const backEndTools = [
    siNodedotjs,
    siAdonisjs,
    siExpress,
    siPrisma,
    siPostgresql,
    siMongodb,
  ];

  const generalTools = [
    siGraphql,
    siTrpc,
    siGit,
    // siReactquery,
    // siReacthookform,
    siAmazonaws,
  ];
</script>

<div class="py-12">
  <div class="max-w-5xl mx-auto px-4">
    <h2
      class="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400"
    >
      Main stack
    </h2>

    <div>
      <h2 class="text-3xl text-white font-bold mb-6 max-w-5xl mx-auto px-4">
        Favorite Stack
      </h2>
      <div
        class={`grid grid-cols-2 sm:grid-cols-3  md:grid-cols-${backEndTools.length} gap-4 mb-6`}
      >
        {#each favoriteStack as icon}
          <ToolCard {icon} />
        {/each}
      </div>
      <h2 class="text-3xl text-white font-bold mb-6 max-w-5xl mx-auto px-4">
        Frontend
      </h2>
      <div
        class={`grid grid-cols-2 sm:grid-cols-3  md:grid-cols-${backEndTools.length} gap-4 mb-6`}
      >
        {#each frontEndTools as icon}
          <ToolCard {icon} />
        {/each}
      </div>
      <h2 class="text-3xl text-white font-bold mb-6 max-w-5xl mx-auto px-4">
        Backend
      </h2>
      <div
        class={`grid grid-cols-2 sm:grid-cols-3  md:grid-cols-${backEndTools.length} gap-4 mb-6`}
      >
        {#each backEndTools as icon}
          <ToolCard {icon} />
        {/each}
      </div>
      <h2 class="text-3xl text-white font-bold mb-6 max-w-5xl mx-auto px-4">
        More Tools
      </h2>
      <div
        class={`grid grid-cols-2 sm:grid-cols-${generalTools.length} gap-4 mb-6`}
      >
        {#each generalTools as icon}
          <ToolCard {icon} />
        {/each}
      </div>
    </div>
  </div>
</div>
