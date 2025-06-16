/**
 * Returns a promise that resolves or rejects with the result of the input promise,
 * but will reject with an Error (code: 'PROMISE_TIMED_OUT') if the input promise does not settle within the specified timeout.
 *
 * @typeParam T - The type of the resolved value of the input promise.
 * @param promise - The promise to wrap with a timeout.
 * @param timeoutMs - The timeout in milliseconds before rejecting with a timeout error.
 * @returns A promise that resolves or rejects with the original promise, or rejects with a timeout error if the timeout is exceeded.
 * @throws {Error} Will reject with an Error (message: 'PROMISE_TIMED_OUT') if the timeout is exceeded.
 *
 * @example
 * ```typescript
 * const examplePromise = new Promise((resolve) => setTimeout(() => resolve("Result after 2 seconds"), 2000));
 *
 * withTimeout(examplePromise, 1000)
 *   .then((result) => console.log(result))
 *   .catch((error) => console.error(error.message)); // This should log "PROMISE_TIMED_OUT" after 1 second
 * ```
 */
export const withTimeout = <T>(promise: Promise<T>, timeoutMs: number): Promise<T> =>
    new Promise((resolve, reject) => {
        // Set up the timeout
        const timeoutId = setTimeout(() => {
            reject(new Error('PROMISE_TIMED_OUT'));
        }, timeoutMs);

        promise.then(
            (value) => {
                clearTimeout(timeoutId); // Clear the timeout upon successful resolution
                resolve(value);
            },
            (error) => {
                clearTimeout(timeoutId); // Clear the timeout upon rejection
                reject(error);
            }
        );
    });
