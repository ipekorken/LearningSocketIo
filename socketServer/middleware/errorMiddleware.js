const catchError = (err, req, res, next) => {
  if (err.code === 11000) {
    return res.json({
      message:
        Object.keys(err.keyValue) /*email*/ +
        ' için girdiğiniz değer unique olmalıdır. ' +
        Object.values(err.keyValue) /*girilen email*/ +
        ' başka bir kullanıcı tarafından kullanılmaktadır.',
      errorCode: 400,
    });
  }
  if (err.code === 66) {
    return res.json({
      message: 'Değiştirilemez bir alanı güncellemeye çalıştın.',
      errorCode: 400,
    });
  }

  res.json({
    message: err.message,
    errorCode: err.statusCode || 400,
  });
};

module.exports = catchError;
