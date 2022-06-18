export class RandomBlob {
  private path = ''
  private points: number[][] = []
  private zones: Array<{
    xmin: number
    xmax: number
    ymin: number
    ymax: number
  }> = []

  constructor(size: number) {
    this.zones = [
      { xmin: 0, xmax: size * 0.1, ymin: size * 0.3, ymax: size * 0.7 },
      { xmin: size * 0.3, xmax: size * 0.7, ymin: size * 0.9, ymax: size },
      { xmin: size * 0.9, xmax: size, ymin: size * 0.3, ymax: size * 0.7 },
      { xmin: size * 0.3, xmax: size * 0.7, ymin: 0, ymax: size * 0.1 },
    ]
  }

  generateCoords() {
    this.zones.forEach((zone) => {
      const x = this.getRandomBetween(zone.xmin, zone.xmax)
      const y = this.getRandomBetween(zone.ymin, zone.ymax)
      this.points.push([x, y])
    })
  }

  getRandomBetween(min: number, max: number) {
    return Math.round(min + Math.random() * (max - min))
  }

  resetPathData() {
    this.path = ''
    this.points = []
  }

  formatPoints() {
    const lastPoint = this.points[this.points.length - 1]
    const secondToLastPoint = this.points[this.points.length - 2]

    const firstPoint = this.points[0]
    const secondPoint = this.points[1]

    this.points.unshift(lastPoint)
    this.points.unshift(secondToLastPoint)

    this.points.push(firstPoint)
    this.points.push(secondPoint)
  }

  // Function found on https://fffuel.co/ssshape/
  spline() {
    this.formatPoints()
    const points = this.points.flat()

    const size = points.length
    const last = size - 4

    const startPointX = points[2]
    const startPointY = points[3]

    let path = 'M' + [startPointX, startPointY]

    const startIteration = 2
    const maxIteration = size - 4
    const inc = 2

    for (let i = startIteration; i < maxIteration; i += inc) {
      const x0 = i ? points[i - 2] : points[0]
      const y0 = i ? points[i - 1] : points[1]

      const x1 = points[i + 0]
      const y1 = points[i + 1]

      const x2 = points[i + 2]
      const y2 = points[i + 3]

      const x3 = i !== last ? points[i + 4] : x2
      const y3 = i !== last ? points[i + 5] : y2

      const cp1x = x1 + (x2 - x0) / 6
      const cp1y = y1 + (y2 - y0) / 6

      const cp2x = x2 - (x3 - x1) / 6
      const cp2y = y2 - (y3 - y1) / 6

      path += 'C' + [cp1x, cp1y, cp2x, cp2y, x2, y2]
    }

    return path
  }

  drawCurvyShape() {
    this.path = this.spline()
  }

  generateCurvyShape() {
    this.resetPathData()
    this.generateCoords()
    this.drawCurvyShape()
  }

  getPath() {
    return this.path
  }
}
