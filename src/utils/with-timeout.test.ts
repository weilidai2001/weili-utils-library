import { withTimeout } from './with-timeout';

describe('withTimeout', () => {
    jest.useFakeTimers();

    it('should resolve if the promise resolves before the timeout', async () => {
        const fastPromise = new Promise((resolve) => setTimeout(() => resolve('fast'), 100));
        const wrappedPromise = withTimeout(fastPromise, 200);

        jest.advanceTimersByTime(100); // Advance time to ensure the promise resolves

        await expect(wrappedPromise).resolves.toBe('fast');
    });

    it('should reject with "Promise timed out" if the promise takes longer than the timeout', async () => {
        const slowPromise = new Promise((resolve) => setTimeout(() => resolve('slow'), 300));
        const wrappedPromise = withTimeout(slowPromise, 200);

        jest.advanceTimersByTime(200); // Advance time to hit the timeout

        await expect(wrappedPromise).rejects.toThrow('PROMISE_TIMED_OUT');
    });

    it('should reject with the original error if the promise rejects before the timeout', async () => {
        const errorMessage = 'original error';
        const failingPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error(errorMessage)), 100)
        );
        const wrappedPromise = withTimeout(failingPromise, 200);

        jest.advanceTimersByTime(100); // Advance time to ensure the promise rejects

        await expect(wrappedPromise).rejects.toThrow(errorMessage);
    });

    // Clean up
    afterEach(() => {
        jest.clearAllTimers();
    });
});
