interface skillBlock {
  title: string
  items: Array<{key: string, value: number}>
}

interface experiencePhaseBlock {
  subtitle: string
  text: Array<string>
  images: Array<string>
}

interface experienceBlock {
  name: string
  title: string
  phases: Array<experiencePhaseBlock>
}

interface planBlock {
  name: string
  content: string
}

export interface Plan {
  interest: 'string'
  plan: [Array<planBlock>, Array<planBlock>, Array<planBlock>, Array<planBlock>]
}

export interface Info {
  base: {
    name: string
    gender: string
    ethnic: string
    birth: string
    hierarchy: string
    student_number: string
    phone: string
    email: string
    school: {
      name: string
      tag: Array<string>
    }
    major: string
    courses: {
      english: Array<string>
      major: Array<string>
    }
  }
  exam: {
    school: string
    major: string
    // 初试
    exam1: {
      subject: Array<{
        name: string
        score: number
      }>
      rank: number
    }
    // 复试
    exam2: {
      score: number
      rank: number
    }
  }
  // 个人简介
  desc: Array<string>
}

export type Skills = Array<skillBlock>
export type Experience = Array<experienceBlock>

