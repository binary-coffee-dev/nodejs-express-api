const services = new Map();

export function Injectable() {
    return function (target) {
        if (!services.has(target.name)) {
            services.set(target.name, new target());
        }
    };
}

export function Inject(classObject) {
    return function (target, key, desc) {
        desc.initializer = () => {
            return services.get(classObject.name);
        };
    };
}
