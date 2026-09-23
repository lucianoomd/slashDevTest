const getNameParam = <T>(params: T): string => {
    return (
        params
        && typeof params === 'object'
        && 'name' in params
        ? String(params.name)
        : ''
    );
};

export {
    getNameParam,
};
