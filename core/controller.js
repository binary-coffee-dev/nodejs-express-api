import {Router} from 'express';

export function Controller({route}) {
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(...args);
                let router = new Router();
                const keys = Object.getOwnPropertyNames(target.prototype);
                for (let key of keys) {
                    const element = target.prototype[key];
                    if (typeof element === 'object' && element.route) {
                        delete target.prototype[key];
                        element.func = element.func.bind(this);
                        router[element.method](element.route, element.func);
                        this[element.key] = element.func;
                    }
                }
                if (route) {
                    const routerBase = new Router();
                    routerBase.use(route, router);
                    router = routerBase;
                }
                this.router = router;
            }
        };
    };
}

function buildMethod(target, key, descriptor, route, method) {
    method = method || 'get';
    target[key + '_endpoint'] = {method, func: descriptor.value, route, key};
    return descriptor;
}

export function Get({route}) {
    return function (target, key, descriptor) {
        return buildMethod(target, key, descriptor, route);
    };
}

export function Post({route}) {
    return function (target, key, descriptor) {
        return buildMethod(target, key, descriptor, route, 'post');
    };
}

export function Delete({route}) {
    return function (target, key, descriptor) {
        return buildMethod(target, key, descriptor, route, 'delete');
    };
}

export function Patch({route}) {
    return function (target, key, descriptor) {
        return buildMethod(target, key, descriptor, route, 'patch');
    };
}

export function Put({route}) {
    return function (target, key, descriptor) {
        return buildMethod(target, key, descriptor, route, 'put');
    };
}
