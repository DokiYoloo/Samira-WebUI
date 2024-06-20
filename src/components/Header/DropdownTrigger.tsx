import { createStyles } from "antd-style";
import React, { PropsWithChildren } from "react";
import classNames from "classnames";

const useStyles = createStyles(({ token }) => {
  return {
    item: {
      padding: `${token.paddingXS}px ${token.paddingSM}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: token.marginXS,
      lineHeight: 1.4,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      }
    }
  }
})

export const DropdownTrigger: React.FC<PropsWithChildren<{ className?: string }>> = ({ className, children, ...rest }) => {
  const { styles } = useStyles()
  return (
    <div{...rest} className={classNames(className, styles.item)}>{children}</div>
  )
}
