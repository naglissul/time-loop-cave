const SCALE_FACTOR = 4 / devicePixelRatio // If devicePixelRatio is 1.25, every pixel will be depicted as 5px x 5px square

const GRID_HEIGHT = 12
const GRID_WIDTH = 21

const TILE_SIZE = 16

const CANVAS_HEIGHT = GRID_HEIGHT * TILE_SIZE
const CANVAS_WIDTH = GRID_WIDTH * TILE_SIZE

const ACTUAL_CANVAS_HEIGHT = CANVAS_HEIGHT * SCALE_FACTOR
const ACTUAL_CANVAS_WIDTH = CANVAS_WIDTH * SCALE_FACTOR

const PLAYER_WIDTH = 10
const PLAYER_HEIGHT = 15
