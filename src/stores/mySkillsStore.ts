import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Skills } from '@/scripts/define.ts'
import requestJson from '@/request/requestJson.ts'

// 定义Store
export const useMySkillsStore = defineStore('MySkills', () => {
  // 定义数据
  const JSON_Name = "skills"
  async function initSkillsStore() {
    const response = await requestJson.get(JSON_Name)
    Skills.value = response.data
  }
  const Skills = ref<Skills | null>(null)

  return { Skills, initSkillsStore }
})
