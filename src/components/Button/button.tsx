import React from 'react'
import classNames from 'classnames'


// 使用枚举是为了在外部使用的时候会有属性提示
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

// 使用接口规范对象类型
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string
}

// 使用react内置提供的按钮属性接口拿到按钮的全部属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> 



const Button: React.FC<ButtonProps > = (props) => {
    const {
        btnType,
        className,  // 为了将用户自定义的class也加上
        disabled,
        size,
        children,
        href,
        ...restProps    // restProps 接收剩余的属性
    } = props
    
    // 根据传入的props定义样式类型
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled 
    })
    if(btnType === ButtonType.Link && href) {
        return (
            <a 
            className={classes} 
            href={href}
            {...restProps}
            >
                {children}
            </a>
        )
    }
    else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }

}


Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button