function calculate (data, humanHeight) {
  const vWidth = data.width
  const vHeight = data.height
  humanHeight = humanHeight - 15

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
      measurements[i].cmWidth = ((measurements[i].maxX - measurements[i].minX) * cmPerPixel)
      measurements[i].cmHeight = ((measurements[i].maxY - measurements[i].minY) * cmPerPixel)
    }
  }
  const output = {
    face: {
      left_face: {
        width: measurements[0].cmWidth,
        height: measurements[0].cmHeight
      },
      right_face: {
        width: measurements[1].cmWidth,
        height: measurements[1].cmHeight
      },
      eyes: {
        width: (data.allPoses[0].keypoints[1].position.x - data.allPoses[0].keypoints[2].position.x) * cmPerPixel,
        height: 0
      },
      width: measurements[0].cmWidth + measurements[1].cmWidth,
      height: measurements[0].cmHeight + measurements[1].cmHeight
    },
    arms: {
      left_upper_arm_front: {
        width: measurements[2].cmWidth,
        height: measurements[2].cmHeight
      },
      left_upper_arm_back: {
        width: measurements[3].cmWidth,
        height: measurements[3].cmHeight
      },
      right_upper_arm_front: {
        width: measurements[4].cmWidth,
        height: measurements[4].cmHeight
      },
      right_upper_arm_back: {
        width: measurements[5].cmWidth,
        height: measurements[5].cmHeight
      },
      left_lower_arm_front: {
        width: measurements[6].cmWidth,
        height: measurements[6].cmHeight
      },
      left_lower_arm_back: {
        width: measurements[7].cmWidth,
        height: measurements[7].cmHeight
      },
      right_lower_arm_front: {
        width: measurements[8].cmWidth,
        height: measurements[8].cmHeight
      },
      right_lower_arm_back: {
        width: measurements[9].cmWidth,
        height: measurements[9].cmHeight
      },
      left_hand: {
        width: measurements[10].cmWidth,
        height: measurements[10].cmHeight
      },
      right_hand: {
        width: measurements[11].cmWidth,
        height: measurements[11].cmHeight
      }
    },
    torso: {
      torso_front: {
        width: measurements[12].cmWidth,
        height: measurements[12].cmHeight
      },
      torso_back: {
        width: measurements[13].cmWidth,
        height: measurements[13].cmHeight
      },
      shoulder: {
        width: (data.allPoses[0].keypoints[5].position.x - data.allPoses[0].keypoints[6].position.x) * cmPerPixel,
        height: 0
      }
    },
    legs: {
      left_upper_leg_front: {
        width: measurements[14].cmWidth,
        height: measurements[14].cmHeight
      },
      left_upper_leg_back: {
        width: measurements[15].cmWidth,
        height: measurements[15].cmHeight
      },
      right_upper_leg_front: {
        width: measurements[16].cmWidth,
        height: measurements[16].cmHeight
      },
      right_upper_leg_back: {
        width: measurements[17].cmWidth,
        height: measurements[17].cmHeight
      },
      left_lower_leg_front: {
        width: measurements[18].cmWidth,
        height: measurements[18].cmHeight
      },
      left_lower_leg_back: {
        width: measurements[19].cmWidth,
        height: measurements[19].cmHeight
      },
      right_lower_leg_front: {
        width: measurements[20].cmWidth,
        height: measurements[20].cmHeight
      },
      right_lower_leg_back: {
        width: measurements[21].cmWidth,
        height: measurements[21].cmHeight
      },
      left_foot: {
        width: measurements[22].cmWidth,
        height: measurements[22].cmHeight
      },
      right_foot: {
        width: measurements[23].cmWidth,
        height: measurements[23].cmHeight
      }
    }
  }
  for (const parts in output) {
    for (const key in output[parts]) {
      if (key !== 'width' && key !== 'height') {
        if (output[parts][key].width === Infinity || output[parts][key].width === -Infinity || output[parts][key].width === undefined) {
          output[parts][key].width = 0
        }
        if (output[parts][key].height === Infinity || output[parts][key].height === -Infinity || output[parts][key].height === undefined) {
          output[parts][key].height = 0
        }
      }
    }
  }
  return output
  // collar
  // chest
  // wiast
  // inside leg
  // chest depth
  // waist depth
};

export { calculate }
