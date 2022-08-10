function calculate (data, humanHeight) {
  debugger;
  const vWidth = data.width
  const vHeight = data.height
  humanHeight = humanHeight - 20

  const measurements = {
    0: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    1: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    2: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    3: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    4: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    5: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    6: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    7: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    8: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    9: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    10: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    11: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    12: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    13: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    14: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    15: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    16: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    17: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    18: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    19: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    20: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    21: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    22: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    },
    23: {
      minX: Infinity,
      maxX: -Infinity,
      minY: Infinity,
      maxY: -Infinity
    }
  }

  for (let i = 0; i < data.data.length; i++) {
    const num = data.data[i]
    if (num !== -1) {
      const x = i % vWidth
      const y = Math.floor(i / vWidth)
      measurements[num].minX = Math.min(measurements[num].minX, x)
      measurements[num].maxX = Math.max(measurements[num].maxX, x)
      measurements[num].minY = Math.min(measurements[num].minY, y)
      measurements[num].maxY = Math.max(measurements[num].maxY, y)
    }
  }

  const cmPerPixel = humanHeight / (((measurements[18].maxY + measurements[20].maxY) / 2) - ((measurements[0].minY + measurements[1].minY) / 2))

  for (let i = 0; i < 24; i++) {
    if (measurements[i].minX !== Infinity) {
      measurements[i].cmLength = (measurements[i].maxX - measurements[i].minX) * cmPerPixel
      measurements[i].cmHeight = (measurements[i].maxY - measurements[i].minY) * cmPerPixel
    }
  }

  console.log(measurements)
  debugger
  return measurements
  // collar
  // chest
  // wiast
  // inside leg
  // chest depth
  // waist depth
};

export { calculate }
