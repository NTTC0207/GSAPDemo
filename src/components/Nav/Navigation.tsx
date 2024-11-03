import { Button, Menu, MenuItem } from "@mui/material";
import { type FC, type ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './style.module.scss'

const Navigation: FC<{ children: ReactNode }> = ({ children }) => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string) => {
        navigate(path)
    }
    return (
        <div className={style.TweenWrapper}>
            <div className={style.btnGroup}>
                <Button
                    variant="outlined"
                    color="inherit"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Method
                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleNavigate('/tween/tween-to')}>Tween To</MenuItem>
                    <MenuItem onClick={() => handleNavigate('/tween/tween-from')}>Tween From</MenuItem>
                    <MenuItem onClick={() => handleNavigate('/tween/tween-fromto')}>Tween From To</MenuItem>
                    <MenuItem onClick={() => handleNavigate('/timeline')}>Timeline</MenuItem>
                </Menu>
            </div>

            {children}
        </div>
    )
}

export default Navigation;