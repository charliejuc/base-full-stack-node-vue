import { CreateQuizUseCase } from '@/module/quiz/application/CreateQuizUseCase'
import { createQuizUseCaseMother } from '../domain/mother/CreateQuizUseCaseMother'

let createQuizUseCase: CreateQuizUseCase
let createQuizUseCaseMock: {
    handle: jest.Mock
}

beforeEach(() => {
    createQuizUseCase = createQuizUseCaseMother()
    createQuizUseCaseMock = {
        handle: jest.fn(createQuizUseCase.handle)
    }
})

test('CreateQuizUseCase exist', () => {
    expect(CreateQuizUseCase).toBeTruthy()
})

test('should be build CreateQuizUseCase instance', () => {
    expect(createQuizUseCase).toBeTruthy()
})

test('CreateQuizUseCase handle should not throw an exception', () => {
    createQuizUseCaseMock.handle()

    expect(createQuizUseCaseMock.handle.mock.calls.length).toBe(1)
})
