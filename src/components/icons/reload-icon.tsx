import React, { FC } from 'react'
import 'twin.macro'
import tw, { TwStyle } from 'twin.macro'

interface IconProps {
  svg?: TwStyle
  container?: TwStyle
}

const ReloadSvg: FC<IconProps> = ({
  svg: color = tw`text-black`,
  container: classes = tw`h-4 w-4`,
}: IconProps) => (
  <div css={[classes]}>
    <svg
      tw="w-full h-full"
      css={[tw`fill-current`, color]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 50"
    >
      <path d="M42.14 6.8c.181.171.36.345.538.522l-7.071 7.071c-.178-.177-.359-.35-.544-.517L42.139 6.8z" />
      <path d="M42.678 7.322a24.991 24.991 0 0 0-.539-.522l-7.076 7.076c.185.168.366.34.544.517l7.07-7.07z" />
      <path d="m42.678 7.322-7.071 7.071c-.178-.177-.359-.35-.544-.517l-4.46 4.46 20.913 5.603-5.603-20.913L42.139 6.8c.182.171.362.345.539.522z" />
      <path d="M40.219 44.834a25 25 0 0 0 8.93-13.364l-9.66-2.588a15 15 0 1 1-4.426-15.006L42.139 6.8a25 25 0 1 0-1.92 38.034z" />
    </svg>
  </div>
)

export default ReloadSvg
