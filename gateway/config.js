module.exports = {
  "usbPort": "/dev/ttyUSB0",
  "mesh": {
    "secredKey": [0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, 0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF],
    "initializationVector": [0xb2, 0x4b, 0xf2, 0xf7, 0x7a, 0xc5, 0xec, 0x0c, 0x5e, 0x1f, 0x4d, 0xc1, 0xae, 0x46, 0x5e, 0x75],
    "ttl": 3,
    "channel": 1
  },
  "dbCacheFile":"./cache.json",
  "mqtt": {
    "host": "mqtt://localhost",
    "root": "mesh/"
  }
}
