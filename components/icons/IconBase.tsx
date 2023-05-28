import clsx from 'clsx'

export type Sizes = 12 | 16 | 20 | 24 | 32

export interface IconProps
  extends Omit<
    React.HTMLProps<HTMLSpanElement>,
    'size' | 'children' | 'name' | 'sizes' | 'height' | 'width'
  > {
  size?: Sizes
  viewBox?: string
  height?: string | number
  width?: string | number
}

const createIcon = (children: React.ReactNode, props?: Partial<IconProps>) => {
  const svgBaseProps = {
    viewBox: props?.viewBox ?? `0 0 24 24`,
    'aria-hidden': true,
    fill: 'none',
    focusable: false,
  }

  const innerSvgProps = {
    height: props?.height ?? props?.size ?? 24,
    width: props?.width ?? props?.size ?? 24,
    ...svgBaseProps,
  }

  return (
    <span
      className={clsx(
        'inline-block font-normal leading-[0px] text-center normal-case align-[-0.125em]',
        props?.className
      )}
      {...props}>
      <svg {...innerSvgProps}>{children}</svg>
    </span>
  )
}

export { createIcon }
