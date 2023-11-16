export interface Menu {
  id: string;
  label: string
}
export interface SocialMedia {
  label: string
  value: string
}

export interface IQuestionsAndAnswers {
  id: string;
  question: string;
  answer: string;
}
export interface User {
  id: string
  name: string
  metadata: {
    title: string
    description: string
  }
  bio: string
  image: string
  username: string
  color: string
  menu: Menu[]
  social_media: SocialMedia[];
}
