import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

// access Token 발급
const sign = (userId) => {
  return jwt.sign({ id: userId }, secret, {
    algorithm: 'HS256', // 암호화 알고리즘
    expiresIn: '1h', // 유효기간
  });
};

// access Token 검증
const verify = (token) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    return {
      ok: true,
      userId: decoded.id,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

// refresh Token 발급
const refresh = (userId) => {
  return jwt.sign({ id: userId }, secret, {
    algorithm: 'HS256',
    expiresIn: '14d', // 유효기간
  });
};

const refreshVerify = (token) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
};

export { sign, verify, refresh, refreshVerify };