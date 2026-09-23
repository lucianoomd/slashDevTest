const getErrorMessage = <T>(error: T): string => (
     error && typeof error === 'object'
        && 'message' in error ? String(error.message) : `Unknown error has occurred: ${error}`
);

const getErrorCode = <T>(error: T): string => (
     error && typeof error === 'object'
        && 'code' in error ? String(error.code) : `Unknown error has occurred: ${error}`
);

export {
    getErrorMessage,
    getErrorCode,
};
