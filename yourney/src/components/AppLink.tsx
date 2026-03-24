import type { ReactNode } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';


export type AppLinkProps = NavLinkProps & {
  to: string;
  children: ReactNode;
};


export const AppLink = ({ to, children, ...props }: AppLinkProps) => {
  return (
    <NavLink
      to={to}
      end
      style={({ isActive }) => ({
        fontWeight: isActive ? 700 : 300,
        textDecoration: 'none', 
        color: 'inherit'        
      })}
      {...props} 
    >
      {children}
    </NavLink>
  );
};