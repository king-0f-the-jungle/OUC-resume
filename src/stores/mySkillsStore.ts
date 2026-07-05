import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Skills } from '@/scripts/define.ts'
import { loadJSON } from '@/request/request.ts'

// 定义Store
export const useMySkillsStore = defineStore('MySkills', () => {
  // 定义数据
  const JSON_Name = "skills"
  async function initSkillsStore() {
    Skills.value = await loadJSON(JSON_Name)
  }
  const Skills = ref<Skills | null>(null)

  return { Skills, initSkillsStore }
})
