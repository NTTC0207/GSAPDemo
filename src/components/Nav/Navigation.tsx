import { Button, Menu, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

interface ListProps {
  route: string;
  name: string;
}

interface NavigationProps {
  children: React.ReactNode;
  menus: { name: string; items: ListProps[] }[];
}

const Navigation: FC<NavigationProps> = ({ children, menus }) => {
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentMenuIndex, setCurrentMenuIndex] = useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenuIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenuIndex(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  return (
    <div className={style.TweenWrapper}>
      <div className={style.btnGroup}>
        {menus.map((menu, index) => (
          <div key={index}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={(event) => handleClick(event, index)}
              aria-controls={currentMenuIndex === index ? `menu-list-${index}` : undefined}
              aria-haspopup="true"
              aria-expanded={currentMenuIndex === index ? "true" : undefined}
            >
              {menu.name}
            </Button>

            <Menu
              id={`menu-list-${index}`}
              anchorEl={anchorEl}
              open={currentMenuIndex === index}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": `menu-button-${index}`,
              }}
            >
              {menu.items.map((item, key) => (
                <MenuItem key={key} onClick={() => handleNavigate(item.route)}>
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Navigation;
