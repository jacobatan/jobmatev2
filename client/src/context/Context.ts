import { createContext } from 'react';
interface iJobContext {
  open: boolean;
  setOpen: (value: any | ((prevVar: any) => any)) => void;
}

export const LoginContext = createContext<iJobContext>({ open: false, setOpen: () => console.log("") })
