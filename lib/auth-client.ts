import { createAuthClient } from 'better-auth/react'

export const { signIn, signUp, signOut, useSession, getSession } = createAuthClient()

// console.log('server auth-client');

// const session = await getSession({ req });