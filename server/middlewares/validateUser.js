const validate = (schema) => async (req, res, next) => {
  try {
    const parsedData = await schema.parseAsync(req.body);
    req.validatedData = parsedData;
    next();

  } catch (error) {
    let parsed;

    // Zod error.message is a string — but may NOT be valid JSON always
    try {
      parsed = JSON.parse(error.message);  // your method
      return next({
        statusCode: 400,
        message: parsed[0].message
      });

    } catch (e) {
      // fallback (safe)
      if (error.errors && error.errors.length > 0) {
        return next({
          statusCode: 400,
          message: error.errors[0].message
        });
      }

      return next(error);
    }
  }
};



module.exports = validate;
