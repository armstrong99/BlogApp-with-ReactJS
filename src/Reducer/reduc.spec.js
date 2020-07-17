import NewsReducer from './NewsReducer'

describe('testing if state return empty array', () => {
    it('should handle initial state', () => {
        expect(NewsReducer(undefined, {})).toEqual([])
    })
})