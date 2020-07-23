import { CreateQuizUseCase } from '@/module/quiz/application/CreateQuizUseCase'

export function createQuizUseCaseMother(): CreateQuizUseCase {
    return new CreateQuizUseCase()
}
