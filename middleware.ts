export const config = {
    unstable_allowDynamic: [
      // allows a single file
      '/lib/utils.ts',
      // use a glob to allow anything in the function-bind 3rd party module
      '**/node_modules/function-bind/**',
      // allow dynamic code evaluation for prisma client
      '**/node_modules/@prisma/client/runtime/**',
      '**/node_modules/@auth/prisma-adapter/**',
    ],
  }
export {auth as middleware} from '@/auth';