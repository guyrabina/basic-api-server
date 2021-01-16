const getTimeStamp = (): string => {
    return new Date().toISOString();
};

const base = (namespace: string, mode: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [${mode}] [${namespace}] ${message}, object`);
    } else {
        console.log(`[${getTimeStamp()}] [${mode}] [${namespace}] ${message}`);
    }
};
const info = (namespace: string, message: string, object?: any) => {
    base(namespace, 'INFO', message, object);
};

const warn = (namespace: string, message: string, object?: any) => {
    base(namespace, 'WARN', message, object);
};

const error = (namespace: string, message: string, object?: any) => {
    base(namespace, 'ERROR', message, object);
};

const debug = (namespace: string, message: string, object?: any) => {
    base(namespace, 'DEBUG', message, object);
};

export default {
    info,
    warn,
    error,
    debug
};
