import React from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
    defaultIndex?: number;  // 确定哪个menu高亮
    className?: string;
    mode?: MenuMode;    // 用于控制横向还是纵向
    style?: React.CSSProperties;
    onSelect?: (selectIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
    const {className, mode, style, children, defaultIndex} = props
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical'
    }) 
    return(
        <ul className={classes} style={style}>

        </ul>
    )
}