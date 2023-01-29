import React from "react"
import { Box } from "../../ui/Box/style"
import logo from "assets/logo/logo.png";

/*
 * LOGO
 */
interface LogoProps {
    path?: string
    size?: "small" | "base" | "large"
    onClick?: () => void
}

const logoSize = (size: string): { width: number, height: number } => {
    switch (size) {
        case 'small': return { width: 146, height: 63 };
        case 'large': return { width: 218, height: 94 };
        default: return { width: 290, height: 124 };
    }
};

export default function Logo({ path, size = "base", onClick }: LogoProps) {
    return (
        <Box
            as={path ? "a" : onClick != null ? "button" : "div"}
            _width={logoSize(size).width + "px"}
            _height={logoSize(size).height + "px"}
            _padding="0"
            _margin="0"
            {
            ...(path
                ? { href: path }
                : onClick != null
                    ? {
                        onClick: () => {
                            onClick()
                        },
                    }
                    : {}
            )
            }
        >
            <img src={logo} alt="" width="100%" height="100%" />
        </Box>
    )
}
