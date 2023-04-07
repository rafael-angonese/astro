<script lang="ts">
  import {
    siReact,
    siSvelte,
    siTailwindcss,
    siNextdotjs,
    siAstro,
    siVercel,
    siVuedotjs,
    siTypescript,
    siJavascript,
    siGatsby,
    siChakraui,
    siHtml5,
    siCss3,
    siNodedotjs,
    siNetlify,
    siNuxtdotjs,
  } from "simple-icons";
  import Icon from "./Icon.svelte";
</script>

<div class="p-4 flex justify-center items-center min-h-[32rem] gap-x-6">
  <div class="w-1/2">
    <h1 class="text-4xl lg:text-6xl font-bold block text-white text-end">
      Transforme Suas <span
        class=" bg-clip-text text-transparent bg-gradient-to-l from-blue-300 to-green-400"
        >Ideias Em Realidade.</span
      >
    </h1>

    <p class="py-6 text-end text-white">
      Criando mundos com letras de numeros.
    </p>
  </div>

  <div class="relative aspect-square w-1/3 p-4">
    <div class="w-full aspect-square relative">
      <div
        class="w-full h-full absolute animate-[spin_20s_linear_infinite] border rounded-full"
      >
        <Icon
          icon={siTypescript}
          fill="#3178C6"
          class="absolute -top-5 left-[50%] translate-x-[-50%] h-8 "
        />
      </div>

      <div class="absolute rotate-180 w-full h-full">
        <div
          class="h-full w-full animate-[spin_20s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siJavascript}
            fill="#F7DF1E"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>

      <div class="absolute rotate-90 w-full h-full">
        <div
          class="h-full w-full animate-[spin_20s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siHtml5}
            fill="#E34F26"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div class="absolute -rotate-90 w-full h-full">
        <div
          class="h-full w-full animate-[spin_20s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siCss3}
            fill="#1572B6"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>

      <div
        class="absolute rotate w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_24s_linear_infinite] border border-primary rounded-full"
        >
          <Icon
            icon={siReact}
            fill="#61DAFB"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute -rotate-[120deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_24s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siVuedotjs}
            fill="#4FC08D"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>

      <div
        class="absolute rotate-[120deg] w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_24s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siSvelte}
            fill="#FF3E00"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>

      <div
        class="absolute w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_18s_linear_infinite] border border-primary rounded-full"
        >
          <Icon
            icon={siNextdotjs}
            fill="#000000"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute -rotate-180 w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_18s_linear_infinite] border border-primary rounded-full"
        >
          <Icon
            icon={siNuxtdotjs}
            fill="#00DC82"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute rotate-90 w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_18s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siAstro}
            fill="#FF5D01"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute -rotate-90 w-[60%] h-[60%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_18s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siGatsby}
            fill="#663399"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute rotate-[120deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_18s_linear_infinite] border border-primary rounded-full"
        >
          <Icon
            icon={siTailwindcss}
            fill="#06B6D4"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute rotate-[300deg] w-[40%] h-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_18s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siChakraui}
            fill="#319795"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute rotate-[120deg] w-[20%] h-[20%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_10s_linear_infinite] border border-primary rounded-full"
        >
          <Icon
            icon={siVercel}
            fill="#000000"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div
        class="absolute rotate-[300deg] w-[20%] h-[20%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="h-full w-full animate-[spin_10s_linear_infinite] rounded-full"
        >
          <Icon
            icon={siNetlify}
            fill="#00C7B7"
            class="absolute -top-5 left-[50%] translate-x-[-50%] h-8"
          />
        </div>
      </div>
      <div class="absolute h-full w-full flex items-center justify-center">
        <Icon fill="#339933" icon={siNodedotjs} class="h-8" />
      </div>
    </div>
  </div>
</div>
