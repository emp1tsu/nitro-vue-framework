// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/bar': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/bar').default>>>>
    }
    '/foo': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/foo').default>>>>
    }
    '/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../app/server').default>>>>
    }
  }
}
export {}