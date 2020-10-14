import { environment } from '@environments/environment';

export function Environment(attribute: string ) {
  return (target: any, key: string) => {
    const descriptor = Object.getOwnPropertyDescriptor(target, key) || {};
    descriptor.value = environment[attribute];
    Object.defineProperty(target, key, descriptor);
  };
}
