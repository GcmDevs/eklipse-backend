import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const CONNECT_WITH_DB = true;
const PRODUCTION = false;
const IS_HTTPS = false;
const PRODUCTION_WITH_HTTP = false;

const SHOW_DOCS = true;

const DEV_PORT_DB = 1433;

const AC_USERNAME_DB = process.env.AC_USERNAME_DB;
const AC_PASS_DB = process.env.AC_PASS_DB;
const AC_HOST_DB = process.env.AC_HOST_DB;
const AC_NAME_DB = process.env.AC_NAME_DB;

const DEV_USERNAME_DB = process.env.DEV_USERNAME_DB;
const DEV_PASS_DB = process.env.DEV_PASS_DB;
const DEV_HOST_DB = process.env.DEV_HOST_DB;
const DEV_NAME_DB = process.env.DEV_NAME_DB;

const EK_USERNAME_DB = process.env.EK_USERNAME_DB;
const EK_PASS_DB = process.env.EK_PASS_DB;
const EK_HOST_DB = process.env.EK_HOST_DB;
const EK_NAME_DB = process.env.EK_NAME_DB;

const AGU_USERNAME_DB = process.env.AGU_USERNAME_DB;
const AGU_PASS_DB = process.env.AGU_PASS_DB;
const AGU_HOST_DB = process.env.AGU_HOST_DB;
const AGU_NAME_DB = process.env.AGU_NAME_DB;

const AMM_USERNAME_DB = process.env.AMM_USERNAME_DB;
const AMM_PASS_DB = process.env.AMM_PASS_DB;
const AMM_HOST_DB = process.env.AMM_HOST_DB;
const AMM_NAME_DB = process.env.AMM_NAME_DB;

const SJ_USERNAME_DB = process.env.SJ_USERNAME_DB;
const SJ_PASS_DB = process.env.SJ_PASS_DB;
const SJ_HOST_DB = process.env.SJ_HOST_DB;
const SJ_NAME_DB = process.env.SJ_NAME_DB;

const VDP_USERNAME_DB = process.env.VDP_USERNAME_DB;
const VDP_PASS_DB = process.env.VDP_PASS_DB;
const VDP_HOST_DB = process.env.VDP_HOST_DB;
const VDP_NAME_DB = process.env.VDP_NAME_DB;

export const generateApiUrlBase = (forceProduction?: boolean) =>
  PRODUCTION || forceProduction
    ? `${
        (!forceProduction && IS_HTTPS) || (forceProduction && !PRODUCTION_WITH_HTTP)
          ? 'https'
          : 'http'
      }://eklipse.grupoclinicamedicos.com`
    : 'http://localhost';

export const GLOBAL_VALID_HOSTS = [
  'http://localhost:9135',
  'http://localhost:8003',
  'http://localhost',
  'https://localhost',
  generateApiUrlBase(true),
];

export const processEnv = {
  CONNECT_WITH_DB,
  SHOW_DOCS,
  IS_HTTPS,
  JWT_SECRET_KEY,
  PRODUCTION,
  AC_USERNAME_DB,
  AC_PASS_DB,
  AC_HOST_DB,
  AC_NAME_DB,
  DEV_USERNAME_DB,
  DEV_PASS_DB,
  DEV_PORT_DB,
  DEV_HOST_DB,
  DEV_NAME_DB,
  EK_USERNAME_DB,
  EK_PASS_DB,
  EK_HOST_DB,
  EK_NAME_DB,
  AGU_USERNAME_DB,
  AGU_PASS_DB,
  AGU_HOST_DB,
  AGU_NAME_DB,
  AMM_USERNAME_DB,
  AMM_PASS_DB,
  AMM_HOST_DB,
  AMM_NAME_DB,
  SJ_USERNAME_DB,
  SJ_PASS_DB,
  SJ_HOST_DB,
  SJ_NAME_DB,
  VDP_USERNAME_DB,
  VDP_PASS_DB,
  VDP_HOST_DB,
  VDP_NAME_DB,
};
