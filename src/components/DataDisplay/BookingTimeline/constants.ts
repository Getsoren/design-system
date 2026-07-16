export const RAIL_X = 20; // px — left offset of the vertical rail (centre of the node column)
export const ANCHOR_COL = 40; // px — node column (icon / anchor node centred on the rail)
export const NODE_SIZE = 34; // px — node bounding circle; the rail leaves this gap around nodes
export const CARD_GAP = 12; // px — gap between the rail node and the event text

// Vertical bounds of the node within its row (rail gap): row top offset → offset + NODE_SIZE.
export const ANCHOR_NODE_GAP = [11, 11 + NODE_SIZE] as const; // py 10px + 1px node offset
export const EVENT_NODE_GAP = [3, 3 + NODE_SIZE] as const; // 3px node offset
