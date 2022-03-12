import React from "react";
import { nodeStyles, NodeLabel } from './initial-elements.utils'

export const styles = nodeStyles()
export const fullWidthNodeStyles = nodeStyles('350px')

const orientationRTL = {
  sourcePosition: "right",
  targetPosition: "left"
}

export const base = {
  ...orientationRTL,
  type: "special",
  style: styles,
}

export const multiNodeBase = {
  ...base,
  type: "special"
}
