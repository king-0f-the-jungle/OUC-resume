<script setup lang="ts">
import { useMyExperienceStore } from '@/stores/myExperienceStore.ts'
import { storeToRefs } from 'pinia'
const { Experience } = storeToRefs(useMyExperienceStore())
defineOptions({
  name: 'MyExperience',
})
</script>

<template>
  <el-scrollbar class="scrollbar">
    <el-backtop target=".el-scrollbar__wrap" visibility-height="20"></el-backtop>
    <el-card v-for="(project, index) in Experience" :key="index">
      <template #header>
        <h2>{{ project.title }}</h2>
      </template>
      <section v-for="(phase, p_index) in project.phases" :key="p_index">
        <el-divider content-position="left">{{ phase.subtitle }}</el-divider>
        <p v-for="(sentence, s_index) in phase.text" :key="s_index">
          {{ sentence }}
        </p>
        <el-image
          lazy
          scroll-container=".el-scrollbar__wrap"
          v-for="(img, i_index) in phase.images"
          :key="i_index"
          :src="`/images/${project.name}/${img}`"
          fit="fill"
          style="height: 300px; margin-left: 20px"
        />
      </section>
    </el-card>
  </el-scrollbar>
</template>

<style scoped>
.el-card {
  margin-top: 20px;
  p {
    margin: 10px 0;
    font-size: 20px;
  }
}
</style>
