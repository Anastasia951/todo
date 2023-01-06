import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
export function useRedirect(path: string) {
  const navigate = useNavigate()

  return useCallback(() => navigate(path), [])
}
