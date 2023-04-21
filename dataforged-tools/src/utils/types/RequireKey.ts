/**
 * Generic type: require specific keys to be NonNullable.
 * @public
 */
export type RequireKey<T, K  extends keyof any=""> = T & {
  [P in K]-?: NonNullable<T[P extends keyof T ? P : never]>;
};
