export interface Project {
  title: string
  description: string
  icon?: string
  favorite: boolean
  size: string
  programming_language?: string[]
  when: TimeRange
  where?: string
  source_code?: string
  project_page?: string
  article?: string
  demo?: string
  videos?: string[]
  publication?: string
}

export interface WorkExperience {
  timeRange: TimeRange
  role: string
  description: string
  icon?: string
  organization: string
  location?: string
  programming_language?: string[]
}

export interface Education {
  timeRange: TimeRange
  role: string
  description?: string
  icon?: string
  organization: string
  location?: string
  grade: number
  degree: string
  subject: string
  programming_language?: string[]
}

export interface TimeRange {
  start: string
  end: string
}
