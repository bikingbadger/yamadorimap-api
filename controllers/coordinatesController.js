class coordinatesController {
  async getCoordinates(req, res) {
    try {
      res.status(200).json({
        data: {
          latLng: '32.123,43.234',
        },
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new coordinatesController();
