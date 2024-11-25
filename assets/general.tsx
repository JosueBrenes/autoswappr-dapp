import * as React from "react"
import { SVGProps } from "react";

export const TetherLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <path fill="url(#a)" d="M.5 0h24v24H.5z" />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#b" transform="scale(.0025)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="b"
          width={400}
          height={400}
        />
      </defs>
    </svg>
  )


