module.exports = async (req, res) => {
      const { hoursEstimate, hourlyRate = 75 } = req.body;

        const total = parseFloat(hoursEstimate) * parseFloat(hourlyRate);
          res.json({
                success: true,
                    estimate: {
                              hours: hoursEstimate,
                                    rate: hourlyRate,
                                          total: total.toFixed(2)
                    }
          });
};
