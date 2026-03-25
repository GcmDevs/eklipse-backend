import { enc, MD5 } from 'crypto-js';
import * as bcrypt from 'bcrypt';

export const compareDimPassword = async (passwordByUser: string, passwordEncrypted: string) => {
  const passwordByUserEncrypted = enc.Base64.stringify(MD5(enc.Utf16LE.parse(passwordByUser)));
  const coincidence = passwordByUserEncrypted === passwordEncrypted;
  return coincidence;
};

const compare = async (passByUser: string, passEncrypted: string) => {
  const result = await bcrypt.compare(passByUser, passEncrypted);
  return result;
};

const encrypt = async (password: string) => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

export const cryptoServices = {
  compareDimPassword,
  compare,
  encrypt,
};
