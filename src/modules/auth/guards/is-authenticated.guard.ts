import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

import { AuthStatus } from '../interfaces'
import { useAuthStore } from '../stores/auth.store'

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore()

  await authStore.statusCheck()

  authStore.authStatus === AuthStatus.NoAutenticado ? next({ name: 'home' }) : next()
}

export default isAuthenticatedGuard
