import QuizQuestion from '../../components/QuizQuestion.vue'
import { mount } from '@vue/test-utils'

test('QuizQuestion should be mounted', () => {
    const quizQuestion = mount(QuizQuestion)

    quizQuestion.text().includes('I am a quiz question')
})
