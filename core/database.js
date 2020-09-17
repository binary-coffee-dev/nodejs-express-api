export function Model() {
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(...args);
                Object.defineProperty(this.constructor, 'name', {value: target.name});
            }
        };
    };
}

export function Attribute({type, unique = false, required = false}) {
    return function (target, key, desc) {
        desc.initializer = () => {
            return {type, unique, required};
        };
    };
}
