import { createContext, useContext } from 'react'

type MenuType = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const MenuContext = createContext<MenuType>({
  open: false,
  setOpen: () => {},
})

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}
