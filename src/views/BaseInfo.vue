<script setup lang="ts">
import { ref } from 'vue'

const dialogVisible = ref(false)
// Pinia状态管理
import { useBaseInfoStore } from '@/stores/baseInfoStore.ts'
import { storeToRefs } from 'pinia'
const { Info } = storeToRefs(useBaseInfoStore())
</script>

<template>
  <section class="BaseInfo-main">
    <el-dialog v-model="dialogVisible" title="二维码" width="700">
      <template #default>
        <div class="BaseInfo-main-QRcode">
          <el-image src="/images/QQ.png" style="height: 320px; width: 240px" />
          <el-image src="/images/WeChat.jpg" style="height: 320px; width: 240px" />
        </div>
      </template>
    </el-dialog>
    <!-- 基本信息 -->
    <div class="BaseInfo-main-person">
      <el-descriptions border direction="horizontal">
        <template #title>
          <h4 class="BaseInfo-main-title">个人信息</h4>
        </template>
        <el-descriptions-item label="姓名"> {{ Info?.base.name }} </el-descriptions-item>
        <el-descriptions-item label="性别"> {{ Info?.base.gender }} </el-descriptions-item>
        <el-descriptions-item rowspan="6" align="center">
          <el-image
            src="/images/placeholder.jpg"
            fit="cover"
            style="height: 240px; width: 240px"
          />
        </el-descriptions-item>
        <el-descriptions-item label="民族"> {{ Info?.base.ethnic }} </el-descriptions-item>
        <el-descriptions-item label="出生年月"> {{ Info?.base.birth }} </el-descriptions-item>
        <el-descriptions-item label="政治面貌"> {{ Info?.base.hierarchy }} </el-descriptions-item>
        <el-descriptions-item label="学号"> {{ Info?.base.student_number }} </el-descriptions-item>
        <el-descriptions-item label="手机号"> {{ Info?.base.phone }} </el-descriptions-item>
        <el-descriptions-item label="邮箱"> {{ Info?.base.email }} </el-descriptions-item>
        <el-descriptions-item label="QQ">
          <el-button @click="dialogVisible = true">点击查看</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="微信">
          <el-button @click="dialogVisible = true">点击查看</el-button>
        </el-descriptions-item>
        <el-descriptions-item label="毕业院校">
          <el-space>
            <el-text>{{ Info?.base.school.name }}</el-text>
            <el-tag round v-for="(tag, index) in Info?.base.school.tag" :key="index">{{
              tag
            }}</el-tag>
          </el-space>
        </el-descriptions-item>
        <el-descriptions-item label="专业"> {{ Info?.base.major }} </el-descriptions-item>
        <el-descriptions-item label="课程学习" :span="3">
          <el-descriptions :column="1">
            <el-descriptions-item label="英语课程：">
              <el-space>
                <el-tag v-for="(item, index) in Info?.base.courses.english" :key="index">
                  {{ item }}
                </el-tag>
              </el-space>
            </el-descriptions-item>
            <el-descriptions-item label="专业课程：">
              <el-space>
                <el-tag v-for="(item, index) in Info?.base.courses.major" :key="index">
                  {{ item }}
                </el-tag>
              </el-space>
            </el-descriptions-item>
          </el-descriptions>
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <!-- 考研信息 -->
    <div class="BaseInfo-main-exam">
      <el-descriptions title="考研信息" border direction="horizontal" :column="2">
        <template #title>
          <h4 class="BaseInfo-main-title">考研信息</h4>
        </template>
        <el-descriptions-item label="报考院校"> {{ Info?.exam.school }} </el-descriptions-item>
        <el-descriptions-item label="报考专业">
          {{ Info?.exam.major }}
        </el-descriptions-item>
        <el-descriptions-item label="初试成绩" :span="2">
          <template #default>
            <el-descriptions direction="vertical" :column="Info?.exam.exam1.subject.length">
              <el-descriptions-item
                v-for="(item, index) in Info?.exam.exam1.subject"
                :key="index"
                :label="item.name"
                >{{ item.score }}</el-descriptions-item
              >
            </el-descriptions>
          </template>
        </el-descriptions-item>
        <el-descriptions-item label="初试总分">
          {{ Info?.exam.exam1.subject.reduce((prev, curr) => prev + curr.score, 0) }}
        </el-descriptions-item>
        <el-descriptions-item label="专业方向排名">
          {{ Info?.exam.exam1.rank }}
        </el-descriptions-item>
        <el-descriptions-item label="复试成绩"> {{ Info?.exam.exam2.score }} </el-descriptions-item>
        <el-descriptions-item label="复试排名"> {{ Info?.exam.exam2.rank }} </el-descriptions-item>
      </el-descriptions>
    </div>
    <!-- 个人简介 -->
    <el-card>
      <template #header>
        <h4 class="BaseInfo-main-title">个人简介</h4>
      </template>
      <p v-for="(p, index) in Info?.desc" :key="index">{{ p }}</p>
    </el-card>
  </section>
</template>

<style scoped lang="scss">
.BaseInfo-main {
  &-QRcode {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  &-exam {
    margin-top: 20px;
  }
  &-title {
    margin: 0;
    font-size: 25px;
  }
  .el-card {
    margin-top: 25px;
    p {
      font-size: 20px;
      margin: 10px 0;
    }
  }
}
</style>
