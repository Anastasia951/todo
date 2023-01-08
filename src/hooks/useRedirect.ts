import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
export function useRedirect(path: string, params?: Record<any, unknown>) {
  const navigate = useNavigate()

  return useCallback(() => navigate(path, { state: params }), [])
}
