export default async (req, res, next, schema) => {
  try {
    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (e) {
    const [err = {}] = e.inner;

    return res.status(400).json({ error: err.message });
  }
};
