import { CreateQuizUseCase } from '@/module/quiz/application/CreateQuizUseCase'
import { createQuizUseCaseMother } from '../domain/mother/CreateQuizUseCaseMother'

test('CreateQuizUseCase exist', () => {
    expect(CreateQuizUseCase).toBeTruthy()
})

test('should be build CreateQuizUseCase instance', () => {
    const createQuizUseCase = createQuizUseCaseMother()

    expect(createQuizUseCase).toBeTruthy()
})

test('CreateQuizUseCase handle should not throw an exception', async () => {
    const createQuizUseCase = createQuizUseCaseMother()
    const createQuizUseCaseMock = {
        handle: jest.fn(createQuizUseCase.handle)
    }

    createQuizUseCaseMock.handle()

    expect(createQuizUseCaseMock.handle.mock.calls.length).toBe(1)
})
